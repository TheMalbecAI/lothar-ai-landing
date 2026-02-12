"use client";

import { FadeInUp } from "../animations/FadeInUp";
import { Badge } from "../ui/Badge";
import { Button } from "../ui/Button";
import { HERO_CONTENT } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 flex items-start justify-center pointer-events-none">
        <div className="w-[800px] h-[800px] rounded-full bg-crimson animate-glow-pulse blur-[120px] -mt-40" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center pt-20">
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

        {/* Hero visual — abstract ad preview cards */}
        <FadeInUp delay={0.8}>
          <div className="mt-16 flex items-center justify-center gap-4">
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl bg-gradient-to-br from-crimson-dark/40 to-surface-elevated border border-crimson/20 -rotate-6 flex items-center justify-center">
              <span className="text-crimson/40 text-xs font-heading uppercase tracking-widest">
                Framework
              </span>
            </div>
            <div className="w-52 h-52 md:w-64 md:h-64 rounded-xl bg-gradient-to-br from-crimson/20 to-surface-elevated border border-crimson/30 z-10 flex items-center justify-center shadow-[0_0_60px_rgba(139,26,43,0.2)]">
              <div className="text-center">
                <div className="text-gold text-2xl font-heading font-bold">
                  15
                </div>
                <div className="text-cream-muted text-xs mt-1">
                  Ad Variations
                </div>
              </div>
            </div>
            <div className="w-48 h-48 md:w-56 md:h-56 rounded-xl bg-gradient-to-br from-surface-elevated to-crimson-dark/40 border border-crimson/20 rotate-6 flex items-center justify-center">
              <span className="text-crimson/40 text-xs font-heading uppercase tracking-widest">
                Custom
              </span>
            </div>
          </div>
        </FadeInUp>
      </div>
    </section>
  );
}
