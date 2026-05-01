/* Capa decorativa que replica exactamente el estilo de la referencia:
   bordes dorados, esquinas HUD, líneas decorativas, viñeta */
export default function BackgroundOverlay() {
  const gold    = 'rgba(255,204,0,0.6)'
  const goldBr  = 'rgba(255,204,0,0.8)'
  const goldDot = 'rgba(255,204,0,0.9)'
  const cyan    = 'rgba(78,144,186,0.6)'
  const cyanLine= 'rgba(78,144,186,0.3)'

  const hGrad = `linear-gradient(90deg, transparent 0%, ${cyanLine} 20%, ${cyanLine} 80%, transparent 100%)`
  const vGrad = `linear-gradient(180deg, transparent 0%, ${cyanLine} 20%, ${cyanLine} 80%, transparent 100%)`
  const hBorder = `linear-gradient(90deg, ${gold} 0%, ${cyan} 50%, ${gold} 100%)`
  const vBorder = `linear-gradient(180deg, ${gold} 0%, ${cyan} 50%, ${gold} 100%)`

  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1, animation: 'flicker 3s ease-in-out infinite' }}
      aria-hidden
    >
      {/* Líneas horizontales decorativas */}
      {[15, 35, 65, 85].map((p) => (
        <div key={p} className="absolute left-0 w-full" style={{ top: `${p}%`, height: 1, background: hGrad }} />
      ))}

      {/* Líneas verticales decorativas */}
      {[10, 30, 70, 90].map((p) => (
        <div key={p} className="absolute top-0 h-full" style={{ left: `${p}%`, width: 1, background: vGrad }} />
      ))}

      {/* Bordes de pantalla */}
      <div className="absolute top-0 left-0 w-full" style={{ height: 2, background: hBorder }} />
      <div className="absolute bottom-0 left-0 w-full" style={{ height: 2, background: hBorder }} />
      <div className="absolute top-0 left-0 h-full"  style={{ width: 2, background: vBorder }} />
      <div className="absolute top-0 right-0 h-full" style={{ width: 2, background: vBorder }} />

      {/* Esquinas HUD */}
      <div className="absolute top-2.5 left-2.5 w-10 h-10 border-t-2 border-l-2" style={{ borderColor: goldBr }} />
      <div className="absolute top-2.5 right-2.5 w-10 h-10 border-t-2 border-r-2" style={{ borderColor: goldBr }} />
      <div className="absolute bottom-2.5 left-2.5 w-10 h-10 border-b-2 border-l-2" style={{ borderColor: goldBr }} />
      <div className="absolute bottom-2.5 right-2.5 w-10 h-10 border-b-2 border-r-2" style={{ borderColor: goldBr }} />

      {/* Puntos de esquina */}
      <div className="absolute rounded-full" style={{ top: 8, left: 8, width: 6, height: 6, background: goldDot }} />
      <div className="absolute rounded-full" style={{ top: 8, right: 8, width: 6, height: 6, background: goldDot }} />
      <div className="absolute rounded-full" style={{ bottom: 8, left: 8, width: 6, height: 6, background: goldDot }} />
      <div className="absolute rounded-full" style={{ bottom: 8, right: 8, width: 6, height: 6, background: goldDot }} />

      {/* Viñeta */}
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.3) 100%)' }}
      />
    </div>
  )
}
