export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-surface p-8 md:p-16">
      <h1 className="text-3xl md:text-5xl font-heading font-bold text-cream text-center mb-4">
        Logo Options — Round 3
      </h1>
      <p className="text-cream-muted text-center mb-16 max-w-xl mx-auto">
        10 completely new directions. Each shown at 3 sizes + wordmark pairing.
        Pick a number (1-10) or tell me what to combine.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* ═══════════════════════════════════════════
            OPTION 1 — Mjolnir (Thor's Hammer)
            Geometric top-down hammer silhouette.
            Power, precision, striking.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 1</span>
            <span className="text-cream-muted text-xs">Mjolnir</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Thor&apos;s hammer from above. A geometric T-shape with angular
            head and tapered handle. Power, precision, decisive impact.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Hammer head */}
              <rect x="10" y="8" width="44" height="18" rx="1" />
              {/* Handle */}
              <line x1="32" y1="26" x2="32" y2="56" />
              {/* Pommel */}
              <line x1="26" y1="56" x2="38" y2="56" />
              {/* Head detail lines */}
              <line x1="10" y1="17" x2="54" y2="17" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <rect x="10" y="8" width="44" height="18" rx="1" />
              <line x1="32" y1="26" x2="32" y2="56" />
              <line x1="26" y1="56" x2="38" y2="56" />
              <line x1="10" y1="17" x2="54" y2="17" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <rect x="10" y="8" width="44" height="18" rx="1" />
              <line x1="32" y1="26" x2="32" y2="56" />
              <line x1="26" y1="56" x2="38" y2="56" />
              <line x1="10" y1="17" x2="54" y2="17" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <rect x="10" y="8" width="44" height="18" rx="1" />
              <line x1="32" y1="26" x2="32" y2="56" />
              <line x1="26" y1="56" x2="38" y2="56" />
              <line x1="10" y1="17" x2="54" y2="17" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 2 — Longship Prow
            Stylized dragon-head prow of a Viking longship.
            Curved elegant line rising to a point.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 2</span>
            <span className="text-cream-muted text-xs">Longship Prow</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            The dragon prow of a Viking longship. A single elegant curve
            rising to a sharp point. Voyage, ambition, forward momentum.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Hull curve */}
              <path d="M8,48 Q16,52 32,52 Q48,52 56,48" />
              {/* Prow rising from left */}
              <path d="M8,48 Q6,32 12,16 Q16,8 20,4" />
              {/* Prow curl/dragon detail */}
              <path d="M20,4 Q24,6 22,12" />
              {/* Stern */}
              <path d="M56,48 Q58,40 54,34" />
              {/* Waterline */}
              <line x1="4" y1="52" x2="60" y2="52" strokeOpacity="0.3" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M8,48 Q16,52 32,52 Q48,52 56,48" />
              <path d="M8,48 Q6,32 12,16 Q16,8 20,4" />
              <path d="M20,4 Q24,6 22,12" />
              <path d="M56,48 Q58,40 54,34" />
              <line x1="4" y1="52" x2="60" y2="52" strokeOpacity="0.3" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M8,48 Q16,52 32,52 Q48,52 56,48" />
              <path d="M8,48 Q6,32 12,16 Q16,8 20,4" />
              <path d="M20,4 Q24,6 22,12" />
              <path d="M56,48 Q58,40 54,34" />
              <line x1="4" y1="52" x2="60" y2="52" strokeOpacity="0.3" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M8,48 Q16,52 32,52 Q48,52 56,48" />
              <path d="M8,48 Q6,32 12,16 Q16,8 20,4" />
              <path d="M20,4 Q24,6 22,12" />
              <path d="M56,48 Q58,40 54,34" />
              <line x1="4" y1="52" x2="60" y2="52" strokeOpacity="0.3" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 3 — Dual Axes (Crossed)
            Two Viking axes crossed in an X formation.
            Battle-ready, decisive.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 3</span>
            <span className="text-cream-muted text-xs">Crossed Axes</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Two Viking bearded axes crossed in an X. The classic warrior
            symbol. Strength, readiness, dual capability.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Left axe handle (bottom-left to top-right) */}
              <line x1="10" y1="54" x2="44" y2="10" />
              {/* Left axe blade */}
              <path d="M44,10 Q38,4 30,10 Q34,16 38,14" />
              {/* Right axe handle (bottom-right to top-left) */}
              <line x1="54" y1="54" x2="20" y2="10" />
              {/* Right axe blade */}
              <path d="M20,10 Q26,4 34,10 Q30,16 26,14" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="10" y1="54" x2="44" y2="10" />
              <path d="M44,10 Q38,4 30,10 Q34,16 38,14" />
              <line x1="54" y1="54" x2="20" y2="10" />
              <path d="M20,10 Q26,4 34,10 Q30,16 26,14" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="10" y1="54" x2="44" y2="10" />
              <path d="M44,10 Q38,4 30,10 Q34,16 38,14" />
              <line x1="54" y1="54" x2="20" y2="10" />
              <path d="M20,10 Q26,4 34,10 Q30,16 26,14" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="10" y1="54" x2="44" y2="10" />
              <path d="M44,10 Q38,4 30,10 Q34,16 38,14" />
              <line x1="54" y1="54" x2="20" y2="10" />
              <path d="M20,10 Q26,4 34,10 Q30,16 26,14" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 4 — Fenrir (Wolf Head)
            Geometric, angular wolf head in profile.
            Clean lines, no fills. The devourer.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 4</span>
            <span className="text-cream-muted text-xs">Fenrir (Wolf)</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Geometric wolf head in profile. Angular snout, pointed ear,
            sharp jaw. The great wolf Fenrir. Ferocity contained.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Ear */}
              <polyline points="38,8 46,4 48,16" />
              {/* Top of head */}
              <polyline points="24,20 38,8 48,16 52,24" />
              {/* Snout */}
              <polyline points="52,24 60,32 52,36" />
              {/* Jaw */}
              <polyline points="60,32 56,40 44,42 36,50" />
              {/* Throat/neck */}
              <polyline points="36,50 24,44 20,32 24,20" />
              {/* Eye */}
              <circle cx="40" cy="22" r="2" fill="#8B1A2B" stroke="none" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="38,8 46,4 48,16" />
              <polyline points="24,20 38,8 48,16 52,24" />
              <polyline points="52,24 60,32 52,36" />
              <polyline points="60,32 56,40 44,42 36,50" />
              <polyline points="36,50 24,44 20,32 24,20" />
              <circle cx="40" cy="22" r="2" fill="#8B1A2B" stroke="none" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="38,8 46,4 48,16" />
              <polyline points="24,20 38,8 48,16 52,24" />
              <polyline points="52,24 60,32 52,36" />
              <polyline points="60,32 56,40 44,42 36,50" />
              <polyline points="36,50 24,44 20,32 24,20" />
              <circle cx="40" cy="22" r="2" fill="#8B1A2B" stroke="none" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="38,8 46,4 48,16" />
              <polyline points="24,20 38,8 48,16 52,24" />
              <polyline points="52,24 60,32 52,36" />
              <polyline points="60,32 56,40 44,42 36,50" />
              <polyline points="36,50 24,44 20,32 24,20" />
              <circle cx="40" cy="22" r="2" fill="#8B1A2B" stroke="none" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 5 — Runic Hexagon
            A hexagon with internal runic-style geometry.
            Modern tech meets ancient script.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 5</span>
            <span className="text-cream-muted text-xs">Runic Hexagon</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A hexagon (honeycomb/shield shape) with internal angular lines
            forming an abstract rune pattern. Tech meets ancient wisdom.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Hexagon */}
              <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" />
              {/* Internal runic pattern */}
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="32" y1="22" x2="18" y2="14" />
              <line x1="32" y1="22" x2="46" y2="14" />
              <line x1="32" y1="42" x2="18" y2="50" />
              <line x1="32" y1="42" x2="46" y2="50" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" />
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="32" y1="22" x2="18" y2="14" />
              <line x1="32" y1="22" x2="46" y2="14" />
              <line x1="32" y1="42" x2="18" y2="50" />
              <line x1="32" y1="42" x2="46" y2="50" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" />
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="32" y1="22" x2="18" y2="14" />
              <line x1="32" y1="22" x2="46" y2="14" />
              <line x1="32" y1="42" x2="18" y2="50" />
              <line x1="32" y1="42" x2="46" y2="50" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 56,18 56,46 32,60 8,46 8,18" />
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="32" y1="22" x2="18" y2="14" />
              <line x1="32" y1="22" x2="46" y2="14" />
              <line x1="32" y1="42" x2="18" y2="50" />
              <line x1="32" y1="42" x2="46" y2="50" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 6 — Odin's Throne (Hlidskjalf)
            Abstract geometric throne/seat shape.
            Oversight, all-seeing command. Very angular.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 6</span>
            <span className="text-cream-muted text-xs">Hlidskjalf (Throne)</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Odin&apos;s high seat from which he observes all worlds.
            An abstract angular throne shape. Command, vision, authority.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Back of throne */}
              <polyline points="16,4 16,44 48,44 48,4" />
              {/* Seat */}
              <line x1="10" y1="44" x2="54" y2="44" />
              {/* Front legs */}
              <line x1="14" y1="44" x2="10" y2="60" />
              <line x1="50" y1="44" x2="54" y2="60" />
              {/* Throne crest */}
              <polyline points="16,4 32,10 48,4" />
              {/* Armrests */}
              <line x1="16" y1="28" x2="10" y2="28" />
              <line x1="48" y1="28" x2="54" y2="28" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="16,4 16,44 48,44 48,4" />
              <line x1="10" y1="44" x2="54" y2="44" />
              <line x1="14" y1="44" x2="10" y2="60" />
              <line x1="50" y1="44" x2="54" y2="60" />
              <polyline points="16,4 32,10 48,4" />
              <line x1="16" y1="28" x2="10" y2="28" />
              <line x1="48" y1="28" x2="54" y2="28" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="16,4 16,44 48,44 48,4" />
              <line x1="10" y1="44" x2="54" y2="44" />
              <line x1="14" y1="44" x2="10" y2="60" />
              <line x1="50" y1="44" x2="54" y2="60" />
              <polyline points="16,4 32,10 48,4" />
              <line x1="16" y1="28" x2="10" y2="28" />
              <line x1="48" y1="28" x2="54" y2="28" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="16,4 16,44 48,44 48,4" />
              <line x1="10" y1="44" x2="54" y2="44" />
              <line x1="14" y1="44" x2="10" y2="60" />
              <line x1="50" y1="44" x2="54" y2="60" />
              <polyline points="16,4 32,10 48,4" />
              <line x1="16" y1="28" x2="10" y2="28" />
              <line x1="48" y1="28" x2="54" y2="28" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 7 — Arrow Monogram L
            The letter L formed by two arrow-like strokes.
            Modern monogram with Norse angular energy.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 7</span>
            <span className="text-cream-muted text-xs">Arrow L Monogram</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A bold angular &quot;L&quot; for Lothar. The vertical stroke has
            an arrowhead pointing up, the horizontal ends in a point.
            Readable, modern, directional.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              {/* Vertical stroke of L */}
              <line x1="16" y1="10" x2="16" y2="52" />
              {/* Horizontal stroke of L */}
              <line x1="16" y1="52" x2="50" y2="52" />
              {/* Arrow tip on vertical */}
              <polyline points="10,18 16,10 22,18" />
              {/* Arrow tip on horizontal */}
              <polyline points="42,46 50,52 42,58" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="16" y1="10" x2="16" y2="52" />
              <line x1="16" y1="52" x2="50" y2="52" />
              <polyline points="10,18 16,10 22,18" />
              <polyline points="42,46 50,52 42,58" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="16" y1="10" x2="16" y2="52" />
              <line x1="16" y1="52" x2="50" y2="52" />
              <polyline points="10,18 16,10 22,18" />
              <polyline points="42,46 50,52 42,58" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="16" y1="10" x2="16" y2="52" />
              <line x1="16" y1="52" x2="50" y2="52" />
              <polyline points="10,18 16,10 22,18" />
              <polyline points="42,46 50,52 42,58" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 8 — Northern Star
            An 8-pointed star with sharp angular rays.
            Polaris / guiding star for Norse navigators.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 8</span>
            <span className="text-cream-muted text-xs">Northern Star</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            An 8-pointed star with alternating long and short rays.
            The guiding star for Viking navigators.
            Direction, precision, clarity.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* 4 long cardinal rays */}
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              {/* 4 short diagonal rays */}
              <line x1="16" y1="16" x2="48" y2="48" />
              <line x1="48" y1="16" x2="16" y2="48" />
              {/* Diamond accent at center */}
              <polygon points="32,26 38,32 32,38 26,32" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="16" y1="16" x2="48" y2="48" />
              <line x1="48" y1="16" x2="16" y2="48" />
              <polygon points="32,26 38,32 32,38 26,32" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="16" y1="16" x2="48" y2="48" />
              <line x1="48" y1="16" x2="16" y2="48" />
              <polygon points="32,26 38,32 32,38 26,32" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="16" y1="16" x2="48" y2="48" />
              <line x1="48" y1="16" x2="16" y2="48" />
              <polygon points="32,26 38,32 32,38 26,32" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 9 — Jormungandr (World Serpent)
            A serpent/dragon biting its own tail in a circle.
            Ouroboros / endless cycle / completeness.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 9</span>
            <span className="text-cream-muted text-xs">Jormungandr (Serpent)</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            The World Serpent encircling itself. An angular ouroboros
            with a visible head biting the tail. Completeness, cycles, power.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Main circle body */}
              <path d="M32,6 A26,26 0 1,1 16,12" />
              {/* Head (angular, biting toward tail) */}
              <polygon points="16,12 8,6 10,16" />
              {/* Eye on head */}
              <circle cx="13" cy="10" r="1.5" fill="#8B1A2B" stroke="none" />
              {/* Scale marks along body */}
              <line x1="46" y1="8" x2="50" y2="12" />
              <line x1="56" y1="20" x2="54" y2="26" />
              <line x1="56" y1="42" x2="52" y2="46" />
              <line x1="42" y1="56" x2="38" y2="54" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M32,6 A26,26 0 1,1 16,12" />
              <polygon points="16,12 8,6 10,16" />
              <circle cx="13" cy="10" r="1.5" fill="#8B1A2B" stroke="none" />
              <line x1="46" y1="8" x2="50" y2="12" />
              <line x1="56" y1="20" x2="54" y2="26" />
              <line x1="56" y1="42" x2="52" y2="46" />
              <line x1="42" y1="56" x2="38" y2="54" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M32,6 A26,26 0 1,1 16,12" />
              <polygon points="16,12 8,6 10,16" />
              <circle cx="13" cy="10" r="1.5" fill="#8B1A2B" stroke="none" />
              <line x1="46" y1="8" x2="50" y2="12" />
              <line x1="56" y1="20" x2="54" y2="26" />
              <line x1="56" y1="42" x2="52" y2="46" />
              <line x1="42" y1="56" x2="38" y2="54" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M32,6 A26,26 0 1,1 16,12" />
              <polygon points="16,12 8,6 10,16" />
              <circle cx="13" cy="10" r="1.5" fill="#8B1A2B" stroke="none" />
              <line x1="46" y1="8" x2="50" y2="12" />
              <line x1="56" y1="20" x2="54" y2="26" />
              <line x1="56" y1="42" x2="52" y2="46" />
              <line x1="42" y1="56" x2="38" y2="54" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 10 — Othala Crown
            The Othala rune (ᛟ = heritage/home) with an upward
            pointed crown shape. Ownership, legacy, dominion.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 10</span>
            <span className="text-cream-muted text-xs">Othala Crown</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            The Othala rune (heritage, ancestral power) merged with a crown shape.
            Two legs spread from a diamond top. Ownership, legacy, dominion.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Diamond top (crown/rune head) */}
              <polygon points="32,6 48,24 32,42 16,24" />
              {/* Left leg */}
              <line x1="16" y1="24" x2="8" y2="58" />
              {/* Right leg */}
              <line x1="48" y1="24" x2="56" y2="58" />
              {/* Crown points */}
              <polyline points="22,6 32,6 42,6" />
              <line x1="22" y1="6" x2="24" y2="12" />
              <line x1="42" y1="6" x2="40" y2="12" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,6 48,24 32,42 16,24" />
              <line x1="16" y1="24" x2="8" y2="58" />
              <line x1="48" y1="24" x2="56" y2="58" />
              <polyline points="22,6 32,6 42,6" />
              <line x1="22" y1="6" x2="24" y2="12" />
              <line x1="42" y1="6" x2="40" y2="12" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,6 48,24 32,42 16,24" />
              <line x1="16" y1="24" x2="8" y2="58" />
              <line x1="48" y1="24" x2="56" y2="58" />
              <polyline points="22,6 32,6 42,6" />
              <line x1="22" y1="6" x2="24" y2="12" />
              <line x1="42" y1="6" x2="40" y2="12" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,6 48,24 32,42 16,24" />
              <line x1="16" y1="24" x2="8" y2="58" />
              <line x1="48" y1="24" x2="56" y2="58" />
              <polyline points="22,6 32,6 42,6" />
              <line x1="22" y1="6" x2="24" y2="12" />
              <line x1="42" y1="6" x2="40" y2="12" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
