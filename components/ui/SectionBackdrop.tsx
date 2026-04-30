"use client";

type Kind = "loop" | "engine" | "paths";

interface Props {
  kind: Kind;
  /** 0..1 scroll progress through this section. */
  progress: number;
}

/**
 * Decorative 3D-feeling backdrop layered behind a section's content.
 * Translates / rotates / scales with the section's scroll progress.
 *
 * Sits at z-0 inside a `relative` section. All visuals use SVG + CSS,
 * so cost is minimal vs running an R3F canvas per section.
 */
export default function SectionBackdrop({ kind, progress }: Props) {
  return (
    <div
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      style={{
        perspective: "1500px",
        perspectiveOrigin: "50% 50%",
      }}
    >
      {kind === "loop" && <LoopBackdrop p={progress} />}
      {kind === "engine" && <EngineBackdrop p={progress} />}
      {kind === "paths" && <PathsBackdrop p={progress} />}
    </div>
  );
}

/* ─── LOOP — orbiting rings + parallax red blobs ─────── */
function LoopBackdrop({ p }: { p: number }) {
  // Map progress to multiple transforms
  const ringRotate = p * 60; // slow spin through scroll
  const blobYa = (p - 0.5) * 80; // -40 to +40 px
  const blobYb = (0.5 - p) * 100;
  const ringScale = 0.92 + p * 0.18;

  return (
    <>
      {/* Soft red gradient blob — sits far back */}
      <div
        className="absolute"
        style={{
          width: "70vw",
          height: "70vw",
          left: "-15vw",
          top: "10%",
          background:
            "radial-gradient(circle, rgba(184,34,44,0.32) 0%, rgba(90,10,18,0.12) 40%, transparent 75%)",
          filter: "blur(40px)",
          transform: `translate3d(0, ${blobYa}px, -200px)`,
          willChange: "transform",
          transition: "transform 0.4s ease-out",
        }}
      />
      {/* Smaller silver glow blob */}
      <div
        className="absolute"
        style={{
          width: "45vw",
          height: "45vw",
          right: "-10vw",
          bottom: "0%",
          background:
            "radial-gradient(circle, rgba(232,228,221,0.10) 0%, transparent 70%)",
          filter: "blur(30px)",
          transform: `translate3d(0, ${blobYb}px, -120px)`,
          willChange: "transform",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Concentric orbit rings — rotated by scroll */}
      <svg
        className="absolute"
        viewBox="0 0 800 800"
        style={{
          width: "85vmin",
          height: "85vmin",
          right: "-20vmin",
          top: "50%",
          transform: `translate3d(0, -50%, -100px) rotate(${ringRotate}deg) scale(${ringScale})`,
          willChange: "transform",
          transformStyle: "preserve-3d",
          opacity: 0.55,
        }}
        aria-hidden
      >
        <defs>
          <linearGradient id="lb-ring-1" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#c5252f" stopOpacity="0" />
            <stop offset="50%" stopColor="#c5252f" stopOpacity="0.85" />
            <stop offset="100%" stopColor="#c5252f" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="lb-ring-2" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#ece7df" stopOpacity="0" />
            <stop offset="50%" stopColor="#ece7df" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ece7df" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="400" cy="400" r="380" fill="none" stroke="url(#lb-ring-1)" strokeWidth="2" />
        <circle cx="400" cy="400" r="320" fill="none" stroke="url(#lb-ring-2)" strokeWidth="1.5" strokeDasharray="6 12" />
        <circle cx="400" cy="400" r="260" fill="none" stroke="url(#lb-ring-1)" strokeWidth="1" />
        <circle cx="400" cy="400" r="200" fill="none" stroke="url(#lb-ring-2)" strokeWidth="1" strokeDasharray="2 8" />
      </svg>

      {/* Counter-rotating inner orbit */}
      <svg
        className="absolute"
        viewBox="0 0 600 600"
        style={{
          width: "55vmin",
          height: "55vmin",
          left: "-15vmin",
          top: "0%",
          transform: `translate3d(0, ${p * 40}px, -60px) rotate(${-ringRotate * 1.4}deg)`,
          willChange: "transform",
          opacity: 0.45,
        }}
        aria-hidden
      >
        <defs>
          <linearGradient id="lb-ring-3" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#e63946" stopOpacity="0" />
            <stop offset="50%" stopColor="#e63946" stopOpacity="0.6" />
            <stop offset="100%" stopColor="#e63946" stopOpacity="0" />
          </linearGradient>
        </defs>
        <circle cx="300" cy="300" r="280" fill="none" stroke="url(#lb-ring-3)" strokeWidth="3" strokeDasharray="40 18" />
        <circle cx="300" cy="300" r="220" fill="none" stroke="url(#lb-ring-3)" strokeWidth="1.5" />
      </svg>
    </>
  );
}

/* ─── ENGINE — perspective grid + radiating beams ───── */
function EngineBackdrop({ p }: { p: number }) {
  const gridSlide = (1 - p) * 40; // grid scrolls in from below
  const beamRotate = p * 30;
  const coreScale = 0.85 + Math.sin(p * Math.PI) * 0.25;

  return (
    <>
      {/* Receding hex grid */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(60deg, rgba(184,34,44,0.18) 1px, transparent 1px), linear-gradient(-60deg, rgba(184,34,44,0.18) 1px, transparent 1px), linear-gradient(0deg, rgba(184,34,44,0.18) 1px, transparent 1px)",
          backgroundSize: "70px 60px, 70px 60px, 70px 60px",
          transform: `perspective(900px) rotateX(60deg) translateY(${gridSlide}%)`,
          transformOrigin: "50% 100%",
          opacity: 0.45,
          willChange: "transform",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Radiating beams — rotates slowly through scroll */}
      <svg
        className="absolute"
        viewBox="0 0 800 800"
        style={{
          width: "100vmin",
          height: "100vmin",
          left: "50%",
          top: "50%",
          transform: `translate3d(-50%, -50%, -50px) rotate(${beamRotate}deg)`,
          willChange: "transform",
          opacity: 0.5,
        }}
        aria-hidden
      >
        <defs>
          <radialGradient id="eb-beam" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#e63946" stopOpacity="0.85" />
            <stop offset="40%" stopColor="#c5252f" stopOpacity="0.35" />
            <stop offset="100%" stopColor="#5a0a12" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="eb-spoke" x1="0.5" y1="0" x2="0.5" y2="1">
            <stop offset="0%" stopColor="#ff5560" stopOpacity="0" />
            <stop offset="50%" stopColor="#ff5560" stopOpacity="0.7" />
            <stop offset="100%" stopColor="#ff5560" stopOpacity="0" />
          </linearGradient>
        </defs>
        {/* Spokes */}
        {Array.from({ length: 12 }).map((_, i) => (
          <rect
            key={i}
            x="395"
            y="0"
            width="10"
            height="800"
            fill="url(#eb-spoke)"
            opacity={i % 3 === 0 ? 0.85 : 0.35}
            transform={`rotate(${(360 / 12) * i} 400 400)`}
          />
        ))}
        {/* Central glow */}
        <circle cx="400" cy="400" r="250" fill="url(#eb-beam)" />
      </svg>

      {/* Pulsing center core */}
      <div
        className="absolute"
        style={{
          width: "30vmin",
          height: "30vmin",
          left: "50%",
          top: "50%",
          background:
            "radial-gradient(circle, rgba(255,85,96,0.55) 0%, rgba(184,34,44,0.18) 35%, transparent 70%)",
          filter: "blur(30px)",
          transform: `translate3d(-50%, -50%, 0) scale(${coreScale})`,
          willChange: "transform",
          transition: "transform 0.4s ease-out",
        }}
      />
    </>
  );
}

/* ─── PATHS — two diverging gradient beams + tags ────── */
function PathsBackdrop({ p }: { p: number }) {
  const beamScale = 0.7 + p * 0.5;
  const leftX = (0.5 - p) * 60;
  const rightX = (p - 0.5) * 60;

  return (
    <>
      {/* Left beam (silver) */}
      <div
        className="absolute"
        style={{
          width: "65vw",
          height: "150vh",
          left: "-30vw",
          top: "-25vh",
          background:
            "conic-gradient(from 195deg at 100% 100%, transparent 0deg, rgba(232,228,221,0.18) 40deg, rgba(232,228,221,0.04) 75deg, transparent 90deg)",
          transform: `translate3d(${leftX}px, 0, -120px) scaleY(${beamScale})`,
          transformOrigin: "100% 100%",
          willChange: "transform",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Right beam (red) */}
      <div
        className="absolute"
        style={{
          width: "65vw",
          height: "150vh",
          right: "-30vw",
          top: "-25vh",
          background:
            "conic-gradient(from 75deg at 0% 100%, transparent 0deg, rgba(197,37,47,0.32) 40deg, rgba(90,10,18,0.10) 75deg, transparent 90deg)",
          transform: `translate3d(${rightX}px, 0, -120px) scaleY(${beamScale})`,
          transformOrigin: "0% 100%",
          willChange: "transform",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Center divider line — animated */}
      <div
        className="absolute left-1/2 top-1/2"
        style={{
          width: "1px",
          height: "120%",
          background:
            "linear-gradient(180deg, transparent 0%, rgba(232,228,221,0.4) 50%, transparent 100%)",
          transform: `translate3d(-50%, -50%, -80px) scaleY(${0.4 + p * 0.6})`,
          transformOrigin: "50% 50%",
          willChange: "transform",
          transition: "transform 0.4s ease-out",
        }}
      />

      {/* Floating decorative tags — left side, parallax up */}
      <div
        className="absolute eyebrow text-[var(--silver)]/35"
        style={{
          left: "8%",
          top: `${30 - p * 18}%`,
          transform: "translate3d(0, 0, -40px)",
          transition: "top 0.4s ease-out",
        }}
      >
        {"// LEARN"}
      </div>
      <div
        className="absolute eyebrow text-[var(--silver)]/25"
        style={{
          left: "14%",
          top: `${65 - p * 22}%`,
          transform: "translate3d(0, 0, -60px)",
          transition: "top 0.4s ease-out",
        }}
      >
        {"// BUILD"}
      </div>

      {/* Floating decorative tags — right side, parallax down */}
      <div
        className="absolute eyebrow text-[var(--red-primary)]/55"
        style={{
          right: "9%",
          top: `${28 + p * 18}%`,
          transform: "translate3d(0, 0, -40px)",
          transition: "top 0.4s ease-out",
        }}
      >
        SHIP //
      </div>
      <div
        className="absolute eyebrow text-[var(--red-primary)]/40"
        style={{
          right: "15%",
          top: `${68 + p * 22}%`,
          transform: "translate3d(0, 0, -60px)",
          transition: "top 0.4s ease-out",
        }}
      >
        EARN //
      </div>
    </>
  );
}
