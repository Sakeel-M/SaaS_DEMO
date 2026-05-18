import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms & Conditions · SaaS Sandhai",
  description:
    "The terms under which you use SaaS Sandhai's course and marketplace.",
};

export default function TermsPage() {
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
          <span className="text-gradient-silver">Terms &amp; </span>
          <span className="text-gradient-red">Conditions.</span>
        </h1>
        <p className="text-[var(--silver-dim)] mb-12">
          Last updated: 13 May 2026
        </p>

        <div className="space-y-8 text-[var(--silver)] leading-relaxed">
          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              1. Agreement
            </h2>
            <p>
              By using SaaS Sandhai (the &ldquo;Service&rdquo;), you agree to
              these terms. If you do not agree, please do not use the
              Service.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              2. The Course
            </h2>
            <p>
              Course access is granted on a per-year basis at ₹4,999 + GST.
              On purchase you receive access to the lessons, templates, and
              labs for one year from the date of payment. The course is in
              Tamil. Refunds are available within 7 days of purchase if you
              have completed less than 20% of the lessons.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              3. The Marketplace
            </h2>
            <p>
              Listing a product on SaaS Sandhai costs ₹499 + GST per year.
              Your listing must be a working SaaS that you own or have rights
              to sell. We reserve the right to remove listings that violate
              applicable law, infringe intellectual property, or harm
              customers.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              4. Payments &amp; payouts
            </h2>
            <p>
              Payments are processed by third-party providers (Stripe /
              Razorpay). Maker payouts happen on a weekly cycle, net of
              applicable taxes and refunds. You are responsible for the tax
              obligations on your earnings.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              5. Acceptable use
            </h2>
            <p>
              You agree not to misuse the Service: no scraping at scale, no
              reverse engineering, no abuse of other users, no uploading of
              malware or illegal content.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              6. Liability
            </h2>
            <p>
              The Service is provided &ldquo;as is.&rdquo; To the extent
              permitted by law, our liability for any claim is limited to the
              amount you paid us in the 12 months before the claim arose.
            </p>
          </section>

          <section>
            <h2 className="font-display font-bold text-2xl mb-3">
              7. Contact
            </h2>
            <p>
              Questions? Email{" "}
              <a
                href="mailto:hello@saassandhai.com"
                className="text-[var(--red-glow)] hover:underline"
              >
                hello@saassandhai.com
              </a>
              .
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
