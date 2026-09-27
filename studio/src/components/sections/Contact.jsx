import { site } from '../../config/site'
import { contact } from '../../content/home'
import Headline from '../ui/Headline'
import Reveal from '../ui/Reveal'
import ContactForm from './ContactForm'
import './Contact.css'

export default function Contact() {
  return (
    <section id="contact" className="contact" aria-labelledby="contact-title">
      <div className="contact__inner container">
        <div className="contact__intro">
          <Reveal as="p" className="label contact__label">
            {contact.label}
          </Reveal>
          <Headline id="contact-title" className="contact__title" lines={contact.title} />
          <Reveal as="p" className="contact__text">
            {contact.text}
          </Reveal>
          <Reveal className="contact__details" delay={100}>
            <a className="contact__email" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            <a href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>
            <span>{site.offices.join(' · ')}</span>
          </Reveal>
        </div>
        <Reveal className="contact__form-wrap" delay={150}>
          <ContactForm />
        </Reveal>
      </div>
    </section>
  )
}
