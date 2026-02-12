export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-surface p-8 md:p-16">
      <h1 className="text-3xl md:text-5xl font-heading font-bold text-cream text-center mb-4">
        Logo Options — Round 2
      </h1>
      <p className="text-cream-muted text-center mb-16 max-w-xl mx-auto">
        10 new directions. Each shown at 3 sizes + wordmark pairing.
        Pick a number (1-10) or tell me what elements to combine.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* ═══════════════════════════════════════════
            OPTION 1 — Wolf Fang
            Two angular fangs forming a negative-space "V" shape.
            Predatory, sharp, minimal.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 1</span>
            <span className="text-cream-muted text-xs">Wolf Fang</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Two sharp angular fangs creating a negative-space &quot;V&quot;.
            Predatory and minimal. Inspired by Fenrir.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Left fang */}
              <polyline points="8,8 24,56 32,32" />
              {/* Right fang */}
              <polyline points="56,8 40,56 32,32" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="8,8 24,56 32,32" />
              <polyline points="56,8 40,56 32,32" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="8,8 24,56 32,32" />
              <polyline points="56,8 40,56 32,32" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polyline points="8,8 24,56 32,32" />
              <polyline points="56,8 40,56 32,32" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 2 — Raven Wings
            Two angular wings spreading from a central point.
            Huginn and Muninn — Odin's ravens (thought and memory).
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 2</span>
            <span className="text-cream-muted text-xs">Raven Wings</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Two angular wings spreading from a central axis.
            Inspired by Huginn and Muninn, Odin&apos;s ravens of thought and memory.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Central spine */}
              <line x1="32" y1="12" x2="32" y2="52" />
              {/* Left wing */}
              <polyline points="32,20 14,10 8,30 32,38" />
              {/* Right wing */}
              <polyline points="32,20 50,10 56,30 32,38" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="12" x2="32" y2="52" />
              <polyline points="32,20 14,10 8,30 32,38" />
              <polyline points="32,20 50,10 56,30 32,38" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="12" x2="32" y2="52" />
              <polyline points="32,20 14,10 8,30 32,38" />
              <polyline points="32,20 50,10 56,30 32,38" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="12" x2="32" y2="52" />
              <polyline points="32,20 14,10 8,30 32,38" />
              <polyline points="32,20 50,10 56,30 32,38" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 3 — Spear of Odin (Gungnir)
            A sharp vertical spear with angular crossguard.
            Clean, vertical, authoritative.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 3</span>
            <span className="text-cream-muted text-xs">Gungnir (Odin&apos;s Spear)</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A stylized spear point with angular crossguard.
            Gungnir, the spear that never misses its mark. Precision, power.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Spear shaft */}
              <line x1="32" y1="4" x2="32" y2="60" />
              {/* Spear head */}
              <polygon points="32,4 22,20 32,16 42,20" />
              {/* Crossguard */}
              <line x1="18" y1="24" x2="46" y2="24" />
              <line x1="18" y1="24" x2="22" y2="20" />
              <line x1="46" y1="24" x2="42" y2="20" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <polygon points="32,4 22,20 32,16 42,20" />
              <line x1="18" y1="24" x2="46" y2="24" />
              <line x1="18" y1="24" x2="22" y2="20" />
              <line x1="46" y1="24" x2="42" y2="20" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <polygon points="32,4 22,20 32,16 42,20" />
              <line x1="18" y1="24" x2="46" y2="24" />
              <line x1="18" y1="24" x2="22" y2="20" />
              <line x1="46" y1="24" x2="42" y2="20" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <polygon points="32,4 22,20 32,16 42,20" />
              <line x1="18" y1="24" x2="46" y2="24" />
              <line x1="18" y1="24" x2="22" y2="20" />
              <line x1="46" y1="24" x2="42" y2="20" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 4 — Yggdrasil Sigil
            Abstract tree of life in a circle. Three branches up,
            three roots down, contained in a ring.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 4</span>
            <span className="text-cream-muted text-xs">Yggdrasil Sigil</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            The World Tree abstracted into a geometric sigil. Trunk, branches above,
            roots below, all within a circle. Connection, knowledge, growth.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Outer ring */}
              <circle cx="32" cy="32" r="28" />
              {/* Trunk */}
              <line x1="32" y1="12" x2="32" y2="52" />
              {/* Branches */}
              <line x1="32" y1="16" x2="18" y2="8" />
              <line x1="32" y1="16" x2="46" y2="8" />
              <line x1="32" y1="22" x2="14" y2="18" />
              <line x1="32" y1="22" x2="50" y2="18" />
              {/* Roots */}
              <line x1="32" y1="48" x2="18" y2="56" />
              <line x1="32" y1="48" x2="46" y2="56" />
              <line x1="32" y1="42" x2="14" y2="46" />
              <line x1="32" y1="42" x2="50" y2="46" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <circle cx="32" cy="32" r="28" />
              <line x1="32" y1="12" x2="32" y2="52" />
              <line x1="32" y1="16" x2="18" y2="8" />
              <line x1="32" y1="16" x2="46" y2="8" />
              <line x1="32" y1="22" x2="14" y2="18" />
              <line x1="32" y1="22" x2="50" y2="18" />
              <line x1="32" y1="48" x2="18" y2="56" />
              <line x1="32" y1="48" x2="46" y2="56" />
              <line x1="32" y1="42" x2="14" y2="46" />
              <line x1="32" y1="42" x2="50" y2="46" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <circle cx="32" cy="32" r="28" />
              <line x1="32" y1="12" x2="32" y2="52" />
              <line x1="32" y1="16" x2="18" y2="8" />
              <line x1="32" y1="16" x2="46" y2="8" />
              <line x1="32" y1="22" x2="14" y2="18" />
              <line x1="32" y1="22" x2="50" y2="18" />
              <line x1="32" y1="48" x2="18" y2="56" />
              <line x1="32" y1="48" x2="46" y2="56" />
              <line x1="32" y1="42" x2="14" y2="46" />
              <line x1="32" y1="42" x2="50" y2="46" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <circle cx="32" cy="32" r="28" />
              <line x1="32" y1="12" x2="32" y2="52" />
              <line x1="32" y1="16" x2="18" y2="8" />
              <line x1="32" y1="16" x2="46" y2="8" />
              <line x1="32" y1="22" x2="14" y2="18" />
              <line x1="32" y1="22" x2="50" y2="18" />
              <line x1="32" y1="48" x2="18" y2="56" />
              <line x1="32" y1="48" x2="46" y2="56" />
              <line x1="32" y1="42" x2="14" y2="46" />
              <line x1="32" y1="42" x2="50" y2="46" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 5 — War Helm
            Stylized Viking helmet front-view.
            T-shaped nasal guard with angular eye slits.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 5</span>
            <span className="text-cream-muted text-xs">War Helm</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Front-view Viking war helmet. Angular dome with T-shaped nasal guard
            and sharp eye openings. Warrior identity, protection, readiness.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Helm dome */}
              <path d="M12,38 Q12,8 32,6 Q52,8 52,38" />
              {/* Brim */}
              <line x1="8" y1="38" x2="56" y2="38" />
              {/* Nasal guard (vertical center) */}
              <line x1="32" y1="14" x2="32" y2="50" />
              {/* Eye bar (horizontal across eyes) */}
              <line x1="14" y1="32" x2="50" y2="32" />
              {/* Cheek guards */}
              <line x1="14" y1="38" x2="14" y2="50" />
              <line x1="50" y1="38" x2="50" y2="50" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M12,38 Q12,8 32,6 Q52,8 52,38" />
              <line x1="8" y1="38" x2="56" y2="38" />
              <line x1="32" y1="14" x2="32" y2="50" />
              <line x1="14" y1="32" x2="50" y2="32" />
              <line x1="14" y1="38" x2="14" y2="50" />
              <line x1="50" y1="38" x2="50" y2="50" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M12,38 Q12,8 32,6 Q52,8 52,38" />
              <line x1="8" y1="38" x2="56" y2="38" />
              <line x1="32" y1="14" x2="32" y2="50" />
              <line x1="14" y1="32" x2="50" y2="32" />
              <line x1="14" y1="38" x2="14" y2="50" />
              <line x1="50" y1="38" x2="50" y2="50" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M12,38 Q12,8 32,6 Q52,8 52,38" />
              <line x1="8" y1="38" x2="56" y2="38" />
              <line x1="32" y1="14" x2="32" y2="50" />
              <line x1="14" y1="32" x2="50" y2="32" />
              <line x1="14" y1="38" x2="14" y2="50" />
              <line x1="50" y1="38" x2="50" y2="50" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 6 — Interlocking Triangles (Reimagined Valknut)
            Three triangles woven together with visible overlap,
            more geometric/abstract than the traditional Valknut.
            No Triforce resemblance — uses different proportions.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 6</span>
            <span className="text-cream-muted text-xs">Woven Knot</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Three elongated triangles interlocking in a rotational pattern.
            Unlike the classic Valknut, these are tall and narrow,
            creating a woven hexagonal core. Odin&apos;s knot reimagined.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Triangle 1 — pointing up (tall, narrow) */}
              <polygon points="32,4 20,40 44,40" />
              {/* Triangle 2 — pointing down-left (rotated 120deg equivalent) */}
              <polygon points="14,14 14,48 44,48" />
              {/* Triangle 3 — pointing down-right (rotated 240deg equivalent) */}
              <polygon points="50,14 20,48 50,48" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 20,40 44,40" />
              <polygon points="14,14 14,48 44,48" />
              <polygon points="50,14 20,48 50,48" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 20,40 44,40" />
              <polygon points="14,14 14,48 44,48" />
              <polygon points="50,14 20,48 50,48" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 20,40 44,40" />
              <polygon points="14,14 14,48 44,48" />
              <polygon points="50,14 20,48 50,48" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 7 — Runic Eye
            A single angular eye (Odin sacrificed his eye for wisdom).
            Diamond iris with sharp angular lid.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 7</span>
            <span className="text-cream-muted text-xs">Eye of Odin</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Odin sacrificed his eye for wisdom. A single angular eye with
            a diamond-shaped iris. Vision, insight, the price of knowledge.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Upper lid */}
              <path d="M4,32 Q32,8 60,32" />
              {/* Lower lid */}
              <path d="M4,32 Q32,56 60,32" />
              {/* Diamond iris */}
              <polygon points="32,20 40,32 32,44 24,32" />
              {/* Pupil dot */}
              <circle cx="32" cy="32" r="3" fill="#8B1A2B" stroke="none" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M4,32 Q32,8 60,32" />
              <path d="M4,32 Q32,56 60,32" />
              <polygon points="32,20 40,32 32,44 24,32" />
              <circle cx="32" cy="32" r="3" fill="#8B1A2B" stroke="none" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M4,32 Q32,8 60,32" />
              <path d="M4,32 Q32,56 60,32" />
              <polygon points="32,20 40,32 32,44 24,32" />
              <circle cx="32" cy="32" r="3" fill="#8B1A2B" stroke="none" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <path d="M4,32 Q32,8 60,32" />
              <path d="M4,32 Q32,56 60,32" />
              <polygon points="32,20 40,32 32,44 24,32" />
              <circle cx="32" cy="32" r="3" fill="#8B1A2B" stroke="none" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 8 — Axe Head
            A clean, geometric Viking axe blade.
            The defining weapon of Norse warriors.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 8</span>
            <span className="text-cream-muted text-xs">Battle Axe</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A geometric Viking axe head. Clean, angular, unmistakable.
            The weapon that built an empire. Action, decisiveness, cutting through noise.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Axe handle */}
              <line x1="32" y1="4" x2="32" y2="60" />
              {/* Axe blade (right side, curved) */}
              <path d="M32,12 L48,8 Q56,32 48,56 L32,52" />
              {/* Spine detail */}
              <line x1="32" y1="18" x2="28" y2="18" />
              <line x1="32" y1="46" x2="28" y2="46" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <path d="M32,12 L48,8 Q56,32 48,56 L32,52" />
              <line x1="32" y1="18" x2="28" y2="18" />
              <line x1="32" y1="46" x2="28" y2="46" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <path d="M32,12 L48,8 Q56,32 48,56 L32,52" />
              <line x1="32" y1="18" x2="28" y2="18" />
              <line x1="32" y1="46" x2="28" y2="46" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <path d="M32,12 L48,8 Q56,32 48,56 L32,52" />
              <line x1="32" y1="18" x2="28" y2="18" />
              <line x1="32" y1="46" x2="28" y2="46" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 9 — Compass Rose / Vegvisir
            A simplified Norse compass with 4 main spokes
            and angular endpoints. "Never lose your way."
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 9</span>
            <span className="text-cream-muted text-xs">Vegvisir (Norse Compass)</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Simplified Vegvisir, the Norse wayfinding compass.
            8 angular spokes with distinct endpoints radiating from center.
            &quot;The bearer shall never lose their way.&quot;
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Main spokes */}
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              {/* Diagonal spokes (shorter) */}
              <line x1="12" y1="12" x2="52" y2="52" />
              <line x1="52" y1="12" x2="12" y2="52" />
              {/* North arrow point */}
              <polyline points="28,10 32,4 36,10" />
              {/* East arrow point */}
              <polyline points="54,28 60,32 54,36" />
              {/* South arrow point */}
              <polyline points="28,54 32,60 36,54" />
              {/* West arrow point */}
              <polyline points="10,28 4,32 10,36" />
              {/* Inner ring */}
              <circle cx="32" cy="32" r="8" />
              {/* Center dot */}
              <circle cx="32" cy="32" r="2.5" fill="#8B1A2B" stroke="none" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="12" y1="12" x2="52" y2="52" />
              <line x1="52" y1="12" x2="12" y2="52" />
              <polyline points="28,10 32,4 36,10" />
              <polyline points="54,28 60,32 54,36" />
              <polyline points="28,54 32,60 36,54" />
              <polyline points="10,28 4,32 10,36" />
              <circle cx="32" cy="32" r="8" />
              <circle cx="32" cy="32" r="2.5" fill="#8B1A2B" stroke="none" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="12" y1="12" x2="52" y2="52" />
              <line x1="52" y1="12" x2="12" y2="52" />
              <polyline points="28,10 32,4 36,10" />
              <polyline points="54,28 60,32 54,36" />
              <polyline points="28,54 32,60 36,54" />
              <polyline points="10,28 4,32 10,36" />
              <circle cx="32" cy="32" r="8" />
              <circle cx="32" cy="32" r="2.5" fill="#8B1A2B" stroke="none" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <line x1="32" y1="4" x2="32" y2="60" />
              <line x1="4" y1="32" x2="60" y2="32" />
              <line x1="12" y1="12" x2="52" y2="52" />
              <line x1="52" y1="12" x2="12" y2="52" />
              <polyline points="28,10 32,4 36,10" />
              <polyline points="54,28 60,32 54,36" />
              <polyline points="28,54 32,60 36,54" />
              <polyline points="10,28 4,32 10,36" />
              <circle cx="32" cy="32" r="8" />
              <circle cx="32" cy="32" r="2.5" fill="#8B1A2B" stroke="none" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 10 — Shield Knot
            An angular, interlocking 4-point knot within a
            diamond/shield shape. Protection, unity, unbreakable.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 10</span>
            <span className="text-cream-muted text-xs">Shield Knot</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Four angular loops interlocking in a diamond shape,
            forming a shield knot. An unbreakable bond. Protection and unity.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="2.5" strokeLinecap="square" strokeLinejoin="miter">
              {/* Outer diamond */}
              <polygon points="32,4 58,32 32,60 6,32" />
              {/* Inner diamond (rotated) */}
              <polygon points="32,16 46,32 32,48 18,32" />
              {/* Cross connections */}
              <line x1="32" y1="4" x2="32" y2="16" />
              <line x1="58" y1="32" x2="46" y2="32" />
              <line x1="32" y1="60" x2="32" y2="48" />
              <line x1="6" y1="32" x2="18" y2="32" />
              {/* Corner accents — angular hooks */}
              <polyline points="20,18 26,18 26,24" />
              <polyline points="44,18 38,18 38,24" />
              <polyline points="20,46 26,46 26,40" />
              <polyline points="44,46 38,46 38,40" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 58,32 32,60 6,32" />
              <polygon points="32,16 46,32 32,48 18,32" />
              <line x1="32" y1="4" x2="32" y2="16" />
              <line x1="58" y1="32" x2="46" y2="32" />
              <line x1="32" y1="60" x2="32" y2="48" />
              <line x1="6" y1="32" x2="18" y2="32" />
              <polyline points="20,18 26,18 26,24" />
              <polyline points="44,18 38,18 38,24" />
              <polyline points="20,46 26,46 26,40" />
              <polyline points="44,46 38,46 38,40" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="4.5" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 58,32 32,60 6,32" />
              <polygon points="32,16 46,32 32,48 18,32" />
              <line x1="32" y1="4" x2="32" y2="16" />
              <line x1="58" y1="32" x2="46" y2="32" />
              <line x1="32" y1="60" x2="32" y2="48" />
              <line x1="6" y1="32" x2="18" y2="32" />
              <polyline points="20,18 26,18 26,24" />
              <polyline points="44,18 38,18 38,24" />
              <polyline points="20,46 26,46 26,40" />
              <polyline points="44,46 38,46 38,40" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="28" viewBox="0 0 64 64" fill="none" stroke="#8B1A2B" strokeWidth="3" strokeLinecap="square" strokeLinejoin="miter">
              <polygon points="32,4 58,32 32,60 6,32" />
              <polygon points="32,16 46,32 32,48 18,32" />
              <line x1="32" y1="4" x2="32" y2="16" />
              <line x1="58" y1="32" x2="46" y2="32" />
              <line x1="32" y1="60" x2="32" y2="48" />
              <line x1="6" y1="32" x2="18" y2="32" />
              <polyline points="20,18 26,18 26,24" />
              <polyline points="44,18 38,18 38,24" />
              <polyline points="20,46 26,46 26,40" />
              <polyline points="44,46 38,46 38,40" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">
              Lothar AI
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
