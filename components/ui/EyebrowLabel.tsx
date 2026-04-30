export default function EyebrowLabel({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`flex items-center gap-2 eyebrow text-[var(--silver-dim)] ${className}`}
    >
      <span className="size-1 rounded-full bg-current" />
      {children}
    </div>
  );
}
