"use client";

import Reveal from "@/components/ui/Reveal";

const STATS = [
  { v: "4.8K", l: "MAKERS" },
  { v: "1.2K", l: "DEALS LIVE" },
  { v: "12.7K", l: "LEARNERS" },
  { v: "$3.4M", l: "PAID OUT" },
];

export default function NotJustMarketplace() {
  return (
    <section className="relative pad-y pad-x">
      <div className="max-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-12 gap-y-16 items-start">
          {/* LEFT: huge editorial type */}
          <div className="lg:col-span-7 min-w-0">
            <Reveal as="up">
              <p className="eyebrow mb-8">THE PROMISE</p>
            </Reveal>
            <Reveal as="up" delay={120}>
              <h2 className="display-lg">
                <span className="block text-gradient-silver">Not just a</span>
                <span className="block text-gradient-silver">marketplace.</span>
                <span className="block text-gradient-red">A loop</span>
                <span className="block text-gradient-red">that pays.</span>
              </h2>
            </Reveal>
          </div>

          {/* RIGHT: body + stats stacked */}
          <div className="lg:col-span-5 lg:pt-10 stack-lg">
            <Reveal as="up" delay={200}>
              <p className="body-lg max-w-md">
                Sandhai isn&rsquo;t a list of apps. It&rsquo;s a closed loop
                where founders learn, build, ship, and earn week after week,
                with the AI tools and audience already in the room.
              </p>
            </Reveal>

            <div className="grid grid-cols-2 gap-px bg-[var(--silver)]/10 rounded-2xl overflow-hidden">
              {STATS.map((s, i) => (
                <Reveal key={s.l} as="up" index={i} delay={260}>
                  <div className="bg-[var(--bg-deep)] p-6 h-full">
                    <div
                      className="font-display font-black tracking-tightest text-gradient-silver"
                      style={{
                        fontSize: "clamp(2rem, 3.6vw, 3rem)",
                        lineHeight: 1,
                      }}
                    >
                      {s.v}
                    </div>
                    <div className="eyebrow mt-2">{s.l}</div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
