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
            <p
              className="font-display font-black uppercase inline-block"
              style={{
                fontSize: "clamp(1.25rem, 2.4vw, 2.25rem)",
                letterSpacing: "0.08em",
                lineHeight: 1,
                color: "#ffffff",
                textShadow:
                  "0 0 24px rgba(255,255,255,0.55), 0 2px 18px rgba(0,0,0,0.55)",
                filter: "drop-shadow(0 4px 14px rgba(0,0,0,0.6))",
              }}
            >
              LEARN. BUILD. SHIP. EARN.
            </p>
          </div>
        </div>

        <div className="flex-1" />

        {/* Bottom row: frosted card · spacer · body copy */}
        <div className="pb-16">
          <div className="max-page grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-end">
            {/* Left spacer (camera focus area) */}
            <div className="hidden md:block md:col-span-8" />

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
