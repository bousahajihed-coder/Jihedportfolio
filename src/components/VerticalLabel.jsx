export default function VerticalLabel({ children }) {
  return (
    <div className="hidden md:flex items-start justify-center">
      <span
        className="text-xs font-semibold tracking-[0.2em] uppercase text-ink/50 whitespace-nowrap"
        style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
      >
        {children}
      </span>
    </div>
  )
}
