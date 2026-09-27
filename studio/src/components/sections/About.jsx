import { about } from '../../content/home'
import Button from '../ui/Button'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about surface-dark" aria-labelledby="about-title">
      <div className="container">
        <Reveal>
          <SectionLabel index={4}>{about.label}</SectionLabel>
        </Reveal>
        <Headline id="about-title" className="about__title" lines={about.title} />
      </div>

      {/* A large, near full-bleed still carries the section */}
      <Reveal className="about__image">
        <Media ratio="21 / 9" scene="crew" caption="On set — placeholder still" />
      </Reveal>

      <div className="container">
        <div className="about__body">
          {about.text.map((t, i) => (
            <Reveal as="p" key={i} className={i === 0 ? 'lead' : 'text-2'} delay={i * 120}>
              {t}
            </Reveal>
          ))}
        </div>

        <ul className="about__stats">
          {about.stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 100}>
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label label">{s.label}</span>
            </Reveal>
          ))}
        </ul>

        <Reveal id="careers" className="about__careers">
          <h3 className="label about__careers-title">{about.careers.title}</h3>
          <p className="lead">{about.careers.text}</p>
          <Button href={about.careers.cta.href}>{about.careers.cta.label}</Button>
        </Reveal>
      </div>
    </section>
  )
}
