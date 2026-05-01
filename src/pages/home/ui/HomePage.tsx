import ClassifiedBadge from '@/shared/ui/ClassifiedBadge'
import AppHeader from '@/shared/ui/AppHeader'
import AppFooter from '@/shared/ui/AppFooter'

interface Props { onEnter: () => void }

export default function HomePage({ onEnter }: Props) {
  return (
    <div className="min-h-screen flex flex-col animate-fade-up">
      <AppHeader />

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-6">
        <div className="flex flex-col items-center text-center gap-5 max-w-lg">

          {/* Logo Supertierra */}
          <img
            src="/ref-assets/supertierra.png"
            alt="Logo de la Supertierra"
            className="w-36 h-auto object-contain"
            style={{ filter: 'drop-shadow(0 0 20px rgba(255,204,0,0.25))' }}
          />

          {/* Título */}
          <div className="flex flex-col items-center gap-2">
            <h1
              className="font-heading font-black text-5xl sm:text-6xl tracking-wider uppercase text-white"
              style={{ textShadow: '0 2px 20px rgba(255,204,0,0.1)' }}
            >
              Manual de Exterminio
            </h1>

            {/* Línea de acento dorada */}
            <div className="flex items-center gap-3 w-full justify-center">
              <span className="h-px flex-1" style={{ background: 'rgba(255,204,0,0.5)' }} />
              <span className="w-1.5 h-1.5 rotate-45" style={{ background: '#ffcc00' }} />
              <span className="h-px flex-1" style={{ background: 'rgba(255,204,0,0.5)' }} />
            </div>
          </div>

          {/* Descripción */}
          <div className="flex flex-col gap-1">
            <p className="font-body text-base text-text-muted tracking-wide">
              Guía táctica de eliminación contra
            </p>
            <p className="font-body text-base text-text-muted tracking-wide">
              toda unidad enemiga de la Supertierra.
            </p>
          </div>

          {/* Botón acceder */}
          <button
            onClick={onEnter}
            className="
              group relative mt-1 px-14 py-3
              font-heading text-lg tracking-[0.3em] uppercase text-white
              transition-all duration-300 cursor-pointer
              focus-visible:outline-none
            "
            style={{
              border: '1px solid rgba(255,204,0,0.35)',
              background: 'rgba(255,204,0,0.04)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,204,0,0.75)'
              e.currentTarget.style.background = 'rgba(255,204,0,0.1)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255,204,0,0.35)'
              e.currentTarget.style.background = 'rgba(255,204,0,0.04)'
            }}
          >
            <span
              className="absolute top-0.5 left-0.5 w-2 h-2 border-t border-l transition-colors duration-300"
              style={{ borderColor: 'rgba(255,204,0,0)' }}
              ref={(el) => {
                el?.parentElement?.addEventListener('mouseenter', () => { if (el) el.style.borderColor = 'rgba(255,204,0,0.9)' })
                el?.parentElement?.addEventListener('mouseleave', () => { if (el) el.style.borderColor = 'rgba(255,204,0,0)' })
              }}
            />
            ACCEDER
          </button>

          <ClassifiedBadge />
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
