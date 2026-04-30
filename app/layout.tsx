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
      <head>
        {/* Preconnect to CloudFront so the hero video TLS handshake starts
            in parallel with HTML parsing — saves ~200-400ms on first paint. */}
        <link
          rel="preconnect"
          href="https://d8j0ntlcm91z4.cloudfront.net"
          crossOrigin="anonymous"
        />
        <link
          rel="dns-prefetch"
          href="https://d8j0ntlcm91z4.cloudfront.net"
        />
        {/* Tell the browser to start fetching the hero video at high priority,
            before it parses the React tree that mounts the <video> element. */}
        <link
          rel="preload"
          as="video"
          href="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4"
          // @ts-expect-error: fetchPriority is valid HTML5 but not yet typed in React 19
          fetchpriority="high"
        />
      </head>
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
