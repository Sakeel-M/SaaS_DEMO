import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import TopNav from "@/components/nav/TopNav";
import AmbientBackdrop from "@/components/ui/AmbientBackdrop";

const display = Inter_Tight({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-display",
  display: "swap",
});

const mono = Geist_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
  display: "swap",
});

// Renamed mentally to "body sans" but the CSS variable stays --font-serif
// so existing consumers (nav links, footer copy, etc.) keep working — they
// now resolve to Inter instead of Cormorant Garamond.
const serif = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SaaS Sandhai · Learn. Build. Ship. Earn.",
  description:
    "The marketplace for AI-built SaaS, powered by Social Eagle.AI. Learn to build with Claude, ship into Sandhai, and earn from day one.",
  metadataBase: new URL("https://saas-sandhai.com"),
  openGraph: {
    title: "SaaS Sandhai · Learn. Build. Ship. Earn.",
    description:
      "The marketplace for AI-built SaaS, powered by Social Eagle.AI.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${display.variable} ${mono.variable} ${serif.variable}`}>
      <head>
        {/* Warm up Wistia CDN connections so the Hero embed loads fast. */}
        <link rel="preconnect" href="https://fast.wistia.net" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://embed-ssl.wistia.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://fast.wistia.net" />
        <link rel="dns-prefetch" href="https://embed-ssl.wistia.com" />
      </head>
      <body>
        <SmoothScrollProvider>
          <AmbientBackdrop />
          <TopNav />
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
