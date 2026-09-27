import { useState } from 'react'
import { projects } from '../../content/projects'
import { work } from '../../content/home'
import Button from '../ui/Button'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import ProjectViewer from './ProjectViewer'
import './Work.css'

// Gallery rhythm: one wide film, then a pair, repeated. A project can
// override its slot with `layout: 'wide' | 'half'`.
const RHYTHM = ['wide', 'half', 'half']

export default function Work() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="work" className="work surface-light" aria-labelledby="work-title">
      <div className="container">
        <Reveal>
          <SectionLabel index={3}>{work.label}</SectionLabel>
        </Reveal>

        <div className="work__header">
          <Headline id="work-title" className="work__title" lines={work.title} />
          <Reveal delay={200}>
            <Button href={work.cta.href}>{work.cta.label}</Button>
          </Reveal>
        </div>

        <ul className="work__gallery">
          {projects.map((p, i) => {
            const layout = p.layout ?? RHYTHM[i % RHYTHM.length]
            return (
              <Reveal as="li" key={p.id} className={`project project--${layout}`} delay={layout === 'half' && i % 3 === 2 ? 150 : 0}>
                <button type="button" className="project__frame" onClick={() => setOpenIndex(i)} aria-label={`Watch ${p.title} — ${p.client}`}>
                  <Media
                    fill
                    scene={p.scene}
                    image={p.thumbnail}
                    caption="Production still — placeholder"
                    sizes={layout === 'wide' ? '100vw' : '(min-width: 800px) 50vw, 100vw'}
                  />
                  {p.logo?.src && <img className="project__logo" src={p.logo.src} alt="" />}
                  <span className="project__play label" aria-hidden="true">
                    Watch film <span>{p.duration}</span>
                  </span>
                </button>
                <div className="project__caption">
                  <p className="project__meta label">
                    <span className="project__num">{String(i + 1).padStart(2, '0')}</span>
                    <span>{p.client}</span>
                    <span className="text-2">{p.service}</span>
                    <span className="text-2">{p.year}</span>
                  </p>
                  <h3 className="project__title">{p.title}</h3>
                </div>
              </Reveal>
            )
          })}
        </ul>
      </div>

      <ProjectViewer projects={projects} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  )
}
