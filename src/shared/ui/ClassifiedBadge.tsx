export default function ClassifiedBadge() {
  return (
    <div
      className="
        inline-block border-2 border-red-600/80
        px-4 py-1
        font-mono text-xs tracking-[0.3em] text-red-500/90
        uppercase select-none
        rotate-[-2deg]
        opacity-80
      "
      style={{ textShadow: '0 0 8px rgba(239,68,68,0.4)' }}
    >
      ⬛ CLASIFICADO ⬛
    </div>
  )
}
