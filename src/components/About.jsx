import { motion } from 'framer-motion'
import Reveal from './Reveal'

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
  { name: 'Italian', level: 'In progress' },
  { name: 'Spanish', level: 'In progress' },
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
    <section id="about" className="relative w-full bg-black py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-6">About</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-12 md:gap-16 mb-20">
          <Reveal delay={0.05}>
            <p className="text-2xl md:text-3xl font-semibold leading-snug">
              Ideas don&rsquo;t shoot themselves. I produce commercial and independent work across
              Europe&mdash;Germany, Poland, Spain&mdash;with heavy experience in automotive and
              high-performance car campaigns.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="text-paper/70 text-base md:text-lg leading-relaxed space-y-5">
              <p>
                Six years bridging creative vision and execution, fluent in German, English, French,
                and Arabic; Italian and Spanish in progress.
              </p>
              <p>Design-trained eye, operational discipline. Based in Berlin, headed toward film.</p>
            </div>
          </Reveal>
        </div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-3 gap-6 mb-20 border-y border-white/10 py-10"
        >
          {stats.map((stat) => (
            <motion.div key={stat.label} variants={staggerItem} className="text-center md:text-left">
              <div className="text-4xl md:text-5xl font-extrabold text-paper mb-1">{stat.value}</div>
              <div className="text-xs md:text-sm text-paper/50 tracking-wide uppercase">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        <div>
          <Reveal>
            <h3 className="text-sm font-medium tracking-[0.3em] uppercase text-paper/50 mb-6">
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
                className="flex items-center justify-between py-2 border-b border-white/10"
              >
                <span className="font-medium">{lang.name}</span>
                <span className="text-sm text-paper/50">{lang.level}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
