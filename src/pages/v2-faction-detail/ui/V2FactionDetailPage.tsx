import { useState, useRef } from 'react'
import { getSubfactionById } from '@/entities/faction/model/vol2-data'
import { getFactionVol2ById } from '@/entities/faction/model/vol2-data'
import type { FactionId, Enemy, ThreatLevel } from '@/entities/faction/model/types'
import BackButton from '@/shared/ui/BackButton'
import AppFooter from '@/shared/ui/AppFooter'
import { asset } from '@/shared/lib/asset'

const LOGOS: Record<string, string> = {
  terminidos: asset('/ref-assets/terminidos.png'),
  automatas:  asset('/ref-assets/automatas.png'),
  iluminados: asset('/ref-assets/iluminados.png'),
}

const THREAT_LABELS: Record<ThreatLevel, string> = {
  1: 'BAJO', 2: 'MODERADO', 3: 'ELEVADO', 4: 'ALTO', 5: 'CRÍTICO',
}

function buildSlots(total: number, current: number): (number | '…' | null)[] {
  if (total <= 5) {
    const slots: (number | '…' | null)[] = Array.from({ length: total }, (_, i) => i)
    while (slots.length < 5) slots.push(null)
    return slots
  }
  const last = total - 1
  if (current <= 2)        return [0, 1, 2, '…', last]
  if (current >= last - 2) return [0, '…', last - 2, last - 1, last]
  return [0, '…', current, '…', last]
}

function UnitCard({ enemy, color }: { enemy: Enemy; color: string }) {
  const [imgError, setImgError] = useState(false)

  return (
    <div className="w-full animate-fade-in" style={{ border: `1px solid ${color}25`, background: '#0f1824' }}>
      <div className="flex flex-col-reverse xs:flex-row items-center xs:items-start gap-4 p-4 sm:p-6">
        <div className="flex-1 min-w-0 text-center xs:text-left">
          <h2
            className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl tracking-widest uppercase leading-tight"
            style={{ color }}
          >
            {enemy.name}
          </h2>
          <div className="flex items-center justify-center xs:justify-start gap-2 mt-3 flex-wrap">
            <span className="font-mono text-[10px] text-text-muted/60 uppercase tracking-widest">Amenaza:</span>
            <span className="font-mono text-[10px] uppercase tracking-widest font-bold" style={{ color }}>
              {THREAT_LABELS[enemy.threat]}
            </span>
            <span className="flex gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <span
                  key={i}
                  className="block w-1.5 h-1.5 rounded-full"
                  style={{
                    backgroundColor: i < enemy.threat ? color : 'rgba(255,255,255,0.12)',
                    boxShadow: i < enemy.threat ? `0 0 4px ${color}80` : 'none',
                  }}
                />
              ))}
            </span>
          </div>
        </div>

        <div
          className="shrink-0 overflow-hidden flex items-center justify-center"
          style={{
            width: 'clamp(100px, 28vw, 180px)',
            height: 'clamp(80px, 21vw, 140px)',
            border: `1px solid ${color}20`,
            background: 'rgba(255,255,255,0.015)',
          }}
        >
          {!imgError ? (
            <img
              src={asset(enemy.image)}
              alt={enemy.name}
              loading="lazy"
              onError={() => setImgError(true)}
              className="w-full h-full object-contain p-2"
            />
          ) : (
            <span className="font-mono text-[9px] tracking-widest opacity-25" style={{ color }}>IMG N/A</span>
          )}
        </div>
      </div>

      <div style={{ height: '1px', backgroundColor: color, opacity: 0.25 }} />

      <div className="p-4 sm:p-6">
        <p className="font-body text-sm sm:text-base text-text-muted" style={{ lineHeight: '1.85' }}>
          {enemy.description}
        </p>
      </div>
    </div>
  )
}

