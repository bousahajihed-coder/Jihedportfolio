import { motion } from 'framer-motion'
import { projects } from '../data/projects'
import Reveal from './Reveal'

const staggerContainer = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
}

const cardItem = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
}

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-black py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-6">Work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl md:text-4xl font-bold mb-14 max-w-2xl">
            Selected productions across brands and markets.
          </h2>
        </Reveal>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-80px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div key={project.name} variants={cardItem} className="project-card group cursor-pointer">
              <div className="relative aspect-video overflow-hidden rounded-xl mb-4 bg-neutral-900">
                <img
                  src={project.image}
                  alt={project.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                {project.markets && (
                  <span className="absolute top-3 left-3 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/90">
                    {project.markets}
                  </span>
                )}
              </div>
              <h3 className="heading-md text-paper font-semibold mb-1">{project.name}</h3>
              <p className="text-sm text-paper/50">{project.tag}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
