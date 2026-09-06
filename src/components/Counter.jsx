import { motion, useMotionValue, useTransform, animate } from 'framer-motion'

export default function Counter({ value }) {
  const match = value.match(/^(\d+)(.*)$/)
  const target = match ? parseInt(match[1], 10) : 0
  const suffix = match ? match[2] : ''
  const count = useMotionValue(0)
  const rounded = useTransform(count, (latest) => Math.round(latest))

  return (
    <motion.span
      viewport={{ once: true, margin: '-80px' }}
      onViewportEnter={() => animate(count, target, { duration: 1.4, ease: [0.16, 1, 0.3, 1] })}
    >
      <motion.span>{rounded}</motion.span>
      {suffix}
    </motion.span>
  )
}
