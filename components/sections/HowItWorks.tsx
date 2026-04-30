"use client";

import { BookOpen, Hammer, Rocket, Coins } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const STEPS = [
  {
    n: "01",
    title: "LEARN",
    body: "Eight weeks. Zero theory dumps. Every lesson ends with you shipping something real, guided by Claude.",
    Icon: BookOpen,
  },
  {
    n: "02",
    title: "BUILD",
    body: "Pick an idea. Prompt your way to a working prototype. Plug into our maker labs and harden it for production.",
    Icon: Hammer,
  },
  {
    n: "03",
    title: "SHIP",
    body: "Push live to Sandhai with one click. Featured. Reviewed. Distributed. Your first hundred users by lunch.",
    Icon: Rocket,
  },
  {
    n: "04",
    title: "EARN",
    body: "Set your price. Run your deal. Keep 90%. Withdraw on demand. Reinvest. Repeat the loop.",
    Icon: Coins,
  },
];

export default function HowItWorks() {
  return (
    <section id="build" className="relative pad-y pad-x">
      <div className="max-page">
        <div className="text-center mb-20">
          <Reveal as="up">
            <p className="eyebrow mb-5">THE LOOP</p>
          </Reveal>
          <Reveal as="up" delay={120}>
            <h2 className="display-md">
              <span className="block text-gradient-silver">Learn. Build.</span>
              <span className="block text-gradient-red">Ship. Earn.</span>
            </h2>
          </Reveal>
          <Reveal as="up" delay={220}>
            <p className="mx-auto mt-6 max-w-xl body-lg">
              Four steps. One closed loop. Every cycle compounds. The people
              who go through it ship more, earn more, and bring their friends
              back in.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-[var(--silver)]/10 rounded-3xl overflow-hidden">
          {STEPS.map(({ n, title, body, Icon }, i) => (
            <Reveal key={n} as="up" index={i} delay={300}>
              <div
                className="relative p-8 lg:p-10 min-h-[340px] h-full flex flex-col justify-between"
                style={{
                  background:
                    i === 0
                      ? "linear-gradient(180deg,#1a0508 0%,#0a0708 100%)"
                      : "var(--bg-deep)",
                }}
              >
                <div
                  className="absolute bottom-0 right-0 font-display font-black opacity-[0.06] select-none pointer-events-none leading-none"
                  style={{
                    fontSize: "clamp(8rem, 14vw, 12rem)",
                    color: i === 0 ? "var(--red-primary)" : "var(--silver)",
                  }}
                >
                  {n}
                </div>
                <div className="relative">
                  <div className="flex items-center justify-between mb-8">
                    <div
                      className={`size-12 rounded-2xl grid place-items-center ${
                        i === 0 ? "bg-[var(--red-primary)]" : "frosted"
                      }`}
                    >
                      <Icon className="size-5 text-[var(--silver)]" />
                    </div>
                    <span className="eyebrow !text-[var(--silver-faint)]">
                      {n}
                    </span>
                  </div>
                  <h3
                    className="font-display font-black tracking-tightest text-[var(--silver)] mb-4"
                    style={{
                      fontSize: "clamp(1.6rem, 2.4vw, 2rem)",
                      lineHeight: 1,
                    }}
                  >
                    {title}
                  </h3>
                  <p className="text-sm text-[var(--silver-dim)] leading-relaxed max-w-[26ch]">
                    {body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
