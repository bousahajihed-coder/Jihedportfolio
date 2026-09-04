import { projects } from '../data/projects'
import Reveal from './Reveal'
import VerticalLabel from './VerticalLabel'

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-paper text-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-[24px_1fr] md:grid-cols-[48px_1fr] gap-4 md:gap-8">
        <VerticalLabel>Selected Work</VerticalLabel>
        <div>
          <Reveal>
            <h2 className="font-display font-black uppercase text-3xl md:text-5xl mb-20 max-w-2xl leading-[1.05]">
              Selected productions across brands and markets.
            </h2>
          </Reveal>

          <div className="space-y-20 md:space-y-28">
            {projects.map((project, index) => (
              <Reveal key={project.name} y={40}>
                <div
                  className={`flex flex-col gap-8 md:gap-14 items-center ${
                    index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'
                  }`}
                >
                  <div className="w-full md:w-7/12">
                    <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-200 group">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {project.markets && (
                        <span className="absolute top-4 left-4 px-2.5 py-1 bg-ink/70 backdrop-blur-sm rounded-full text-xs text-paper/90">
                          {project.markets}
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="w-full md:w-5/12">
                    <span className="font-display font-black text-ink/20 text-5xl md:text-6xl tracking-widest">
                      {String(index + 1).padStart(2, '0')}
                    </span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
