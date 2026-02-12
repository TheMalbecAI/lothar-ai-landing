"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { GlowCard } from "../ui/GlowCard";
import { StaggerChildren } from "../animations/StaggerChildren";
import { FadeInUp } from "../animations/FadeInUp";
import { FEATURES } from "@/lib/constants";

const featureIcons: Record<string, React.ReactNode> = {
  frameworks: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <circle cx="18" cy="12" r="4" />
      <line x1="18" y1="16" x2="18" y2="24" />
      <line x1="18" y1="20" x2="10" y2="14" />
      <line x1="18" y1="20" x2="26" y2="14" />
      <line x1="18" y1="24" x2="10" y2="30" />
      <line x1="18" y1="24" x2="26" y2="30" />
      <circle cx="10" cy="14" r="2" />
      <circle cx="26" cy="14" r="2" />
      <circle cx="10" cy="30" r="2" />
      <circle cx="26" cy="30" r="2" />
    </svg>
  ),
  prompts: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <rect x="4" y="4" width="28" height="28" rx="3" />
      <polyline points="12,14 16,18 12,22" />
      <line x1="18" y1="22" x2="26" y2="22" />
    </svg>
  ),
  product: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <rect x="8" y="4" width="20" height="28" rx="2" />
      <line x1="12" y1="10" x2="24" y2="10" />
      <line x1="12" y1="14" x2="20" y2="14" />
      <circle cx="18" cy="22" r="4" />
      <polyline points="16,22 18,24 20,20" />
    </svg>
  ),
  resolution: (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="square">
      <rect x="4" y="4" width="28" height="28" rx="2" />
      <line x1="4" y1="12" x2="32" y2="12" />
      <line x1="12" y1="12" x2="12" y2="32" />
      <polyline points="20,26 24,20 28,24" />
      <circle cx="22" cy="18" r="2" />
    </svg>
  ),
};

export function Features() {
  return (
    <SectionWrapper id="features">
      <FadeInUp>
        <p className="text-gold text-xs font-heading font-medium uppercase tracking-widest mb-4">
          CAPABILITIES
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
          Everything You Need. Nothing You Don&apos;t.
        </h2>
      </FadeInUp>

      <StaggerChildren className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {FEATURES.map((feature) => (
          <GlowCard key={feature.title} className="flex flex-col min-h-[240px]">
            <div className="text-crimson-light mb-6">
              {featureIcons[feature.icon]}
            </div>
            <h3 className="text-xl font-heading font-semibold mb-3">
              {feature.title}
            </h3>
            <p className="text-cream-muted leading-relaxed flex-1">
              {feature.description}
            </p>
          </GlowCard>
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
