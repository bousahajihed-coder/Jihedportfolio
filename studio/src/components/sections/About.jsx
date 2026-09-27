import { about } from '../../content/home'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import PillButton from '../ui/PillButton'
import Reveal from '../ui/Reveal'
import './About.css'

export default function About() {
  return (
    <section id="about" className="about" aria-labelledby="about-title">
      <div className="about__inner container">
        <Reveal as="p" className="label about__label">
          {about.label}
        </Reveal>
        <Headline id="about-title" className="about__title" lines={about.title} />

        <div className="about__body">
          <Reveal className="about__media">
            <Media ratio="4 / 3" scene="crew" caption="Team photo — placeholder" />
          </Reveal>
          <div className="about__text">
            {about.text.map((t, i) => (
              <Reveal as="p" key={i} delay={i * 100}>
                {t}
              </Reveal>
            ))}
          </div>
        </div>

        <ul className="about__stats">
          {about.stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 90}>
              <span className="about__stat-value">{s.value}</span>
              <span className="about__stat-label">{s.label}</span>
            </Reveal>
          ))}
        </ul>

        <div id="careers" className="about__careers">
          <Reveal>
            <h3 className="about__careers-title">{about.careers.title}</h3>
            <p>{about.careers.text}</p>
          </Reveal>
          <Reveal delay={150}>
            <PillButton href={about.careers.cta.href}>{about.careers.cta.label}</PillButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
