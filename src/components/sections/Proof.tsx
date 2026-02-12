"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { FadeInUp } from "../animations/FadeInUp";
import { StaggerChildren } from "../animations/StaggerChildren";
import { DIFFERENTIATORS } from "@/lib/constants";

const diffIcons = [
  // Target / precision
  <svg key="tailor" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <circle cx="18" cy="18" r="14" />
    <circle cx="18" cy="18" r="8" />
    <circle cx="18" cy="18" r="2" fill="currentColor" stroke="none" />
  </svg>,
  // Handshake / partnership
  <svg key="partner" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <path d="M4 18h6l4-4 4 4h2l4-4 4 4h4" />
    <line x1="4" y1="22" x2="32" y2="22" strokeOpacity="0.3" />
  </svg>,
  // Brain / psychology
  <svg key="psychology" width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <circle cx="18" cy="14" r="10" />
    <path d="M13 14c0-2.8 2.2-5 5-5s5 2.2 5 5" />
    <line x1="18" y1="24" x2="18" y2="32" />
    <line x1="14" y1="28" x2="22" y2="28" />
  </svg>,
];

export function Proof() {
  return (
    <SectionWrapper className="bg-crimson-subtle">
      <FadeInUp>
        <p className="text-gold text-xs font-heading font-medium uppercase tracking-widest mb-4 text-center">
          WHY LOTHAR AI
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center max-w-3xl mx-auto">
          Not a Generic Tool. A Custom-Built Weapon.
        </h2>
      </FadeInUp>

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {DIFFERENTIATORS.map((diff, i) => (
          <div
            key={diff.title}
            className="bg-surface/60 backdrop-blur-sm rounded-xl p-8 border border-surface-border flex flex-col min-h-[240px] text-center"
          >
            <div className="text-crimson-light mb-6 flex justify-center">
              {diffIcons[i]}
            </div>
            <h3 className="text-lg font-heading font-semibold mb-3">
              {diff.title}
            </h3>
            <p className="text-cream-muted leading-relaxed text-sm flex-1">
              {diff.description}
            </p>
          </div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
