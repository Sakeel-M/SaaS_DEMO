import type { Metadata } from "next";
import { Inter_Tight, Geist_Mono, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "@/components/providers/SmoothScrollProvider";
import TopNav from "@/components/nav/TopNav";
import SideTag from "@/components/nav/SideTag";
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

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
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
      <body>
        <SmoothScrollProvider>
          <AmbientBackdrop />
          <TopNav />
          <SideTag />
          <main className="relative z-10">{children}</main>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
