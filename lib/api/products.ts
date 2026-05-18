import type { Listing } from "@/lib/data/listings";

type RawProduct = {
  id: number | string;
  name: string;
  category?: string | null;
  description?: string | null;
  price: number;
  original_price?: number | null;
  rating?: number | null;
  review_count?: number | null;
  badge?: string | null;
  image?: string | null;
  maker?: string | null;
};

const FALLBACK_COVERS = [
  "linear-gradient(135deg,#5a0a12 0%,#1a0608 60%,#000 100%)",
  "linear-gradient(135deg,#b8222c 0%,#3a0a10 100%)",
  "linear-gradient(135deg,#1a1212 0%,#5a0a12 100%)",
  "linear-gradient(135deg,#2a1818 0%,#b8222c 100%)",
  "linear-gradient(135deg,#0a0708 0%,#5a0a12 80%)",
  "linear-gradient(135deg,#3a0a10 0%,#0a0708 100%)",
];

function normalizeBadge(raw?: string | null): Listing["badge"] {
  if (!raw) return undefined;
  const s = raw.toUpperCase();
  if (s.includes("NEW")) return "NEW";
  if (s.includes("HOT")) return "HOT";
  if (s.includes("TREND")) return "TRENDING";
  if (s.includes("PICK") || s.includes("STAFF")) return "STAFF PICK";
  if (s.includes("LIFETIME")) return "HOT";
  return undefined;
}

function mapProduct(p: RawProduct, i: number): Listing {
  const cover = p.image
    ? `url("${p.image}") center / contain no-repeat, ${FALLBACK_COVERS[i % FALLBACK_COVERS.length]}`
    : FALLBACK_COVERS[i % FALLBACK_COVERS.length];

  const original =
    typeof p.original_price === "number" && p.original_price > 0
      ? p.original_price
      : p.price;

  return {
    id: String(p.id),
    name: p.name,
    tagline: (p.description ?? "").trim() || p.name,
    category: p.category ?? "Other",
    badge: normalizeBadge(p.badge),
    price: Number(p.price ?? 0),
    originalPrice: Number(original),
    rating: typeof p.rating === "number" ? p.rating : 0,
    reviews: typeof p.review_count === "number" ? p.review_count : 0,
    maker: p.maker ?? "",
    cover,
    image: p.image ?? undefined,
  };
}

export async function fetchListings(): Promise<Listing[]> {
  const res = await fetch("/api/products/listed", { cache: "no-store" });
  if (!res.ok) throw new Error(`listings fetch failed: ${res.status}`);
  const raw = (await res.json()) as RawProduct[];
  return raw.map(mapProduct);
}
