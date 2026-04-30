"use client";

import Reveal from "@/components/ui/Reveal";

export default function PoweredByAI() {
  return (
    <section className="relative pad-y pad-x overflow-hidden">
      <div className="max-page">
        <div className="text-center stack-lg">
          <Reveal as="up">
            <p className="eyebrow">THE ENGINE</p>
          </Reveal>
          <Reveal as="up" delay={120}>
            <h2 className="display-lg">
              <span className="block text-gradient-silver">Powered by</span>
              <span className="block text-gradient-red">SocialEagle</span>
            </h2>
          </Reveal>
          <Reveal as="up" delay={220}>
            <p className="mx-auto max-w-xl body-lg">
              Every listing on Sandhai is built, marketed, and matched to its
              audience by an AI agent that never sleeps. The same network
              you&rsquo;re reading this with.
            </p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
