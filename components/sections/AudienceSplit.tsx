"use client";

import { GraduationCap, Rocket, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const AUDIENCES = [
  {
    id: "learn",
    badge: "FOR LEARNERS",
    title: ["Don't know how", "to build it yet?", "We'll teach you."],
    body: "Eight weeks of hands-on, beginner-first lessons. By week three you're shipping real SaaS with Claude. By week eight you're listing on Sandhai.",
    cta: "START THE COURSE",
    Icon: GraduationCap,
    bg: "linear-gradient(155deg,#0a0708 0%,#1a0d0f 60%,#0a0708 100%)",
    accent: "var(--silver)",
  },
  {
    id: "ship",
    badge: "FOR MAKERS",
    title: ["Already built", "something great?", "Get it sold."],
    body: "Free to list. Built-in audience. Launch playbooks the indie world actually uses. We bring traffic, you keep 90% of every sale.",
    cta: "LIST YOUR APP",
    Icon: Rocket,
    bg: "linear-gradient(155deg,#5a0a12 0%,#c5252f 55%,#5a0a12 100%)",
    accent: "var(--silver)",
  },
] as const;

export default function AudienceSplit() {
  return (
    <section className="relative pad-y pad-x">
      <div className="max-page">
        <div className="text-center mb-16">
          <Reveal as="up">
            <p className="eyebrow mb-5">TWO PATHS</p>
          </Reveal>
          <Reveal as="up" delay={120}>
            <h2 className="display-md text-gradient-silver">
              Two audiences. <br /> One platform.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {AUDIENCES.map(({ id, badge, title, body, cta, Icon, bg }, i) => (
            <Reveal
              key={id}
              as={i === 0 ? "left" : "right"}
              delay={200}
              className="h-full flex"
            >
              <div
                id={id}
                className="relative overflow-hidden rounded-3xl p-10 lg:p-14 min-h-[520px] flex-1 flex flex-col justify-between border border-white/5"
                style={{ background: bg }}
              >
                {/* Decorative pattern */}
                <svg
                  className="absolute -bottom-12 -right-12 w-72 h-72 opacity-20"
                  viewBox="0 0 200 200"
                  aria-hidden
                >
                  {[40, 60, 80, 100].map((r) => (
                    <circle
                      key={r}
                      cx="100"
                      cy="100"
                      r={r}
                      stroke="rgba(232,228,221,0.7)"
                      strokeWidth="1"
                      fill="none"
                    />
                  ))}
                </svg>

                <div className="relative">
                  <div className="size-12 rounded-2xl frosted grid place-items-center mb-8">
                    <Icon className="size-6 text-[var(--silver)]" />
                  </div>
                  <p className="eyebrow !text-[var(--silver)]/70 mb-5">{badge}</p>
                  <h3
                    className="font-display font-black tracking-tightest leading-[0.92] text-[var(--silver)]"
                    style={{ fontSize: "clamp(2rem, 4.2vw, 3.6rem)" }}
                  >
                    {title.map((line, j) => (
                      <span key={j} className="block">
                        {line}
                      </span>
                    ))}
                  </h3>
                  <p className="mt-6 max-w-md leading-relaxed text-[var(--silver)]/75">
                    {body}
                  </p>
                </div>

                <button className="relative mt-10 inline-flex items-center gap-2 self-start eyebrow px-6 py-3.5 rounded-full bg-[var(--silver)] text-ink hover:bg-ink hover:text-[var(--silver)] transition-colors">
                  {cta} <ArrowUpRight className="size-4" />
                </button>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
