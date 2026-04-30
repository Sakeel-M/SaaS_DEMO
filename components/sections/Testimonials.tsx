"use client";

import { TESTIMONIALS } from "@/lib/data/testimonials";
import { Quote } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

export default function Testimonials() {
  return (
    <section
      className="relative pad-y pad-x"
      style={{ background: "var(--bg-cream)", color: "var(--ink)" }}
    >
      <div className="max-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-7">
            <Reveal as="up">
              <p className="eyebrow !text-ink/55 mb-5">FROM THE COMMUNITY</p>
            </Reveal>
            <Reveal as="up" delay={120}>
              <h2 className="display-md text-ink">
                Real makers. <br /> Real revenue. <br /> Real fast.
              </h2>
            </Reveal>
          </div>
          <Reveal
            as="up"
            delay={220}
            className="lg:col-span-5 lg:text-right"
          >
            <p className="text-ink/65 leading-relaxed">
              We didn&rsquo;t cherry-pick the best six. We picked six
              who&rsquo;d stand behind a Zoom call and re-tell every word.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((t, i) => {
            const isDark = i % 4 === 0;
            return (
              <Reveal key={t.id} as="up" index={i} delay={300}>
                <article
                  className={`relative rounded-3xl p-8 h-full ${
                    isDark
                      ? "bg-ink text-[var(--silver)]"
                      : "bg-white text-ink border border-ink/5"
                  }`}
                >
                <Quote
                  className={`size-7 mb-6 ${
                    isDark ? "text-[var(--red-primary)]" : "text-[var(--red-primary)]"
                  }`}
                />
                <p
                  className={`font-display font-medium tracking-tight leading-snug ${
                    isDark ? "text-[var(--silver)]" : "text-ink"
                  }`}
                  style={{ fontSize: "clamp(1.05rem, 1.4vw, 1.3rem)" }}
                >
                  {t.quote}
                </p>
                <div className="mt-8 pt-6 border-t border-current/10 flex items-center gap-3">
                  <div
                    className="size-11 rounded-full flex-shrink-0 grid place-items-center font-display font-bold text-[var(--silver)]"
                    style={{
                      background: "linear-gradient(135deg,#c5252f 0%,#5a0a12 100%)",
                    }}
                  >
                    {t.name[0]}
                  </div>
                  <div className="flex-1">
                    <div
                      className={`font-medium leading-tight ${
                        isDark ? "text-[var(--silver)]" : "text-ink"
                      }`}
                    >
                      {t.name}
                    </div>
                    <div
                      className={`text-xs leading-tight mt-0.5 ${
                        isDark ? "text-[var(--silver-faint)]" : "text-ink/55"
                      }`}
                    >
                      {t.role}
                    </div>
                  </div>
                  <span
                    className={`eyebrow ${
                      isDark
                        ? "!text-[var(--red-glow)]"
                        : "!text-[var(--red-primary)]"
                    }`}
                  >
                    {t.audience === "learner" ? "LEARNER" : "MAKER"}
                  </span>
                </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
