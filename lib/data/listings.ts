export type Listing = {
  id: string;
  name: string;
  tagline: string;
  category: string;
  badge?: "NEW" | "HOT" | "TRENDING" | "STAFF PICK";
  price: number;
  originalPrice: number;
  rating: number;
  reviews: number;
  maker: string;
  cover: string;
};

const COVERS = [
  "linear-gradient(135deg,#5a0a12 0%,#1a0608 60%,#000 100%)",
  "linear-gradient(135deg,#b8222c 0%,#3a0a10 100%)",
  "linear-gradient(135deg,#1a1212 0%,#5a0a12 100%)",
  "linear-gradient(135deg,#2a1818 0%,#b8222c 100%)",
  "linear-gradient(135deg,#0a0708 0%,#5a0a12 80%)",
  "linear-gradient(135deg,#3a0a10 0%,#0a0708 100%)",
];

const c = (i: number) => COVERS[i % COVERS.length];

export const LISTINGS: Listing[] = [
  {
    id: "1",
    name: "PromptForge",
    tagline: "Version-control your prompts like code.",
    category: "AI",
    badge: "NEW",
    price: 49,
    originalPrice: 199,
    rating: 4.9,
    reviews: 312,
    maker: "Maya R.",
    cover: c(0),
  },
  {
    id: "2",
    name: "InboxZeroBot",
    tagline: "Drafts replies in your voice. You hit send.",
    category: "Productivity",
    badge: "HOT",
    price: 39,
    originalPrice: 149,
    rating: 4.8,
    reviews: 1204,
    maker: "Arjun S.",
    cover: c(1),
  },
  {
    id: "3",
    name: "Reelcraft",
    tagline: "Turn long videos into ten short ones.",
    category: "Marketing",
    badge: "TRENDING",
    price: 59,
    originalPrice: 240,
    rating: 4.7,
    reviews: 882,
    maker: "Priya K.",
    cover: c(2),
  },
  {
    id: "4",
    name: "Stackd",
    tagline: "Your codebase, but answerable.",
    category: "Dev Tools",
    badge: "STAFF PICK",
    price: 79,
    originalPrice: 360,
    rating: 5.0,
    reviews: 421,
    maker: "Devansh T.",
    cover: c(3),
  },
  {
    id: "5",
    name: "MeetMeNow",
    tagline: "Calendly, but it actually understands you.",
    category: "Productivity",
    badge: "NEW",
    price: 29,
    originalPrice: 120,
    rating: 4.6,
    reviews: 198,
    maker: "Kavya M.",
    cover: c(4),
  },
  {
    id: "6",
    name: "Pulsegrid",
    tagline: "Real-time analytics for tiny startups.",
    category: "Analytics",
    badge: "HOT",
    price: 69,
    originalPrice: 299,
    rating: 4.8,
    reviews: 514,
    maker: "Rahul N.",
    cover: c(5),
  },
  {
    id: "7",
    name: "ColdHarbor",
    tagline: "Outbound that doesn't feel like outbound.",
    category: "Marketing",
    price: 89,
    originalPrice: 340,
    rating: 4.7,
    reviews: 267,
    maker: "Anika V.",
    cover: c(0),
  },
  {
    id: "8",
    name: "Nudgr",
    tagline: "Habit reminders your brain actually obeys.",
    category: "AI",
    badge: "TRENDING",
    price: 19,
    originalPrice: 89,
    rating: 4.9,
    reviews: 1820,
    maker: "Sai P.",
    cover: c(1),
  },
  {
    id: "9",
    name: "Brieflab",
    tagline: "Client briefs in twelve seconds flat.",
    category: "Productivity",
    price: 49,
    originalPrice: 220,
    rating: 4.6,
    reviews: 312,
    maker: "Naveen J.",
    cover: c(2),
  },
];

export const TREND_OF_WEEK: Listing = {
  id: "trend",
  name: "Sentinel.AI",
  tagline:
    "An always-on agent that watches your entire SaaS for outages, before your customers tweet about them.",
  category: "AI",
  badge: "TRENDING",
  price: 99,
  originalPrice: 480,
  rating: 4.9,
  reviews: 2103,
  maker: "Team Sentinel",
  cover: c(3),
};
