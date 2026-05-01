import type { Enemy } from '@/entities/faction/model/types'
import EnemyItem from './EnemyItem'

interface Props {
  enemies: Enemy[]
  factionColor: string
}

export default function EnemyAccordion({ enemies, factionColor }: Props) {
  return (
    <div
      className="border border-white/8 overflow-hidden"
      style={{ borderTopColor: `${factionColor}40` }}
    >
      {enemies.map((enemy, i) => (
        <EnemyItem
          key={enemy.id}
          enemy={enemy}
          factionColor={factionColor}
          index={i}
        />
      ))}
    </div>
  )
}
