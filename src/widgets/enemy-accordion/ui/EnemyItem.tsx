import { useState } from 'react'
import type { Enemy, ThreatLevel } from '@/entities/faction/model/types'

interface Props {
  enemy: Enemy
  factionColor: string
  index: number
}

function ThreatDots({ level, color }: { level: ThreatLevel; color: string }) {
  return (
    <span className="flex gap-1 items-center" aria-label={`Nivel de amenaza: ${level}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span
          key={i}
          className="block w-1.5 h-1.5 rounded-full transition-all duration-200"
          style={{
            backgroundColor: i < level ? color : 'rgba(255,255,255,0.12)',
            boxShadow: i < level ? `0 0 4px ${color}80` : 'none',
          }}
        />
      ))}
    </span>
  )
}

const THREAT_LABELS: Record<ThreatLevel, string> = {
  1: 'BAJO',
  2: 'MODERADO',
  3: 'ELEVADO',
  4: 'ALTO',
  5: 'CRÍTICO',
}

export default function EnemyItem({ enemy, factionColor, index }: Props) {
  const [open, setOpen] = useState(false)
  const [imgError, setImgError] = useState(false)

  return (
    <div className="border-b border-white/8 last:border-b-0">
      {/* ── Header row ─────────────────────────────────────── */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="
          w-full flex items-center justify-between
          px-6 py-4 text-left cursor-pointer
          transition-colors duration-200 hover:bg-white/3
          focus-visible:outline-none group
        "
        aria-expanded={open}
      >
        <div className="flex items-center gap-4">
          <span className="font-mono text-xs text-text-muted w-5 shrink-0">
            {String(index + 1).padStart(2, '0')}
          </span>
          <span
            className="font-display font-bold text-base tracking-widest uppercase transition-colors duration-200"
            style={{ color: open ? factionColor : '#dde3ef' }}
          >
            {enemy.name}
          </span>
        </div>

        <div className="flex items-center gap-4 shrink-0">
          <ThreatDots level={enemy.threat} color={factionColor} />
          <svg
            width="14" height="14" viewBox="0 0 14 14" fill="none"
            className={`transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
            style={{ color: open ? factionColor : 'rgba(255,255,255,0.3)' }}
            aria-hidden
          >
            <path
              d="M3 5L7 9L11 5"
              stroke="currentColor" strokeWidth="1.8"
              strokeLinecap="round" strokeLinejoin="round"
            />
          </svg>
        </div>
      </button>

      {/* ── Expandable content ──────────────────────────────── */}
      <div className={`accordion-grid ${open ? 'open' : ''}`}>
        <div className="accordion-inner">
          <div className="flex gap-6 px-6 pb-6 pt-2">
            {/* Description */}
            <div className="flex-1 min-w-0">
              <p className="font-body text-sm text-text-muted leading-relaxed" style={{ lineHeight: '1.75' }}>
                {enemy.description}
              </p>

              <div className="flex items-center gap-2 mt-4">
                <span className="font-mono text-[10px] text-text-muted/60 uppercase tracking-widest">
                  Nivel de amenaza:
                </span>
                <span
                  className="font-mono text-[10px] uppercase tracking-widest font-bold"
                  style={{ color: factionColor }}
                >
                  {THREAT_LABELS[enemy.threat]}
                </span>
              </div>
            </div>

            {/* Image panel */}
            <div
              className="w-52 shrink-0 hidden sm:flex items-center justify-center overflow-hidden"
              style={{
                border: `1px solid ${factionColor}25`,
                background: 'rgba(255,255,255,0.015)',
                minHeight: '160px',
              }}
            >
              {!imgError ? (
                <img
                  src={enemy.image}
                  alt={enemy.name}
                  loading="lazy"
                  onError={() => setImgError(true)}
                  className="w-full h-full object-contain p-3"
                  style={{ maxHeight: '200px' }}
                />
              ) : (
                <div className="flex flex-col items-center gap-2 p-4">
                  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" style={{ color: factionColor, opacity: 0.25 }}>
                    <rect x="3" y="3" width="22" height="22" rx="2" stroke="currentColor" strokeWidth="1.5"/>
                    <circle cx="9.5" cy="10.5" r="2.5" stroke="currentColor" strokeWidth="1.5"/>
                    <path d="M3 19L9 13L13 17L18 11L25 19" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  <span className="font-mono text-[9px] tracking-widest opacity-25" style={{ color: factionColor }}>
                    IMAGEN NO DISPONIBLE
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
