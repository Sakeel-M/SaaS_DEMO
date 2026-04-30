"use client";

import Image from "next/image";
import { Check, ArrowUpRight, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const HIGHLIGHTS = [
  "2-day intensive · ship a working product",
  "Build with Claude, no boilerplate, no theory dumps",
  "Live walkthrough + hands-on labs",
  "Auto-listing on Sandhai when you ship",
  "Lifetime access + private maker community",
];

export default function AboutCourse() {
  return (
    <section
      id="learn"
      className="relative pad-y pad-x overflow-hidden"
    >
      {/* Soft brand glow behind */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(60% 50% at 70% 30%, rgba(184,34,44,0.18) 0%, transparent 70%)",
        }}
      />

      <div className="max-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* IMAGE — left */}
          <Reveal as="left" className="lg:col-span-6">
            <div
              className="relative rounded-3xl overflow-hidden ring-glow"
              style={{ aspectRatio: "16 / 9" }}
            >
              {/* Soft red glow halo behind image */}
              <div
                className="absolute -inset-6 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(197,37,47,0.32) 0%, transparent 60%)",
                  filter: "blur(40px)",
                  zIndex: -1,
                }}
              />
              <Image
                src="/instructor.png"
                alt="Dharaneetharan, Founder of Social Eagle.AI — your course instructor"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={false}
              />

              {/* Play overlay */}
              <button
                className="absolute inset-0 grid place-items-center group"
                aria-label="Watch course preview"
              >
                <span
                  className="size-20 rounded-full grid place-items-center transition-transform group-hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.92)",
                    boxShadow:
                      "0 12px 40px -8px rgba(184,34,44,0.55), 0 0 0 1px rgba(255,255,255,0.6)",
                  }}
                >
                  <Play className="size-7 text-ink fill-ink translate-x-0.5" />
                </span>
              </button>

              {/* Bottom info pill */}
              <div className="absolute left-5 bottom-5 right-5 frosted rounded-2xl px-5 py-4 flex items-center justify-between gap-4">
                <div className="min-w-0">
                  <div className="eyebrow !text-[var(--silver-faint)] mb-1">
                    YOUR INSTRUCTOR
                  </div>
                  <div className="font-display font-bold text-[var(--silver)] truncate">
                    Dharaneetharan · Social Eagle.AI
                  </div>
                </div>
                <span className="eyebrow !text-[var(--red-glow)] flex-shrink-0">
                  2:14 PREVIEW
                </span>
              </div>
            </div>
          </Reveal>

          {/* COPY — right */}
          <div className="lg:col-span-6">
            <Reveal as="up">
              <p className="eyebrow !text-[var(--red-glow)] mb-5">
                STRUGGLING TO CREATE A PRODUCT?
              </p>
            </Reveal>
            <Reveal as="up" delay={120}>
              <h2 className="display-md mb-6">
                <span className="block text-gradient-silver">Build and ship</span>
                <span className="block text-gradient-silver">a product</span>
                <span className="block text-gradient-red">in 2 days.</span>
              </h2>
            </Reveal>
            <Reveal as="up" delay={220}>
              <p className="body-lg max-w-md mb-8">
                A 2-day intensive that takes you from a blank page to a SaaS
                live on Sandhai. Built around Claude, your unfair advantage.
                You write zero boilerplate. You ship something real by the end
                of day two.
              </p>
            </Reveal>

            <Reveal as="up" delay={320}>
              <ul className="space-y-3 mb-10 max-w-md">
                {HIGHLIGHTS.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[var(--silver)]"
                  >
                    <Check className="size-4 text-[var(--red-primary)] flex-shrink-0 mt-1.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Price + CTA row */}
            <Reveal as="up" delay={440}>
              <div className="flex flex-wrap items-end gap-x-8 gap-y-5">
                <div>
                  <div className="eyebrow !text-[var(--silver-faint)] mb-2">
                    ONE-TIME · LIFETIME ACCESS
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display font-black text-[var(--silver)] tracking-tightest"
                      style={{
                        fontSize: "clamp(2.5rem, 5vw, 4rem)",
                        lineHeight: 1,
                      }}
                    >
                      ₹4,999
                    </span>
                    <span className="text-sm text-[var(--silver-dim)]">
                      + GST
                    </span>
                  </div>
                </div>
                <a
                  href="#contact"
                  className="eyebrow inline-flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--red-primary)] text-[var(--silver)] hover:bg-[var(--silver)] hover:text-ink transition-colors"
                >
                  ENROLL NOW
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
