// Global identity and contact settings. Change the name, logo and contact
// details here; nothing else in the codebase hard-codes them.

export const site = {
  name: 'Studio Name',
  // Set to { src: '/logo.svg', alt: 'Studio Name', width: 160, height: 32 }
  // once a logo exists. While null, the name is set as a wordmark.
  logo: null,
  tagline: 'We tell the stories behind companies.',

  email: 'hello@studioname.com',
  phone: '+00 000 000 00 00',
  offices: ['City One', 'City Two', 'City Three'],
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'LinkedIn', href: '#' },
    { label: 'Vimeo', href: '#' },
    { label: 'YouTube', href: '#' },
  ],

  // "Services" opens the full-screen menu; the rest are anchors.
  nav: [
    { label: 'Our work', href: '#work' },
    { label: 'About', href: '#about' },
    { label: 'Careers', href: '#careers' },
    { label: 'Contact us', href: '#contact' },
  ],

  // POST JSON here when set (Formspree, serverless function …);
  // otherwise the contact form falls back to a mailto link.
  contactFormEndpoint: '',
}
