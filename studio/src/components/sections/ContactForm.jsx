import { useState } from 'react'
import { site } from '../../config/site'
import { services } from '../../content/services'
import Button from '../ui/Button'

// Posts to `site.contactFormEndpoint` when configured; otherwise opens the
// visitor's mail client with the message pre-filled.
export default function ContactForm() {
  const [status, setStatus] = useState('idle') // idle | sending | sent | error

  async function handleSubmit(e) {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form))

    if (!site.contactFormEndpoint) {
      const subject = `New story — ${data.company || data.name}`
      const body = [
        `Name: ${data.name}`,
        `Company: ${data.company}`,
        `Email: ${data.email}`,
        `Service: ${data.type}`,
        '',
        data.message,
      ].join('\n')
      window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
      return
    }

    setStatus('sending')
    try {
      const res = await fetch(site.contactFormEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(data),
      })
      if (!res.ok) throw new Error(res.statusText)
      form.reset()
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="contact-form__row">
        <Field label="Name" name="name" autoComplete="name" required />
        <Field label="Company" name="company" autoComplete="organization" />
      </div>
      <Field label="Email" name="email" type="email" autoComplete="email" required />

      <div className="field">
        <label htmlFor="contact-type">
          Service
        </label>
        <select id="contact-type" name="type" defaultValue="Not sure yet">
          <option>Not sure yet</option>
          {services.map((s) => (
            <option key={s.id}>{s.name}</option>
          ))}
        </select>
      </div>

      <div className="field">
        <label htmlFor="contact-message">
          Your story, in a few lines
        </label>
        <textarea id="contact-message" name="message" rows={4} required />
      </div>

      <div className="contact-form__submit">
        <Button type="submit" variant="solid" disabled={status === 'sending'}>
          {status === 'sending' ? 'Sending…' : 'Send message'}
        </Button>
        <p className="contact-form__status" role="status">
          {status === 'sent' && 'Thank you — we’ll be in touch shortly.'}
          {status === 'error' && `Something went wrong. Please email us at ${site.email}.`}
        </p>
      </div>
    </form>
  )
}

function Field({ label, name, type = 'text', ...rest }) {
  const id = `contact-${name}`
  return (
    <div className="field">
      <label htmlFor={id}>
        {label}
        {rest.required && <span aria-hidden="true"> *</span>}
      </label>
      <input id={id} name={name} type={type} {...rest} />
    </div>
  )
}
