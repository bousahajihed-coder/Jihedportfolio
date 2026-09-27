import { hero } from '../../content/home'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import PillButton from '../ui/PillButton'
import './Hero.css'

export default function Hero({ onPlayReel }) {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero__media">
        <Media fill video={hero.video} image={hero.image} scene="hero" priority caption="Background video — placeholder" />
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content container">
        <Headline as="h1" id="hero-title" className="hero__title" lines={hero.title} immediate />

        <div className="hero__footer">
          <p className="hero__text">{hero.text}</p>
          <div className="hero__actions">
            <button type="button" className="hero__play" onClick={onPlayReel} aria-label="Play showreel">
              <span className="hero__play-icon" aria-hidden="true" />
            </button>
            <PillButton href={hero.cta.href}>{hero.cta.label}</PillButton>
          </div>
        </div>
      </div>
    </section>
  )
}
