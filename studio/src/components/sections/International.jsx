import { international } from '../../content/home'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './International.css'

// Full-bleed still with the headline set into its lower-left corner.
export default function International() {
  return (
    <section id="international" className="international surface-dark" aria-labelledby="international-title">
      <div className="international__media">
        <Media fill image={international.image} />
      </div>
      <div className="international__shade" aria-hidden="true" />

      <div className="international__content container">
        <Reveal>
          <SectionLabel index={6}>{international.label}</SectionLabel>
        </Reveal>
        <div className="international__bottom">
          <Headline id="international-title" className="international__title" lines={international.title} />
          <div className="international__text">
            <Reveal as="p" className="lead">
              {international.text}
            </Reveal>
            <Reveal as="ul" className="international__places label" delay={150}>
              {international.places.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}
