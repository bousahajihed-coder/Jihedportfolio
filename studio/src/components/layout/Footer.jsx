import { site } from '../../config/site'
import { services } from '../../content/services'
import Logo from '../ui/Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer surface-dark">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p className="text-2">{site.tagline}</p>
          </div>

          <nav className="site-footer__col" aria-label="Services">
            <p className="label text-2">Services</p>
            <ul>
              {services.map((s) => (
                <li key={s.id}>
                  <a href={`#service-${s.id}`}>{s.name}</a>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="site-footer__col" aria-label="Studio">
            <p className="label text-2">Studio</p>
            <ul>
              {[...site.nav, ...site.secondaryNav].map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <p className="label text-2">Contact</p>
            <ul>
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
              <li className="text-2">{site.offices.join(' · ')}</li>
            </ul>
            <ul className="site-footer__socials">
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="site-footer__bottom label text-2">
          <span>
            © {new Date().getFullYear()} {site.name}
          </span>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  )
}
