import { motion } from 'framer-motion'
import Reveal from './Reveal'
import VerticalLabel from './VerticalLabel'

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
    <section id="what-i-do" className="relative w-full bg-pink text-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-[24px_1fr] md:grid-cols-[48px_1fr] gap-4 md:gap-8">
        <VerticalLabel>What I Do</VerticalLabel>
        <div>
          <Reveal>
            <h2 className="font-display font-black uppercase text-3xl md:text-5xl mb-14 max-w-2xl leading-[1.05]">
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
                className="bg-ink text-paper rounded-xl p-8 hover:-translate-y-1 transition-transform"
              >
                <span className="font-display font-black text-pink text-sm tracking-widest">
                  {role.number}
                </span>
                <h3 className="text-xl font-bold mt-4 mb-3">{role.title}</h3>
                <p className="text-paper/60 leading-relaxed">{role.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
