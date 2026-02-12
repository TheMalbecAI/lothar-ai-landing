export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-surface p-8 md:p-16">
      <h1 className="text-3xl md:text-5xl font-heading font-bold text-cream text-center mb-4">
        Logo Options — Round 5
      </h1>
      <p className="text-cream-muted text-center mb-16 max-w-xl mx-auto">
        Clean, premium, modern. Think Linear, Stripe, Arc — logos that feel
        expensive because of restraint, not complexity. Crimson-only palette.
        Pick a number (1-10) or tell me what direction feels right.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* ═══════════════════════════════════════════
            OPTION 1 — The Aperture
            A rounded square with a precise circular cutout
            off-center. Negative space creates tension.
            Think: camera aperture, focus, precision.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 1</span>
            <span className="text-cream-muted text-xs">The Aperture</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Rounded square with a precise circular cutout, slightly off-center.
            Negative space creates tension. Focus. Precision. The eye of the AI.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64">
              <defs>
                <mask id="a1-80">
                  <rect width="64" height="64" rx="14" fill="white" />
                  <circle cx="36" cy="28" r="14" fill="black" />
                </mask>
              </defs>
              <rect width="64" height="64" rx="14" fill="#8B1A2B" mask="url(#a1-80)" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64">
              <defs>
                <mask id="a1-48">
                  <rect width="64" height="64" rx="14" fill="white" />
                  <circle cx="36" cy="28" r="14" fill="black" />
                </mask>
              </defs>
              <rect width="64" height="64" rx="14" fill="#8B1A2B" mask="url(#a1-48)" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64">
              <defs>
                <mask id="a1-32">
                  <rect width="64" height="64" rx="14" fill="white" />
                  <circle cx="36" cy="28" r="14" fill="black" />
                </mask>
              </defs>
              <rect width="64" height="64" rx="14" fill="#8B1A2B" mask="url(#a1-32)" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64">
              <defs>
                <mask id="a1-sm">
                  <rect width="64" height="64" rx="14" fill="white" />
                  <circle cx="36" cy="28" r="14" fill="black" />
                </mask>
              </defs>
              <rect width="64" height="64" rx="14" fill="#8B1A2B" mask="url(#a1-sm)" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 2 — The Slab
            A bold, heavy "L" monogram — but not literal.
            A thick vertical bar meets a horizontal bar at
            the bottom, with a diagonal bevel where they join.
            Architectural, brutalist, confident.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 2</span>
            <span className="text-cream-muted text-xs">The Slab</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Heavy &quot;L&quot; monogram — vertical meets horizontal with a chamfered
            inner corner. Architectural. Absolute confidence. Zero decoration.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M12,4 L28,4 L28,38 L22,44 L52,44 L52,58 L12,58 Z" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M12,4 L28,4 L28,38 L22,44 L52,44 L52,58 L12,58 Z" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M12,4 L28,4 L28,38 L22,44 L52,44 L52,58 L12,58 Z" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M12,4 L28,4 L28,38 L22,44 L52,44 L52,58 L12,58 Z" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 3 — The Portal
            Two concentric rounded rectangles with a gap between
            them. Like looking through a doorway into something else.
            Depth, transformation, a window into AI.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 3</span>
            <span className="text-cream-muted text-xs">The Portal</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Two concentric rounded rectangles with precise spacing between them.
            A portal. A window into what AI can create. Depth through simplicity.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
              <rect x="4" y="4" width="56" height="56" rx="12" stroke="#8B1A2B" strokeWidth="4" />
              <rect x="16" y="16" width="32" height="32" rx="6" stroke="#8B1A2B" strokeWidth="4" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
              <rect x="4" y="4" width="56" height="56" rx="12" stroke="#8B1A2B" strokeWidth="4.5" />
              <rect x="16" y="16" width="32" height="32" rx="6" stroke="#8B1A2B" strokeWidth="4.5" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
              <rect x="4" y="4" width="56" height="56" rx="12" stroke="#8B1A2B" strokeWidth="5.5" />
              <rect x="16" y="16" width="32" height="32" rx="6" stroke="#8B1A2B" strokeWidth="5.5" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
              <rect x="4" y="4" width="56" height="56" rx="12" stroke="#8B1A2B" strokeWidth="4.5" />
              <rect x="16" y="16" width="32" height="32" rx="6" stroke="#8B1A2B" strokeWidth="4.5" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 4 — The Razor
            A single parallelogram / slanted rectangle.
            Like a blade. Speed, sharpness, cutting through
            the noise. Ultra-minimal.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 4</span>
            <span className="text-cream-muted text-xs">The Razor</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A single parallelogram. One shape. Slanted, sharp, cutting through noise.
            Ultra-minimal. Speed personified. Like an italic stroke frozen in place.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="#8B1A2B">
              <polygon points="22,4 52,4 42,60 12,60" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="#8B1A2B">
              <polygon points="22,4 52,4 42,60 12,60" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="#8B1A2B">
              <polygon points="22,4 52,4 42,60 12,60" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="#8B1A2B">
              <polygon points="22,4 52,4 42,60 12,60" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 5 — The Stack
            Three horizontal bars of decreasing width,
            perfectly centered. Data layers, AI processing
            stacks, refined output. Think hamburger menu
            evolved into a brand mark.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 5</span>
            <span className="text-cream-muted text-xs">The Stack</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Three horizontal bars, decreasing in width from bottom to top.
            Layers of refinement. Raw input at the base, perfect output at the peak.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="#8B1A2B">
              <rect x="6" y="44" width="52" height="10" rx="3" />
              <rect x="14" y="28" width="36" height="10" rx="3" />
              <rect x="22" y="12" width="20" height="10" rx="3" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="#8B1A2B">
              <rect x="6" y="44" width="52" height="10" rx="3" />
              <rect x="14" y="28" width="36" height="10" rx="3" />
              <rect x="22" y="12" width="20" height="10" rx="3" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="#8B1A2B">
              <rect x="6" y="44" width="52" height="10" rx="3" />
              <rect x="14" y="28" width="36" height="10" rx="3" />
              <rect x="22" y="12" width="20" height="10" rx="3" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="#8B1A2B">
              <rect x="6" y="44" width="52" height="10" rx="3" />
              <rect x="14" y="28" width="36" height="10" rx="3" />
              <rect x="22" y="12" width="20" height="10" rx="3" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 6 — The Spark
            Two shapes meeting at a point — like a spark
            gap or lightning caught in a bottle.
            An angular "<" and ">" pressed together with
            space between their tips.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 6</span>
            <span className="text-cream-muted text-xs">The Spark</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Two angular shapes meeting at a gap — like a spark about to fire.
            The tension between input and output. Energy before the flash.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="#8B1A2B">
              {/* Left angle bracket */}
              <polygon points="6,8 30,32 6,56 18,56 42,32 18,8" />
              {/* Right angle bracket */}
              <polygon points="58,8 34,32 58,56 46,56 22,32 46,8" />
              {/* Cut out center overlap to create the gap */}
              <rect x="27" y="6" width="10" height="52" fill="#111111" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="#8B1A2B">
              <polygon points="6,8 30,32 6,56 18,56 42,32 18,8" />
              <polygon points="58,8 34,32 58,56 46,56 22,32 46,8" />
              <rect x="27" y="6" width="10" height="52" fill="#111111" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="#8B1A2B">
              <polygon points="6,8 30,32 6,56 18,56 42,32 18,8" />
              <polygon points="58,8 34,32 58,56 46,56 22,32 46,8" />
              <rect x="27" y="6" width="10" height="52" fill="#111111" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="24" viewBox="0 0 64 64" fill="#8B1A2B">
              <polygon points="6,8 30,32 6,56 18,56 42,32 18,8" />
              <polygon points="58,8 34,32 58,56 46,56 22,32 46,8" />
              <rect x="27" y="6" width="10" height="52" fill="#111111" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 7 — The Signet
            A circle with a bold vertical line and two
            short horizontal bars branching from it —
            like a stylized "L" inside a seal. Monogram
            meets signet ring. Authority + identity.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 7</span>
            <span className="text-cream-muted text-xs">The Signet</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A circle enclosing a geometric &quot;L&quot; form — vertical bar with two
            horizontal branches. Like a signet ring stamp. Identity. Authority.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" stroke="#8B1A2B" strokeWidth="3.5" />
              {/* Stylized L inside */}
              <line x1="24" y1="14" x2="24" y2="50" stroke="#8B1A2B" strokeWidth="5" strokeLinecap="round" />
              <line x1="24" y1="50" x2="44" y2="50" stroke="#8B1A2B" strokeWidth="5" strokeLinecap="round" />
              <line x1="24" y1="32" x2="38" y2="32" stroke="#8B1A2B" strokeWidth="5" strokeLinecap="round" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" stroke="#8B1A2B" strokeWidth="4" />
              <line x1="24" y1="14" x2="24" y2="50" stroke="#8B1A2B" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="24" y1="50" x2="44" y2="50" stroke="#8B1A2B" strokeWidth="5.5" strokeLinecap="round" />
              <line x1="24" y1="32" x2="38" y2="32" stroke="#8B1A2B" strokeWidth="5.5" strokeLinecap="round" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" stroke="#8B1A2B" strokeWidth="5" />
              <line x1="24" y1="14" x2="24" y2="50" stroke="#8B1A2B" strokeWidth="6" strokeLinecap="round" />
              <line x1="24" y1="50" x2="44" y2="50" stroke="#8B1A2B" strokeWidth="6" strokeLinecap="round" />
              <line x1="24" y1="32" x2="38" y2="32" stroke="#8B1A2B" strokeWidth="6" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="28" stroke="#8B1A2B" strokeWidth="4.5" />
              <line x1="24" y1="14" x2="24" y2="50" stroke="#8B1A2B" strokeWidth="6" strokeLinecap="round" />
              <line x1="24" y1="50" x2="44" y2="50" stroke="#8B1A2B" strokeWidth="6" strokeLinecap="round" />
              <line x1="24" y1="32" x2="38" y2="32" stroke="#8B1A2B" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 8 — The Cut
            A solid square with a single diagonal cut
            removing the top-right corner. One shape,
            one cut. The Vercel triangle energy but
            as subtraction, not addition.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 8</span>
            <span className="text-cream-muted text-xs">The Cut</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A solid rounded square with its top-right corner sliced off at 45°.
            One decisive cut. Precision. Everything unnecessary, removed.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M8,4 L42,4 L58,20 L58,58 Q58,60 56,60 L8,60 Q6,60 6,58 L6,6 Q6,4 8,4 Z" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M8,4 L42,4 L58,20 L58,58 Q58,60 56,60 L8,60 Q6,60 6,58 L6,6 Q6,4 8,4 Z" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M8,4 L42,4 L58,20 L58,58 Q58,60 56,60 L8,60 Q6,60 6,58 L6,6 Q6,4 8,4 Z" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M8,4 L42,4 L58,20 L58,58 Q58,60 56,60 L8,60 Q6,60 6,58 L6,6 Q6,4 8,4 Z" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 9 — The Orbit
            A solid circle with a tilted ring / orbital
            path around it. The circle is the product,
            the orbit is the AI working around it.
            Planet + ring. Clean, dynamic.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 9</span>
            <span className="text-cream-muted text-xs">The Orbit</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A solid circle (your product) with a tilted elliptical ring orbiting it.
            AI revolves around and enhances your brand. Dynamic. Elegant.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none">
              {/* Orbital ring behind */}
              <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(-30 32 32)" stroke="#8B1A2B" strokeWidth="3" />
              {/* Center sphere */}
              <circle cx="32" cy="32" r="12" fill="#8B1A2B" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none">
              <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(-30 32 32)" stroke="#8B1A2B" strokeWidth="3.5" />
              <circle cx="32" cy="32" r="12" fill="#8B1A2B" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none">
              <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(-30 32 32)" stroke="#8B1A2B" strokeWidth="4.5" />
              <circle cx="32" cy="32" r="12" fill="#8B1A2B" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="24" viewBox="0 0 64 64" fill="none">
              <ellipse cx="32" cy="32" rx="28" ry="12" transform="rotate(-30 32 32)" stroke="#8B1A2B" strokeWidth="3.5" />
              <circle cx="32" cy="32" r="12" fill="#8B1A2B" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 10 — The Notch
            A solid rounded square with a small square
            notch cut from one corner. Like a SIM card
            or a chip. Subtle, techy, instantly recognizable.
            The detail IS the logo.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 10</span>
            <span className="text-cream-muted text-xs">The Notch</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A rounded square with a small square notch removed from one corner.
            Like a chip or SIM card. Tiny detail, total identity. Tech DNA.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M10,4 L54,4 Q60,4 60,10 L60,54 Q60,60 54,60 L10,60 Q4,60 4,54 L4,22 L16,22 L16,10 Q16,4 22,4 Z" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M10,4 L54,4 Q60,4 60,10 L60,54 Q60,60 54,60 L10,60 Q4,60 4,54 L4,22 L16,22 L16,10 Q16,4 22,4 Z" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M10,4 L54,4 Q60,4 60,10 L60,54 Q60,60 54,60 L10,60 Q4,60 4,54 L4,22 L16,22 L16,10 Q16,4 22,4 Z" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="#8B1A2B">
              <path d="M10,4 L54,4 Q60,4 60,10 L60,54 Q60,60 54,60 L10,60 Q4,60 4,54 L4,22 L16,22 L16,10 Q16,4 22,4 Z" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

      </div>
    </div>
  );
}
