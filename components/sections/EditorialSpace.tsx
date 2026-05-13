"use client";

import { useMemo } from "react";
import { ArrowUpRight, GraduationCap, Rocket } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const STAGES = [
  {
    id: "promise",
    eyebrow: "THE PROMISE",
    title: ["Not just a", "marketplace.", "A loop that pays."],
    titleAccent: 2,
    body:
      "Sandhai isn't a list of apps. It's a closed loop where founders learn, build, ship, and earn week after week, with the AI tools and audience already in the room.",
    cta: null,
  },
  {
    id: "engine",
    eyebrow: "THE ENGINE",
    title: ["Powered by", "SocialEagle"],
    titleAccent: 1,
    body:
      "Every listing on Sandhai is built, marketed, and matched to its audience by an AI agent that never sleeps. The same network you're reading this with.",
    cta: null,
  },
  {
    id: "paths",
    eyebrow: "TWO PATHS",
    title: ["Two audiences.", "One platform."],
    titleAccent: 1,
    body: null,
    cta: "split",
  },
] as const;

export default function EditorialSpace() {
  return (
    <section id="learn" className="relative">
      {STAGES.map((stage) => (
        <div
          key={stage.id}
          className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pad-x"
        >
          <SpaceBackdrop />
          <Reveal as="up">
            <Stage {...stage} />
          </Reveal>
        </div>
      ))}
    </section>
  );
}

/* ─── Per-stage rendering ──────────────────────────── */
function Stage({
  eyebrow,
  title,
  titleAccent,
  body,
  cta,
}: {
  eyebrow: string;
  title: readonly string[];
  titleAccent: number;
  body: string | null;
  cta: "split" | null;
}) {
  const isSplit = cta === "split";
  return (
    <div className="max-page w-full text-center">
      <p className={`eyebrow ${isSplit ? "mb-3" : "mb-6"}`}>{eyebrow}</p>
      <h2
        className={`${isSplit ? "display-md mb-6" : "display-md mb-8"}`}
        style={isSplit ? { fontSize: "clamp(2rem, 4.5vw, 4rem)" } : undefined}
      >
        {title.map((line, i) => (
          <span
            key={i}
            className={`block ${
              i === titleAccent ? "text-gradient-red" : "text-gradient-silver"
            }`}
          >
            {line}
          </span>
        ))}
      </h2>
      {body && <p className="mx-auto max-w-xl body-lg mb-10">{body}</p>}

      {cta === "split" && <SplitCards />}
    </div>
  );
}

const PATHS = [
  {
    id: "learn",
    badge: "FOR LEARNERS",
    title: ["Don't know how", "to build it yet?", "We'll teach you."],
    body:
      "Eight weeks of hands-on, beginner-first lessons. By week three you're shipping real SaaS with Claude. By week eight you're listing on Sandhai.",
    cta: "START THE COURSE",
    Icon: GraduationCap,
    bg: "linear-gradient(155deg,#0a0708 0%,#1a0d0f 60%,#0a0708 100%)",
  },
  {
    id: "ship",
    badge: "FOR MAKERS",
    title: ["Already built", "something great?", "Get it sold."],
    body:
      "Free to list. Built-in audience. Launch playbooks the indie world actually uses. We bring traffic, you keep 90% of every sale.",
    cta: "LIST YOUR APP",
    Icon: Rocket,
    bg: "linear-gradient(155deg,#5a0a12 0%,#c5252f 55%,#5a0a12 100%)",
  },
] as const;

function SplitCards() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 max-w-5xl mx-auto items-stretch text-left">
      {PATHS.map(({ id, badge, title, body, cta, Icon, bg }) => (
        <div
          key={id}
          className="relative overflow-hidden rounded-3xl p-7 lg:p-9 flex flex-col justify-between border border-white/5"
          style={{ background: bg, minHeight: "330px" }}
        >
          <svg
            className="absolute -bottom-10 -right-10 w-56 h-56 opacity-20"
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
            <div className="flex items-center justify-between mb-5">
              <p className="eyebrow !text-[var(--silver)]/70">{badge}</p>
              <div className="size-10 rounded-xl frosted grid place-items-center flex-shrink-0">
                <Icon className="size-5 text-[var(--silver)]" />
              </div>
            </div>
            <h3
              className="font-display font-black tracking-tightest leading-[0.95] text-[var(--silver)]"
              style={{ fontSize: "clamp(1.4rem, 2.4vw, 2rem)" }}
            >
              {title.map((line, j) => (
                <span key={j} className="block">
                  {line}
                </span>
              ))}
            </h3>
            <p className="mt-4 max-w-md leading-relaxed text-[var(--silver)]/80 text-sm">
              {body}
            </p>
          </div>

          <button className="relative mt-5 inline-flex items-center gap-2 self-start eyebrow px-5 py-3 rounded-full bg-[var(--silver)] text-ink hover:bg-ink hover:text-[var(--silver)] transition-colors">
            {cta} <ArrowUpRight className="size-4" />
          </button>
        </div>
      ))}
    </div>
  );
}

/* ─── Space backdrop ───────────────────────────────── */
function SpaceBackdrop() {
  const stars = useMemo(
    () =>
      Array.from({ length: 60 }).map(() => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.5 + Math.random() * 1.8,
        depth: Math.random(),
        twinkleDelay: Math.random() * 4,
      })),
    []
  );

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background:
          "radial-gradient(ellipse at center, #110608 0%, #050203 70%, #000 100%)",
      }}
    >
      <div
        className="absolute"
        style={{
          width: "70vw",
          height: "70vw",
          left: "-10vw",
          top: "-10vh",
          background:
            "radial-gradient(circle, rgba(184,34,44,0.32) 0%, rgba(90,10,18,0.10) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute"
        style={{
          width: "60vw",
          height: "60vw",
          right: "-10vw",
          bottom: "-15vh",
          background:
            "radial-gradient(circle, rgba(255,85,96,0.20) 0%, rgba(90,10,18,0.08) 40%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="absolute inset-0">
        {stars.map((s, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-[var(--silver)]"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: 0.2 + s.depth * 0.7,
              boxShadow: `0 0 ${s.size * 2}px rgba(232,228,221,0.7)`,
              animation: `star-twinkle ${3 + s.twinkleDelay}s ease-in-out ${s.twinkleDelay}s infinite`,
            }}
          />
        ))}
      </div>

      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 30%, rgba(0,0,0,0.65) 100%)",
        }}
      />
    </div>
  );
}
