import { getFactionVol2ById } from '@/entities/faction/model/vol2-data'
import type { FactionId } from '@/entities/faction/model/types'
import type { Subfaction } from '@/entities/faction/model/vol2-types'
import BackButton from '@/shared/ui/BackButton'
import AppFooter from '@/shared/ui/AppFooter'

const LOGOS: Record<string, string> = {
  terminidos: '/ref-assets/terminidos.png',
  automatas:  '/ref-assets/automatas.png',
  iluminados: '/ref-assets/iluminados.png',
}

function SubfactionCard({
  subfaction, color, onClick,
}: {
  subfaction: Subfaction; color: string; onClick: () => void
}) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full flex flex-col items-center justify-center gap-4 p-6 cursor-pointer transition-all duration-300 focus-visible:outline-none"
      style={{
        aspectRatio: '3/4',
        border: `1px solid ${color}30`,
        background: 'rgba(0,0,0,0.15)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${color}80`
        e.currentTarget.style.background = `${color}08`
        e.currentTarget.style.boxShadow = `0 0 32px ${color}10`
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = `${color}30`
        e.currentTarget.style.background = 'rgba(0,0,0,0.15)'
        e.currentTarget.style.boxShadow = 'none'
      }}
    >
      {/* Corner accents */}
      {(['top-2 left-2 border-t border-l', 'top-2 right-2 border-t border-r',
        'bottom-2 left-2 border-b border-l', 'bottom-2 right-2 border-b border-r'] as const).map((cls) => (
        <span
          key={cls}
          className={`absolute w-3 h-3 transition-colors duration-300 ${cls}`}
          style={{ borderColor: `${color}30` }}
          ref={(el) => {
            el?.parentElement?.addEventListener('mouseenter', () => { if (el) el.style.borderColor = `${color}90` })
            el?.parentElement?.addEventListener('mouseleave', () => { if (el) el.style.borderColor = `${color}30` })
          }}
        />
      ))}

      {/* Name */}
      <span
        className="font-heading text-xl sm:text-2xl tracking-widest uppercase leading-tight text-center"
        style={{ color }}
      >
        {subfaction.name}
      </span>

      {/* Accent line */}
      <span
        className="block h-0.5 w-10 transition-all duration-300 group-hover:w-16"
        style={{ backgroundColor: color }}
      />

      {/* Description excerpt */}
      <p className="font-body text-xs text-text-muted text-center leading-relaxed">
        {subfaction.description}
      </p>

      {/* Unit count */}
      <span
        className="font-mono text-xs tracking-wider opacity-50 group-hover:opacity-80 transition-opacity"
        style={{ color }}
      >
        {subfaction.enemies.length} unidades registradas
      </span>
    </button>
  )
}

interface Props {
  factionId: FactionId
  onBack: () => void
  onSelectSubfaction: (subfactionId: string) => void
}

export default function V2SubfactionSelectPage({ factionId, onBack, onSelectSubfaction }: Props) {
  const faction = getFactionVol2ById(factionId)
  if (!faction) return null

  const { name, color, subfactions } = faction

  return (
    <div className="min-h-screen flex flex-col animate-fade-up">
      {/* Header */}
      <header
        className="shrink-0 flex items-center justify-between px-4 sm:px-6 py-4"
        style={{ borderBottom: `1px solid ${color}30` }}
      >
        <div className="flex items-center gap-3">
          <img
            src={LOGOS[factionId]}
            alt={name}
            className="w-9 h-9 object-contain"
            style={{ filter: `drop-shadow(0 0 6px ${color}50)` }}
          />
          <span
            className="font-heading font-black text-base sm:text-lg tracking-widest uppercase"
            style={{ color }}
          >
            {name}
          </span>
        </div>
        <img
          src="/ref-assets/logo-manual.png"
          alt="Manual de Exterminio"
          className="h-11 object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </header>

      {/* Back button */}
      <div className="shrink-0 px-4 sm:px-6 lg:px-8 pt-3 pb-1">
        <BackButton onClick={onBack} />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 py-8">
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-8">
          Selecciona una subfacción
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl">
          {subfactions.map((sf) => (
            <SubfactionCard
              key={sf.id}
              subfaction={sf}
              color={color}
              onClick={() => onSelectSubfaction(sf.id)}
            />
          ))}
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
