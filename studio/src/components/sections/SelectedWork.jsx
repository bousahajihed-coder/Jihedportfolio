import { useState } from 'react'
import { projects } from '../../content/projects'
import { work } from '../../content/home'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import ProjectCard from './ProjectCard'
import ProjectViewer from './ProjectViewer'
import './SelectedWork.css'

// Gallery rhythm: one wide feature, then an offset pair, repeated.
// A project's own `layout` field overrides the pattern.
const RHYTHM = ['full', 'left', 'right']

export default function SelectedWork() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="work" className="section work" data-theme="dark" aria-labelledby="work-title">
      <div className="container">
        <header className="work__header">
          <Reveal>
            <SectionLabel index={2}>{work.label}</SectionLabel>
          </Reveal>
          <Reveal as="h2" id="work-title" className="work__title display" delay={100}>
            {work.title}
          </Reveal>
          <Reveal as="p" className="work__count label muted" delay={150}>
            {String(projects.length).padStart(2, '0')} films
          </Reveal>
        </header>

        <div className="work__list">
          {projects.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              layout={project.layout ?? RHYTHM[i % RHYTHM.length]}
              onOpen={() => setOpenIndex(i)}
            />
          ))}
        </div>

        <Reveal className="work__more">
          <p className="display">More work on request.</p>
          <a className="text-link text-link--underlined label" href="#contact">
            Ask for our full reel <span aria-hidden="true">→</span>
          </a>
        </Reveal>
      </div>

      <ProjectViewer
        projects={projects}
        index={openIndex}
        onChange={setOpenIndex}
        onClose={() => setOpenIndex(null)}
      />
    </section>
  )
}
