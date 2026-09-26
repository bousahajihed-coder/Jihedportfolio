import { hero } from '../../content/home'
import Media from '../ui/Media'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero" data-theme="dark" aria-labelledby="hero-title">
      <div className="hero__media">
        <Media fill video={hero.video} image={hero.image} tone={4} priority caption="Showreel — placeholder" />
      </div>
      <div className="hero__shade" aria-hidden="true" />

      <div className="hero__content container">
        <p className="hero__eyebrow label">{hero.eyebrow}</p>

        <h1 id="hero-title" className="hero__title display">
          {hero.title.map((line, i) => (
            <span className="hero__line" key={line}>
              <span style={{ '--i': i }}>{line}</span>
            </span>
          ))}
        </h1>

        <div className="hero__footer">
          <p className="hero__lede">{hero.lede}</p>
          <p className="hero__reel label">
            <span className="hero__dot" aria-hidden="true" />
            {hero.reelLabel}
          </p>
          <a className="hero__cta text-link text-link--underlined label" href={hero.cta.href}>
            {hero.cta.label} <span aria-hidden="true">↓</span>
          </a>
        </div>
      </div>
    </section>
  )
}
