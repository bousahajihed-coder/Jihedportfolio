import { about } from '../../content/home'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about" data-theme="light" aria-labelledby="about-title">
      <div className="container grid about__grid">
        <Reveal className="about__label">
          <SectionLabel index={5}>{about.label}</SectionLabel>
        </Reveal>

        <Reveal as="h2" id="about-title" className="about__statement display" delay={100}>
          {about.statement}
        </Reveal>

        <Reveal className="about__portrait">
          <Media ratio="4 / 5" tone={3} caption="Team portrait — placeholder" sizes="(min-width: 900px) 40vw, 100vw" />
        </Reveal>

        <div className="about__text">
          <Reveal className="about__still" delay={100}>
            <Media ratio="3 / 2" tone={5} caption="On set — placeholder" sizes="(min-width: 900px) 30vw, 100vw" />
          </Reveal>

          {about.body.map((p, i) => (
            <Reveal as="p" key={p} className="about__body" delay={150 + i * 50}>
              {p}
            </Reveal>
          ))}

          <ul className="about__traits">
            {about.traits.map((trait, i) => (
              <Reveal as="li" key={trait.title} delay={(i % 2) * 80}>
                <span className="display">{trait.title}</span>
                <span className="muted">{trait.text}</span>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
