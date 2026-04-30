"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";

type Variant = "up" | "fade" | "left" | "right" | "scale";

interface Props {
  children: React.ReactNode;
  /** Animation flavor. */
  as?: Variant;
  /** Delay before the animation starts, in ms. Use to stagger siblings. */
  delay?: number;
  /** Optional extra className. */
  className?: string;
  /** Replay the reveal every time the element re-enters the viewport. */
  replay?: boolean;
  /** When using stagger over a list, pass index and the children below will use it. */
  index?: number;
  /** Render as a different element (default: div). */
  tag?: keyof React.JSX.IntrinsicElements;
}

/**
 * Wraps children in a div that animates in when scrolled into view.
 * Honors prefers-reduced-motion (no animation, no observer).
 */
export default function Reveal({
  children,
  as = "up",
  delay = 0,
  className = "",
  replay = false,
  index,
  tag,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setVisible(true);
            if (!replay) obs.unobserve(entry.target);
          } else if (replay) {
            setVisible(false);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [replay]);

  const computedDelay = index !== undefined ? delay + index * 80 : delay;
  const style: CSSProperties = {
    ["--reveal-delay" as string]: `${computedDelay}ms`,
  };

  const Tag = (tag ?? "div") as React.ElementType;

  return (
    <Tag
      ref={ref}
      data-reveal={as}
      data-visible={visible ? "true" : "false"}
      className={className}
      style={style}
    >
      {children}
    </Tag>
  );
}
