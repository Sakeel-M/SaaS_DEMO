"use client";

import { useRef, useMemo } from "react";
import { ArrowUpRight, GraduationCap, Rocket } from "lucide-react";
import { useSectionProgress } from "@/components/ui/useSectionProgress";

const STAGES = [
  {
    id: "promise",
    eyebrow: "THE PROMISE",
    title: ["Not just a", "marketplace.", "A loop that pays."],
    titleAccent: 2, // index of line that gets red gradient (zero-based)
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
  const ref = useRef<HTMLElement>(null);
  const p = useSectionProgress(ref);

  return (
    <section
      ref={ref}
      id="learn"
      className="relative"
      style={{ height: `${STAGES.length * 110}vh` }}
    >
      <div
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center pad-x"
        style={{
          perspective: "1400px",
          perspectiveOrigin: "50% 50%",
        }}
      >
        {/* Space backdrop */}
        <SpaceBackdrop progress={p} />

        {/* Stages */}
        {STAGES.map((stage, i) => {
          const { opacity, z, blur, active } = computeStage(p, i, STAGES.length);
          return (
            <div
              key={stage.id}
              className="absolute inset-0 flex items-center justify-center pad-x"
              style={{
                opacity,
                transform: `translate3d(0, 0, ${z}px)`,
                filter: blur > 0 ? `blur(${blur}px)` : undefined,
                pointerEvents: active ? "auto" : "none",
                willChange: "transform, opacity, filter",
                transformStyle: "preserve-3d",
                transition: "filter 0.3s ease-out",
              }}
            >
              <Stage {...stage} />
            </div>
          );
        })}

        {/* Stage indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {STAGES.map((_, i) => {
            const t = (p * STAGES.length) - i;
            const isActive = t >= 0.15 && t <= 0.95;
            return (
              <span
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: isActive ? "32px" : "6px",
                  height: "6px",
                  background: isActive
                    ? "var(--red-primary)"
                    : "rgba(232,228,221,0.3)",
                }}
              />
            );
          })}
        </div>

        {/* Hint at first */}
        <div
          className="absolute top-24 left-1/2 -translate-x-1/2 eyebrow text-[var(--silver-faint)] z-20"
          style={{
            opacity: Math.max(0, 1 - p * 8),
            transition: "opacity 0.3s",
          }}
        >
          KEEP SCROLLING
        </div>
      </div>
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
  // Stage 3 (split CTA) gets a tighter heading area to leave room for the cards
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
          {/* Decorative concentric SVG */}
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

/* ─── Stage progress math ──────────────────────────── */
/**
 * Each stage owns a strict 0..1 slice of the section progress.
 * Within that slice:
 *   0    → 0.18 : approach (zoom + fade in)
 *   0.18 → 0.82 : linger  (full clarity)
 *   0.82 → 1    : recede   (zoom past + fade out)
 * Outside its slice the stage is fully invisible — no overlap with neighbors.
 */
function computeStage(progress: number, i: number, total: number) {
  const local = progress * total - i; // -∞ ... 0 ... 1 ... +∞

  if (local <= 0 || local >= 1) {
    return {
      opacity: 0,
      z: local <= 0 ? -1500 : 600,
      blur: 0,
      active: false,
    };
  }

  let z: number;
  let opacity: number;
  let blur: number;

  if (local < 0.18) {
    // Approach
    const t = local / 0.18;
    const eased = easeOutCubic(t);
    z = -1500 + eased * 1500;
    opacity = eased;
    blur = (1 - eased) * 4;
  } else if (local < 0.82) {
    // Linger — fully sharp, fully opaque
    z = 0;
    opacity = 1;
    blur = 0;
  } else {
    // Recede
    const t = (local - 0.82) / 0.18;
    const eased = easeInCubic(t);
    z = eased * 600;
    opacity = 1 - eased;
    blur = eased * 4;
  }

  const active = opacity > 0.85;
  return { opacity, z, blur, active };
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}
function easeInCubic(t: number) {
  return t * t * t;
}

/* ─── Space backdrop ───────────────────────────────── */
function SpaceBackdrop({ progress }: { progress: number }) {
  // Generate stars once
  const stars = useMemo(
    () =>
      Array.from({ length: 80 }).map((_, i) => ({
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 0.5 + Math.random() * 1.8,
        depth: Math.random(), // 0..1, how far back
        twinkleDelay: Math.random() * 4,
      })),
    []
  );

  // Backdrop drifts subtly with overall progress
  const drift = progress * 30;

  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{ background: "radial-gradient(ellipse at center, #110608 0%, #050203 70%, #000 100%)" }}
    >
      {/* Nebula blobs */}
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
          transform: `translate3d(${-drift}px, ${drift * 0.5}px, -800px)`,
          willChange: "transform",
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
          transform: `translate3d(${drift}px, ${-drift * 0.4}px, -1000px)`,
          willChange: "transform",
        }}
      />

      {/* Starfield */}
      <div
        className="absolute inset-0"
        style={{
          transform: `translate3d(0, ${-progress * 60}px, -600px)`,
          willChange: "transform",
        }}
      >
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

      {/* Subtle vignette */}
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
