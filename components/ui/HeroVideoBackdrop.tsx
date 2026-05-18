"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Wistia hashed media ID for the Hero background video.
 * Replace this with the 10-char ID from the public Wistia share URL
 * (e.g. https://socialeagle.wistia.com/medias/abc12def34 → "abc12def34").
 */
const WISTIA_ID = "bybznyq52z";

const wistiaSrc = (id: string) =>
  `https://fast.wistia.net/embed/iframe/${id}?autoPlay=true&muted=true&loop=true&playButton=false&controlsVisibleOnLoad=false&fullscreenButton=false&playbar=false&volumeControl=false&settingsControl=false&endVideoBehavior=loop&playerColor=000000&silentAutoPlay=allow`;

/**
 * Looping Wistia background with mouse-driven 3D parallax.
 * Falls back to a cinematic gradient if the embed fails or the ID is missing.
 */
export default function HeroVideoBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const iframeRef = useRef<HTMLIFrameElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);

  const [reduced, setReduced] = useState(false);
  const [inView, setInView] = useState(true);

  const hasValidId = WISTIA_ID.length > 0;

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onMq = () => setReduced(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  // Mouse parallax — rAF lerp loop
  useEffect(() => {
    if (reduced) return;

    const onPointer = (clientX: number, clientY: number) => {
      target.current.x = (clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (clientY / window.innerHeight - 0.5) * 2;
    };
    const onMouse = (e: MouseEvent) => onPointer(e.clientX, e.clientY);
    const onTouch = (e: TouchEvent) => {
      if (e.touches[0]) onPointer(e.touches[0].clientX, e.touches[0].clientY);
    };

    window.addEventListener("mousemove", onMouse, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });

    const tick = () => {
      current.current.x += (target.current.x - current.current.x) * 0.07;
      current.current.y += (target.current.y - current.current.y) * 0.07;
      const stage = stageRef.current;
      if (stage) {
        const x = current.current.x;
        const y = current.current.y;
        stage.style.transform = `translate3d(${x * -28}px, ${y * -22}px, 0) rotateY(${x * 4}deg) rotateX(${y * -3}deg) scale(1.12)`;
      }
      rafId.current = requestAnimationFrame(tick);
    };
    rafId.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMouse);
      window.removeEventListener("touchmove", onTouch);
      cancelAnimationFrame(rafId.current);
    };
  }, [reduced]);

  // Hide iframe when offscreen so Wistia stops decoding
  useEffect(() => {
    const c = containerRef.current;
    if (!c) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        setInView(entry.isIntersecting);
      },
      { threshold: 0.05 }
    );
    observer.observe(c);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden pointer-events-none"
      style={{ perspective: "1400px", perspectiveOrigin: "50% 50%" }}
    >
      <div
        ref={stageRef}
        className="absolute inset-0 will-change-transform"
        style={{ transformOrigin: "50% 50%" }}
      >
        {hasValidId && (
          <iframe
            ref={iframeRef}
            src={wistiaSrc(WISTIA_ID)}
            title="Hero background"
            allow="autoplay; fullscreen"
            allowFullScreen
            className="absolute top-1/2 left-1/2"
            style={{
              border: 0,
              filter: "brightness(1.35) saturate(1.15) contrast(1.05)",
              display: inView ? "block" : "none",
              // 16:9 cover: pick the larger of (viewport, viewport-derived-aspect)
              // so the iframe always overflows in at least one axis, then center it.
              width: "max(100%, calc(100vh * 16 / 9))",
              height: "max(100%, calc(100vw * 9 / 16))",
              transform: "translate(-50%, -50%)",
            }}
          />
        )}

        {/* Cinematic fallback that mirrors the video's color palette. Shown
            when the Wistia ID hasn't been set yet, or behind the iframe while
            it loads (Wistia's iframe is transparent until ready). */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            zIndex: hasValidId ? -1 : 1,
            background:
              "radial-gradient(ellipse at 50% 60%, #4a1a14 0%, #2a0d10 40%, #100608 70%, #050203 100%)",
          }}
        />
      </div>
    </div>
  );
}
