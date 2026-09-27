import { useEffect, useRef, useState } from 'react'
import { site } from '../../config/site'
import { services } from '../../content/services'
import Logo from '../ui/Logo'
import './Header.css'

export default function Header() {
  const [solid, setSolid] = useState(false)
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Transparent over the hero, solid bar after that.
  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > window.innerHeight * 0.6)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Menu open: lock scroll, make the page inert, Escape closes.
  useEffect(() => {
    if (!open) return
    const background = document.querySelectorAll('main, .site-footer')
    document.body.classList.add('is-locked')
    background.forEach((el) => el.setAttribute('inert', ''))
    const t = setTimeout(() => menuRef.current?.querySelector('a')?.focus(), 350)
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      clearTimeout(t)
      document.body.classList.remove('is-locked')
      background.forEach((el) => el.removeAttribute('inert'))
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  const close = () => setOpen(false)

  return (
    <>
      <header className={`site-header ${solid ? 'is-solid' : ''} ${open ? 'is-menu-open' : ''}`}>
        <div className="site-header__inner container">
          <a href="#top" className="site-header__home" aria-label={`${site.name} — home`} onClick={close}>
            <Logo />
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            <ul>
              <li>
                <button
                  ref={toggleRef}
                  type="button"
                  className="site-header__link site-header__menu-btn"
                  aria-expanded={open}
                  aria-controls="site-menu"
                  onClick={() => setOpen((v) => !v)}
                >
                  <span className="site-header__menu-label">{open ? 'Close' : 'Services'}</span>
                  <span className={`burger ${open ? 'is-open' : ''}`} aria-hidden="true">
                    <span />
                    <span />
                    <span />
                  </span>
                </button>
              </li>
              {site.nav.map((item) => (
                <li key={item.href} className="site-header__desktop-only">
                  <a className="site-header__link" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      <div id="site-menu" ref={menuRef} className={`site-menu ${open ? 'is-open' : ''}`} aria-hidden={!open} {...(!open && { inert: '' })}>
        <div className="site-menu__inner container">
          <div className="site-menu__col">
            <p className="label site-menu__label">Services</p>
            <ul className="site-menu__services">
              {services.map((s, i) => (
                <li key={s.id} style={{ '--i': i }}>
                  <a href={`#service-${s.id}`} onClick={close}>
                    <span className="site-menu__index">{String(i + 1).padStart(2, '0')}</span>
                    {s.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="site-menu__col site-menu__col--side">
            <p className="label site-menu__label">Menu</p>
            <ul className="site-menu__links">
              {site.nav.map((item, i) => (
                <li key={item.href} style={{ '--i': i + 2 }}>
                  <a href={item.href} onClick={close}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="site-menu__contact" style={{ '--i': 7 }}>
              <a href={`mailto:${site.email}`}>{site.email}</a>
              <span>{site.offices.join(' · ')}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
