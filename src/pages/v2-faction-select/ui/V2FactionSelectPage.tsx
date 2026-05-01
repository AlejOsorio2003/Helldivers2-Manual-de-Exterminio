import { factionsVol2 } from '@/entities/faction/model/vol2-data'
import type { FactionId } from '@/entities/faction/model/types'
import BackButton from '@/shared/ui/BackButton'
import FactionCard from '@/widgets/faction-card/ui/FactionCard'
import AppHeader from '@/shared/ui/AppHeader'
import AppFooter from '@/shared/ui/AppFooter'

interface Props {
  onBack: () => void
  onSelectFaction: (id: FactionId) => void
}

export default function V2FactionSelectPage({ onBack, onSelectFaction }: Props) {
  return (
    <div className="min-h-screen flex flex-col animate-fade-up">
      <AppHeader />

      <div className="shrink-0 px-4 sm:px-8 lg:px-12 pt-3 pb-1">
        <BackButton onClick={onBack} />
      </div>

      <main className="flex-1 flex flex-col items-center justify-center px-4 sm:px-8 lg:px-12 py-8">
        <p className="font-mono text-xs text-text-muted tracking-widest uppercase mb-8">
          Selecciona una facción enemiga
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full max-w-3xl">
          {factionsVol2.map((faction) => {
            const isEmpty = faction.subfactions.length === 0
            return (
              <FactionCard
                key={faction.id}
                faction={faction}
                subtitle={isEmpty ? undefined : `${faction.subfactions.length} subfacciones detectadas`}
                disabled={isEmpty}
                onClick={() => !isEmpty && onSelectFaction(faction.id)}
              />
            )
          })}
        </div>
      </main>

      <AppFooter />
    </div>
  )
}
