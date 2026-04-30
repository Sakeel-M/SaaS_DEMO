"use client";

import { useState } from "react";
import { FAQ } from "@/lib/data/faq";
import { Plus } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="relative pad-y pad-x">
      <div className="max-page grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-4">
          <Reveal as="up">
            <p className="eyebrow mb-5">FAQ</p>
          </Reveal>
          <Reveal as="up" delay={120}>
            <h2 className="display-md">
              <span className="block text-gradient-silver">Asked,</span>
              <span className="block text-gradient-red">answered.</span>
            </h2>
          </Reveal>
        </div>
        <div className="lg:col-span-8">
          <ul className="border-t border-white/10">
            {FAQ.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={i} as="up" index={i} delay={200} tag="li">
                  <div className="border-b border-white/10">
                  <button
                    onClick={() => setOpen(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-7 text-left group"
                  >
                    <span
                      className={`font-display font-semibold tracking-tight transition-colors ${
                        isOpen
                          ? "text-[var(--silver)]"
                          : "text-[var(--silver)]/85 group-hover:text-[var(--silver)]"
                      }`}
                      style={{ fontSize: "clamp(1.1rem, 1.4vw, 1.4rem)" }}
                    >
                      {item.q}
                    </span>
                    <span
                      className={`size-9 rounded-full grid place-items-center flex-shrink-0 transition-all duration-300 ${
                        isOpen
                          ? "bg-[var(--red-primary)] text-[var(--silver)] rotate-45"
                          : "bg-[var(--silver)]/5 text-[var(--silver-dim)]"
                      }`}
                    >
                      <Plus className="size-4" />
                    </span>
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-500 ease-out ${
                      isOpen ? "grid-rows-[1fr] pb-7" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="text-[var(--silver-dim)] body-lg max-w-2xl">
                        {item.a}
                      </p>
                    </div>
                  </div>
                  </div>
                </Reveal>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
}
