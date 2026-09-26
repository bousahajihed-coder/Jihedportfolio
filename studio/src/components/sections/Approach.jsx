import { approach } from '../../content/home'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './Approach.css'

export default function Approach() {
  return (
    <section className="section approach" data-theme="mist" aria-labelledby="approach-title">
      <div className="container">
        <Reveal>
          <SectionLabel index={4}>{approach.label}</SectionLabel>
        </Reveal>

        <div className="approach__intro grid">
          <Reveal as="h2" id="approach-title" className="approach__title display" delay={100}>
            {approach.title.map((line) => (
              <span key={line}>{line}</span>
            ))}
          </Reveal>
          <Reveal as="p" className="approach__lede" delay={150}>
            {approach.lede}
          </Reveal>
        </div>

        <ol className="approach__steps">
          {approach.steps.map((step, i) => (
            <Reveal as="li" key={step.title} className="approach__step" delay={i * 100}>
              <span className="approach__number display" aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <h3 className="label">{step.title}</h3>
              <p className="muted">{step.text}</p>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  )
}
