"use client";

import { ChevronDown } from "lucide-react";
import HeroVideoBackdrop from "@/components/ui/HeroVideoBackdrop";

export default function Hero() {
  return (
    <section
      id="intro"
      className="relative min-h-[100svh] overflow-hidden"
    >
      {/* Looping video background with mouse-driven 3D parallax */}
      <HeroVideoBackdrop />

      {/* Content layer */}
      <div className="relative z-10 min-h-[100svh] flex flex-col pad-x">
        {/* Top eyebrow — centered */}
        <div className="pt-32 pb-6">
          <div className="max-page text-center">
            <p className="eyebrow !text-[var(--silver)]">
              LEARN. BUILD. SHIP. EARN.
            </p>
          </div>
        </div>

        {/* Massive left-aligned wordmark — SAAS (small) over SANDHAI (large) */}
        <div className="flex-1 flex items-center max-page w-full">
          <h1
            className="!text-[var(--silver)] leading-[0.82]"
            style={{
              fontWeight: 900,
              letterSpacing: "-0.05em",
              textShadow: "0 30px 80px rgba(0,0,0,0.55)",
            }}
          >
            <span
              className="block"
              style={{
                fontSize: "clamp(1.6rem, 4.5vw, 4.5rem)",
                letterSpacing: "-0.03em",
                marginBottom: "0.1em",
              }}
            >
              SaaS
            </span>
            <span
              className="block"
              style={{
                fontSize: "clamp(2.75rem, 9.5vw, 10rem)",
                letterSpacing: "-0.05em",
              }}
            >
              SANDHAI
            </span>
          </h1>
        </div>

        {/* Bottom row: frosted card · spacer · body copy */}
        <div className="pb-16">
          <div className="max-page grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            {/* Bottom-left frosted card */}
            <div className="md:col-span-4">
              <div className="frosted rounded-2xl p-7 max-w-sm">
                <p
                  className="font-display font-bold uppercase text-[var(--silver)] leading-[1.15] tracking-tight"
                  style={{ fontSize: "0.95rem", letterSpacing: "0.04em" }}
                >
                  BUILT BY SOCIAL EAGLE.AI,<br />
                  THE AI-NATIVE LAUNCH<br />
                  NETWORK.
                </p>
                <div className="h-px w-12 bg-[var(--silver)]/35 my-5" />
                <p className="text-sm text-[var(--silver-dim)] leading-relaxed">
                  The marketplace for AI-built SaaS that actually finds its
                  first thousand customers.
                </p>
              </div>
            </div>

            {/* Spacer (camera focus area) */}
            <div className="hidden md:block md:col-span-4" />

            {/* Bottom-right body */}
            <div className="md:col-span-4 md:text-right">
              <p className="body-lg !text-[var(--silver)] max-w-md md:ml-auto text-balance">
                Designed to launch, scale, and earn in all the right ways.
                Sandhai makes the simplest beginning feel inevitable.
              </p>
            </div>
          </div>

          {/* Scroll indicator — center */}
          <div className="max-page mt-12 flex flex-col items-center gap-2">
            <ChevronDown className="size-4 text-[var(--silver-dim)] scroll-bounce" />
            <span className="eyebrow !text-[var(--silver-faint)]">
              SCROLL TO CONTINUE
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
