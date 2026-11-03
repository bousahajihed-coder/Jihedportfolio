import { motion } from 'framer-motion'

const scopeTags = ['Commercials', 'Branded Content', 'Multi-Market Production']
const locationTags = ['Berlin', 'DACH', 'Europe']
const facts = ['€50k–€500k+ Budgets', '6+ European Markets', '6 Brand Ambassadors', 'DE · EN · FR · AR']
const companies = ['AUTO1 Group', 'wirkaufendeinauto.de', 'Autohero', 'INLEGACY Studios', 'GMP Global Media Production', 'TBD Media']

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] },
})

export default function Hero() {
  return (
    <section id="top" className="relative w-full pt-20">
      <div className="relative w-full bg-blue text-paper">
        <div className="max-w-6xl mx-auto px-6 md:px-10 py-14 md:py-20">
          <motion.div
            {...fadeUp()}
            className="flex flex-col gap-1.5 mb-6 text-xs font-semibold tracking-[0.15em] uppercase text-paper/70"
          >
            <span>{scopeTags.join(' · ')}</span>
            <span>{locationTags.join(' · ')}</span>
          </motion.div>

          <motion.h1
            {...fadeUp(0.05)}
            className="font-display font-black uppercase text-3xl sm:text-4xl md:text-5xl leading-[1.05] max-w-3xl"
          >
            Producer for commercials and branded content, based in Berlin.
          </motion.h1>

          <motion.p
            {...fadeUp(0.1)}
            className="font-display font-bold italic text-xl md:text-2xl mt-5 max-w-xl"
          >
            I build the plan, protect the idea, and get the thing made.
          </motion.p>

          <motion.p {...fadeUp(0.15)} className="text-paper/80 text-base md:text-lg mt-5 max-w-2xl leading-relaxed">
            From brief and budget to final delivery: crew, director, locations, casting, shoot, post
            and versioning across markets. Producing in German, English, French and Arabic.
          </motion.p>

          <motion.div {...fadeUp(0.2)} className="flex flex-wrap gap-2 mt-7">
            {facts.map((item) => (
              <span
                key={item}
                className="text-xs font-semibold uppercase tracking-wide bg-paper/15 border border-paper/25 rounded-full px-3 py-1.5"
              >
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div {...fadeUp(0.25)} className="flex flex-wrap items-center gap-4 mt-8">
            <a
              href="#work"
              className="inline-flex items-center rounded-full bg-ink text-sky px-6 py-3 text-sm font-semibold hover:bg-ink/85 transition-colors"
            >
              See the work
            </a>
            <a
              href="#contact"
              className="inline-flex items-center rounded-full border border-paper/40 px-6 py-3 text-sm font-semibold hover:border-paper hover:bg-paper/10 transition-colors"
            >
              Check availability
            </a>
          </motion.div>

          <motion.div {...fadeUp(0.3)} className="mt-12 pt-6 border-t border-paper/20">
            <p className="text-xs font-semibold tracking-[0.15em] uppercase text-paper/60 mb-3">
              Produced for
            </p>
            <div className="flex flex-wrap gap-x-8 gap-y-2 font-display font-extrabold uppercase text-base md:text-lg">
              {companies.map((company) => (
                <span key={company}>{company}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
