import { useEffect, useRef } from 'react'
import Media from '../ui/Media'
import './ProjectViewer.css'

// Full-screen project view built on the native <dialog> element, which
// provides focus trapping, Escape to close and an accessible modal role.
export default function ProjectViewer({ projects, index, onChange, onClose }) {
  const ref = useRef(null)
  const project = index != null ? projects[index] : null

  useEffect(() => {
    const dialog = ref.current
    if (!dialog) return
    if (project && !dialog.open) {
      dialog.showModal()
      document.body.classList.add('is-locked')
    } else if (!project && dialog.open) {
      dialog.close()
    }
  }, [project])

  const step = (dir) => onChange((index + dir + projects.length) % projects.length)

  return (
    <dialog
      ref={ref}
      className="viewer"
      aria-labelledby="viewer-title"
      onClose={() => {
        document.body.classList.remove('is-locked')
        onClose()
      }}
    >
      {project && (
        <div className="viewer__inner">
          <div className="viewer__bar container">
            <p className="label">
              {String(index + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}
            </p>
            <div className="viewer__controls">
              {projects.length > 1 && (
                <>
                  <button type="button" className="text-link label" onClick={() => step(-1)}>
                    ← Previous
                  </button>
                  <button type="button" className="text-link label" onClick={() => step(1)}>
                    Next →
                  </button>
                </>
              )}
              <button type="button" className="text-link label" onClick={() => ref.current.close()} autoFocus>
                Close ✕
              </button>
            </div>
          </div>

          <div className="viewer__player container">
            <Player key={project.id} project={project} />
          </div>

          <div className="viewer__details container">
            <h2 id="viewer-title" className="viewer__title display">
              {project.title}
            </h2>
            <dl className="viewer__facts">
              <Fact term="Client" value={project.client} />
              <Fact term="Service" value={project.service} />
              <Fact term="Year" value={project.year} />
              <Fact term="Duration" value={project.duration} />
            </dl>
            <p className="viewer__desc">{project.description}</p>
            {project.credits?.length > 0 && (
              <dl className="viewer__credits">
                {project.credits.map(([role, name]) => (
                  <Fact key={role} term={role} value={name} />
                ))}
              </dl>
            )}
          </div>
        </div>
      )}
    </dialog>
  )
}

function Fact({ term, value }) {
  if (!value) return null
  return (
    <div>
      <dt className="label">{term}</dt>
      <dd>{value}</dd>
    </div>
  )
}

function Player({ project }) {
  const { video, title } = project

  if (video?.type === 'file') {
    return (
      <div className="viewer__frame">
        <video src={video.src} poster={video.poster} controls autoPlay playsInline />
      </div>
    )
  }

  if (video?.type === 'vimeo' || video?.type === 'youtube') {
    const src =
      video.type === 'vimeo'
        ? `https://player.vimeo.com/video/${video.id}?autoplay=1`
        : `https://www.youtube-nocookie.com/embed/${video.id}?autoplay=1`
    return (
      <div className="viewer__frame">
        <iframe
          src={src}
          title={title}
          allow="autoplay; fullscreen; picture-in-picture; encrypted-media"
          allowFullScreen
        />
      </div>
    )
  }

  return (
    <div className="viewer__frame">
      <Media fill image={project.thumbnail} scene={project.scene} caption="Film placeholder — add a video in projects.js" />
    </div>
  )
}
