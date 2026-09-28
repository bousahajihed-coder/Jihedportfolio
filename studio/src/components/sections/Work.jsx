import { useRef, useState } from 'react'
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
          <Reveal className="work__intro" delay={200}>
            <p className="lead text-2">{work.text}</p>
          </Reveal>
        </div>

        <ul className="work__gallery">
          {projects.map((p, i) => (
            <Project
              key={p.id}
              project={p}
              index={i}
              layout={p.layout ?? RHYTHM[i % RHYTHM.length]}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </ul>

        <Reveal className="work__footer">
          <p className="text-2">Full case studies and showreel on request.</p>
          <Button href={work.cta.href}>{work.cta.label}</Button>
        </Reveal>
      </div>

      <ProjectViewer projects={projects} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </section>
  )
}

function Project({ project, index, layout, onOpen }) {
  const frameRef = useRef(null)

  // Pointer position drives a small drift of the still and the cursor label.
  const onPointerMove = (e) => {
    if (e.pointerType !== 'mouse') return
    const el = frameRef.current
    const r = el.getBoundingClientRect()
    el.style.setProperty('--px', ((e.clientX - r.left) / r.width).toFixed(3))
    el.style.setProperty('--py', ((e.clientY - r.top) / r.height).toFixed(3))
  }

  return (
    <Reveal as="li" className={`project project--${layout}`} delay={layout === 'half' && index % 3 === 2 ? 150 : 0}>
      <button
        ref={frameRef}
        type="button"
        className="project__frame"
        onClick={onOpen}
        onPointerMove={onPointerMove}
        aria-label={`Watch ${project.title}, ${project.type}, ${project.location}`}
      >
        <span className="project__image">
          <Media fill image={project.image} sizes={layout === 'wide' ? '100vw' : '(min-width: 800px) 50vw, 100vw'} />
        </span>
        <span className="project__cursor label" aria-hidden="true">
          View film
        </span>
      </button>

      <div className="project__caption">
        <h3 className="project__title">{project.title}</h3>
        <p className="project__meta label">
          <span className="project__num">{String(index + 1).padStart(2, '0')}</span>
          <span>{project.type}</span>
          <span className="text-2">{project.location}</span>
        </p>
      </div>
    </Reveal>
  )
}
