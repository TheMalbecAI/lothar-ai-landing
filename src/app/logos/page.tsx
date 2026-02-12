export default function LogoShowcase() {
  return (
    <div className="min-h-screen bg-surface p-8 md:p-16">
      <h1 className="text-3xl md:text-5xl font-heading font-bold text-cream text-center mb-4">
        Logo Options — Fresh Start
      </h1>
      <p className="text-cream-muted text-center mb-16 max-w-xl mx-auto">
        10 completely new directions. No rules, no Norse-only constraint.
        Bold fills, lettermarks, abstract shapes, modern tech energy.
        Pick a number (1-10) or describe what catches your eye.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

        {/* ═══════════════════════════════════════════
            OPTION 1 — Monolithic L
            A single bold, filled geometric "L" with a sharp
            diagonal cut. Thick, heavy, unmistakable.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 1</span>
            <span className="text-cream-muted text-xs">Monolithic L</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A single bold filled &quot;L&quot; with a sharp 45-degree diagonal cut
            on the top. Heavy, confident, modern. Reads instantly.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="#8B1A2B" stroke="none">
              <polygon points="10,4 26,4 26,44 54,44 54,58 10,58" />
              {/* Diagonal cut on top corner */}
              <polygon points="10,4 26,4 26,16" fill="#0A0A0A" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="#8B1A2B" stroke="none">
              <polygon points="10,4 26,4 26,44 54,44 54,58 10,58" />
              <polygon points="10,4 26,4 26,16" fill="#0A0A0A" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="#8B1A2B" stroke="none">
              <polygon points="10,4 26,4 26,44 54,44 54,58 10,58" />
              <polygon points="10,4 26,4 26,16" fill="#0A0A0A" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="#8B1A2B" stroke="none">
              <polygon points="10,4 26,4 26,44 54,44 54,58 10,58" />
              <polygon points="10,4 26,4 26,16" fill="#0A0A0A" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 2 — Stacked Blocks
            Two offset rectangles forming an abstract "L"
            shape. Brutalist, architectural, premium.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 2</span>
            <span className="text-cream-muted text-xs">Stacked Blocks</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Two offset rectangles forming an abstract arrangement.
            Brutalist, architectural, like building blocks of a system.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              {/* Tall vertical block */}
              <rect x="8" y="4" width="20" height="56" rx="2" fill="#8B1A2B" />
              {/* Short horizontal block, offset */}
              <rect x="20" y="36" width="36" height="20" rx="2" fill="#A8293D" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <rect x="8" y="4" width="20" height="56" rx="2" fill="#8B1A2B" />
              <rect x="20" y="36" width="36" height="20" rx="2" fill="#A8293D" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <rect x="8" y="4" width="20" height="56" rx="2" fill="#8B1A2B" />
              <rect x="20" y="36" width="36" height="20" rx="2" fill="#A8293D" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <rect x="8" y="4" width="20" height="56" rx="2" fill="#8B1A2B" />
              <rect x="20" y="36" width="36" height="20" rx="2" fill="#A8293D" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 3 — Abstract Flame
            A rising flame/torch shape. Energy, ignition,
            transformation. Filled gradient feel using two tones.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 3</span>
            <span className="text-cream-muted text-xs">Abstract Flame</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A rising flame or torch. Two overlapping shapes create depth.
            Ignition, transformation, the spark that starts everything.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              {/* Back flame (darker) */}
              <path d="M32,4 Q46,20 44,36 Q42,50 32,58 Q22,50 20,36 Q18,20 32,4Z" fill="#6B0F1E" />
              {/* Front flame (lighter, offset) */}
              <path d="M32,14 Q42,26 40,38 Q38,48 32,54 Q26,48 24,38 Q22,26 32,14Z" fill="#8B1A2B" />
              {/* Inner bright core */}
              <path d="M32,28 Q36,34 35,40 Q34,44 32,48 Q30,44 29,40 Q28,34 32,28Z" fill="#C9A84C" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <path d="M32,4 Q46,20 44,36 Q42,50 32,58 Q22,50 20,36 Q18,20 32,4Z" fill="#6B0F1E" />
              <path d="M32,14 Q42,26 40,38 Q38,48 32,54 Q26,48 24,38 Q22,26 32,14Z" fill="#8B1A2B" />
              <path d="M32,28 Q36,34 35,40 Q34,44 32,48 Q30,44 29,40 Q28,34 32,28Z" fill="#C9A84C" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <path d="M32,4 Q46,20 44,36 Q42,50 32,58 Q22,50 20,36 Q18,20 32,4Z" fill="#6B0F1E" />
              <path d="M32,14 Q42,26 40,38 Q38,48 32,54 Q26,48 24,38 Q22,26 32,14Z" fill="#8B1A2B" />
              <path d="M32,28 Q36,34 35,40 Q34,44 32,48 Q30,44 29,40 Q28,34 32,28Z" fill="#C9A84C" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <path d="M32,4 Q46,20 44,36 Q42,50 32,58 Q22,50 20,36 Q18,20 32,4Z" fill="#6B0F1E" />
              <path d="M32,14 Q42,26 40,38 Q38,48 32,54 Q26,48 24,38 Q22,26 32,14Z" fill="#8B1A2B" />
              <path d="M32,28 Q36,34 35,40 Q34,44 32,48 Q30,44 29,40 Q28,34 32,28Z" fill="#C9A84C" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 4 — Split Diamond
            A diamond split down the center with two
            different tones. Duality, AI + human.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 4</span>
            <span className="text-cream-muted text-xs">Split Diamond</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A diamond split vertically into two halves. Left dark, right light.
            Duality of AI and human creativity working together.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              {/* Left half */}
              <polygon points="32,4 6,32 32,60 32,4" fill="#8B1A2B" />
              {/* Right half */}
              <polygon points="32,4 58,32 32,60 32,4" fill="#C9A84C" />
              {/* Center gap line */}
              <line x1="32" y1="4" x2="32" y2="60" stroke="#0A0A0A" strokeWidth="2" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="32,4 6,32 32,60 32,4" fill="#8B1A2B" />
              <polygon points="32,4 58,32 32,60 32,4" fill="#C9A84C" />
              <line x1="32" y1="4" x2="32" y2="60" stroke="#0A0A0A" strokeWidth="2" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="32,4 6,32 32,60 32,4" fill="#8B1A2B" />
              <polygon points="32,4 58,32 32,60 32,4" fill="#C9A84C" />
              <line x1="32" y1="4" x2="32" y2="60" stroke="#0A0A0A" strokeWidth="2" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="32,4 6,32 32,60 32,4" fill="#8B1A2B" />
              <polygon points="32,4 58,32 32,60 32,4" fill="#C9A84C" />
              <line x1="32" y1="4" x2="32" y2="60" stroke="#0A0A0A" strokeWidth="2" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 5 — Overlapping Circles
            Two circles overlapping — like a Venn diagram.
            The intersection is gold. AI meets brand.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 5</span>
            <span className="text-cream-muted text-xs">Convergence</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Two circles overlapping. The intersection highlighted in gold.
            Where AI meets your brand, something new is created.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              <circle cx="24" cy="32" r="20" fill="#8B1A2B" opacity="0.9" />
              <circle cx="40" cy="32" r="20" fill="#8B1A2B" opacity="0.9" />
              {/* Intersection highlight — approximated lens shape */}
              <path d="M32,14 A20,20 0 0,1 32,50 A20,20 0 0,1 32,14Z" fill="#C9A84C" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <circle cx="24" cy="32" r="20" fill="#8B1A2B" opacity="0.9" />
              <circle cx="40" cy="32" r="20" fill="#8B1A2B" opacity="0.9" />
              <path d="M32,14 A20,20 0 0,1 32,50 A20,20 0 0,1 32,14Z" fill="#C9A84C" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <circle cx="24" cy="32" r="20" fill="#8B1A2B" opacity="0.9" />
              <circle cx="40" cy="32" r="20" fill="#8B1A2B" opacity="0.9" />
              <path d="M32,14 A20,20 0 0,1 32,50 A20,20 0 0,1 32,14Z" fill="#C9A84C" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <circle cx="24" cy="32" r="20" fill="#8B1A2B" opacity="0.9" />
              <circle cx="40" cy="32" r="20" fill="#8B1A2B" opacity="0.9" />
              <path d="M32,14 A20,20 0 0,1 32,50 A20,20 0 0,1 32,14Z" fill="#C9A84C" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 6 — Rising Arrow
            An abstract upward arrow/chevron. Growth,
            performance, conversion. Thick and filled.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 6</span>
            <span className="text-cream-muted text-xs">Rising Arrow</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A thick upward arrow / chevron. Performance, growth, ads that convert.
            Clean, filled, impossible to misread. Scale and momentum.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              {/* Outer arrow shape */}
              <polygon points="32,4 58,36 46,36 46,60 18,60 18,36 6,36" fill="#8B1A2B" />
              {/* Inner cutout to make it a chevron/hollow arrow */}
              <polygon points="32,18 44,36 38,36 38,60 26,60 26,36 20,36" fill="#0A0A0A" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="32,4 58,36 46,36 46,60 18,60 18,36 6,36" fill="#8B1A2B" />
              <polygon points="32,18 44,36 38,36 38,60 26,60 26,36 20,36" fill="#0A0A0A" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="32,4 58,36 46,36 46,60 18,60 18,36 6,36" fill="#8B1A2B" />
              <polygon points="32,18 44,36 38,36 38,60 26,60 26,36 20,36" fill="#0A0A0A" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="32,4 58,36 46,36 46,60 18,60 18,36 6,36" fill="#8B1A2B" />
              <polygon points="32,18 44,36 38,36 38,60 26,60 26,36 20,36" fill="#0A0A0A" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 7 — Neural Prism
            A triangular prism with light refracting out.
            AI processing, transformation, output.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 7</span>
            <span className="text-cream-muted text-xs">Neural Prism</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A triangular prism with beams refracting out the right side.
            Data goes in, premium ads come out. Transformation through AI.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              {/* Prism triangle */}
              <polygon points="10,56 30,6 50,56" fill="#8B1A2B" />
              {/* Input beam */}
              <line x1="2" y1="32" x2="24" y2="32" stroke="#F5F0E8" strokeWidth="2" />
              {/* Output beams (refracted) */}
              <line x1="40" y1="20" x2="60" y2="12" stroke="#C9A84C" strokeWidth="2" />
              <line x1="42" y1="32" x2="62" y2="32" stroke="#A8293D" strokeWidth="2" />
              <line x1="40" y1="44" x2="60" y2="52" stroke="#6B0F1E" strokeWidth="2" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="10,56 30,6 50,56" fill="#8B1A2B" />
              <line x1="2" y1="32" x2="24" y2="32" stroke="#F5F0E8" strokeWidth="2.5" />
              <line x1="40" y1="20" x2="60" y2="12" stroke="#C9A84C" strokeWidth="2.5" />
              <line x1="42" y1="32" x2="62" y2="32" stroke="#A8293D" strokeWidth="2.5" />
              <line x1="40" y1="44" x2="60" y2="52" stroke="#6B0F1E" strokeWidth="2.5" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="10,56 30,6 50,56" fill="#8B1A2B" />
              <line x1="2" y1="32" x2="24" y2="32" stroke="#F5F0E8" strokeWidth="3.5" />
              <line x1="40" y1="20" x2="60" y2="12" stroke="#C9A84C" strokeWidth="3.5" />
              <line x1="42" y1="32" x2="62" y2="32" stroke="#A8293D" strokeWidth="3.5" />
              <line x1="40" y1="44" x2="60" y2="52" stroke="#6B0F1E" strokeWidth="3.5" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="10,56 30,6 50,56" fill="#8B1A2B" />
              <line x1="2" y1="32" x2="24" y2="32" stroke="#F5F0E8" strokeWidth="2.5" />
              <line x1="40" y1="20" x2="60" y2="12" stroke="#C9A84C" strokeWidth="2.5" />
              <line x1="42" y1="32" x2="62" y2="32" stroke="#A8293D" strokeWidth="2.5" />
              <line x1="40" y1="44" x2="60" y2="52" stroke="#6B0F1E" strokeWidth="2.5" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 8 — Crimson Circle + Gold Slash
            A solid crimson circle with a bold gold diagonal
            slash cutting through. Disruption, premium, striking.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 8</span>
            <span className="text-cream-muted text-xs">Circle + Slash</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A solid crimson circle cut by a bold gold diagonal slash.
            Simple, striking, disruptive. Impossible to forget.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              <circle cx="32" cy="32" r="28" fill="#8B1A2B" />
              <line x1="16" y1="52" x2="48" y2="12" stroke="#C9A84C" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <circle cx="32" cy="32" r="28" fill="#8B1A2B" />
              <line x1="16" y1="52" x2="48" y2="12" stroke="#C9A84C" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <circle cx="32" cy="32" r="28" fill="#8B1A2B" />
              <line x1="16" y1="52" x2="48" y2="12" stroke="#C9A84C" strokeWidth="7" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="24" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <circle cx="32" cy="32" r="28" fill="#8B1A2B" />
              <line x1="16" y1="52" x2="48" y2="12" stroke="#C9A84C" strokeWidth="6" strokeLinecap="round" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 9 — Triple Chevron Stack
            Three stacked chevrons pointing right.
            Speed, iteration, forward motion. Like >>> on steroids.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 9</span>
            <span className="text-cream-muted text-xs">Triple Chevron</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            Three stacked chevrons pointing right, each getting brighter.
            Acceleration, iteration, relentless forward motion.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              {/* Back chevron (darkest) */}
              <polygon points="4,8 28,32 4,56 14,56 38,32 14,8" fill="#6B0F1E" />
              {/* Middle chevron */}
              <polygon points="16,8 40,32 16,56 26,56 50,32 26,8" fill="#8B1A2B" />
              {/* Front chevron (brightest) */}
              <polygon points="28,8 52,32 28,56 38,56 62,32 38,8" fill="#A8293D" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="4,8 28,32 4,56 14,56 38,32 14,8" fill="#6B0F1E" />
              <polygon points="16,8 40,32 16,56 26,56 50,32 26,8" fill="#8B1A2B" />
              <polygon points="28,8 52,32 28,56 38,56 62,32 38,8" fill="#A8293D" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="4,8 28,32 4,56 14,56 38,32 14,8" fill="#6B0F1E" />
              <polygon points="16,8 40,32 16,56 26,56 50,32 26,8" fill="#8B1A2B" />
              <polygon points="28,8 52,32 28,56 38,56 62,32 38,8" fill="#A8293D" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="4,8 28,32 4,56 14,56 38,32 14,8" fill="#6B0F1E" />
              <polygon points="16,8 40,32 16,56 26,56 50,32 26,8" fill="#8B1A2B" />
              <polygon points="28,8 52,32 28,56 38,56 62,32 38,8" fill="#A8293D" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>

        {/* ═══════════════════════════════════════════
            OPTION 10 — Crimson Crown
            A minimalist 3-point crown. Premium, authority,
            the king of ad generation. Thick filled shape.
        ═══════════════════════════════════════════ */}
        <div className="bg-surface-elevated rounded-2xl p-8 border border-surface-border">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-gold font-heading font-bold text-sm">OPTION 10</span>
            <span className="text-cream-muted text-xs">Crimson Crown</span>
          </div>
          <p className="text-cream-muted text-xs mb-8">
            A minimalist three-point crown. Premium, authoritative, king of the game.
            Simple enough for a favicon, bold enough for a billboard.
          </p>
          <div className="flex items-end gap-8 justify-center mb-8">
            <svg width="80" height="80" viewBox="0 0 64 64" fill="none" stroke="none">
              {/* Crown body */}
              <polygon points="6,50 6,22 20,34 32,12 44,34 58,22 58,50" fill="#8B1A2B" />
              {/* Gold band at base */}
              <rect x="6" y="50" width="52" height="6" rx="1" fill="#C9A84C" />
              {/* Crown point gems */}
              <circle cx="6" cy="22" r="3" fill="#C9A84C" />
              <circle cx="32" cy="12" r="3" fill="#C9A84C" />
              <circle cx="58" cy="22" r="3" fill="#C9A84C" />
            </svg>
            <svg width="48" height="48" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="6,50 6,22 20,34 32,12 44,34 58,22 58,50" fill="#8B1A2B" />
              <rect x="6" y="50" width="52" height="6" rx="1" fill="#C9A84C" />
              <circle cx="6" cy="22" r="3" fill="#C9A84C" />
              <circle cx="32" cy="12" r="3" fill="#C9A84C" />
              <circle cx="58" cy="22" r="3" fill="#C9A84C" />
            </svg>
            <svg width="32" height="32" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="6,50 6,22 20,34 32,12 44,34 58,22 58,50" fill="#8B1A2B" />
              <rect x="6" y="50" width="52" height="6" rx="1" fill="#C9A84C" />
              <circle cx="6" cy="22" r="3.5" fill="#C9A84C" />
              <circle cx="32" cy="12" r="3.5" fill="#C9A84C" />
              <circle cx="58" cy="22" r="3.5" fill="#C9A84C" />
            </svg>
          </div>
          <div className="flex items-center justify-center gap-3 pt-6 border-t border-surface-border">
            <svg width="28" height="24" viewBox="0 0 64 64" fill="none" stroke="none">
              <polygon points="6,50 6,22 20,34 32,12 44,34 58,22 58,50" fill="#8B1A2B" />
              <rect x="6" y="50" width="52" height="6" rx="1" fill="#C9A84C" />
              <circle cx="6" cy="22" r="3" fill="#C9A84C" />
              <circle cx="32" cy="12" r="3" fill="#C9A84C" />
              <circle cx="58" cy="22" r="3" fill="#C9A84C" />
            </svg>
            <span className="font-heading text-xl font-bold tracking-[0.2em] uppercase text-cream">Lothar AI</span>
          </div>
        </div>
      </div>
    </div>
  );
}
