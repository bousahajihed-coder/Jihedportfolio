import { site } from '../../config/site'
import { contact } from '../../content/home'
import Headline from '../ui/Headline'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import ContactForm from './ContactForm'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact surface-dark" aria-labelledby="contact-title">
      <div className="container">
        <Reveal>
          <SectionLabel index={7}>{contact.label}</SectionLabel>
        </Reveal>
        <Headline id="contact-title" className="contact__title" lines={contact.title} />

        <div className="contact__grid">
          <div className="contact__details">
            <Reveal as="p" className="contact__lead">
              {contact.lead}
            </Reveal>
            <Reveal as="p" className="text-2" delay={100}>
              {contact.text}
            </Reveal>
            <Reveal className="contact__facts" delay={200}>
              <p className="label text-2">{contact.emailLabel}</p>
              <a className="contact__email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <dl>
                <div>
                  <dt className="label">Studio</dt>
                  <dd>{site.base}</dd>
                </div>
                <div>
                  <dt className="label">Productions</dt>
                  <dd>Worldwide</dd>
                </div>
              </dl>
            </Reveal>
          </div>
          <Reveal className="contact__form" delay={150}>
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  )
}
