import type { FactionId, Enemy } from './types'

export interface Subfaction {
  id: string
  name: string
  description: string
  enemies: Enemy[]
}

export interface FactionVol2 {
  id: FactionId
  name: string
  color: string
  tagline: string
  subfactions: Subfaction[]
}
