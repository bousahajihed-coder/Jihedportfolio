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
          <SectionLabel index={5}>{contact.label}</SectionLabel>
        </Reveal>
        <Headline id="contact-title" className="contact__title" lines={contact.title} />

        <div className="contact__grid">
          <div className="contact__details">
            <Reveal as="p" className="lead">
              {contact.text}
            </Reveal>
            <Reveal className="contact__facts" delay={100}>
              <a className="contact__email" href={`mailto:${site.email}`}>
                {site.email}
              </a>
              <dl>
                <div>
                  <dt className="label">Telephone</dt>
                  <dd>
                    <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
                  </dd>
                </div>
                <div>
                  <dt className="label">Offices</dt>
                  <dd>{site.offices.join(' · ')}</dd>
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
