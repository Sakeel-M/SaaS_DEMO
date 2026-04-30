"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Logo from "@/components/ui/Logo";
import Reveal from "@/components/ui/Reveal";

export default function FooterCTA() {
  const [email, setEmail] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <footer
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
          <Reveal as="up" delay={240}>
            <p className="mx-auto max-w-xl text-white body-lg">
              Be the first to know when new cohorts open and weekly deals
              drop. No spam. Just signal.
            </p>
          </Reveal>
        </div>

        <Reveal as="up" delay={340} className="mt-14 max-w-2xl mx-auto">
          <form
            className="w-full"
          onSubmit={(e) => {
            e.preventDefault();
            setSent(true);
            setEmail("");
            setTimeout(() => setSent(false), 3000);
          }}
        >
          <div className="frosted rounded-full p-2 flex flex-col sm:flex-row items-stretch gap-2">
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@buildingthefuture.com"
              className="flex-1 bg-transparent px-6 py-3.5 text-white placeholder-white/70 focus:outline-none"
            />
            <button
              type="submit"
              className="eyebrow !text-ink px-7 py-3.5 rounded-full bg-[var(--silver)] hover:bg-[var(--bg-void)] hover:!text-[var(--silver)] transition-colors inline-flex items-center justify-center gap-2"
            >
              {sent ? "WE'LL EMAIL YOU" : "NOTIFY ME"}
              <ArrowUpRight className="size-4" />
            </button>
          </div>
          </form>
        </Reveal>

        <div className="mt-28 grid grid-cols-2 md:grid-cols-4 gap-8 pb-12">
          {[
            { h: "PLATFORM", l: ["Marketplace", "Course", "For Makers", "For Learners"] },
            { h: "RESOURCES", l: ["Blog", "Playbooks", "Changelog", "Status"] },
            { h: "COMPANY", l: ["About", "Careers", "Press", "Contact"] },
            { h: "LEGAL", l: ["Privacy", "Terms", "Cookies", "DPA"] },
          ].map((col, i) => (
            <Reveal key={col.h} as="up" index={i} delay={120}>
              <div className="eyebrow !text-white mb-4">{col.h}</div>
              <ul className="space-y-2 text-white">
                {col.l.map((item) => (
                  <li key={item}>
                    <a href="#" className="hover:underline">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>

        <div className="pt-8 border-t border-white/30 flex flex-wrap items-center justify-between gap-6 text-white/90 text-sm">
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-lg px-3 py-2 inline-flex">
              <Logo height={28} />
            </div>
            <span className="hidden sm:inline">
              © 2026 Social Eagle.AI &nbsp;·&nbsp; All rights reserved.
            </span>
          </div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-[var(--silver)]">Twitter</a>
            <a href="#" className="hover:text-[var(--silver)]">YouTube</a>
            <a href="#" className="hover:text-[var(--silver)]">Instagram</a>
            <a href="#" className="hover:text-[var(--silver)]">Discord</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
