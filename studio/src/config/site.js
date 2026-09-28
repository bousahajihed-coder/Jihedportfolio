// Global identity and contact settings. Change the name, logo and contact
// details here; nothing else in the codebase hard-codes them.

export const site = {
  name: 'ASTRA',
  // Set to { src: '/logo.svg', alt: 'ASTRA', width: 160, height: 32 }
  // once a logo exists. While null, the name is set as a wordmark.
  logo: null,
  tagline: 'Films for companies, people and ideas.',

  email: 'hello@astra.studio',
  phone: null,
  base: 'Berlin',
  offices: ['Berlin', 'Worldwide'],
  // Placeholder links until the accounts exist.
  socials: [
    { label: 'Instagram', href: '#' },
    { label: 'Vimeo', href: '#' },
    { label: 'LinkedIn', href: '#' },
  ],

  // Header navigation. `menu: true` opens the full-screen menu instead of
  // jumping to an anchor.
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services', menu: true },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  // Secondary links: shown in the menu only.
  secondaryNav: [
    { label: 'Production', href: '#production' },
    { label: 'International', href: '#international' },
    { label: 'Careers', href: '#careers' },
  ],

  // POST JSON here when set (Formspree, serverless function …);
  // otherwise the contact form falls back to a mailto link.
  contactFormEndpoint: '',
}
