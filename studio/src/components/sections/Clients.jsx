import { clients } from '../../content/clients'
import { clientsIntro } from '../../content/home'
import './Clients.css'

// Endless client marquee. The list is rendered twice so the loop is seamless.
export default function Clients() {
  return (
    <section className="clients" aria-label={clientsIntro.label}>
      <p className="label clients__label container">{clientsIntro.label}</p>
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
