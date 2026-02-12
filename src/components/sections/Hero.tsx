"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { FadeInUp } from "../animations/FadeInUp";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { HERO_CONTENT } from "@/lib/constants";

const cardIcons: Record<string, React.ReactNode> = {
  frameworks: (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <rect x="4" y="4" width="8" height="8" rx="1" />
      <rect x="16" y="4" width="8" height="8" rx="1" />
      <rect x="4" y="16" width="8" height="8" rx="1" />
      <rect x="16" y="16" width="8" height="8" rx="1" />
    </svg>
  ),
  prompts: (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <polyline points="8,10 12,14 8,18" />
      <line x1="14" y1="18" x2="20" y2="18" />
      <rect x="3" y="3" width="22" height="22" rx="2" />
    </svg>
  ),
  fidelity: (
    <svg width="40" height="40" viewBox="0 0 28 28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square">
      <circle cx="14" cy="14" r="10" />
      <polyline points="10,14 13,17 18,11" />
    </svg>
  ),
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const cardScale = useTransform(scrollYProgress, [0, 0.5], [1, 1.15]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 1]);

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-crimson animate-glow-pulse blur-[120px] -mt-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center pt-20">
        <FadeInUp delay={0}>
          <Badge>{HERO_CONTENT.badge}</Badge>
        </FadeInUp>

        <FadeInUp delay={0.2}>
          <h1 className="mt-8 text-4xl md:text-6xl lg:text-7xl font-bold leading-[1.05] tracking-tight whitespace-pre-line">
            {HERO_CONTENT.headline}
          </h1>
        </FadeInUp>

        <FadeInUp delay={0.4}>
          <p className="mt-6 text-lg md:text-xl text-cream-muted max-w-2xl mx-auto leading-relaxed">
            {HERO_CONTENT.subheadline}
          </p>
        </FadeInUp>

        <FadeInUp delay={0.6}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#book-demo">
              {HERO_CONTENT.ctaPrimary}
            </Button>
            <Button variant="secondary" size="lg" href="#how-it-works">
              {HERO_CONTENT.ctaSecondary}
            </Button>
          </div>
        </FadeInUp>

        {/* Hero visual — fanned poker-deck cards that scale up on scroll */}
        <FadeInUp delay={0.8}>
          <motion.div
            style={{ scale: cardScale, opacity: cardOpacity }}
            className="mt-20 mb-40 flex items-center justify-center"
          >
            {/* Left card — tilted left, tucked behind center */}
            <div className="w-52 h-52 md:w-72 md:h-72 rounded-2xl bg-surface-elevated border border-crimson/20 -rotate-6 flex flex-col items-center justify-center -mr-8 md:-mr-12 transition-all duration-500 hover:border-crimson/40 hover:shadow-[0_0_40px_rgba(139,26,43,0.15)]">
              <div className="text-crimson-light mb-4">
                {cardIcons[HERO_CONTENT.cards[0].icon]}
              </div>
              <span className="text-cream text-xs md:text-sm font-heading font-semibold uppercase tracking-wider text-center leading-tight px-4">
                {HERO_CONTENT.cards[0].label}
              </span>
            </div>

            {/* Center card — larger, elevated */}
            <div className="w-60 h-60 md:w-80 md:h-80 rounded-2xl bg-surface-elevated border border-crimson/30 z-10 flex flex-col items-center justify-center shadow-[0_0_60px_rgba(139,26,43,0.2)] transition-all duration-500 hover:border-crimson/40">
              <div className="text-crimson-light mb-4">
                {cardIcons[HERO_CONTENT.cards[1].icon]}
              </div>
              <span className="text-cream text-sm md:text-base font-heading font-semibold uppercase tracking-wider text-center leading-tight px-4">
                {HERO_CONTENT.cards[1].label}
              </span>
            </div>

            {/* Right card — tilted right, tucked behind center */}
            <div className="w-52 h-52 md:w-72 md:h-72 rounded-2xl bg-surface-elevated border border-crimson/20 rotate-6 flex flex-col items-center justify-center -ml-8 md:-ml-12 transition-all duration-500 hover:border-crimson/40 hover:shadow-[0_0_40px_rgba(139,26,43,0.15)]">
              <div className="text-crimson-light mb-4">
                {cardIcons[HERO_CONTENT.cards[2].icon]}
              </div>
              <span className="text-cream text-xs md:text-sm font-heading font-semibold uppercase tracking-wider text-center leading-tight px-4">
                {HERO_CONTENT.cards[2].label}
              </span>
            </div>
          </motion.div>
        </FadeInUp>
      </div>
    </section>
  );
}
