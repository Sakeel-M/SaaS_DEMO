"use client";

import { Star, ArrowUpRight } from "lucide-react";
import type { Listing } from "@/lib/data/listings";

interface Props {
  listing: Listing;
  variant?: "dark" | "light";
}

export default function ListingCard({ listing, variant = "light" }: Props) {
  const isDark = variant === "dark";
  const discount = Math.round(
    (1 - listing.price / listing.originalPrice) * 100
  );

  return (
    <article
      className={`group relative overflow-hidden rounded-b-3xl transition-all duration-500 hover:-translate-y-1.5 ${
        isDark
          ? "bg-[var(--bg-deep)] border border-white/5 hover:border-[var(--red-primary)]/60"
          : "bg-white border border-black/5 hover:border-[var(--red-primary)]/40"
      } hover:ring-glow`}
    >
      {/* Cover — sharp top corners, image fills the area */}
      <div
        className="aspect-[16/10] w-full relative overflow-hidden"
        style={{ background: listing.cover }}
      >
        <div className="absolute inset-0 red-glow opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Decorative SVG mark */}
        <svg
          className="absolute inset-0 w-full h-full opacity-20"
          viewBox="0 0 100 100"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <pattern id={`p-${listing.id}`} width="10" height="10" patternUnits="userSpaceOnUse">
              <circle cx="5" cy="5" r="0.6" fill="rgba(232,228,221,0.4)" />
            </pattern>
          </defs>
          <rect width="100" height="100" fill={`url(#p-${listing.id})`} />
        </svg>

        {/* Badges */}
        {listing.badge && (
          <span className="absolute top-4 left-4 eyebrow !text-white px-2.5 py-1 rounded-full bg-[var(--red-primary)]">
            {listing.badge}
          </span>
        )}
        <span className="absolute top-4 right-4 eyebrow !text-white px-2.5 py-1 rounded-full bg-black/55 backdrop-blur">
          -{discount}%
        </span>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className={`eyebrow ${isDark ? "!text-[var(--silver-faint)]" : "!text-ink/55"}`}>
            {listing.category}
          </span>
          <span className={`flex items-center gap-1 text-sm ${isDark ? "text-[var(--silver-dim)]" : "text-ink/65"}`}>
            <Star className="size-3.5 fill-[var(--red-primary)] text-[var(--red-primary)]" />
            <span className="font-medium">{listing.rating}</span>
            <span className="opacity-60">({listing.reviews.toLocaleString()})</span>
          </span>
        </div>

        <h3
          className={`font-display font-bold tracking-tight mb-1.5 ${isDark ? "text-[var(--silver)]" : "text-ink"}`}
          style={{ fontSize: "1.4rem", lineHeight: 1.1 }}
        >
          {listing.name}
        </h3>
        <p className={`text-sm leading-relaxed mb-5 line-clamp-2 ${isDark ? "text-[var(--silver-dim)]" : "text-ink/65"}`}>
          {listing.tagline}
        </p>

        <div className="flex items-end justify-between gap-3">
          <div>
            <span
              className={`font-display font-bold tracking-tight ${isDark ? "text-[var(--silver)]" : "text-ink"}`}
              style={{ fontSize: "1.5rem", lineHeight: 1 }}
            >
              ₹{listing.price.toLocaleString("en-IN")}
            </span>
            <span className={`ml-2 text-sm line-through ${isDark ? "text-[var(--silver-faint)]" : "text-ink/40"}`}>
              ₹{listing.originalPrice.toLocaleString("en-IN")}
            </span>
          </div>
          <a
            href="https://app.saassandhai.com/marketplace"
            target="_blank"
            rel="noopener"
            aria-label={`Get ${listing.name} deal`}
            className={`size-11 rounded-full grid place-items-center transition-all ${
              isDark
                ? "bg-[var(--silver)] text-ink hover:bg-[var(--red-primary)] hover:text-[var(--silver)]"
                : "bg-ink text-[var(--silver)] hover:bg-[var(--red-primary)]"
            } group-hover:rotate-45`}
          >
            <ArrowUpRight className="size-5" />
          </a>
        </div>
      </div>
    </article>
  );
}
