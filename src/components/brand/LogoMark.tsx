export function LogoMark({
  size = 40,
  color = "currentColor",
  className = "",
}: {
  size?: number;
  color?: string;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size * 1.25}
      viewBox="0 0 64 80"
      fill="none"
      stroke={color}
      strokeWidth="3"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      {/* Central vertical stave */}
      <line x1="32" y1="4" x2="32" y2="76" />
      {/* Tiwaz arrowhead (top) */}
      <line x1="32" y1="4" x2="16" y2="22" />
      <line x1="32" y1="4" x2="48" y2="22" />
      {/* Algiz branches (upper-mid) */}
      <line x1="32" y1="28" x2="12" y2="12" />
      <line x1="32" y1="28" x2="52" y2="12" />
      {/* Ansuz angular strokes (mid-section) */}
      <line x1="32" y1="36" x2="18" y2="48" />
      <line x1="32" y1="36" x2="46" y2="48" />
      {/* Grounding strokes (lower) */}
      <line x1="32" y1="62" x2="18" y2="76" />
      <line x1="32" y1="62" x2="46" y2="76" />
    </svg>
  );
}
