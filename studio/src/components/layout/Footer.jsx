import { site } from '../../config/site'
import Logo from '../ui/Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer surface-dark">
      <div className="container">
        <div className="site-footer__top">
          <div className="site-footer__brand">
            <Logo />
            <p className="site-footer__tagline">
              Films for companies,
              <br />
              people and ideas.
            </p>
          </div>

          <div className="site-footer__col">
            <p className="label text-2">Studio</p>
            <ul>
              {site.offices.map((o) => (
                <li key={o}>{o}</li>
              ))}
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            </ul>
          </div>

          <nav className="site-footer__col" aria-label="Footer">
            <p className="label text-2">Menu</p>
            <ul className="site-footer__nav label">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <a href={item.href}>{item.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="site-footer__col">
            <p className="label text-2">Follow</p>
            <ul>
              {site.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href}>{s.label}</a>
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
