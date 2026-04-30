"use client";

export default function AmbientBackdrop() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Soft grid */}
      <div
        className="absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(to right, var(--silver) 1px, transparent 1px), linear-gradient(to bottom, var(--silver) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
          maskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)",
          WebkitMaskImage:
            "radial-gradient(ellipse 80% 60% at 50% 40%, #000 30%, transparent 80%)",
        }}
      />

      {/* Animated red blob */}
      <div
        className="absolute rounded-full blur-3xl animate-blob-a"
        style={{
          width: "60vw",
          height: "60vw",
          left: "-15vw",
          top: "-10vw",
          background:
            "radial-gradient(circle, rgba(184,34,44,0.45) 0%, rgba(90,10,18,0.25) 35%, transparent 70%)",
        }}
      />

      {/* Deep red blob */}
      <div
        className="absolute rounded-full blur-3xl animate-blob-b"
        style={{
          width: "55vw",
          height: "55vw",
          right: "-15vw",
          top: "20vh",
          background:
            "radial-gradient(circle, rgba(230,57,70,0.30) 0%, rgba(184,34,44,0.18) 35%, transparent 70%)",
        }}
      />

      {/* Silver highlight */}
      <div
        className="absolute rounded-full blur-3xl animate-blob-c"
        style={{
          width: "40vw",
          height: "40vw",
          left: "30vw",
          bottom: "-10vh",
          background:
            "radial-gradient(circle, rgba(232,228,221,0.10) 0%, transparent 65%)",
        }}
      />

      {/* Grain */}
      <div
        className="absolute inset-0 opacity-[0.05] mix-blend-overlay"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='220' height='220'><filter id='n'><feTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='2' stitchTiles='stitch'/></filter><rect width='100%' height='100%' filter='url(%23n)' opacity='0.65'/></svg>\")",
        }}
      />
    </div>
  );
}
