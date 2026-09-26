import { clients } from '../../content/clients'
import { clientsIntro } from '../../content/home'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './Clients.css'

export default function Clients() {
  return (
    <section className="section clients" data-theme="light" aria-labelledby="clients-title">
      <div className="container">
        <header className="clients__header">
          <Reveal>
            <SectionLabel index={6}>{clientsIntro.label}</SectionLabel>
          </Reveal>
          <Reveal as="h2" id="clients-title" className="clients__title display" delay={100}>
            {clientsIntro.title}
          </Reveal>
        </header>

        <ul className="clients__grid">
          {clients.map((client, i) => (
            <Reveal as="li" key={client.name} className="clients__cell" delay={(i % 4) * 60}>
              {client.logo?.src ? (
                <img
                  src={client.logo.src}
                  alt={client.name}
                  width={client.logo.width}
                  height={client.logo.height}
                  loading="lazy"
                />
              ) : (
                <span className="clients__wordmark" data-variant={i % 4}>
                  {client.name}
                </span>
              )}
            </Reveal>
          ))}
        </ul>

        <p className="clients__note label muted">{clientsIntro.note}</p>
      </div>
    </section>
  )
}
