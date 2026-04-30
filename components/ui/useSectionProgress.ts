"use client";

import { useEffect, useState, type RefObject } from "react";

/**
 * Returns 0..1 representing how far the section has travelled through
 * the viewport. 0 = section's bottom edge just touched viewport bottom,
 * 1 = section's top edge has left the viewport at the top.
 *
 * Updates on scroll & resize, throttled via rAF. Pauses when the section
 * is fully off-screen so we don't burn cycles updating unused values.
 */
export function useSectionProgress(ref: RefObject<HTMLElement | null>) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = 0;
    let active = false;

    const update = () => {
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const total = rect.height + vh;
      const traveled = vh - rect.top;
      const p = Math.max(0, Math.min(1, traveled / total));
      setProgress(p);
      frame = 0;
    };

    const onScroll = () => {
      if (!active || frame) return;
      frame = requestAnimationFrame(update);
    };

    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      ([entry]) => {
        active = entry.isIntersecting;
        if (active) update();
      },
      { rootMargin: "20% 0px 20% 0px" }
    );
    io.observe(el);

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [ref]);

  return progress;
}
