import { site } from '../../config/site'
import { contact } from '../../content/home'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import ContactForm from './ContactForm'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="section contact" data-theme="dark" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionLabel index={7}>{contact.label}</SectionLabel>
        </Reveal>

        <h2 id="contact-title" className="contact__title display">
          {contact.title.map((line, i) => (
            <Reveal as="span" key={line} delay={i * 120}>
              {line}
            </Reveal>
          ))}
        </h2>

        <div className="contact__grid grid">
          <div className="contact__details">
            <p className="contact__lede muted">{contact.lede}</p>

            <a className="contact__email display text-link text-link--underlined" href={`mailto:${site.email}`}>
              {site.email}
            </a>

            <dl className="contact__facts">
              <div>
                <dt className="label muted">Phone</dt>
                <dd>
                  <a className="text-link" href={`tel:${site.phone.replace(/\s/g, '')}`}>
                    {site.phone}
                  </a>
                </dd>
              </div>
              {site.locations.map((loc) => (
                <div key={loc.city}>
                  <dt className="label muted">{loc.city}</dt>
                  <dd>
                    {loc.address}
                    <br />
                    {loc.country}
                  </dd>
                </div>
              ))}
              <div>
                <dt className="label muted">Follow</dt>
                <dd>
                  <ul className="contact__socials">
                    {site.socials.map((s) => (
                      <li key={s.label}>
                        <a className="text-link" href={s.href} target="_blank" rel="noreferrer">
                          {s.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>

          <ContactForm />
        </div>
      </div>
    </section>
  )
}
