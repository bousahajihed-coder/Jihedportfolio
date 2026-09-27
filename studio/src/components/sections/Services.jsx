import { useEffect, useRef, useState } from 'react'
import { services } from '../../content/services'
import { servicesIntro } from '../../content/home'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import PillButton from '../ui/PillButton'
import ServiceMark from '../ui/ServiceMark'
import './Services.css'

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

// Scroll-driven showcase. The track is tall; the stage inside it sticks to
// the viewport. Scrolling first grows the stage from an inset panel to full
// screen (`grow` 0 → 1), then steps through one service per viewport height.
export default function Services() {
  const trackRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [grow, setGrow] = useState(0)
  const [index, setIndex] = useState(0)
  const [wipe, setWipe] = useState({ key: 0, dir: 1 })
  const prevIndex = useRef(0)

  useEffect(() => {
    let raf
    const update = () => {
      const track = trackRef.current
      if (!track) return
      const vh = window.innerHeight
      const scrolled = -track.getBoundingClientRect().top
      const growLen = vh * 0.7
      setGrow(clamp(scrolled / growLen, 0, 1))
      setIndex(clamp(Math.floor((scrolled - growLen) / vh + 0.35), 0, services.length - 1))
    }
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  // Trigger the colour wipe whenever the active service changes.
  useEffect(() => {
    if (index === prevIndex.current) return
    setWipe((w) => ({ key: w.key + 1, dir: index > prevIndex.current ? 1 : -1 }))
    prevIndex.current = index
  }, [index])

  // Jump to a service: scroll the page to that service's position.
  const goTo = (i) => {
    const track = trackRef.current
    const vh = window.innerHeight
    const top = track.getBoundingClientRect().top + window.scrollY + vh * 0.7 + i * vh + 2
    window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' })
  }

  const current = services[index]
  const g = reduced ? 1 : grow

  return (
    <section id="services" className="services" aria-labelledby="services-title">
      <div className="services__intro container">
        <Headline id="services-title" className="services__title" lines={[{ text: servicesIntro.title }]} />
      </div>
      <div className="services__band" aria-hidden="true" />

      <div className="services__track" ref={trackRef} style={{ height: `${services.length * 100 + 70}vh` }}>
        {/* Anchors so menu links can jump to each service */}
        {services.map((s, i) => (
          <span key={s.id} id={`service-${s.id}`} className="services__anchor" style={{ top: `calc(${70 + i * 100}vh + 2px)` }} />
        ))}

        <div className="services__sticky">
          <div
            className="services__stage"
            style={{
              '--g': g,
              clipPath: `inset(${(1 - g) * 22}% 0 0 ${(1 - g) * 27}%)`,
            }}
          >
            {services.map((s, i) => (
              <article
                key={s.id}
                className={`service-slide ${i === index ? 'is-active' : ''}`}
                aria-hidden={i !== index}
                {...(i !== index && { inert: '' })}
              >
                <Media fill scene={s.scene} image={s.media?.image} video={s.media?.video} caption={`${s.name} — placeholder`} />
                <div className="service-slide__shade" aria-hidden="true" />
                <div className="service-slide__content container">
                  <h3 className="service-slide__mark">
                    <ServiceMark service={s} size="lg" />
                  </h3>
                  <p className="service-slide__text">{s.text}</p>
                  <PillButton href="#contact">Discover more</PillButton>
                </div>
              </article>
            ))}

            {!reduced && (
              <div key={wipe.key} className={`services__wipe ${wipe.key ? 'is-running' : ''}`} data-dir={wipe.dir} aria-hidden="true">
                <span />
                <span />
              </div>
            )}

            <p className="services__counter" aria-live="polite">
              <span className="visually-hidden">Service </span>
              {String(index + 1).padStart(2, '0')}/{String(services.length).padStart(2, '0')}
              <span className="visually-hidden">: {current.name}</span>
            </p>

            <div className="services__tabs container" role="tablist" aria-label="Services">
              {services.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={`services__tab ${i === index ? 'is-active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  {s.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
