"use client";

import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const COURSE = {
  name: "The Course",
  badge: "FOR LEARNERS",
  price: "₹4,999",
  cadence: "+ GST · per year",
  cta: "ENROLL NOW",
  features: [
    "Language: Tamil, specially for the Tamil community",
    "Ready templates to build any product",
    "Build with Claude. Zero boilerplate",
    "Listing your app in SaaS Sandhai is free",
  ],
  highlight: false,
};

const MARKETPLACE = {
  name: "List in SaaS Sandhai",
  badge: "FOR MAKERS",
  price: "Free",
  cadence: "Forever",
  cta: "LIST YOUR APP",
  features: [
    "Free to list. Forever.",
    "Featured rotation in New Releases",
    "Built-in launch loop & PR push",
    "Buyer reviews & analytics",
    "Stripe payouts, weekly",
    "Marketing playbooks & templates",
  ],
  highlight: true,
};

export default function Pricing() {
  return (
    <section className="relative pad-y pad-x" id="ship">
      <div className="max-page">
        <div className="text-center mb-20">
          <Reveal as="up">
            <p className="eyebrow mb-5">SHIP · PRICING</p>
          </Reveal>
          <Reveal as="up" delay={120}>
            <h2 className="display-md mb-5">
              <span className="block text-gradient-silver">Ready to ship?</span>
              <span className="block text-gradient-red">Pick your lane.</span>
            </h2>
          </Reveal>
          <Reveal as="up" delay={220}>
            <p className="mx-auto max-w-xl body-lg text-[var(--silver-dim)]">
              Two ways in. One way up. Learn to build, or list what
              you&apos;ve already built — we handle the launch loop either way.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {[COURSE, MARKETPLACE].map((tier, i) => (
            <Reveal key={tier.name} as="up" index={i} delay={200}>
              <div
                className={`relative rounded-3xl p-10 border h-full ${
                  tier.highlight
                    ? "border-[var(--red-primary)]/50 ring-glow"
                    : "border-white/10"
                }`}
                style={
                  tier.highlight
                    ? { background: "linear-gradient(155deg,#1a0a0d 0%,#3a0d14 60%,#0a0708 100%)" }
                    : { background: "rgba(232,228,221,0.03)" }
                }
              >
              {tier.highlight && (
                <span className="absolute -top-3 right-8 eyebrow !text-white px-3 py-1 rounded-full bg-[var(--red-primary)]">
                  MOST POPULAR
                </span>
              )}
              <p className="eyebrow mb-4">{tier.badge}</p>
              <h3 className="font-display font-bold text-3xl text-[var(--silver)] tracking-tight mb-7">
                {tier.name}
              </h3>
              <div className="flex items-end gap-3 mb-2">
                <span
                  className="font-display font-black text-[var(--silver)] tracking-tightest"
                  style={{ fontSize: "clamp(2.5rem, 5vw, 4rem)", lineHeight: 1 }}
                >
                  {tier.price}
                </span>
              </div>
              <p className="text-sm text-[var(--silver-dim)] mb-8">
                {tier.cadence}
              </p>
              <a
                href="https://app.saassandhai.com/marketplace"
                target="_blank"
                rel="noopener"
                className={`eyebrow w-full py-4 rounded-full transition-colors mb-8 inline-flex items-center justify-center gap-2 ${
                  tier.highlight
                    ? "bg-[var(--red-primary)] text-[var(--silver)] hover:bg-[var(--silver)] hover:text-ink !text-[var(--silver)] hover:!text-ink"
                    : "bg-[var(--silver)] text-ink hover:bg-[var(--red-primary)] hover:text-[var(--silver)] !text-ink hover:!text-[var(--silver)]"
                }`}
              >
                {tier.cta} <ArrowUpRight className="size-4" />
              </a>
              <ul className="space-y-3">
                {tier.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-3 text-sm text-[var(--silver-dim)]"
                  >
                    <Check className="size-4 text-[var(--red-primary)] flex-shrink-0 mt-0.5" />
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
