import { intro } from '../../content/home'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './Intro.css'

export default function Intro() {
  return (
    <section className="intro surface-light" aria-labelledby="intro-title">
      <div className="container">
        <Reveal>
          <SectionLabel index={1}>{intro.label}</SectionLabel>
        </Reveal>
        <Headline id="intro-title" className="intro__title" lines={intro.title} />
      </div>

      <div className="intro__body container">
        <Reveal className="intro__image">
          <Media ratio="4 / 3" image={intro.image} sizes="(min-width: 1000px) 60vw, 100vw" />
        </Reveal>
        <div className="intro__text">
          <Reveal as="p" className="intro__lead">
            {intro.lead}
          </Reveal>
          {intro.text.map((t, i) => (
            <Reveal as="p" key={i} className={i === intro.text.length - 1 ? 'intro__closing' : 'text-2'} delay={120 + i * 100}>
              {t}
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
