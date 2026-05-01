import BackButton from '@/shared/ui/BackButton'
import AppHeader from '@/shared/ui/AppHeader'
import AppFooter from '@/shared/ui/AppFooter'

interface Props {
  onBack: () => void
  onSelectVolume: (vol: 1 | 2) => void
}

function VolumeCard({
  label, sub, active, onClick,
}: {
  label: string; sub: string; active: boolean; onClick?: () => void
}) {
  const base = {
    width: 'min(220px, 70vw)',
    aspectRatio: '3/4',
    borderRadius: '8px',
    display: 'flex',
    flexDirection: 'column' as const,
    alignItems: 'center',
    justifyContent: 'center',
    gap: '16px',
    padding: '2rem',
    position: 'relative' as const,
    transition: 'all 0.3s',
    flexShrink: 0,
  }

  if (!active) {
    return (
      <div
        style={{
          ...base,
          border: '1px solid rgba(255,255,255,0.1)',
          background: 'rgba(0,0,0,0.1)',
          opacity: 0.4,
          cursor: 'default',
        }}
      >
        <span className="font-heading font-black text-4xl text-white tracking-wider">{label}</span>
        <span className="font-body text-base text-text-muted tracking-wide text-center">{sub}</span>
        <span className="font-mono text-[10px] text-text-muted/50 tracking-widest uppercase">Próximamente</span>
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      className="focus-visible:outline-none cursor-pointer"
      style={{
        ...base,
        border: '1px solid rgba(255,204,0,0.4)',
        background: 'rgba(255,204,0,0.02)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,204,0,0.85)'
        e.currentTarget.style.background = 'rgba(255,204,0,0.07)'
        e.currentTarget.style.boxShadow = '0 0 32px rgba(255,204,0,0.08)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,204,0,0.4)'
        e.currentTarget.style.background = 'rgba(255,204,0,0.02)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Corner accents */}
      {(['top-2 left-2 border-t border-l', 'top-2 right-2 border-t border-r',
        'bottom-2 left-2 border-b border-l', 'bottom-2 right-2 border-b border-r'] as const).map((cls) => (
        <span
          key={cls}
          className={`absolute w-3 h-3 transition-colors duration-300 ${cls}`}
          style={{ borderColor: 'rgba(255,204,0,0.3)' }}
          ref={(el) => {
            el?.parentElement?.addEventListener('mouseenter', () => { if (el) el.style.borderColor = 'rgba(255,204,0,0.9)' })
            el?.parentElement?.addEventListener('mouseleave', () => { if (el) el.style.borderColor = 'rgba(255,204,0,0.3)' })
          }}
        />
      ))}
      <span className="font-heading font-black text-4xl text-white tracking-wider">{label}</span>
      <span className="font-body text-base text-text-muted tracking-wide text-center">{sub}</span>
    </button>
  )
}

export default function VolumeSelectPage({ onBack, onSelectVolume }: Props) {
  return (
    <div className="min-h-screen flex flex-col animate-fade-up">
      <AppHeader />

      {/* Back button — always visible below header */}
      <div className="shrink-0 px-4 sm:px-8 pt-3 pb-1">
        <BackButton onClick={onBack} />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 py-8 gap-8 sm:gap-10 sm:flex-row">
        <VolumeCard label="Vol. 1" sub="Facciones Principales" active onClick={() => onSelectVolume(1)} />
        <VolumeCard label="Vol. 2" sub="Subfacciones" active onClick={() => onSelectVolume(2)} />
      </main>

      <AppFooter />
    </div>
  )
}
