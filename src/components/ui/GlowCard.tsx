import { type ReactNode } from "react";

export function GlowCard({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`bg-surface-elevated rounded-xl p-8 border border-surface-border transition-all duration-500 hover:shadow-[0_0_30px_rgba(139,26,43,0.15)] hover:border-crimson/30 ${className}`}
    >
      {children}
    </div>
  );
}
