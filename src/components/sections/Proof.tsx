"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { CountUp } from "../animations/CountUp";
import { FadeInUp } from "../animations/FadeInUp";
import { STATS } from "@/lib/constants";

export function Proof() {
  return (
    <SectionWrapper className="bg-crimson-subtle">
      <FadeInUp>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <div className="text-4xl md:text-5xl font-heading font-bold text-cream">
                <CountUp
                  value={stat.value}
                  prefix={stat.prefix}
                  suffix={stat.suffix}
                />
              </div>
              <p className="mt-3 text-cream-muted text-sm uppercase tracking-wider font-heading">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </FadeInUp>
    </SectionWrapper>
  );
}
