"use client";

import { LISTINGS } from "@/lib/data/listings";
import ListingCard from "@/components/ui/ListingCard";
import Reveal from "@/components/ui/Reveal";
import { ArrowRight } from "lucide-react";

export default function NewReleases() {
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
                href="#"
                className="eyebrow !text-ink hover:text-[var(--red-primary)] transition-colors inline-flex items-center gap-2"
              >
                VIEW ALL RELEASES <ArrowRight className="size-3.5" />
              </a>
            </Reveal>
          </div>
        </div>

        <div className="-mx-[var(--gutter-x)] overflow-x-auto no-scrollbar">
          <div className="flex gap-6 px-[var(--gutter-x)] pb-6 snap-x snap-mandatory">
            {LISTINGS.slice(0, 6).map((l, i) => (
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
      </div>
    </section>
  );
}
