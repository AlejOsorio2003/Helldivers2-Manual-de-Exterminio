export type FactionId = 'terminidos' | 'automatas' | 'iluminados'

export type ThreatLevel = 1 | 2 | 3 | 4 | 5

export interface Enemy {
  id: string
  name: string
  description: string
  threat: ThreatLevel
  image: string
}

export interface Faction {
  id: FactionId
  name: string
  color: string
  tagline: string
  enemies: Enemy[]
}
