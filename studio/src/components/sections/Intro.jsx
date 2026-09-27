import { intro } from '../../content/home'
import { services } from '../../content/services'
import Button from '../ui/Button'
import Headline from '../ui/Headline'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './Intro.css'

// The studio statement, set like the opening spread of a magazine: the
// headline on one side, the index of disciplines on the other.
export default function Intro() {
  return (
    <section className="intro surface-light" aria-labelledby="intro-title">
      <div className="container">
        <Reveal>
          <SectionLabel index={1}>{intro.label}</SectionLabel>
        </Reveal>

        <div className="intro__spread">
          <Headline id="intro-title" className="intro__title" lines={intro.title} />

          <div className="intro__index">
            <Reveal as="p" className="label text-2 intro__index-label">
              {intro.indexLabel}
            </Reveal>
            <ol className="intro__list">
              {services.map((s, i) => (
                <Reveal as="li" key={s.id} delay={i * 90}>
                  <a className="intro__item" href={`#service-${s.id}`}>
                    <span className="intro__num label">{String(i + 1).padStart(2, '0')}</span>
                    <span className="intro__name">{s.name}</span>
                    <span className="intro__summary">{s.summary}</span>
                    <span className="intro__arrow" aria-hidden="true">
                      →
                    </span>
                  </a>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <div className="intro__columns">
          {intro.blocks.map((block, i) => (
            <Reveal key={block.heading} className="intro__column" delay={i * 120}>
              <h3 className="label">{block.heading}</h3>
              <p>{block.text}</p>
            </Reveal>
          ))}
          <Reveal className="intro__column intro__column--end" delay={240}>
            <p className="text-2">{intro.closing}</p>
            <Button href={intro.cta.href}>{intro.cta.label}</Button>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
