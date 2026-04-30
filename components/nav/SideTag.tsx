"use client";

export default function SideTag() {
  return (
    <div className="hidden lg:flex fixed top-0 right-0 z-40 h-screen w-10 items-start justify-center pointer-events-none">
      <div className="mt-28 flex flex-col items-center gap-3">
        <span className="size-1.5 rounded-full bg-[var(--silver)]" />
        <span
          className="eyebrow text-[var(--silver)] whitespace-nowrap"
          style={{ writingMode: "vertical-rl", transform: "rotate(180deg)" }}
        >
          SANDHAI-1 RELEASE
        </span>
      </div>
    </div>
  );
}
