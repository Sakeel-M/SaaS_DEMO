"use client";

import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function FooterCTA() {
  return (
    <footer
      id="contact"
      className="relative overflow-hidden pad-x pt-32 pb-12"
      style={{
        background:
          "linear-gradient(180deg,#5a0a12 0%,#c5252f 55%,#5a0a12 100%)",
      }}
    >
      {/* Decorative concentric */}
      <svg
        className="absolute -bottom-40 left-1/2 -translate-x-1/2 w-[120vw] h-[120vw] opacity-20 pointer-events-none"
        viewBox="0 0 200 200"
        aria-hidden
      >
        {[40, 60, 80, 100].map((r) => (
          <circle
            key={r}
            cx="100"
            cy="100"
            r={r}
            stroke="rgba(255,255,255,0.6)"
            strokeWidth="0.5"
            fill="none"
          />
        ))}
      </svg>

      <div className="max-page relative">
        <div className="text-center stack-lg">
          <Reveal as="up">
            <p className="eyebrow !text-white">START YOUR LOOP</p>
          </Reveal>
          <Reveal as="up" delay={120}>
            <h2
              className="font-display font-black text-[var(--silver)] tracking-tightest"
              style={{ fontSize: "clamp(3rem, 13vw, 14rem)", lineHeight: 0.85 }}
            >
              JOIN THE <br /> SANDHAI.
            </h2>
          </Reveal>
        </div>

        <Reveal as="up" delay={340} className="mt-14 flex justify-center">
          <a
            href="https://app.saassandhai.com/marketplace"
            target="_blank"
            rel="noopener"
            className="eyebrow inline-flex items-center gap-2 px-10 py-5 rounded-full bg-[var(--silver)] text-ink hover:bg-[var(--bg-void)] hover:!text-[var(--silver)] transition-colors"
            style={{
              boxShadow: "0 18px 40px -12px rgba(0,0,0,0.45)",
              fontSize: "0.95rem",
            }}
          >
            GET STARTED
            <ArrowUpRight className="size-4" />
          </a>
        </Reveal>

        <div className="mt-24 pt-8 border-t border-white/30 flex flex-wrap items-center justify-between gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-4">
            <span>
              © 2026 Social Eagle.AI &nbsp;·&nbsp; All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <a href="/privacy" className="hover:text-[var(--silver)]">Privacy</a>
            <a href="/terms" className="hover:text-[var(--silver)]">Terms &amp; Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
