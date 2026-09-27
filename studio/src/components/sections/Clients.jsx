import { clients } from '../../content/clients'
import { clientsIntro } from '../../content/home'
import './Clients.css'

// Slow, endless line of client names. Rendered twice for a seamless loop.
export default function Clients() {
  return (
    <section className="clients surface-light" aria-label={clientsIntro.label}>
      <div className="container">
        <p className="label text-2 clients__label">{clientsIntro.label}</p>
      </div>
      <div className="clients__marquee">
        {[0, 1].map((copy) => (
          <ul key={copy} className="clients__row" aria-hidden={copy === 1}>
            {clients.map((c) => (
              <li key={c.name}>{c.logo?.src ? <img src={c.logo.src} alt={copy ? '' : c.name} /> : c.name}</li>
            ))}
          </ul>
        ))}
      </div>
    </section>
  )
}
