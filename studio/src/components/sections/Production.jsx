import { production } from '../../content/home'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './Production.css'

export default function Production() {
  return (
    <section id="production" className="production surface-light" aria-labelledby="production-title">
      <div className="container">
        <Reveal>
          <SectionLabel index={5}>{production.label}</SectionLabel>
        </Reveal>
        <Headline id="production-title" className="production__title" lines={production.title} />

        <Reveal className="production__image">
          <Media ratio="21 / 9" image={production.image} />
        </Reveal>

        <div className="production__body">
          <div className="production__text">
            <Reveal as="p" className="production__lead">
              {production.lead}
            </Reveal>
            {production.text.map((t, i) => (
              <Reveal as="p" key={i} className="text-2" delay={100 + i * 100}>
                {t}
              </Reveal>
            ))}
          </div>

          {/* The order is the order of a production, so the numbers mean something */}
          <ol className="production__stages" aria-label="Production stages">
            {production.stages.map((stage, i) => (
              <Reveal as="li" key={stage} delay={i * 60}>
                <span className="production__num label">{String(i + 1).padStart(2, '0')}</span>
                <span className="production__stage">{stage}</span>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  )
}
