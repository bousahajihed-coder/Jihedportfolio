import { hero } from '../../content/home'
import Button from '../ui/Button'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import './Hero.css'

export default function Hero({ onPlayReel }) {
  return (
    <section className="hero surface-dark" aria-labelledby="hero-title">
      <div className="hero__media">
        <Media fill video={hero.video} image={hero.image} scene="hero" priority caption="Background film — placeholder" />
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__fade" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__meta label" aria-hidden="true">
          {hero.meta.map((m) => (
            <span key={m}>{m}</span>
          ))}
        </p>

        <Headline as="h1" id="hero-title" className="hero__title" lines={hero.title} immediate />

        <div className="hero__footer">
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <button type="button" className="hero__play label" onClick={onPlayReel}>
              <span className="hero__play-icon" aria-hidden="true" />
              {hero.reelLabel}
            </button>
            <Button href={hero.cta.href}>{hero.cta.label}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
