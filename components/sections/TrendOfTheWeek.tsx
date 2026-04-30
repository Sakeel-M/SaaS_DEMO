"use client";

import { TREND_OF_WEEK } from "@/lib/data/listings";
import { Star, ArrowUpRight, Flame } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function TrendOfTheWeek() {
  const t = TREND_OF_WEEK;
  const discount = Math.round((1 - t.price / t.originalPrice) * 100);

  return (
    <section className="relative pad-y pad-x overflow-hidden">
      <div className="max-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* COPY */}
          <div className="lg:col-span-5 stack-lg">
            <Reveal as="up">
              <p className="eyebrow inline-flex items-center gap-2">
                <Flame className="size-3.5 text-[var(--red-primary)]" />
                TREND OF THE WEEK
              </p>
            </Reveal>
            <Reveal as="up" delay={120}>
              <h2 className="display-md">
                <span className="block text-gradient-silver">The deal</span>
                <span className="block text-gradient-silver">everyone is</span>
                <span className="block text-gradient-red">talking about.</span>
              </h2>
            </Reveal>
            <Reveal as="up" delay={220}>
              <p className="body-lg max-w-md">{t.tagline}</p>
            </Reveal>

            <Reveal as="up" delay={320}>
              <div className="flex flex-wrap items-end gap-x-8 gap-y-4">
                <div className="flex items-end gap-3">
                  <span
                    className="font-display font-black text-[var(--silver)] tracking-tightest"
                    style={{
                      fontSize: "clamp(2.5rem, 5vw, 4rem)",
                      lineHeight: 1,
                    }}
                  >
                    ${t.price}
                  </span>
                  <span className="line-through text-[var(--silver-faint)] text-xl pb-1">
                    ${t.originalPrice}
                  </span>
                  <span className="eyebrow !text-[var(--red-primary)] pb-2">
                    &minus;{discount}%
                  </span>
                </div>
                <button className="eyebrow px-7 py-4 rounded-full bg-[var(--red-primary)] text-[var(--silver)] hover:bg-[var(--silver)] hover:text-ink transition-colors inline-flex items-center gap-2">
                  CLAIM THE DEAL
                  <ArrowUpRight className="size-4" />
                </button>
              </div>
            </Reveal>
          </div>

          {/* VISUAL CARD */}
          <Reveal as="scale" delay={200} className="lg:col-span-7">
            <div
              className="relative rounded-[2rem] overflow-hidden border border-white/5 aspect-[5/4] ring-glow"
              style={{ background: t.cover }}
            >
              <div className="absolute inset-0 red-glow" />

              {/* Decorative concentric rings */}
              <svg
                className="absolute inset-0 w-full h-full opacity-25"
                viewBox="0 0 600 480"
                aria-hidden
              >
                {[100, 160, 220, 280].map((r) => (
                  <circle
                    key={r}
                    cx="300"
                    cy="240"
                    r={r}
                    stroke="rgba(232,228,221,0.4)"
                    strokeWidth="1"
                    fill="none"
                  />
                ))}
              </svg>

              {/* Big initial */}
              <div className="absolute inset-0 grid place-items-center">
                <span
                  className="font-display font-black text-[var(--silver)]"
                  style={{
                    fontSize: "clamp(6rem, 16vw, 16rem)",
                    letterSpacing: "-0.07em",
                    textShadow: "0 16px 80px rgba(0,0,0,.6)",
                    lineHeight: 1,
                  }}
                >
                  {t.name[0]}
                </span>
              </div>

              {/* Top tag */}
              <div className="absolute top-6 left-6 right-6 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="eyebrow !text-white px-3 py-1.5 rounded-full bg-[var(--red-primary)]">
                    {t.badge}
                  </span>
                  <span className="eyebrow !text-[var(--silver-dim)]">{t.category}</span>
                </div>
              </div>

              {/* Bottom panel */}
              <div className="absolute left-6 right-6 bottom-6 frosted rounded-2xl px-6 py-5 flex items-end justify-between flex-wrap gap-4">
                <div>
                  <div className="font-display font-bold text-2xl tracking-tight text-[var(--silver)]">
                    {t.name}
                  </div>
                  <div className="text-sm text-[var(--silver-dim)] mt-0.5">
                    by {t.maker}
                  </div>
                </div>
                <div className="flex items-center gap-1.5 text-[var(--silver)]">
                  <Star className="size-4 fill-[var(--red-primary)] text-[var(--red-primary)]" />
                  <span className="font-medium">{t.rating}</span>
                  <span className="text-sm text-[var(--silver-faint)]">
                    ({t.reviews.toLocaleString()})
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
