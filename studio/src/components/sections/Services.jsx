import { useState } from 'react'
import { services } from '../../content/services'
import { projects } from '../../content/projects'
import { servicesIntro } from '../../content/home'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './Services.css'

export default function Services() {
  const [openId, setOpenId] = useState(null)

  return (
    <section id="services" className="section services" data-theme="light" aria-labelledby="services-title">
      <div className="container">
        <header className="services__header grid">
          <Reveal className="services__label">
            <SectionLabel index={3}>{servicesIntro.label}</SectionLabel>
          </Reveal>
          <Reveal as="h2" id="services-title" className="services__title display" delay={100}>
            {servicesIntro.title}
          </Reveal>
          <Reveal as="p" className="services__lede muted" delay={150}>
            {servicesIntro.lede}
          </Reveal>
        </header>

        <ol className="services__list">
          {services.map((service, i) => (
            <ServiceRow
              key={service.id}
              service={service}
              index={i}
              open={openId === service.id}
              onToggle={() => setOpenId((id) => (id === service.id ? null : service.id))}
            />
          ))}
        </ol>
      </div>
    </section>
  )
}

function ServiceRow({ service, index, open, onToggle }) {
  const panelId = `service-${service.id}`
  const example = projects.find((p) => p.id === service.projectId)
  const exampleIndex = projects.indexOf(example)

  return (
    <Reveal as="li" className={`service ${open ? 'is-open' : ''}`}>
      <h3>
        <button type="button" className="service__row" aria-expanded={open} aria-controls={panelId} onClick={onToggle}>
          <span className="service__number label">{String(index + 1).padStart(2, '0')}</span>
          <span className="service__title display">{service.title}</span>
          <span className="service__summary muted">{service.summary}</span>
          <span className="service__icon" aria-hidden="true" />
        </button>
      </h3>

      <div id={panelId} className="service__panel" role="region" aria-label={service.title} {...(!open && { inert: '' })}>
        <div className="service__panel-inner">
          <div className="service__body grid">
            <p className="service__desc">{service.description}</p>
            <ul className="service__formats">
              {service.formats.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
            {example && (
              <a className="service__example" href="#work">
                <Media ratio="16 / 10" image={example.thumbnail} tone={exampleIndex} sizes="(min-width: 900px) 25vw, 100vw" />
                <span className="label">
                  Example — {example.client}, <span className="muted">{example.title}</span>
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </Reveal>
  )
}
