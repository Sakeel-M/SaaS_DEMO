import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy · SaaS Sandhai",
  description:
    "How SaaS Sandhai collects, uses, and protects your information.",
};

export default function PrivacyPage() {
  return (
    <main className="relative pad-x pad-y min-h-screen">
      <div className="max-page mx-auto" style={{ maxWidth: "780px" }}>
        <Link
          href="/"
          className="inline-flex items-center gap-2 eyebrow !text-[var(--silver-dim)] hover:!text-[var(--silver)] mb-10"
        >
          <ArrowLeft className="size-4" /> BACK TO HOME
        </Link>

        <p className="eyebrow mb-4">LEGAL</p>
        <h1 className="display-md mb-4">
          <span className="text-gradient-silver">Privacy </span>
          <span className="text-gradient-red">Policy.</span>
        </h1>
        <p className="text-[var(--silver-dim)] mb-12">
          Last updated: 13 May 2026
        </p>

        <div className="space-y-8 text-[var(--silver)] leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              1. Who we are
            </h2>
            <p>
              SaaS Sandhai (&ldquo;we&rdquo;, &ldquo;us&rdquo;) is operated by
              Social Eagle.AI. This policy explains what personal data we
              collect when you visit{" "}
              <span className="text-[var(--silver)]">saassandhai.com</span>,
              enroll in our course, or list a product on the marketplace.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              2. What we collect
            </h2>
            <ul className="list-disc pl-6 space-y-2 text-[var(--silver-dim)]">
              <li>
                <span className="text-[var(--silver)]">Account data</span> —
                name, email, and login credentials when you sign up.
              </li>
              <li>
                <span className="text-[var(--silver)]">Payment data</span> —
                billing details for course enrollment or listing fees,
                processed by Stripe / Razorpay. We never store your card
                number.
              </li>
              <li>
                <span className="text-[var(--silver)]">Product data</span> —
                anything you provide when listing a SaaS on the marketplace.
              </li>
              <li>
                <span className="text-[var(--silver)]">Usage data</span> —
                page views, clicks, and device info, collected via standard
                analytics tools.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              3. How we use it
            </h2>
            <p>
              To deliver the course and marketplace, process payments and
              payouts, send transactional emails, improve the product, and
              respond to your messages. We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              4. Cookies
            </h2>
            <p>
              We use first-party cookies to keep you signed in and to measure
              site usage. You can clear them in your browser at any time.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              5. Your rights
            </h2>
            <p>
              You can request a copy of your data, ask us to correct it, or
              have it deleted. Email us at{" "}
              <a
                href="mailto:hello@saassandhai.com"
                className="text-[var(--red-glow)] hover:underline"
              >
                hello@saassandhai.com
              </a>{" "}
              and we&apos;ll respond within 14 days.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              6. Changes
            </h2>
            <p>
              We may update this policy from time to time. Material changes
              will be announced on this page.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
