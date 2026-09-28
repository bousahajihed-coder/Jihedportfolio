import { hero } from '../../content/home'
import Button from '../ui/Button'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import './Hero.css'

export default function Hero({ onPlayReel }) {
  return (
    <section className="hero surface-dark" aria-labelledby="hero-title">
      <div className="hero__media">
        <Media fill video={hero.video} image={hero.image} priority />
      </div>
      <div className="hero__shade" aria-hidden="true" />
      <div className="hero__fade" aria-hidden="true" />

      <div className="hero__content container">
        <div className="hero__top">
          <p className="hero__meta label">
            {hero.meta.map((m) => (
              <span key={m}>{m}</span>
            ))}
          </p>
          <button type="button" className="hero__play label" onClick={onPlayReel}>
            <span className="hero__play-icon" aria-hidden="true" />
            {hero.reelLabel}
          </button>
        </div>

        <Headline as="h1" id="hero-title" className="hero__title" lines={hero.title} immediate />

        <div className="hero__footer">
          <p className="hero__text lead">{hero.text}</p>
          <div className="hero__actions">
            <Button href={hero.cta.href} variant="outline">
              {hero.cta.label}
            </Button>
            <Button href={hero.secondary.href}>{hero.secondary.label}</Button>
          </div>
        </div>
      </div>
    </section>
  )
}
