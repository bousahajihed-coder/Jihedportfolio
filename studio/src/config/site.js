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

  // Header navigation. `menu: true` opens the full-screen menu (services,
  // plus every link below) instead of jumping to an anchor.
  nav: [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services', menu: true },
    { label: 'About', href: '#about' },
    { label: 'Contact', href: '#contact' },
  ],
  // Secondary links: shown in the menu and footer, not the header.
  secondaryNav: [{ label: 'Careers', href: '#careers' }],

  // POST JSON here when set (Formspree, serverless function …);
  // otherwise the contact form falls back to a mailto link.
  contactFormEndpoint: '',
}
