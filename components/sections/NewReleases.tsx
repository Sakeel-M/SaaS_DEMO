"use client";

import { useEffect, useRef, useState } from "react";
import { LISTINGS, type Listing } from "@/lib/data/listings";
import { fetchListings } from "@/lib/api/products";
import ListingCard from "@/components/ui/ListingCard";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

export default function NewReleases() {
  const [listings, setListings] = useState<Listing[]>(LISTINGS);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

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

  const updateScrollState = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 8);
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8);
  };

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    updateScrollState();
    el.addEventListener("scroll", updateScrollState, { passive: true });
    window.addEventListener("resize", updateScrollState);
    return () => {
      el.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [listings]);

  const scrollBy = (direction: 1 | -1) => {
    const el = scrollerRef.current;
    if (!el) return;
    const step = el.clientWidth * 0.85 * direction;
    el.scrollBy({ left: step, behavior: "smooth" });
  };

  return (
    <section
      id="deals"
      className="relative pad-y pad-x"
      style={{ background: "var(--bg-cream)", color: "var(--ink)" }}
    >
      <div className="max-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-14">
          <div className="lg:col-span-8">
            <Reveal as="up">
              <p className="eyebrow !text-ink/55 mb-5">NEW RELEASES</p>
            </Reveal>
            <Reveal as="up" delay={120}>
              <h2 className="display-md text-ink">
                Just shipped <br /> this week.
              </h2>
            </Reveal>
          </div>
          <div className="lg:col-span-4 lg:text-right">
            <Reveal as="up" delay={220}>
              <p className="text-ink/65 max-w-xs lg:ml-auto leading-relaxed mb-4">
                Fresh from the maker labs. Every Thursday, a new wave drops
                here first.
              </p>
              <a
                href="https://app.saassandhai.com/marketplace"
                target="_blank"
                rel="noopener"
                className="eyebrow !text-ink hover:text-[var(--red-primary)] transition-colors inline-flex items-center gap-2"
              >
                VIEW ALL RELEASES <ArrowRight className="size-3.5" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="relative">
          <div
            ref={scrollerRef}
            className="-mx-[var(--gutter-x)] overflow-x-auto no-scrollbar"
          >
            <div className="flex gap-6 px-[var(--gutter-x)] pb-6 snap-x snap-mandatory">
              {listings.slice(0, 6).map((l, i) => (
                <Reveal
                  key={l.id}
                  as="up"
                  index={i}
                  delay={300}
                  className="snap-start w-[320px] md:w-[360px] flex-shrink-0"
                >
                  <ListingCard listing={l} variant="light" />
                </Reveal>
              ))}
            </div>
          </div>

          {/* Left arrow */}
          <button
            type="button"
            aria-label="Scroll left"
            onClick={() => scrollBy(-1)}
            disabled={!canScrollLeft}
            className={`hidden md:grid place-items-center absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 size-12 rounded-full bg-ink text-[var(--silver)] shadow-lg transition-all hover:bg-[var(--red-primary)] ${
              canScrollLeft
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{ boxShadow: "0 10px 30px -8px rgba(0,0,0,0.35)" }}
          >
            <ChevronLeft className="size-5" />
          </button>

          {/* Right arrow */}
          <button
            type="button"
            aria-label="Scroll right"
            onClick={() => scrollBy(1)}
            disabled={!canScrollRight}
            className={`hidden md:grid place-items-center absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 size-12 rounded-full bg-ink text-[var(--silver)] shadow-lg transition-all hover:bg-[var(--red-primary)] ${
              canScrollRight
                ? "opacity-100"
                : "opacity-0 pointer-events-none"
            }`}
            style={{ boxShadow: "0 10px 30px -8px rgba(0,0,0,0.35)" }}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      </div>
    </section>
  );
}
