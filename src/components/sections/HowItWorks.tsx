"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { FadeInUp } from "../animations/FadeInUp";
import { StaggerChildren } from "../animations/StaggerChildren";
import { STEPS } from "@/lib/constants";

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" className="bg-surface-elevated">
      <FadeInUp>
        <p className="text-gold text-xs font-heading font-medium uppercase tracking-widest mb-4">
          PROCESS
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
          From Brief to Billboard in Minutes
        </h2>
      </FadeInUp>

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8">
        {STEPS.map((step, i) => (
          <div key={step.number} className="relative">
            {/* Connector line (hidden on mobile, visible on desktop between items) */}
            {i < STEPS.length - 1 && (
              <div className="hidden md:block absolute top-6 left-[calc(50%+24px)] w-[calc(100%-48px)] h-px bg-gradient-to-r from-crimson/40 to-crimson/10" />
            )}

            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-crimson text-cream font-heading font-bold text-lg mb-6">
                {step.number}
              </div>
              <h3 className="text-lg font-heading font-semibold mb-3">
                {step.title}
              </h3>
              <p className="text-cream-muted text-sm leading-relaxed">
                {step.description}
              </p>
            </div>
          </div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
