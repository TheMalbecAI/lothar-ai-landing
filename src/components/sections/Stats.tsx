"use client";

import { FadeInUp } from "../animations/FadeInUp";
import { StaggerChildren } from "../animations/StaggerChildren";
import { STATS } from "@/lib/constants";

export function Stats() {
  return (
    <section className="py-16 md:py-20 border-y border-surface-border">
      <div className="mx-auto max-w-6xl px-6">
        <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {STATS.map((stat) => (
            <div key={stat.value} className="text-center">
              <div className="text-3xl md:text-4xl font-heading font-bold text-crimson-light mb-2">
                {stat.value}
              </div>
              <p className="text-cream-muted text-sm leading-relaxed">
                {stat.label}
              </p>
            </div>
          ))}
        </StaggerChildren>
      </div>
    </section>
  );
}
