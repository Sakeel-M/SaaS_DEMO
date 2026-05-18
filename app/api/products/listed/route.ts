import { NextResponse } from "next/server";

export const revalidate = 60;

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

export async function GET() {
  const key = process.env.SANDHAI_API_KEY;
  const base = process.env.SANDHAI_API_BASE ?? "https://backend.saassandhai.com";
  if (!key) {
    return NextResponse.json({ error: "missing api key" }, { status: 500 });
  }

  try {
    const res = await fetch(`${base}/api/products/listed`, {
      headers: { "X-API-Key": key },
      next: { revalidate: 60 },
    });
    if (!res.ok) {
      return NextResponse.json(
        { error: `upstream ${res.status}` },
        { status: 502 }
      );
    }
    const data = (await res.json()) as RawProduct[];
    return NextResponse.json(data, {
      headers: {
        "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300",
      },
    });
  } catch (e) {
    return NextResponse.json({ error: "fetch failed" }, { status: 502 });
  }
}
