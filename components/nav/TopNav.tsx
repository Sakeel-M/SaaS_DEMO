"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const NAV_ITEMS = [
  { id: "deals", label: "Deals" },
  { id: "learn", label: "Learn" },
  { id: "build", label: "Build" },
  { id: "ship", label: "Ship" },
  { id: "contact", label: "Contact" },
];

export default function TopNav() {
  const [active, setActive] = useState("deals");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // Flip "scrolled" once the user is past ~85% of the hero so the nav
    // bg becomes solid black only after the hero leaves the viewport.
    const onScroll = () => {
      const threshold = window.innerHeight * 0.85;
      setScrolled(window.scrollY > threshold);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
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
          className="max-page flex items-center justify-between rounded-full transition-all duration-300 px-5"
          style={{
            paddingTop: scrolled ? "5rem" : "5.5rem",
            paddingBottom: scrolled ? "1rem" : "1.25rem",
            background: scrolled ? "#000000" : "transparent",
            border: scrolled
              ? "1px solid rgba(255,255,255,0.06)"
              : "1px solid transparent",
            boxShadow: scrolled
              ? "0 18px 42px -16px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.04)"
              : "none",
          }}
        >
          <a
            href="#intro"
            className="flex items-center group min-w-0"
            aria-label="SaaS Sandhai home"
          >
            <Image
              src="/saas-sandhai-logo.png"
              alt="SaaS Sandhai"
              width={scrolled ? 130 : 150}
              height={scrolled ? 36 : 42}
              priority
              className="transition-all duration-300 h-auto w-auto"
              style={{ maxHeight: scrolled ? "36px" : "44px" }}
            />
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
                  fontFamily: "var(--font-serif), system-ui, sans-serif",
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
            href="https://app.saassandhai.com/marketplace"
            target="_blank"
            rel="noopener"
            className="hidden md:inline-flex px-5 py-2 rounded-full transition-colors text-[#3a2410] hover:brightness-95 mr-4 lg:mr-8"
            style={{
              fontFamily: "var(--font-serif), system-ui, sans-serif",
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
