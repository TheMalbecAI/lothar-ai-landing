"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { FadeInUp } from "../animations/FadeInUp";
import { StaggerChildren } from "../animations/StaggerChildren";
import { AD_EXAMPLES } from "@/lib/constants";

function PlaceholderCard({
  label,
  description,
}: {
  label: string;
  description: string;
}) {
  return (
    <div className="h-full group bg-surface-elevated rounded-xl border border-surface-border overflow-hidden transition-all duration-500 hover:border-crimson/30 hover:shadow-[0_0_30px_rgba(139,26,43,0.1)] flex flex-col">
      {/* Image placeholder */}
      <div className="aspect-square bg-surface flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-crimson/5 to-transparent" />
        <div className="text-center px-6 relative z-10">
          <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-crimson/10 border border-crimson/20 flex items-center justify-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="text-crimson-light"
            >
              <rect x="3" y="3" width="18" height="18" rx="2" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="M21 15l-5-5L5 21" />
            </svg>
          </div>
          <p className="text-cream-muted text-xs font-heading uppercase tracking-wider">
            Ad Example
          </p>
        </div>
      </div>
      {/* Label */}
      <div className="p-4 flex flex-col flex-1">
        <p className="text-sm font-heading font-semibold text-cream mb-1">
          {label}
        </p>
        <p className="text-xs text-cream-muted leading-relaxed flex-1">
          {description}
        </p>
      </div>
    </div>
  );
}

export function AdExamples() {
  return (
    <SectionWrapper id="examples">
      <FadeInUp>
        <p className="text-gold text-xs font-heading font-medium uppercase tracking-widest mb-4">
          {AD_EXAMPLES.label}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight max-w-3xl">
          {AD_EXAMPLES.heading}
        </h2>
        <p className="mt-4 text-cream-muted text-lg max-w-2xl leading-relaxed">
          {AD_EXAMPLES.subheading}
        </p>
      </FadeInUp>

      {/* Frameworks row */}
      <FadeInUp delay={0.1}>
        <h3 className="mt-16 mb-6 text-sm font-heading font-semibold uppercase tracking-wider text-gold/80">
          One Product, Four Frameworks
        </h3>
      </FadeInUp>
      <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
        {AD_EXAMPLES.frameworks.map((fw) => (
          <PlaceholderCard
            key={fw.label}
            label={fw.label}
            description={fw.description}
          />
        ))}
      </StaggerChildren>

      {/* Scenes row */}
      <FadeInUp delay={0.1}>
        <h3 className="mt-16 mb-6 text-sm font-heading font-semibold uppercase tracking-wider text-gold/80">
          One Product, Infinite Scenes
        </h3>
      </FadeInUp>
      <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 auto-rows-fr">
        {AD_EXAMPLES.scenes.map((scene) => (
          <PlaceholderCard
            key={scene.label}
            label={scene.label}
            description={scene.description}
          />
        ))}
      </StaggerChildren>
    </SectionWrapper>
  );
}
