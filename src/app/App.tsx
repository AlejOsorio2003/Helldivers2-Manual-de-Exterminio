import { useState, useCallback } from 'react'
import type { FactionId } from '@/entities/faction/model/types'
import HomePage from '@/pages/home/ui/HomePage'
import VolumeSelectPage from '@/pages/volume-select/ui/VolumeSelectPage'
import FactionSelectPage from '@/pages/faction-select/ui/FactionSelectPage'
import FactionDetailPage from '@/pages/faction-detail/ui/FactionDetailPage'
import V2FactionSelectPage from '@/pages/v2-faction-select/ui/V2FactionSelectPage'
import V2SubfactionSelectPage from '@/pages/v2-subfaction-select/ui/V2SubfactionSelectPage'
import V2FactionDetailPage from '@/pages/v2-faction-detail/ui/V2FactionDetailPage'
import BackgroundOverlay from '@/shared/ui/BackgroundOverlay'

type Page =
  | 'home'
  | 'volume-select'
  | 'faction-select'
  | 'faction-detail'
  | 'v2-faction-select'
  | 'v2-subfaction-select'
  | 'v2-unit-detail'

export default function App() {
  const [page, setPage] = useState<Page>('home')
  const [selectedFaction, setSelectedFaction] = useState<FactionId | null>(null)
  const [selectedSubfaction, setSelectedSubfaction] = useState<string | null>(null)
  const [pageKey, setPageKey] = useState(0)

  const navigate = useCallback(
    (nextPage: Page, factionId?: FactionId, subfactionId?: string) => {
      if (factionId !== undefined) setSelectedFaction(factionId)
      if (subfactionId !== undefined) setSelectedSubfaction(subfactionId)
      setPage(nextPage)
      setPageKey((k) => k + 1)
    },
    [],
  )

  return (
    <div className="min-h-screen grid-bg">
      <BackgroundOverlay />
      {page === 'home' && (
        <HomePage key={pageKey} onEnter={() => navigate('volume-select')} />
      )}

      {page === 'volume-select' && (
        <VolumeSelectPage
          key={pageKey}
          onBack={() => navigate('home')}
          onSelectVolume={(vol) => {
            if (vol === 1) navigate('faction-select')
            if (vol === 2) navigate('v2-faction-select')
          }}
        />
      )}

      {/* Vol. 1 */}
      {page === 'faction-select' && (
        <FactionSelectPage
          key={pageKey}
          onBack={() => navigate('volume-select')}
          onSelectFaction={(id) => navigate('faction-detail', id)}
        />
      )}
      {page === 'faction-detail' && selectedFaction && (
        <FactionDetailPage
          key={pageKey}
          factionId={selectedFaction}
          onBack={() => navigate('faction-select')}
        />
      )}

      {/* Vol. 2 */}
      {page === 'v2-faction-select' && (
        <V2FactionSelectPage
          key={pageKey}
          onBack={() => navigate('volume-select')}
          onSelectFaction={(id) => navigate('v2-subfaction-select', id)}
        />
      )}
      {page === 'v2-subfaction-select' && selectedFaction && (
        <V2SubfactionSelectPage
          key={pageKey}
          factionId={selectedFaction}
          onBack={() => navigate('v2-faction-select')}
          onSelectSubfaction={(sfId) => navigate('v2-unit-detail', undefined, sfId)}
        />
      )}
      {page === 'v2-unit-detail' && selectedFaction && selectedSubfaction && (
        <V2FactionDetailPage
          key={pageKey}
          factionId={selectedFaction}
          subfactionId={selectedSubfaction}
          onBack={() => navigate('v2-subfaction-select')}
        />
      )}
    </div>
  )
}
