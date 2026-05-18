"use client";

/**
 * Looping Hero annotation: a short, attractive italic label appears upper-left,
 * a gentle dotted arrow draws beneath it pointing at the seated person in the
 * video, and an arrowhead pops in at the person's location. ~7s loop.
 *
 * Structure:
 *  - Label: plain HTML so the font renders normally at any viewport.
 *  - Arrow: SVG with preserveAspectRatio="none" + vector-effect: non-scaling-stroke
 *    so the (44, 56) endpoint always maps to 44%×56% of the viewport (where
 *    the person sits) without distorting dot spacing.
 *  - Arrowhead: positioned HTML so transform animation doesn't conflict with
 *    any SVG transform attribute.
 */
export default function HeroArrowAnnotation() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{ zIndex: 5 }}
    >
      {/* Label — HTML for reliable font rendering */}
      <div
        className="hero-arrow-label absolute"
        style={{
          top: "26%",
          left: "6%",
          fontFamily: "var(--font-serif), system-ui, sans-serif",
          fontStyle: "italic",
          fontWeight: 500,
          color: "#ffffff",
          fontSize: "clamp(1.05rem, 1.7vw, 1.5rem)",
          lineHeight: 1.2,
          maxWidth: "16ch",
          textShadow:
            "0 2px 14px rgba(0,0,0,0.75), 0 0 22px rgba(0,0,0,0.5)",
        }}
      >
        One billion dollar
        <br />
        company by <em>one</em> person.
      </div>

      {/* Arrow path — stretched-viewBox SVG */}
      <svg
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
        className="absolute inset-0 w-full h-full"
      >
        <defs>
          <clipPath id="hero-arrow-clip" clipPathUnits="objectBoundingBox">
            <rect
              className="hero-arrow-clip-rect"
              x="0"
              y="0"
              width="0"
              height="1"
            />
          </clipPath>
        </defs>

        {/* Soft halo behind the dotted line */}
        <path
          className="hero-arrow-halo"
          d="M 10 34 Q 22 36, 30 44 T 44 56"
          fill="none"
          stroke="rgba(255,255,255,0.32)"
          strokeLinecap="round"
          clipPath="url(#hero-arrow-clip)"
          style={{
            strokeWidth: 8,
            filter: "blur(3px)",
            vectorEffect: "non-scaling-stroke",
          }}
        />

        {/* The dotted arrow line */}
        <path
          className="hero-arrow-line"
          d="M 10 34 Q 22 36, 30 44 T 44 56"
          fill="none"
          stroke="#ffffff"
          strokeLinecap="round"
          strokeDasharray="3 9"
          clipPath="url(#hero-arrow-clip)"
          style={{
            strokeWidth: 2.4,
            vectorEffect: "non-scaling-stroke",
            filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.55))",
          }}
        />
      </svg>

      {/* Arrowhead anchored to the person's position */}
      <div
        className="hero-arrow-head absolute"
        style={{
          left: "44%",
          top: "56%",
          transform: "translate(-50%, -50%) rotate(35deg)",
          transformOrigin: "center",
        }}
      >
        <svg width="22" height="14" viewBox="0 0 22 14">
          <polygon
            points="0,2 18,7 0,12 4,7"
            fill="#ffffff"
            style={{ filter: "drop-shadow(0 1px 3px rgba(0,0,0,0.6))" }}
          />
        </svg>
      </div>

      <style jsx global>{`
        .hero-arrow-clip-rect {
          width: 1;
        }
        .hero-arrow-label,
        .hero-arrow-head {
          opacity: 1;
        }

        @media (prefers-reduced-motion: no-preference) {
          .hero-arrow-clip-rect {
            width: 0;
            animation: hero-arrow-reveal 7s ease-out infinite;
          }
          .hero-arrow-halo,
          .hero-arrow-line {
            opacity: 0;
            animation: hero-arrow-line-fade 7s linear infinite;
          }
          .hero-arrow-label {
            opacity: 0;
            animation: hero-arrow-label-fade 7s ease-out infinite;
          }
          .hero-arrow-head {
            opacity: 0;
            animation: hero-arrow-head-pop 7s ease-out infinite;
          }
        }

        @keyframes hero-arrow-reveal {
          0%,
          16% {
            width: 0;
          }
          55%,
          80% {
            width: 1;
          }
          90%,
          100% {
            width: 1;
          }
        }

        @keyframes hero-arrow-line-fade {
          0%,
          14% {
            opacity: 0;
          }
          20%,
          80% {
            opacity: 1;
          }
          92%,
          100% {
            opacity: 0;
          }
        }

        @keyframes hero-arrow-label-fade {
          0%,
          6% {
            opacity: 0;
            transform: translateY(4px);
          }
          14%,
          80% {
            opacity: 1;
            transform: translateY(0);
          }
          92%,
          100% {
            opacity: 0;
            transform: translateY(0);
          }
        }

        @keyframes hero-arrow-head-pop {
          0%,
          52% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(35deg) scale(0);
          }
          60%,
          80% {
            opacity: 1;
            transform: translate(-50%, -50%) rotate(35deg) scale(1);
          }
          92%,
          100% {
            opacity: 0;
            transform: translate(-50%, -50%) rotate(35deg) scale(1);
          }
        }
      `}</style>
    </div>
  );
}
