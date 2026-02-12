export function Badge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-block border border-gold/30 text-gold text-xs font-heading font-medium uppercase tracking-widest px-4 py-1.5 rounded-full animate-gold-shimmer ${className}`}
    >
      {children}
    </span>
  );
}
