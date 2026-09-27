import { useEffect, useRef } from 'react'
import { intro } from '../../content/home'
import { services } from '../../content/services'
import { site } from '../../config/site'
import Headline from '../ui/Headline'
import PillButton from '../ui/PillButton'
import Reveal from '../ui/Reveal'
import ServiceMark from '../ui/ServiceMark'
import './Intro.css'

// Deterministic layout of floating blocks for the abstract background.
const BLOCKS = Array.from({ length: 34 }, (_, i) => {
  const r = (n) => ((Math.sin(i * 9301 + n * 49297) + 1) / 2) % 1
  return {
    left: r(1) * 100,
    top: r(2) * 100,
    size: 5 + r(3) * 11,
    depth: 0.2 + r(4) * 0.8,
    glow: r(5) > 0.8,
  }
})

export default function Intro() {
  const bgRef = useRef(null)

  // Blocks drift at different speeds while scrolling (parallax).
  useEffect(() => {
    const el = bgRef.current
    if (!el || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    let raf
    const onScroll = () => {
      cancelAnimationFrame(raf)
      raf = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect()
        el.style.setProperty('--scroll', String(-rect.top))
      })
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  return (
    <section className="intro" aria-labelledby="intro-title">
      <div className="intro__bg" ref={bgRef} aria-hidden="true">
        {BLOCKS.map((b, i) => (
          <span
            key={i}
            className={`intro__block ${b.glow ? 'is-glow' : ''}`}
            style={{ left: `${b.left}%`, top: `${b.top}%`, width: `${b.size}vw`, '--depth': b.depth }}
          />
        ))}
      </div>

      <div className="intro__inner container">
        <div className="intro__text">
          <Headline id="intro-title" className="intro__title" lines={intro.title} />
          {intro.blocks.map((block, i) => (
            <Reveal key={block.heading} className="intro__block-text" delay={i * 100}>
              <h3>{block.heading}</h3>
              <p>{block.text}</p>
            </Reveal>
          ))}
          <Reveal as="p" className="intro__closing">
            {intro.closing}
          </Reveal>
        </div>

        <div className="intro__side">
          <Reveal className="intro__card">
            <span className="intro__card-name">{site.name}</span>
            <ul className="intro__card-grid">
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#service-${s.id}`}>
                    <ServiceMark service={s} size="sm" />
                  </a>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal className="intro__cta" delay={150}>
            <PillButton href={intro.cta.href}>{intro.cta.label}</PillButton>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
