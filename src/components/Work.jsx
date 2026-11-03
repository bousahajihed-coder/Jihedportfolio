import { categories } from '../data/projects'
import Reveal from './Reveal'
import VerticalLabel from './VerticalLabel'
import VideoEmbed from './VideoEmbed'

function Credits({ video }) {
  const heading = [video.brand, video.title && `“${video.title}”`].filter(Boolean).join(' — ')
  const meta = [video.client, video.company, video.year].filter(Boolean).join(' · ')
  if (!heading && !meta && !video.role && !video.scope) return null

  return (
    <div className="mt-4">
      {heading && <h4 className="font-bold text-lg leading-snug">{heading}</h4>}
      {meta && <p className="text-sm text-ink/60 mt-1">{meta}</p>}
      {(video.role || video.scope) && (
        <p className="text-sm mt-2">
          {video.role && <span className="font-semibold">{video.role}</span>}
          {video.role && video.scope && <span className="text-ink/40"> · </span>}
          {video.scope && <span className="text-ink/70">{video.scope}</span>}
        </p>
      )}
    </div>
  )
}

export default function Work() {
  return (
    <section id="work" className="relative w-full bg-paper text-ink py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[48px_1fr] gap-4 md:gap-8">
        <VerticalLabel>Selected Work</VerticalLabel>
        <div>
          <Reveal>
            <h2 className="font-display font-black uppercase text-3xl md:text-4xl mb-14 max-w-2xl leading-[1.05]">
              Selected productions.
            </h2>
          </Reveal>

          <div className="space-y-16 md:space-y-20">
            {categories.map((category) => (
              <div key={category.name}>
                <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-ink/50 mb-6">
                  {category.name}
                </h3>
                <div className="grid sm:grid-cols-2 gap-x-8 gap-y-10 md:gap-x-10">
                  {category.videos.map((video) => (
                    <Reveal key={video.id} y={24}>
                      <div className="relative aspect-video overflow-hidden rounded-xl bg-neutral-200">
                        <VideoEmbed video={video} />
                      </div>
                      <Credits video={video} />
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
