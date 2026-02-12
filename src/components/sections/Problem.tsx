"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { StaggerChildren } from "../animations/StaggerChildren";
import { FadeInUp } from "../animations/FadeInUp";
import { PROBLEM_CONTENT } from "@/lib/constants";

const icons = [
  // Dollar with slash
  <svg key="cost" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <line x1="16" y1="4" x2="16" y2="28" />
    <path d="M22 10c0-2.2-2.7-4-6-4s-6 1.8-6 4 2.7 4 6 4 6 1.8 6 4-2.7 4-6 4-6-1.8-6-4" />
    <line x1="4" y1="28" x2="28" y2="4" strokeOpacity="0.4" />
  </svg>,
  // Clock
  <svg key="time" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <circle cx="16" cy="16" r="12" />
    <line x1="16" y1="8" x2="16" y2="16" />
    <line x1="16" y1="16" x2="22" y2="16" />
  </svg>,
  // Dice / question
  <svg key="guess" width="32" height="32" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
    <rect x="4" y="4" width="24" height="24" rx="2" />
    <circle cx="11" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="21" cy="11" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="16" cy="16" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="11" cy="21" r="1.5" fill="currentColor" stroke="none" />
    <circle cx="21" cy="21" r="1.5" fill="currentColor" stroke="none" />
  </svg>,
];

export function Problem() {
  return (
    <SectionWrapper className="bg-crimson-subtle">
      <FadeInUp>
        <p className="text-gold text-xs font-heading font-medium uppercase tracking-widest mb-4">
          {PROBLEM_CONTENT.label}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
          {PROBLEM_CONTENT.heading}
        </h2>
      </FadeInUp>

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
        {PROBLEM_CONTENT.cards.map((card, i) => (
          <div
            key={card.title}
            className="bg-surface/60 backdrop-blur-sm rounded-xl p-8 border border-surface-border flex flex-col min-h-[280px]"
          >
            <div className="text-crimson-light mb-6">{icons[i]}</div>
            <div className="text-3xl md:text-4xl font-heading font-bold text-cream mb-2">
              {card.stat}
            </div>
            <div className="text-sm font-heading font-medium uppercase tracking-wider text-gold mb-4">
              {card.title}
            </div>
            <p className="text-cream-muted leading-relaxed text-sm flex-1">
              {card.description}
            </p>
          </div>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
