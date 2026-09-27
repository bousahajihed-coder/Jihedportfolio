import { useState } from 'react'
import { projects } from '../../content/projects'
import { work } from '../../content/home'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import PillButton from '../ui/PillButton'
import Reveal from '../ui/Reveal'
import ProjectViewer from './ProjectViewer'
import './Work.css'

export default function Work() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="work" className="work" aria-labelledby="work-title">
      <div className="work__header container">
        <div>
          <Reveal as="p" className="label work__label">
            {work.label}
          </Reveal>
          <Headline id="work-title" className="work__title" lines={work.title} />
        </div>
        <Reveal delay={200}>
          <PillButton href={work.cta.href} variant="lime">
            {work.cta.label}
          </PillButton>
        </Reveal>
      </div>

      <ul className="work__grid">
        {projects.map((p, i) => (
          <Reveal as="li" key={p.id} className="work-tile" delay={(i % 3) * 110}>
            <button type="button" className="work-tile__btn" onClick={() => setOpenIndex(i)} aria-label={`${p.client} — ${p.service}. Watch film`}>
              <Media fill scene={p.scene} image={p.thumbnail} sizes="(min-width: 700px) 33vw, 100vw" />
              <span className="work-tile__shade" aria-hidden="true" />
              <span className="work-tile__logo" data-style={p.logoStyle} aria-hidden="true">
                {p.logo?.src ? <img src={p.logo.src} alt="" /> : p.client}
              </span>
              <span className="work-tile__meta">
                <span className="work-tile__client">{p.client}</span>
                <span className="work-tile__service">{p.service}</span>
              </span>
              <span className="work-tile__arrow" aria-hidden="true">→</span>
            </button>
          </Reveal>
        ))}
      </ul>

      <ProjectViewer
        projects={projects}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  )
}
