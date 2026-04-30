"use client";

import Image from "next/image";

interface Props {
  /** Total rendered height in px. Width auto-derived from intrinsic aspect ratio (~3.4:1). */
  height?: number;
  /** When true, applies a white-ish filter so the logo reads on dark backgrounds. */
  invert?: boolean;
  className?: string;
  priority?: boolean;
}

/**
 * Brand wordmark — "SAAS SANDHAI · POWERED BY SOCIAL EAGLE".
 * The PNG includes its own brand colors. On dark backgrounds we apply a soft
 * brightness boost so the dark "SANDHAI" word + tagline stay legible.
 */
export default function Logo({
  height = 36,
  invert = false,
  className = "",
  priority = false,
}: Props) {
  // Source aspect is roughly 3.4:1 (logo.png). Width derived from height.
  const width = Math.round(height * 3.4);

  return (
    <Image
      src="/logo.png"
      alt="SaaS Sandhai · Powered by Social Eagle"
      width={width}
      height={height}
      priority={priority}
      className={`select-none ${invert ? "logo-invert" : ""} ${className}`}
      style={{
        height,
        width: "auto",
        objectFit: "contain",
      }}
    />
  );
}
