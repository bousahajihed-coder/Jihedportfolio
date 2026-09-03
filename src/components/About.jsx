import { motion } from 'framer-motion'
import Reveal from './Reveal'
import VerticalLabel from './VerticalLabel'

const stats = [
  { value: '6+', label: 'Years Experience' },
  { value: '50+', label: 'Projects Completed' },
  { value: '12+', label: 'Countries' },
]

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Fluent' },
  { name: 'German', level: 'Fluent' },
  { name: 'Italian', level: 'Working knowledge' },
]

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
}

const staggerItem = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
}

export default function About() {
  return (
    <section id="about" className="relative w-full bg-paper text-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-[24px_1fr] md:grid-cols-[48px_1fr] gap-4 md:gap-8">
        <VerticalLabel>About</VerticalLabel>
        <div>
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
            <Reveal>
              <p className="font-display font-black text-3xl md:text-4xl leading-[1.1]">
                I started small and worked my way through productions of all sizes, from small,
                hands-on, <span className="italic">run and gun</span> teams to large scale
                campaigns with budgets reaching over <span className="italic">€500k</span> and
                brand ambassadors across multiple European markets.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="text-ink/70 text-base md:text-lg leading-relaxed space-y-5">
                <p>
                  I like being close to the process. From developing an idea and building the
                  right team to casting, budgets, locations, production and delivery, I stay
                  involved from the first conversation to the final delivery.
                </p>
                <p>
                  I have produced across Europe and work comfortably in German, English, French
                  and Arabic, with working knowledge of Italian. Working across different markets,
                  cultures and teams has become a big part of how I produce.
                </p>
                <p>
                  I am hands on, calm when things get complicated, and always focused on finding a
                  way to make the idea work.
                </p>
              </div>
            </Reveal>
          </div>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-80px' }}
            className="grid grid-cols-3 gap-6 mb-20 border-y border-ink/10 py-10"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={staggerItem} className="text-center md:text-left">
                <div className="font-display font-black text-4xl md:text-5xl text-ink mb-1">
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-ink/50 tracking-wide uppercase font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          <div>
            <Reveal>
              <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-ink/50 mb-6">
                Languages
              </h3>
            </Reveal>
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-80px' }}
              className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4"
            >
              {languages.map((lang) => (
                <motion.div
                  key={lang.name}
                  variants={staggerItem}
                  className="flex items-center justify-between py-2 border-b border-ink/10"
                >
                  <span className="font-semibold">{lang.name}</span>
                  <span className="text-sm text-ink/50">{lang.level}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