function PaginationBar({
  total, current, color, onPrev, onNext, onChange,
}: {
  total: number; current: number; color: string
  onPrev: () => void; onNext: () => void; onChange: (i: number) => void
}) {
  const canPrev = current > 0
  const canNext = current < total - 1
  const slots = buildSlots(total, current)

  const navBtn = (dir: 'prev' | 'next', active: boolean, onClick: () => void) => (
    <button
      onClick={() => active && onClick()}
      aria-label={dir === 'prev' ? 'Página anterior' : 'Página siguiente'}
      className="flex items-center justify-center w-10 h-10 sm:w-8 sm:h-8 shrink-0 transition-all duration-200 focus-visible:outline-none touch-manipulation"
      style={{
        border: active ? `1px solid ${color}40` : '1px solid rgba(255,255,255,0.08)',
        background: 'rgba(0,0,0,0.25)',
        cursor: active ? 'pointer' : 'default',
        opacity: active ? 1 : 0.25,
        borderRadius: '4px',
      }}
      onMouseEnter={(e) => { if (active) e.currentTarget.style.borderColor = `${color}80` }}
      onMouseLeave={(e) => { if (active) e.currentTarget.style.borderColor = `${color}40` }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
        <path
          d={dir === 'prev' ? 'M8 2L4 6L8 10' : 'M4 2L8 6L4 10'}
          stroke={active ? color : 'rgba(255,255,255,0.3)'}
          strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
        />
      </svg>
    </button>
  )

  return (
    <div className="shrink-0 w-full" style={{ borderTop: `1px solid ${color}20` }}>
      <div className="flex items-center justify-center gap-1.5 py-3">
        {navBtn('prev', canPrev, onPrev)}
        {slots.map((slot, i) => {
          if (slot === null) return <span key={`e-${i}`} className="w-9 h-9 sm:w-7 sm:h-7 shrink-0" />
          if (slot === '…') return (
            <span key={`ell-${i}`} className="w-9 h-9 sm:w-7 sm:h-7 shrink-0 flex items-center justify-center font-mono text-xs text-text-muted/40">…</span>
          )
          const isActive = slot === current
          return (
            <button
              key={slot}
              onClick={() => onChange(slot)}
              className="w-9 h-9 sm:w-7 sm:h-7 shrink-0 font-mono text-[11px] transition-all duration-200 cursor-pointer focus-visible:outline-none touch-manipulation"
              style={{
                color: isActive ? color : 'rgba(255,255,255,0.3)',
                border: isActive ? `1px solid ${color}60` : '1px solid transparent',
                background: isActive ? `${color}12` : 'transparent',
              }}
            >
              {slot + 1}
            </button>
          )
        })}
        {navBtn('next', canNext, onNext)}
      </div>
    </div>
  )
}

interface Props {
  factionId: FactionId
  subfactionId: string
  onBack: () => void
}

export default function V2FactionDetailPage({ factionId, subfactionId, onBack }: Props) {
  const faction = getFactionVol2ById(factionId)
  const subfaction = getSubfactionById(factionId, subfactionId)
  const [currentPage, setCurrentPage] = useState(0)
  const touchStartX = useRef<number | null>(null)
  const touchStartY = useRef<number | null>(null)

  if (!faction || !subfaction) return null

  const { color } = faction
  const { name, enemies } = subfaction
  const total = enemies.length
  const enemy = enemies[currentPage]

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
    touchStartY.current = e.touches[0].clientY
  }

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    const dy = e.changedTouches[0].clientY - touchStartY.current
    if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
      if (dx < 0 && currentPage < total - 1) setCurrentPage((p) => p + 1)
      if (dx > 0 && currentPage > 0) setCurrentPage((p) => p - 1)
    }
    touchStartX.current = null
    touchStartY.current = null
  }

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
            alt={faction.name}
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
          src={asset('/ref-assets/logo-manual.png')}
          alt="Manual de Exterminio"
          className="h-11 object-contain"
          style={{ filter: 'brightness(0) invert(1)' }}
        />
      </header>

      {/* Back button */}
      <div className="shrink-0 px-4 sm:px-6 lg:px-8 pt-3 pb-1">
        <BackButton onClick={onBack} />
      </div>

      {/* Card area — swipe left/right to change page */}
      <main
        className="flex-1 min-h-0 overflow-y-auto flex flex-col items-center px-4 sm:px-6 lg:px-8 py-3"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <div className="w-full max-w-3xl">
          <UnitCard key={enemy.id} enemy={enemy} color={color} />
        </div>
      </main>

      {/* Pagination */}
      <PaginationBar
        total={total}
        current={currentPage}
        color={color}
        onPrev={() => setCurrentPage((p) => p - 1)}
        onNext={() => setCurrentPage((p) => p + 1)}
        onChange={setCurrentPage}
      />

      <AppFooter />
    </div>
  )
}
