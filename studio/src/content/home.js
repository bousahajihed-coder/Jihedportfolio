// Homepage copy — filler wording for layout review only.
// Each headline is a list of lines; `bold: true` sets a line in the heavy cut.

export const hero = {
  title: [
    { text: 'Telling the' },
    { text: 'stories behind' },
    { text: 'every' },
    { text: 'company', bold: true },
  ],
  text:
    'Placeholder introduction. One or two sentences on what the studio does: films, founder stories and brand content that help companies be understood.',
  cta: { label: 'View our work', href: '#work' },
  // Background: { src: '/media/hero.mp4', type: 'video/mp4', poster: '/media/hero.jpg' }
  video: null,
  image: null,
}

export const intro = {
  title: [
    { text: 'Every company' },
    { text: 'has a' },
    { text: 'story worth', bold: true },
    { text: 'telling', bold: true },
  ],
  blocks: [
    {
      heading: 'What we do',
      text:
        'Placeholder paragraph. Describe the team — directors, producers, editors and strategists — and how they turn a company’s people, products and ideas into films. Two to four sentences works best here.',
    },
    {
      heading: 'Why we do it',
      text:
        'Placeholder paragraph. The belief behind the studio: why stories matter for companies, and why every business deserves to have its story told well. Keep it human and specific.',
    },
  ],
  closing: 'Placeholder closing line: five services, one team, one way of working.',
  cta: { label: 'Discover more', href: '#services' },
}

export const servicesIntro = {
  title: 'Services',
}

export const work = {
  label: 'Our work',
  title: [{ text: 'Stories that' }, { text: 'move people', bold: true }],
  cta: { label: 'View all', href: '#work' },
}

export const about = {
  label: 'About',
  title: [{ text: 'A studio built' }, { text: 'around stories', bold: true }],
  text: [
    'Placeholder paragraph about the studio: where it started, who is behind it and how it works with companies from first conversation to final cut.',
    'Placeholder paragraph about approach: discovering the story first, then choosing the right format, crew and platform for it.',
  ],
  stats: [
    { value: '00+', label: 'Films produced' },
    { value: '00', label: 'Countries filmed in' },
    { value: '00', label: 'Languages spoken' },
    { value: '00+', label: 'Companies served' },
  ],
  careers: {
    title: 'Careers',
    text: 'Placeholder line inviting directors, producers and editors to get in touch.',
    cta: { label: 'Join the team', href: '#contact' },
  },
}

export const clientsIntro = {
  label: 'Trusted by',
}

export const contact = {
  label: 'Contact us',
  title: [{ text: 'Have a story?' }, { text: 'Let’s tell it', bold: true }],
  text: 'Placeholder line: tell us about your company and what you have in mind. We reply within two working days.',
}
