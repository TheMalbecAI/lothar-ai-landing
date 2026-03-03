"use client";

import { SectionWrapper } from "../ui/SectionWrapper";
import { FadeInUp } from "../animations/FadeInUp";
import { COMPARISON } from "@/lib/constants";

export function Comparison() {
  return (
    <SectionWrapper id="comparison" className="bg-surface-elevated">
      <FadeInUp>
        <p className="text-gold text-xs font-heading font-medium uppercase tracking-widest mb-4 text-center">
          {COMPARISON.label}
        </p>
        <h2 className="text-3xl md:text-5xl font-bold tracking-tight text-center max-w-3xl mx-auto">
          {COMPARISON.heading}
        </h2>
      </FadeInUp>

      <FadeInUp delay={0.2}>
        <div className="mt-16 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-surface-border">
                <th className="text-left py-4 pr-4 font-heading font-semibold text-cream-muted uppercase tracking-wider text-xs w-[20%]">
                  &nbsp;
                </th>
                <th className="text-center py-4 px-3 font-heading font-medium text-cream-muted uppercase tracking-wider text-xs">
                  Agencies
                </th>
                <th className="text-center py-4 px-3 font-heading font-medium text-cream-muted uppercase tracking-wider text-xs">
                  Freelancers
                </th>
                <th className="text-center py-4 px-3 font-heading font-medium text-cream-muted uppercase tracking-wider text-xs">
                  Canva / DIY
                </th>
                <th className="text-center py-4 px-3 font-heading font-semibold text-crimson-light uppercase tracking-wider text-xs">
                  Lothar AI
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.categories.map((row) => (
                <tr
                  key={row.name}
                  className="border-b border-surface-border/50"
                >
                  <td className="py-4 pr-4 font-heading font-semibold text-cream text-sm">
                    {row.name}
                  </td>
                  <td className="py-4 px-3 text-center text-cream-muted">
                    {row.agencies}
                  </td>
                  <td className="py-4 px-3 text-center text-cream-muted">
                    {row.freelancers}
                  </td>
                  <td className="py-4 px-3 text-center text-cream-muted">
                    {row.diy}
                  </td>
                  <td className="py-4 px-3 text-center font-semibold text-cream">
                    {row.lothar}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-cream-muted/60 text-center">
          {COMPARISON.footnote}
        </p>
      </FadeInUp>
    </SectionWrapper>
  );
}
