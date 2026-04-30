"use client";

import { Check, ArrowUpRight } from "lucide-react";
import Reveal from "@/components/ui/Reveal";

const COURSE = {
  name: "The Course",
  badge: "FOR LEARNERS",
  price: "₹19,999",
  cadence: "one-time · lifetime access",
  cta: "ENROLL NOW",
  features: [
    "8 weeks · 64 hands-on lessons",
    "Build with Claude. Zero boilerplate",
    "Live cohort calls every week",
    "Private maker community",
    "Auto-listing on Sandhai when you ship",
    "Certificate of completion",
  ],
  highlight: false,
};

const MARKETPLACE = {
  name: "List on Sandhai",
  badge: "FOR MAKERS",
  price: "10%",
  cadence: "of revenue · pay only on sale",
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
    <section className="relative pad-y pad-x" id="contact">
      <div className="max-page">
        <div className="text-center mb-20">
          <Reveal as="up">
            <p className="eyebrow mb-5">PRICING</p>
          </Reveal>
          <Reveal as="up" delay={120}>
            <h2 className="display-md">
              <span className="block text-gradient-silver">Two ways in.</span>
              <span className="block text-gradient-red">One way up.</span>
            </h2>
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
              <button
                className={`eyebrow w-full py-4 rounded-full transition-colors mb-8 inline-flex items-center justify-center gap-2 ${
                  tier.highlight
                    ? "bg-[var(--red-primary)] text-[var(--silver)] hover:bg-[var(--silver)] hover:text-ink !text-[var(--silver)] hover:!text-ink"
                    : "bg-[var(--silver)] text-ink hover:bg-[var(--red-primary)] hover:text-[var(--silver)] !text-ink hover:!text-[var(--silver)]"
                }`}
              >
                {tier.cta} <ArrowUpRight className="size-4" />
              </button>
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
