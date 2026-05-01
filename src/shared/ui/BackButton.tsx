interface Props { onClick: () => void }

export default function BackButton({ onClick }: Props) {
  return (
    <button
      onClick={onClick}
      aria-label="Volver"
      className="
        flex items-center gap-2 px-4 py-3 sm:px-3 sm:py-2
        font-mono text-xs tracking-widest uppercase
        cursor-pointer transition-all duration-200
        focus-visible:outline-none touch-manipulation
      "
      style={{ border: '1px solid rgba(255,204,0,0.3)', color: 'rgba(255,204,0,0.6)' }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,204,0,0.7)'
        e.currentTarget.style.color = '#ffcc00'
        e.currentTarget.style.background = 'rgba(255,204,0,0.06)'
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = 'rgba(255,204,0,0.3)'
        e.currentTarget.style.color = 'rgba(255,204,0,0.6)'
        e.currentTarget.style.background = 'transparent'
      }}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path d="M8 2L4 6L8 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      Volver
    </button>
  )
}
