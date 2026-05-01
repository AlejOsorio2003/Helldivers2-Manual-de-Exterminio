import type { ReactNode } from 'react'
import { asset } from '@/shared/lib/asset'

interface Props {
  left?: ReactNode
  borderColor?: string
}

export default function AppHeader({ left, borderColor = 'rgba(255,204,0,0.2)' }: Props) {
  return (
    <header
      className="flex items-center justify-between px-4 sm:px-6 py-4"
      style={{ borderBottom: `1px solid ${borderColor}` }}
    >
      <div className="flex items-center">{left}</div>
      <img
        src={asset('/ref-assets/logo-manual.png')}
        alt="Manual de Exterminio"
        className="h-11 object-contain"
        style={{ filter: 'brightness(0) invert(1)' }}
      />
    </header>
  )
}
