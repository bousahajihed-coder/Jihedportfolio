import { motion } from 'framer-motion'
import Reveal from './Reveal'

const roles = [
  {
    number: '01',
    title: 'Producer',
    description:
      'End-to-end production leadership, from concept and budgeting through shoot and delivery.',
  },
  {
    number: '02',
    title: 'Assistant Producer',
    description:
      'Close support on scheduling, budgets, and vendor coordination to keep a production on track.',
  },
  {
    number: '03',
    title: 'Production Coordinator',
    description:
      'On-set and remote coordination across crew, talent, and logistics for multi-market shoots.',
  },
]

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
}

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative w-full bg-paper text-ink border-t border-ink/10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase mb-6">What I Do</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-14 max-w-2xl">
            Roles I take on across a production.
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid md:grid-cols-3 gap-6"
        >
          {roles.map((role) => (
            <motion.div
              key={role.title}
              variants={cardItem}
              className="bg-neutral-50 border border-ink/10 rounded-xl p-8 hover:border-orange transition-colors"
            >
              <span className="text-orange text-sm font-semibold tracking-widest">{role.number}</span>
              <h3 className="text-xl font-bold mt-4 mb-3">{role.title}</h3>
              <p className="text-ink/60 leading-relaxed">{role.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
