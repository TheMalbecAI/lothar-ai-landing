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
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      stroke={color}
      strokeWidth="2.5"
      strokeLinecap="square"
      strokeLinejoin="miter"
      className={className}
      aria-hidden="true"
    >
      {/* Outer diamond */}
      <polygon points="32,4 58,32 32,60 6,32" />
      {/* Inner diamond */}
      <polygon points="32,16 46,32 32,48 18,32" />
      {/* Cardinal bridges */}
      <line x1="32" y1="4" x2="32" y2="16" />
      <line x1="58" y1="32" x2="46" y2="32" />
      <line x1="32" y1="60" x2="32" y2="48" />
      <line x1="6" y1="32" x2="18" y2="32" />
      {/* Outward L-hooks — equal margin from both diamond edges */}
      <polyline points="22,18 16,18 16,24" />
      <polyline points="42,18 48,18 48,24" />
      <polyline points="22,46 16,46 16,40" />
      <polyline points="42,46 48,46 48,40" />
    </svg>
  );
}
