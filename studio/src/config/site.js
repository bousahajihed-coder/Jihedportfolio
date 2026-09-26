// Global identity and contact settings.
// Everything brand-specific that is not copy lives here, so the company
// name, logo and contact details can be changed in one place.

export const site = {
  name: 'Studio Name',
  // Set to { src: '/logo.svg', alt: 'Studio Name', width: 120, height: 24 }
  // once a logo exists. While null, the name is rendered as a wordmark.
  logo: null,
  tagline: 'We tell the stories behind companies.',

  email: 'hello@studioname.com',
  phone: '+00 000 000 00 00',
  locations: [
    { city: 'City', country: 'Country', address: 'Street 00, 00000' },
    { city: 'Second City', country: 'Country', address: 'By appointment' },
  ],
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Vimeo', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'YouTube', href: '#' },
  ],

  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],

  // Contact form. With an endpoint (Formspree, a serverless function, …)
  // the form POSTs JSON to it. Without one it falls back to a mailto link.
  contactFormEndpoint: '',
}
