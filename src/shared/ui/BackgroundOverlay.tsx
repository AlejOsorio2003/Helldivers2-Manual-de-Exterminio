export default function BackgroundOverlay() {
  return (
    <div
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: 1 }}
      aria-hidden
    >
      <div
        className="absolute inset-0"
        style={{ background: 'radial-gradient(ellipse at center, transparent 0%, transparent 50%, rgba(0,0,0,0.35) 100%)' }}
      />
    </div>
  )
}
