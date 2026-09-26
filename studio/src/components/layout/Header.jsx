import { useEffect, useRef, useState } from 'react'
import { site } from '../../config/site'
import Logo from '../ui/Logo'
import './Header.css'

export default function Header() {
  const [open, setOpen] = useState(false)
  const toggleRef = useRef(null)
  const menuRef = useRef(null)

  // Lock scroll, close on Escape, and keep focus inside while the menu is open.
  useEffect(() => {
    if (!open) return
    const background = document.querySelectorAll('main, .site-footer')
    document.body.classList.add('is-locked')
    background.forEach((el) => el.setAttribute('inert', ''))
    menuRef.current?.querySelector('a')?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        toggleRef.current?.focus()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.classList.remove('is-locked')
      background.forEach((el) => el.removeAttribute('inert'))
      window.removeEventListener('keydown', onKey)
    }
  }, [open])

  // Close the mobile menu if the viewport grows to desktop size.
  useEffect(() => {
    const mql = window.matchMedia('(min-width: 900px)')
    const onChange = () => mql.matches && setOpen(false)
    mql.addEventListener('change', onChange)
    return () => mql.removeEventListener('change', onChange)
  }, [])

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner container">
          <a href="#top" className="site-header__home" aria-label={`${site.name} — home`}>
            <Logo />
          </a>

          <nav className="site-header__nav" aria-label="Primary">
            <ul>
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a className="text-link label" href={item.href}>
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <button
            ref={toggleRef}
            type="button"
            className="site-header__toggle label"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? 'Close' : 'Menu'}
          </button>
        </div>
      </header>

      <div
        id="mobile-menu"
        ref={menuRef}
        className={`mobile-menu ${open ? 'is-open' : ''}`}
        data-theme="dark"
        hidden={!open}
      >
        <nav className="mobile-menu__nav container" aria-label="Mobile">
          <ul>
            {site.nav.map((item, i) => (
              <li key={item.href} style={{ '--i': i }}>
                <a className="display" href={item.href} onClick={() => setOpen(false)}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <div className="mobile-menu__footer label">
            <a href={`mailto:${site.email}`}>{site.email}</a>
            <span className="muted">{site.locations[0]?.city}</span>
          </div>
        </nav>
      </div>
    </>
  )
}
