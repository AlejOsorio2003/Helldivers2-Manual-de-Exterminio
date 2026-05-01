import type { FactionId } from '@/entities/faction/model/types'

const LOGOS: Record<string, string> = {
  terminidos: '/ref-assets/terminidos.png',
  automatas:  '/ref-assets/automatas.png',
  iluminados: '/ref-assets/iluminados.png',
}

interface Props {
  faction: {
    id: FactionId
    name: string
    color: string
    tagline: string
  }
  subtitle?: string
  disabled?: boolean
  onClick: () => void
}

export default function FactionCard({ faction, subtitle, disabled = false, onClick }: Props) {
  const { id, name, color, tagline } = faction

  if (disabled) {
    return (
      <div
        className="relative w-full flex flex-col items-center justify-center gap-5 p-6"
        style={{
          aspectRatio: '3/4',
          border: '1px solid rgba(255,255,255,0.08)',
          background: 'rgba(0,0,0,0.1)',
          opacity: 0.35,
        }}
      >
        <div className="w-20 h-20 flex items-center justify-center">
          <img src={LOGOS[id]} alt={name} className="w-full h-full object-contain opacity-50" />
        </div>
        <div className="flex flex-col items-center gap-2">
          <span className="font-heading text-xl tracking-widest uppercase text-text-primary">{name}</span>
          <span className="block h-0.5 w-10" style={{ backgroundColor: color }} />
          <span className="font-mono text-[10px] text-text-muted tracking-wider uppercase mt-1">{tagline}</span>
        </div>
        <span className="font-mono text-[10px] text-text-muted/50 tracking-widest uppercase">Próximamente</span>
      </div>
    )
  }

  return (
    <button
      onClick={onClick}
      className="group relative w-full flex flex-col items-center justify-center gap-5 p-6 cursor-pointer transition-all duration-300 focus-visible:outline-none"
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

      {/* Logo */}
      <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
        <img
          src={LOGOS[id]}
          alt={name}
          className="w-full h-full object-contain"
          style={{ filter: `drop-shadow(0 0 12px ${color}50)` }}
        />
      </div>

      {/* Name + accent line */}
      <div className="flex flex-col items-center gap-2">
        <span className="font-heading text-xl tracking-widest uppercase text-text-primary">{name}</span>
        <span
          className="block h-0.5 w-10 transition-all duration-300 group-hover:w-16"
          style={{ backgroundColor: color }}
        />
        <span className="font-mono text-[10px] text-text-muted tracking-wider uppercase mt-1 text-center">
          {tagline}
        </span>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <span
          className="font-mono text-xs tracking-wider opacity-50 group-hover:opacity-80 transition-opacity text-center"
          style={{ color }}
        >
          {subtitle}
        </span>
      )}
    </button>
  )
}
