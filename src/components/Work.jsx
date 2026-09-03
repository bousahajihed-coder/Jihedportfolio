import { projects } from '../data/projects'
import Reveal from './Reveal'

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-paper text-ink py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <Reveal>
          <p className="text-teal text-sm font-medium tracking-[0.3em] uppercase mb-6">Work</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-20 max-w-2xl">
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
                      <span className="absolute top-4 left-4 px-2.5 py-1 bg-black/60 backdrop-blur-sm rounded-full text-xs text-white/90">
                        {project.markets}
                      </span>
                    )}
                  </div>
                </div>
                <div className="w-full md:w-5/12">
                  <span className="text-orange text-sm font-semibold tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-serif italic text-4xl md:text-5xl font-medium mt-3 mb-4">
                    {project.name}
                  </h3>
                  <p className="text-teal font-medium tracking-wide">{project.tag}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
