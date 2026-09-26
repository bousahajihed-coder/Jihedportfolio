import { site } from '../../config/site'
import Logo from '../ui/Logo'
import './Footer.css'

export default function Footer() {
  return (
    <footer className="site-footer" data-theme="dark">
      <div className="container site-footer__inner">
        <Logo />
        <p className="site-footer__tagline muted">{site.tagline}</p>
        <nav aria-label="Footer">
          <ul className="site-footer__nav">
            {site.nav.map((item) => (
              <li key={item.href}>
                <a className="text-link label" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="label muted">
          © {new Date().getFullYear()} {site.name}
        </p>
        <a className="text-link label" href="#top">
          Back to top ↑
        </a>
      </div>
    </footer>
  )
}
