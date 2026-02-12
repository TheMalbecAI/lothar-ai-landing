"use client";

import { FadeInUp } from "../animations/FadeInUp";
import { Button } from "../ui/Button";
import { DEMO_CONTENT, CALENDLY_URL, CONTACT_EMAIL } from "@/lib/constants";

export function BookDemo() {
  return (
    <section id="book-demo" className="min-h-screen flex items-center justify-center px-6">
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
          <div className="mt-10 flex flex-col items-center gap-6">
            <Button
              variant="primary"
              size="lg"
              href={CALENDLY_URL}
              className="shadow-[0_0_40px_rgba(139,26,43,0.3)]"
            >
              Book a Call
            </Button>
            <p className="text-cream-muted text-sm">
              Or reach out directly at{" "}
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="text-cream hover:text-gold transition-colors underline underline-offset-4"
              >
                {CONTACT_EMAIL}
              </a>
            </p>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
