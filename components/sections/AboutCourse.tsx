"use client";

import Image from "next/image";
import { Check, ArrowUpRight, Play } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const HIGHLIGHTS = [
  "2-day intensive · ship a working product",
  "Build with Claude, no boilerplate, no theory dumps",
  "Step-by-step walkthroughs + hands-on labs",
];

export default function AboutCourse() {
  return (
    <section
      id="learn"
      className="relative pad-y pad-x overflow-hidden"
    >
      {/* Layered glow + grid bg for depth */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden
        style={{
          background:
            "radial-gradient(70% 50% at 75% 30%, rgba(184,34,44,0.22) 0%, transparent 70%), radial-gradient(50% 40% at 20% 80%, rgba(90,10,18,0.25) 0%, transparent 65%)",
        }}
      />
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none"
        aria-hidden
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--silver) 1px, transparent 1px), linear-gradient(to bottom, var(--silver) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 50%, #000 30%, transparent 80%)",
        }}
      />

      <div className="max-page relative">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-12 items-center">
          {/* IMAGE — left, span 6 */}
          <Reveal as="left" className="lg:col-span-6">
            <div
              className="relative rounded-3xl overflow-hidden ring-glow"
              style={{ aspectRatio: "4 / 3" }}
            >
              {/* Soft red glow halo behind image */}
              <div
                className="absolute -inset-8 pointer-events-none"
                style={{
                  background:
                    "radial-gradient(circle, rgba(197,37,47,0.35) 0%, transparent 60%)",
                  filter: "blur(50px)",
                  zIndex: -1,
                }}
              />
              <Image
                src="/instructor.png"
                alt="Dharaneetharan, Founder of Social Eagle.AI"
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 50vw, 100vw"
                priority={false}
              />

              {/* Centered play button — opens the course app */}
              <a
                href="https://app.saassandhai.com/course"
                target="_blank"
                rel="noopener"
                className="absolute inset-0 grid place-items-center group"
                aria-label="Open the course"
              >
                <span
                  className="size-20 rounded-full grid place-items-center transition-transform group-hover:scale-110"
                  style={{
                    background: "rgba(255,255,255,0.95)",
                    boxShadow:
                      "0 14px 50px -8px rgba(184,34,44,0.65), 0 0 0 1px rgba(255,255,255,0.7)",
                  }}
                >
                  <Play className="size-7 text-ink fill-ink translate-x-0.5" />
                </span>
              </a>

              {/* Title overlay (bottom-left) */}
              <div
                className="absolute inset-x-0 bottom-0 pointer-events-none p-6 lg:p-8"
                style={{
                  background:
                    "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.55) 55%, transparent 100%)",
                }}
              >
                <p
                  className="eyebrow mb-2"
                  style={{ color: "rgba(255,255,255,0.7)" }}
                >
                  TAMIL
                </p>
                <h3
                  className="font-display font-black tracking-tightest text-[var(--silver)]"
                  style={{
                    fontSize: "clamp(1.35rem, 2.4vw, 2rem)",
                    lineHeight: 1.05,
                    textShadow: "0 2px 18px rgba(0,0,0,0.65)",
                  }}
                >
                  Master the Claude Code
                </h3>
              </div>
            </div>
          </Reveal>

          {/* COPY — right, span 6 */}
          <div className="lg:col-span-6">
            <Reveal as="up">
              <div className="inline-flex items-center gap-2 mb-6">
                <span className="size-1.5 rounded-full bg-[var(--red-glow)] pulse-dot" />
                <p className="eyebrow !text-[var(--red-glow)]">
                  STRUGGLING TO CREATE A PRODUCT?
                </p>
              </div>
            </Reveal>

            <Reveal as="up" delay={120}>
              <h2
                className="font-display font-black tracking-tightest leading-[0.92] mb-10"
                style={{ fontSize: "clamp(2.25rem, 4.5vw, 4rem)" }}
              >
                <span className="block text-gradient-silver">Build and ship</span>
                <span className="block">
                  <span className="text-gradient-silver">a product </span>
                  <span className="text-gradient-red">in 2 days.</span>
                </span>
              </h2>
            </Reveal>

            <Reveal as="up" delay={220}>
              <div className="eyebrow !text-[var(--silver-faint)] mb-4">
                WHAT YOU GET
              </div>
              <ul className="space-y-3.5 mb-10 max-w-md">
                {HIGHLIGHTS.map((h) => (
                  <li
                    key={h}
                    className="flex items-start gap-3 text-[var(--silver)] leading-relaxed"
                  >
                    <span className="size-5 rounded-full grid place-items-center flex-shrink-0 mt-0.5"
                      style={{
                        background: "rgba(197,37,47,0.18)",
                        border: "1px solid rgba(197,37,47,0.4)",
                      }}
                    >
                      <Check className="size-3 text-[var(--red-glow)]" />
                    </span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </Reveal>

            {/* Divider */}
            <Reveal as="fade" delay={340}>
              <div
                className="h-px w-full max-w-md mb-8"
                style={{
                  background:
                    "linear-gradient(to right, transparent 0%, rgba(232,228,221,0.18) 35%, rgba(197,37,47,0.4) 100%)",
                }}
              />
            </Reveal>

            {/* Price + CTA row */}
            <Reveal as="up" delay={400}>
              <div className="flex flex-wrap items-end gap-x-10 gap-y-5">
                <div>
                  <div className="eyebrow !text-[var(--silver-faint)] mb-3">
                    PER YEAR · FULL ACCESS
                  </div>
                  <div className="flex items-baseline gap-3">
                    <span
                      className="font-display font-black text-[var(--silver)] tracking-tightest"
                      style={{
                        fontSize: "clamp(2.75rem, 5.2vw, 4.5rem)",
                        lineHeight: 1,
                      }}
                    >
                      ₹4,999
                    </span>
                    <span className="text-base text-[var(--silver-dim)] font-medium">
                      + GST
                    </span>
                  </div>
                </div>
                <a
                  href="https://app.saassandhai.com/marketplace"
                  target="_blank"
                  rel="noopener"
                  className="eyebrow inline-flex items-center gap-2 px-8 py-4 rounded-full bg-[var(--red-primary)] text-[var(--silver)] hover:bg-[var(--silver)] hover:text-ink transition-colors"
                  style={{
                    boxShadow: "0 12px 32px -8px rgba(184,34,44,0.55)",
                  }}
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
