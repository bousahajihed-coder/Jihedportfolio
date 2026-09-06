import { motion } from 'framer-motion'

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
      <motion.div
        className="flex whitespace-nowrap w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 22, repeat: Infinity, ease: 'linear' }}
      >
        {track.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="font-display font-extrabold text-sky text-lg md:text-2xl uppercase tracking-wide mx-4 flex items-center gap-4"
          >
            {item}
            <span className="text-paper/30">/</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}
