"use client";

import { useEffect, useState } from "react";
import Logo from "@/components/ui/Logo";

const NAV_ITEMS = [
  { id: "intro", label: "Intro" },
  { id: "deals", label: "Deals" },
  { id: "learn", label: "Learn" },
  { id: "build", label: "Build" },
  { id: "ship", label: "Ship" },
  { id: "contact", label: "Contact" },
];

export default function TopNav() {
  const [active, setActive] = useState("intro");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((item) => document.getElementById(item.id))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]) setActive(visible[0].target.id);
      },
      { rootMargin: "-30% 0px -55% 0px", threshold: [0, 0.25, 0.5, 0.75, 1] }
    );
    sections.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? "py-3" : "py-5"
      }`}
      style={{ transform: "translateY(-50%)" }}
    >
      <div className="pad-x">
        <div
          className={`max-page flex items-end justify-between rounded-full transition-all duration-300 ${
            scrolled
              ? "frosted py-16 px-5"
              : "py-14 px-1"
          }`}
          style={{ paddingBottom: scrolled ? "1.25rem" : "1.5rem" }}
        >
          <a
            href="#intro"
            className="flex items-center group min-w-0 bg-white/95 backdrop-blur-sm rounded-xl px-2.5 py-1 shadow-lg shadow-black/30"
            aria-label="SaaS Sandhai home"
            style={{ marginBottom: "-0.25rem" }}
          >
            <Logo height={scrolled ? 26 : 30} priority />
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className={`relative py-1 transition-colors ${
                  active === item.id
                    ? "text-white"
                    : "text-white/80 hover:text-white"
                }`}
                style={{
                  fontFamily: "var(--font-serif), Georgia, serif",
                  fontSize: "1rem",
                  fontWeight: 500,
                  letterSpacing: "0.01em",
                  textShadow: "0 2px 12px rgba(0,0,0,0.55)",
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex px-5 py-2 rounded-full transition-colors text-[#3a2410] hover:brightness-95"
            style={{
              fontFamily: "var(--font-serif), Georgia, serif",
              fontSize: "0.9rem",
              fontWeight: 600,
              letterSpacing: "0.02em",
              background: "linear-gradient(180deg,#e8c595 0%,#c4a572 100%)",
              boxShadow: "0 4px 14px rgba(196,165,114,0.35)",
            }}
          >
            Get started
          </a>
        </div>
      </div>
    </header>
  );
}
