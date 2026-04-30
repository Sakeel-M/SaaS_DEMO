"use client";

type Kind = "learn" | "build" | "ship" | "earn";

interface Props {
  kind: Kind;
  size?: number;
  /** When true, this card is the "hero" tile — slightly amped colors. */
  highlight?: boolean;
  className?: string;
}

/**
 * Inline SVG illustrations with gradient + offset shadow shapes that read 3D.
 * Float + spin via CSS keyframes. Heavy enough to feel like sculpted icons,
 * light enough to ship 4 of them in the page without GPU cost.
 */
export default function StepIcon3D({
  kind,
  size = 96,
  highlight = false,
  className = "",
}: Props) {
  const accent = highlight ? "#ff5560" : "#c5252f";
  const accentDeep = highlight ? "#7a0a14" : "#5a0a12";

  return (
    <div
      className={`step-icon ${className}`}
      style={{ width: size, height: size }}
      aria-hidden
    >
      <svg
        viewBox="0 0 120 120"
        xmlns="http://www.w3.org/2000/svg"
        className="step-icon-svg"
      >
        <defs>
          <linearGradient id={`g-silver-${kind}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#ffffff" />
            <stop offset="55%" stopColor="#ece7df" />
            <stop offset="100%" stopColor="#a8a298" />
          </linearGradient>
          <linearGradient id={`g-red-${kind}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={accent} />
            <stop offset="60%" stopColor={accentDeep} />
            <stop offset="100%" stopColor="#28080c" />
          </linearGradient>
          <linearGradient id={`g-shadow-${kind}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#000" stopOpacity="0.5" />
            <stop offset="100%" stopColor="#000" stopOpacity="0" />
          </linearGradient>
          <radialGradient id={`g-glow-${kind}`} cx="50%" cy="55%" r="55%">
            <stop offset="0%" stopColor={accent} stopOpacity="0.55" />
            <stop offset="70%" stopColor={accent} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* Floor glow */}
        <ellipse
          cx="60"
          cy="105"
          rx="36"
          ry="6"
          fill={`url(#g-glow-${kind})`}
        />

        <g className="step-icon-spin">
          {kind === "learn" && <LearnGlyph kind={kind} />}
          {kind === "build" && <BuildGlyph kind={kind} />}
          {kind === "ship" && <ShipGlyph kind={kind} />}
          {kind === "earn" && <EarnGlyph kind={kind} />}
        </g>
      </svg>
    </div>
  );
}

/* ─── LEARN: stack of 3 books + grad cap ─────────────── */
function LearnGlyph({ kind }: { kind: Kind }) {
  return (
    <g>
      {/* book 1 — bottom */}
      <g transform="translate(28 70)">
        <rect width="64" height="14" rx="2" fill={`url(#g-shadow-${kind})`} opacity="0.35" transform="translate(2 3)" />
        <rect width="64" height="14" rx="2" fill={`url(#g-silver-${kind})`} />
        <rect x="6" y="3" width="52" height="2" fill={`url(#g-red-${kind})`} opacity="0.5" />
      </g>
      {/* book 2 — middle (red accent) */}
      <g transform="translate(24 56)">
        <rect width="68" height="14" rx="2" fill={`url(#g-shadow-${kind})`} opacity="0.35" transform="translate(2 3)" />
        <rect width="68" height="14" rx="2" fill={`url(#g-red-${kind})`} />
        <rect x="6" y="3" width="56" height="2" fill="#ffffff" opacity="0.45" />
      </g>
      {/* book 3 — top */}
      <g transform="translate(30 42)">
        <rect width="60" height="14" rx="2" fill={`url(#g-shadow-${kind})`} opacity="0.35" transform="translate(2 3)" />
        <rect width="60" height="14" rx="2" fill={`url(#g-silver-${kind})`} />
        <rect x="6" y="3" width="48" height="2" fill={`url(#g-red-${kind})`} opacity="0.5" />
      </g>
      {/* graduation cap */}
      <g transform="translate(60 26)">
        {/* board */}
        <polygon
          points="-26,4 0,-6 26,4 0,14"
          fill={`url(#g-red-${kind})`}
          stroke="#1a0508"
          strokeWidth="0.6"
        />
        {/* button */}
        <circle cx="0" cy="4" r="1.6" fill="#ffffff" opacity="0.9" />
        {/* tassel */}
        <path
          d="M 12 6 Q 18 12 18 22"
          stroke={`url(#g-silver-${kind})`}
          strokeWidth="1.4"
          fill="none"
        />
        <circle cx="18" cy="22" r="2.2" fill={`url(#g-red-${kind})`} />
      </g>
    </g>
  );
}

/* ─── BUILD: hammer ─────────────────────────────────── */
function BuildGlyph({ kind }: { kind: Kind }) {
  return (
    <g transform="translate(60 60) rotate(-18) translate(-60 -60)">
      {/* shadow handle */}
      <rect
        x="55"
        y="48"
        width="10"
        height="50"
        rx="3"
        fill={`url(#g-shadow-${kind})`}
        opacity="0.4"
        transform="translate(2 3)"
      />
      {/* handle */}
      <rect
        x="55"
        y="48"
        width="10"
        height="50"
        rx="3"
        fill={`url(#g-silver-${kind})`}
      />
      <rect x="55" y="48" width="3" height="50" fill="#000" opacity="0.18" />
      {/* head shadow */}
      <rect
        x="34"
        y="30"
        width="52"
        height="22"
        rx="3"
        fill={`url(#g-shadow-${kind})`}
        opacity="0.45"
        transform="translate(2 3)"
      />
      {/* head */}
      <rect
        x="34"
        y="30"
        width="52"
        height="22"
        rx="3"
        fill={`url(#g-red-${kind})`}
      />
      {/* claw notch */}
      <path
        d="M 34 33 L 28 36 L 28 46 L 34 49 Z"
        fill={`url(#g-red-${kind})`}
      />
      <path d="M 32 36 L 30 41 L 32 46 L 34 41 Z" fill="#1a0508" />
      {/* head highlight */}
      <rect x="34" y="30" width="52" height="3" fill="#ffffff" opacity="0.35" />
      {/* grip ring */}
      <circle cx="60" cy="92" r="3.5" fill={`url(#g-red-${kind})`} stroke="#ffffff" strokeOpacity="0.4" strokeWidth="0.6" />
    </g>
  );
}

/* ─── SHIP: rocket ──────────────────────────────────── */
function ShipGlyph({ kind }: { kind: Kind }) {
  return (
    <g>
      {/* exhaust glow (pulses via CSS) */}
      <g className="step-icon-flame">
        <ellipse cx="60" cy="105" rx="6" ry="10" fill={`url(#g-red-${kind})`} opacity="0.95" />
        <ellipse cx="60" cy="103" rx="3" ry="6" fill="#ffffff" opacity="0.85" />
      </g>
      {/* body shadow */}
      <rect
        x="48"
        y="40"
        width="24"
        height="50"
        rx="11"
        fill={`url(#g-shadow-${kind})`}
        opacity="0.45"
        transform="translate(2 3)"
      />
      {/* body */}
      <rect
        x="48"
        y="40"
        width="24"
        height="50"
        rx="11"
        fill={`url(#g-silver-${kind})`}
      />
      {/* body band */}
      <rect x="48" y="68" width="24" height="3" fill={`url(#g-red-${kind})`} />
      {/* nose cone */}
      <path
        d="M 48 40 Q 60 16 72 40 Z"
        fill={`url(#g-red-${kind})`}
      />
      <path
        d="M 48 40 Q 54 28 60 28 L 60 40 Z"
        fill="#ffffff"
        opacity="0.22"
      />
      {/* window */}
      <circle cx="60" cy="54" r="4.5" fill="#1a0508" />
      <circle cx="58.5" cy="52.5" r="1.4" fill="#ffffff" opacity="0.7" />
      {/* fins */}
      <path d="M 48 78 L 38 92 L 48 92 Z" fill={`url(#g-red-${kind})`} />
      <path d="M 72 78 L 82 92 L 72 92 Z" fill={`url(#g-red-${kind})`} />
    </g>
  );
}

/* ─── EARN: stack of 4 coins ────────────────────────── */
function EarnGlyph({ kind }: { kind: Kind }) {
  // Render bottom-up so top coin paints last
  const coins = [88, 76, 64, 52];
  return (
    <g>
      {coins.map((y, i) => {
        const offsetX = i % 2 === 0 ? 0 : 1.5;
        return (
          <g key={i} transform={`translate(${offsetX} 0)`}>
            {/* coin shadow */}
            <ellipse
              cx="60"
              cy={y + 4}
              rx="22"
              ry="7"
              fill={`url(#g-shadow-${kind})`}
              opacity="0.3"
            />
            {/* coin side */}
            <rect
              x="38"
              y={y - 4}
              width="44"
              height="8"
              fill={`url(#g-red-${kind})`}
            />
            {/* coin top */}
            <ellipse
              cx="60"
              cy={y - 4}
              rx="22"
              ry="6.5"
              fill={`url(#g-red-${kind})`}
            />
            <ellipse
              cx="60"
              cy={y - 4}
              rx="18"
              ry="5"
              fill={`url(#g-silver-${kind})`}
              opacity="0.55"
            />
            {/* center notch */}
            <circle cx="60" cy={y - 4} r="3.5" fill={`url(#g-red-${kind})`} />
            <circle cx="60" cy={y - 4} r="1.6" fill="#ffffff" opacity="0.7" />
          </g>
        );
      })}
      {/* crown sparkle on top coin */}
      <g transform="translate(60 38)">
        <path d="M -8 6 L -4 -2 L 0 4 L 4 -2 L 8 6 Z" fill={`url(#g-red-${kind})`} />
        <circle cx="-4" cy="-2" r="1.5" fill="#ffffff" />
        <circle cx="0" cy="4" r="1.5" fill="#ffffff" />
        <circle cx="4" cy="-2" r="1.5" fill="#ffffff" />
      </g>
    </g>
  );
}
