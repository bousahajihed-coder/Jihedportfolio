import Media from '../ui/Media'
import Reveal from '../ui/Reveal'

const SIZES = {
  full: '100vw',
  left: '(min-width: 900px) 58vw, 100vw',
  right: '(min-width: 900px) 33vw, 100vw',
}

export default function ProjectCard({ project, index, layout, onOpen }) {
  const number = String(index + 1).padStart(2, '0')
  const titleId = `project-${project.id}-title`

  return (
    <Reveal as="article" className={`project project--${layout}`} aria-labelledby={titleId}>
      <button type="button" className="project__frame" onClick={onOpen} aria-label={`Play film: ${project.title}`}>
        <Media
          ratio={null}
          video={project.preview}
          image={project.thumbnail}
          tone={index}
          sizes={SIZES[layout]}
          caption={`${project.client} — still placeholder`}
        />
        <span className="project__play label" aria-hidden="true">
          <span className="project__play-icon" /> Play film
        </span>
      </button>

      <div className="project__info">
        <p className="project__meta label">
          <span className="project__number">{number}</span>
          <span>{project.client}</span>
          <span className="muted">{project.category}</span>
          <span className="muted">{project.year}</span>
        </p>
        <h3 id={titleId} className="project__title display">
          {project.title}
        </h3>
        <p className="project__desc muted">{project.description}</p>
      </div>
    </Reveal>
  )
}
