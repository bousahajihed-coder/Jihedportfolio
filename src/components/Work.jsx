import { motion } from 'framer-motion'
import { categories } from '../data/projects'
import Reveal from './Reveal'
import VerticalLabel from './VerticalLabel'
import VideoEmbed from './VideoEmbed'

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-paper text-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[48px_1fr] gap-4 md:gap-8">
        <VerticalLabel>Selected Work</VerticalLabel>
        <div>
          <Reveal>
            <h2 className="font-display font-black uppercase text-3xl md:text-5xl mb-20 max-w-2xl leading-[1.05]">
              Selected productions across brands and markets.
            </h2>
          </Reveal>

          <div className="space-y-16 md:space-y-20">
            {categories.map((category) => (
              <div key={category.name}>
                <Reveal>
                  <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-ink/50 mb-6">
                    {category.name}
                  </h3>
                </Reveal>
                <div className="grid sm:grid-cols-2 gap-8 md:gap-10">
                  {category.videos.map((video) => (
                    <Reveal key={video.id} y={32}>
                      <motion.div
                        whileHover={{ y: -6 }}
                        transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        className="relative aspect-video overflow-hidden rounded-xl bg-neutral-200"
                      >
                        <VideoEmbed video={video} />
                      </motion.div>
                    </Reveal>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
