"use client";

import { useEffect, useRef, useState } from "react";

const VIDEO_SRC =
  "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260405_170732_8a9ccda6-5cff-4628-b164-059c500a2b41.mp4";

/**
 * Looping video background with mouse-driven 3D parallax.
 * - Aggressive readiness handling so the video shows even on flaky autoplay policies.
 * - Pauses when scrolled offscreen (perf).
 * - Honors prefers-reduced-motion.
 */
export default function HeroVideoBackdrop() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef(0);

  const [reduced, setReduced] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [errored, setErrored] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduced(mq.matches);
    const onMq = () => setReduced(mq.matches);
    mq.addEventListener("change", onMq);
    return () => mq.removeEventListener("change", onMq);
  }, []);

  // Force-attempt playback on mount + on first user interaction
  useEffect(() => {
    const v = videoRef.current;
    if (!v) return;

    // Kick the network fetch & decode pipeline as early as possible.
    try {
      v.load();
    } catch {/* noop */}

    const tryPlay = () => {
      const p = v.play();
      if (p && typeof p.catch === "function") {
        p.catch(() => {/* autoplay rejected; will retry on user gesture */});
      }
    };

    tryPlay();

    // Some browsers reject autoplay until first user gesture — recover from that
    const onGesture = () => {
      tryPlay();
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
    };
    window.addEventListener("pointerdown", onGesture, { passive: true });
    window.addEventListener("keydown", onGesture);
    window.addEventListener("touchstart", onGesture, { passive: true });

    return () => {
      window.removeEventListener("pointerdown", onGesture);
      window.removeEventListener("keydown", onGesture);
      window.removeEventListener("touchstart", onGesture);
    };
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

  // Pause video when offscreen
  useEffect(() => {
    const v = videoRef.current;
    const c = containerRef.current;
    if (!v || !c) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry) return;
        if (entry.isIntersecting) {
          const p = v.play();
          if (p && typeof p.catch === "function") {
            p.catch(() => {/* autoplay block — user gesture handler will retry */});
          }
        } else {
          v.pause();
        }
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
        <video
          ref={videoRef}
          src={VIDEO_SRC}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          crossOrigin="anonymous"
          // @ts-expect-error fetchPriority is valid HTML5 but not yet typed in React 19
          fetchpriority="high"
          onLoadedMetadata={() => setLoaded(true)}
          onLoadedData={() => setLoaded(true)}
          onCanPlay={() => setLoaded(true)}
          onPlaying={() => setLoaded(true)}
          onError={() => setErrored(true)}
          className="absolute inset-0 w-full h-full object-cover"
          style={{ filter: "brightness(1.35) saturate(1.15) contrast(1.05)" }}
        />

        {/* Cinematic fallback that mirrors the video's color palette so the
            transition into the first frame is barely noticeable. */}
        {!loaded && !errored && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "radial-gradient(ellipse at 50% 60%, #4a1a14 0%, #2a0d10 40%, #100608 70%, #050203 100%)",
            }}
          />
        )}
      </div>

      {/* If the video errors completely, show a tasteful gradient instead */}
      {errored && (
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(60% 50% at 50% 60%, rgba(184,34,44,0.35) 0%, #1a0508 70%, #0a0708 100%)",
          }}
        />
      )}
    </div>
  );
}
