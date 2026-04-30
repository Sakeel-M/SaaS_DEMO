"use client";

import Reveal from "@/components/ui/Reveal";

const TILES = [
  {
    headline: ["AVERAGE", "TIME TO", "FIRST SALE"],
    body: "Listings that go live on Sandhai see their first paying customer within 72 hours, on average.",
    badge: "72H",
    variant: "highlight",
  },
  {
    headline: ["COURSE", "COMPLETION", "RATE"],
    body: "82% of learners ship a working SaaS by the end of week eight. Industry average is 4%.",
    badge: "82%",
    variant: "default",
  },
  {
    headline: ["AVERAGE", "MAKER", "EARNINGS"],
    body: "Top-decile makers cross $5K/mo within their first quarter. The median crosses $800/mo.",
    badge: "$5K",
    variant: "default",
  },
] as const;

export default function FeaturesGrid() {
  return (
    <section
      className="relative pad-y pad-x"
      style={{ background: "var(--bg-cream)", color: "var(--ink)" }}
    >
      <div className="max-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-7">
            <Reveal as="up">
              <p className="eyebrow !text-ink/55 mb-5">THE NUMBERS</p>
            </Reveal>
            <Reveal as="up" delay={120}>
              <h2 className="display-md text-ink">
                The metrics <br /> we lead with.
              </h2>
            </Reveal>
          </div>
          <Reveal
            as="up"
            delay={220}
            className="lg:col-span-5 lg:text-right"
          >
            <p className="text-ink/65 leading-relaxed">
              Every number below is a public commitment. We update them
              quarterly and screenshot them on the way down too.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {TILES.map((tile, i) => {
            const isHighlight = tile.variant === "highlight";
            return (
              <Reveal key={i} as="up" index={i} delay={300}>
                <div
                  className="relative overflow-hidden rounded-3xl p-10 min-h-[460px] h-full flex flex-col justify-between"
                  style={
                    isHighlight
                      ? { background: "linear-gradient(180deg,#5a0a12 0%,#2a0508 100%)" }
                      : { background: "#EFE7DD" }
                  }
                >
                {/* Decorative concentric */}
                <svg
                  className="absolute -bottom-16 -right-12 w-72 h-72"
                  viewBox="0 0 200 200"
                  aria-hidden
                  style={{ opacity: isHighlight ? 0.18 : 0.1 }}
                >
                  {[40, 60, 80, 100].map((r) => (
                    <circle
                      key={r}
                      cx="100"
                      cy="100"
                      r={r}
                      stroke={isHighlight ? "#fff" : "#18100f"}
                      strokeWidth="1"
                      fill="none"
                    />
                  ))}
                </svg>

                <div className="relative">
                  <h3
                    className={`font-display font-black tracking-tightest leading-[0.92] ${
                      isHighlight ? "text-[var(--silver)]" : "text-ink"
                    }`}
                    style={{ fontSize: "clamp(1.6rem, 2.4vw, 2.4rem)" }}
                  >
                    {tile.headline.map((line, j) => (
                      <span key={j} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p
                    className={`mt-6 max-w-xs leading-relaxed ${
                      isHighlight ? "text-white" : "text-ink/65"
                    }`}
                  >
                    {tile.body}
                  </p>
                </div>

                <div
                  className={`relative font-display font-black select-none pointer-events-none leading-none tracking-tightest ${
                    isHighlight ? "text-[var(--silver)]" : "text-ink"
                  }`}
                  style={{
                    fontSize: "clamp(5rem, 11vw, 9rem)",
                    opacity: isHighlight ? 0.95 : 0.92,
                  }}
                >
                  {tile.badge}
                </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
