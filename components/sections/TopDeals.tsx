"use client";

import { useState } from "react";
import { LISTINGS } from "@/lib/data/listings";
import ListingCard from "@/components/ui/ListingCard";
import Reveal from "@/components/ui/Reveal";

const FILTERS = ["All", "AI", "Productivity", "Marketing", "Dev Tools", "Analytics"];

export default function TopDeals() {
  const [filter, setFilter] = useState("All");
  const visible =
    filter === "All" ? LISTINGS : LISTINGS.filter((l) => l.category === filter);

  return (
    <section
      className="relative pad-y pad-x"
      style={{ background: "var(--bg-cream)", color: "var(--ink)" }}
    >
      <div className="max-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-12">
          <div className="lg:col-span-7">
            <Reveal as="up">
              <p className="eyebrow !text-ink/55 mb-5">TOP DEALS</p>
            </Reveal>
            <Reveal as="up" delay={120}>
              <h2 className="display-md text-ink">
                The hand-picked <br /> shortlist.
              </h2>
            </Reveal>
          </div>
          <Reveal
            as="up"
            delay={220}
            className="lg:col-span-5 lg:text-right"
          >
            <p className="text-ink/70 leading-relaxed">
              Curated by the Sandhai team, ranked by maker traction and
              community love. Updated daily.
            </p>
          </Reveal>
        </div>

        {/* Filter chips */}
        <Reveal as="fade" delay={300}>
          <div className="flex flex-wrap gap-2 mb-12">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`eyebrow px-5 py-2.5 rounded-full border transition-all ${
                  filter === f
                    ? "bg-ink text-[var(--silver)] border-ink !text-[var(--silver)]"
                    : "bg-transparent !text-ink/65 border-ink/15 hover:border-ink/40 hover:!text-ink"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.map((l, i) => (
            <Reveal key={l.id} as="up" index={i} delay={100}>
              <ListingCard listing={l} variant="light" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
