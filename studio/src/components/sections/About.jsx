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
        <Media ratio="21 / 9" image={about.image} />
      </Reveal>

      <div className="container">
        <div className="about__body">
          <Reveal as="p" className="about__lead">
            {about.lead}
          </Reveal>
          <div className="about__text">
            {about.text.map((t, i) => (
              <Reveal as="p" key={i} className={i === about.text.length - 1 ? '' : 'text-2'} delay={100 + i * 100}>
                {t}
              </Reveal>
            ))}
            <Reveal delay={400}>
              <Button href={about.cta.href}>{about.cta.label}</Button>
            </Reveal>
          </div>
        </div>

        <Reveal id="careers" className="about__careers">
          <h3 className="label about__careers-title">{about.careers.title}</h3>
          <p>{about.careers.text}</p>
          <Button href={about.careers.cta.href}>{about.careers.cta.label}</Button>
        </Reveal>
      </div>
    </section>
  )
}
