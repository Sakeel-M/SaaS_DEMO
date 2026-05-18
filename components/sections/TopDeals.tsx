"use client";

import { useEffect, useMemo, useState } from "react";
import { ArrowRight } from "lucide-react";
import { LISTINGS, type Listing } from "@/lib/data/listings";
import { fetchListings } from "@/lib/api/products";
import ListingCard from "@/components/ui/ListingCard";
import Reveal from "@/components/ui/Reveal";

const INITIAL_COUNT = 6;
const STEP = 6;

export default function TopDeals() {
  const [filter, setFilter] = useState("All");
  const [listings, setListings] = useState<Listing[]>(LISTINGS);
  const [shown, setShown] = useState(INITIAL_COUNT);

  useEffect(() => {
    let cancelled = false;
    fetchListings()
      .then((data) => {
        if (!cancelled && data.length) setListings(data);
      })
      .catch(() => {
        /* keep fallback */
      });
    return () => {
      cancelled = true;
    };
  }, []);

  const filters = useMemo(() => {
    const cats = Array.from(new Set(listings.map((l) => l.category))).filter(
      Boolean
    );
    return ["All", ...cats];
  }, [listings]);

  const filtered =
    filter === "All" ? listings : listings.filter((l) => l.category === filter);
  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  useEffect(() => {
    setShown(INITIAL_COUNT);
  }, [filter]);

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
            {filters.map((f) => (
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

        {hasMore && (
          <Reveal as="up" delay={100}>
            <div className="mt-14 flex justify-center">
              <button
                onClick={() => setShown((n) => n + STEP)}
                className="eyebrow inline-flex items-center gap-2 px-8 py-4 rounded-full bg-ink text-[var(--silver)] hover:bg-[var(--red-primary)] !text-[var(--silver)] transition-colors"
                style={{
                  boxShadow: "0 12px 32px -10px rgba(0,0,0,0.45)",
                }}
              >
                VIEW MORE
                <ArrowRight className="size-4" />
              </button>
            </div>
          </Reveal>
        )}
      </div>
    </section>
  );
}
