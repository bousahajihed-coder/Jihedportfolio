import { motion } from 'framer-motion'

const scopeTags = ['Commercials', 'Branded Content', 'Film', 'International Production']
const locationTags = ['Berlin', 'Europe', 'Worldwide']
const highlights = ['6+ European Markets', '€50k–€500k+ Budgets', 'Brand Ambassadors', 'End to End Production']

export default function Hero() {
  return (
    <section id="top" className="relative w-full pt-20">
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden bg-neutral-200">
        <img
          src="/hero-portrait.jpg"
          alt="Jihed Bousaha on set"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <svg
          className="absolute w-40 h-24 md:w-56 md:h-32 top-[18%] right-[12%] md:right-[20%] text-sky"
          viewBox="0 0 200 100"
          fill="none"
        >
          <path
            d="M20 55 C10 20, 80 5, 120 15 C170 27, 190 55, 150 75 C100 100, 20 85, 20 55 Z"
            stroke="currentColor"
            strokeWidth="5"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <div className="relative w-full bg-blue text-paper overflow-hidden">
        <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-[24px_1fr] md:grid-cols-[48px_1fr] gap-4 md:gap-8 py-14 md:py-20">
          <div className="hidden md:flex items-start justify-center">
            <span
              className="text-xs font-semibold tracking-[0.2em] uppercase text-paper/60 whitespace-nowrap"
              style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
            >
              Scroll Down
            </span>
          </div>

          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col gap-1.5 mb-6 text-xs font-semibold tracking-[0.15em] uppercase text-paper/70"
            >
              <span>{scopeTags.join(' · ')}</span>
              <span>{locationTags.join(' · ')}</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-black uppercase text-4xl sm:text-5xl md:text-6xl lg:text-7xl leading-[1.02] max-w-4xl"
            >
              I am a <span className="italic">Creative Producer</span> based in Berlin, working
              across commercials, branded content and film.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-display font-bold italic text-xl md:text-2xl mt-6 max-w-xl"
            >
              I build the plan, protect the idea, and get the thing made.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap gap-2 mt-8"
            >
              {highlights.map((item) => (
                <span
                  key={item}
                  className="text-xs font-semibold uppercase tracking-wide bg-paper/15 border border-paper/25 rounded-full px-3 py-1.5"
                >
                  {item}
                </span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-wrap items-center gap-4 mt-8"
            >
              <a
                href="#work"
                className="inline-flex items-center rounded-full bg-ink text-sky px-6 py-3 text-sm font-semibold hover:bg-ink/85 transition-colors"
              >
                View Work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center rounded-full border border-paper/40 px-6 py-3 text-sm font-semibold hover:border-paper hover:bg-paper/10 transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
