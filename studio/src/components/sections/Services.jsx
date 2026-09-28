import { useEffect, useRef, useState } from 'react'
import { services } from '../../content/services'
import { servicesIntro } from '../../content/home'
import { usePrefersReducedMotion } from '../../hooks/usePrefersReducedMotion'
import Button from '../ui/Button'
import Headline from '../ui/Headline'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './Services.css'

const clamp = (v, min, max) => Math.min(max, Math.max(min, v))

// Scroll-driven showcase. The track is tall; the stage inside it sticks to
// the viewport. Scrolling first opens the stage from an inset frame to full
// screen (`grow` 0 → 1), then steps through one service per viewport height,
// dissolving slowly between stills.
export default function Services() {
  const trackRef = useRef(null)
  const tabsRef = useRef(null)
  const reduced = usePrefersReducedMotion()
  const [grow, setGrow] = useState(0)
  const [index, setIndex] = useState(0)

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

  // On narrow screens the tab row scrolls sideways: keep the active tab in view.
  useEffect(() => {
    const row = tabsRef.current
    const tab = row?.children[index]
    if (!row || !tab || row.scrollWidth <= row.clientWidth) return
    row.scrollTo({ left: tab.offsetLeft - row.clientWidth / 2 + tab.offsetWidth / 2, behavior: reduced ? 'auto' : 'smooth' })
  }, [index, reduced])

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
    <section id="services" className="services surface-dark" aria-labelledby="services-title">
      <div className="services__intro container">
        <Reveal>
          <SectionLabel index={2}>{servicesIntro.label}</SectionLabel>
        </Reveal>
        <div className="services__head">
          <Headline id="services-title" className="services__title" lines={servicesIntro.title} />
          <Reveal as="p" className="services__lede lead" delay={200}>
            {servicesIntro.text}
          </Reveal>
        </div>
      </div>

      <div className="services__track" ref={trackRef} style={{ height: `${services.length * 100 + 70}vh` }}>
        {/* Anchors so menu and index links can jump to each service */}
        {services.map((s, i) => (
          <span key={s.id} id={`service-${s.id}`} className="services__anchor" style={{ top: `calc(${70 + i * 100}vh + 2px)` }} />
        ))}

        <div className="services__sticky">
          <div className="services__stage" style={{ '--g': g, clipPath: `inset(${(1 - g) * 14}% ${(1 - g) * 8}% 0 ${(1 - g) * 27}%)` }}>
            {services.map((s, i) => (
              <article
                key={s.id}
                className={`service-slide ${i === index ? 'is-active' : ''}`}
                aria-hidden={i !== index}
                {...(i !== index && { inert: '' })}
              >
                <Media fill image={s.image} video={s.video} />
                <div className="service-slide__shade" aria-hidden="true" />
                <div className="service-slide__content container">
                  <p className="service-slide__index label">
                    <span>{String(i + 1).padStart(2, '0')}</span>
                    {s.summary}
                  </p>
                  <h3 className="service-slide__title">{s.name}</h3>
                  <p className="service-slide__text">{s.text}</p>
                  <Button href="#contact">Start a project</Button>
                </div>
              </article>
            ))}

            <p className="services__counter label" aria-live="polite">
              <span className="visually-hidden">Service </span>
              <span className="services__counter-current">{String(index + 1).padStart(2, '0')}</span>
              <span className="services__counter-rule" aria-hidden="true" />
              {String(services.length).padStart(2, '0')}
              <span className="visually-hidden">: {current.name}</span>
            </p>

            <div
              ref={tabsRef}
              className="services__tabs container"
              role="tablist"
              aria-label="Services"
              style={{ '--count': services.length }}
            >
              {services.map((s, i) => (
                <button
                  key={s.id}
                  type="button"
                  role="tab"
                  aria-selected={i === index}
                  className={`services__tab label ${i === index ? 'is-active' : ''}`}
                  onClick={() => goTo(i)}
                >
                  <span className="services__tab-num">{String(i + 1).padStart(2, '0')}</span>
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
