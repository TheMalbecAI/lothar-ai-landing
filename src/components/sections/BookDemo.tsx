"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { FadeInUp } from "../animations/FadeInUp";
import { Button } from "../ui/Button";
import { DEMO_CONTENT, CALENDLY_URL } from "@/lib/constants";

export function BookDemo() {
  return (
    <SectionWrapper id="book-demo">
      <div className="text-center max-w-2xl mx-auto">
        <FadeInUp>
          <p className="text-gold text-xs font-heading font-medium uppercase tracking-widest mb-4">
            {DEMO_CONTENT.label}
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
            {DEMO_CONTENT.heading}
          </h2>
          <p className="mt-6 text-lg text-cream-muted leading-relaxed">
            {DEMO_CONTENT.subheading}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <div className="mt-10">
            <Button
              variant="primary"
              size="lg"
              href={CALENDLY_URL}
              className="shadow-[0_0_40px_rgba(139,26,43,0.3)]"
            >
              Book Your Demo
            </Button>
            <p className="mt-4 text-cream-muted text-sm">
              15 minutes. We&apos;ll generate real ads for your brand — live.
            </p>
          </div>
        </FadeInUp>
      </div>
    </SectionWrapper>
  );
}
