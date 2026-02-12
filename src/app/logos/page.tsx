export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-surface p-8 md:p-16">
      <h1 className="text-3xl md:text-5xl font-heading font-bold text-cream text-center mb-4">
        Logo Options
      </h1>
      <p className="text-cream-muted text-center mb-16 max-w-xl mx-auto">
        All 4 options shown at multiple sizes. Each carries Viking/Norse energy
        abstracted into a modern tech mark. Pick a number (1-4).
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
        {/* OPTION A — Tiwaz Arrow + Shield */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 1</span>
            <span className="text-cream-muted text-xs">Tiwaz Shield</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Clean upward arrow (Tiwaz = victory) enclosed in a diamond shield.
            Minimal, balanced, strong favicon presence.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            {/* Large */}
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,2 60,32 32,62 4,32" />
              <line x1="32" y1="14" x2="32" y2="50" />
              <line x1="32" y1="14" x2="20" y2="30" />
              <line x1="32" y1="14" x2="44" y2="30" />
            </svg>
            {/* Medium */}
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,2 60,32 32,62 4,32" />
              <line x1="32" y1="14" x2="32" y2="50" />
              <line x1="32" y1="14" x2="20" y2="30" />
              <line x1="32" y1="14" x2="44" y2="30" />
            </svg>
            {/* Small/Favicon */}
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,2 60,32 32,62 4,32" />
              <line x1="32" y1="14" x2="32" y2="50" />
              <line x1="32" y1="14" x2="20" y2="30" />
              <line x1="32" y1="14" x2="44" y2="30" />
            </svg>
          </div>
          {/* With wordmark */}
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,2 60,32 32,62 4,32" />
              <line x1="32" y1="14" x2="32" y2="50" />
              <line x1="32" y1="14" x2="20" y2="30" />
              <line x1="32" y1="14" x2="44" y2="30" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* OPTION B — Aegishjalmur Inspired (Helm of Awe) */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 2</span>
            <span className="text-cream-muted text-xs">Helm of Awe</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Inspired by the Aegishjalmur — 4 symmetrical spokes radiating from center
            with forked tips. Power, protection, dominance.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            {/* Large */}
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Vertical spoke */}
              <line x1="32" y1="4" x2="32" y2="60" />
              {/* Horizontal spoke */}
              <line x1="4" y1="32" x2="60" y2="32" />
              {/* Top fork */}
              <line x1="32" y1="4" x2="26" y2="14" />
              <line x1="32" y1="4" x2="38" y2="14" />
              {/* Bottom fork */}
              <line x1="32" y1="60" x2="26" y2="50" />
              <line x1="32" y1="60" x2="38" y2="50" />
              {/* Left fork */}
              <line x1="4" y1="32" x2="14" y2="26" />
              <line x1="4" y1="32" x2="14" y2="38" />
              {/* Right fork */}
              <line x1="60" y1="32" x2="50" y2="26" />
              <line x1="60" y1="32" x2="50" y2="38" />
              {/* Center dot */}
              <circle cx="32" cy="32" r="3" fill="#8B1A2B" stroke="none" />
            </svg>
            {/* Medium */}
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="32" y1="4" x2="26" y2="14" />
              <line x1="32" y1="4" x2="38" y2="14" />
              <line x1="32" y1="60" x2="26" y2="50" />
              <line x1="32" y1="60" x2="38" y2="50" />
              <line x1="4" y1="32" x2="14" y2="26" />
              <line x1="4" y1="32" x2="14" y2="38" />
              <line x1="60" y1="32" x2="50" y2="26" />
              <line x1="60" y1="32" x2="50" y2="38" />
              <circle cx="32" cy="32" r="3" fill="#8B1A2B" stroke="none" />
            </svg>
            {/* Small */}
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="32" y1="4" x2="26" y2="14" />
              <line x1="32" y1="4" x2="38" y2="14" />
              <line x1="32" y1="60" x2="26" y2="50" />
              <line x1="32" y1="60" x2="38" y2="50" />
              <line x1="4" y1="32" x2="14" y2="26" />
              <line x1="4" y1="32" x2="14" y2="38" />
              <line x1="60" y1="32" x2="50" y2="26" />
              <line x1="60" y1="32" x2="50" y2="38" />
              <circle cx="32" cy="32" r="3" fill="#8B1A2B" stroke="none" />
            </svg>
          </div>
          {/* With wordmark */}
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="32" y1="4" x2="26" y2="14" />
              <line x1="32" y1="4" x2="38" y2="14" />
              <line x1="32" y1="60" x2="26" y2="50" />
              <line x1="32" y1="60" x2="38" y2="50" />
              <line x1="4" y1="32" x2="14" y2="26" />
              <line x1="4" y1="32" x2="14" y2="38" />
              <line x1="60" y1="32" x2="50" y2="26" />
              <line x1="60" y1="32" x2="50" y2="38" />
              <circle cx="32" cy="32" r="3" fill="#8B1A2B" stroke="none" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* OPTION C — Valknut Triangle (Odin's Knot) */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 3</span>
            <span className="text-cream-muted text-xs">Valknut / Odin&apos;s Knot</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Three interlocking triangles — the Valknut, symbol of Odin&apos;s chosen warriors.
            Geometric, recognizable, deeply Norse. The most &quot;Viking&quot; of the options.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            {/* Large */}
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Triangle 1 (center-top) */}
              <polygon points="32,4 18,30 46,30" />
              {/* Triangle 2 (bottom-left) */}
              <polygon points="20,20 6,46 34,46" />
              {/* Triangle 3 (bottom-right) */}
              <polygon points="44,20 30,46 58,46" />
            </svg>
            {/* Medium */}
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 18,30 46,30" />
              <polygon points="20,20 6,46 34,46" />
              <polygon points="44,20 30,46 58,46" />
            </svg>
            {/* Small */}
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 18,30 46,30" />
              <polygon points="20,20 6,46 34,46" />
              <polygon points="44,20 30,46 58,46" />
            </svg>
          </div>
          {/* With wordmark */}
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 18,30 46,30" />
              <polygon points="20,20 6,46 34,46" />
              <polygon points="44,20 30,46 58,46" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* OPTION D — Angular L Rune (Monogram) */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 4</span>
            <span className="text-cream-muted text-xs">Runic L Monogram</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            The letter L rendered in a runic/angular style — a single bold stroke with
            a sharp diagonal. Minimal, modern, instantly readable as &quot;L&quot; for Lothar.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            {/* Large */}
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              {/* Vertical stroke of L */}
              <line x1="18" y1="8" x2="18" y2="56" />
              {/* Horizontal base of L */}
              <line x1="18" y1="56" x2="46" y2="56" />
              {/* Angular diagonal accent (runic touch) */}
              <line x1="18" y1="8" x2="34" y2="24" />
              {/* Short crossbar (bind rune element) */}
              <line x1="18" y1="32" x2="30" y2="32" />
            </svg>
            {/* Medium */}
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="18" y1="8" x2="18" y2="56" />
              <line x1="18" y1="56" x2="46" y2="56" />
              <line x1="18" y1="8" x2="34" y2="24" />
              <line x1="18" y1="32" x2="30" y2="32" />
            </svg>
            {/* Small */}
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="18" y1="8" x2="18" y2="56" />
              <line x1="18" y1="56" x2="46" y2="56" />
              <line x1="18" y1="8" x2="34" y2="24" />
              <line x1="18" y1="32" x2="30" y2="32" />
            </svg>
          </div>
          {/* With wordmark */}
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="18" y1="8" x2="18" y2="56" />
              <line x1="18" y1="56" x2="46" y2="56" />
              <line x1="18" y1="8" x2="34" y2="24" />
              <line x1="18" y1="32" x2="30" y2="32" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>
      </div>

      {/* Current logo for comparison */}
      <div className="mt-16 max-w-5xl mx-auto">
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-cream-muted font-heading font-bold text-sm">CURRENT</span>
            <span className="text-cream-muted text-xs">Original Bind Rune (for comparison)</span>
          </div>
          <div className="flex items-end gap-8 justify-center mt-6">
            <svg width="80" height="100" viewBox="0 0 64 80" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="76" />
              <line x1="32" y1="4" x2="16" y2="22" />
              <line x1="32" y1="4" x2="48" y2="22" />
              <line x1="32" y1="28" x2="12" y2="12" />
              <line x1="32" y1="28" x2="52" y2="12" />
              <line x1="32" y1="36" x2="18" y2="48" />
              <line x1="32" y1="36" x2="46" y2="48" />
              <line x1="32" y1="62" x2="18" y2="76" />
              <line x1="32" y1="62" x2="46" y2="76" />
            </svg>
            <svg width="48" height="60" viewBox="0 0 64 80" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="76" />
              <line x1="32" y1="4" x2="16" y2="22" />
              <line x1="32" y1="4" x2="48" y2="22" />
              <line x1="32" y1="28" x2="12" y2="12" />
              <line x1="32" y1="28" x2="52" y2="12" />
              <line x1="32" y1="36" x2="18" y2="48" />
              <line x1="32" y1="36" x2="46" y2="48" />
              <line x1="32" y1="62" x2="18" y2="76" />
              <line x1="32" y1="62" x2="46" y2="76" />
            </svg>
            <svg width="32" height="40" viewBox="0 0 64 80" fill="none" stroke="#8B1A2B" strokeWidth="4" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="76" />
              <line x1="32" y1="4" x2="16" y2="22" />
              <line x1="32" y1="4" x2="48" y2="22" />
              <line x1="32" y1="28" x2="12" y2="12" />
              <line x1="32" y1="28" x2="52" y2="12" />
              <line x1="32" y1="36" x2="18" y2="48" />
              <line x1="32" y1="36" x2="46" y2="48" />
              <line x1="32" y1="62" x2="18" y2="76" />
              <line x1="32" y1="62" x2="46" y2="76" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
