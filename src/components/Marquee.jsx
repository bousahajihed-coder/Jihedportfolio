const items = [
  'PRODUCTION',
  'ASSISTANT PRODUCING',
  'PRODUCTION COORDINATION',
  'BUDGETING & SCHEDULING',
  'ON-SET LOGISTICS',
  'MULTI-MARKET CAMPAIGNS',
]

export default function Marquee() {
  const track = [...items, ...items]

  return (
    <div className="w-full bg-ink overflow-hidden py-4 border-y border-white/10">
      <div className="flex whitespace-nowrap animate-marquee">
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display font-extrabold text-sky text-lg md:text-2xl uppercase tracking-wide mx-4 flex items-center gap-4"
          >
            {item}
            <span className="text-paper/30">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
