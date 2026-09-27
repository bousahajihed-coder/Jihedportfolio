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
    'Placeholder introduction. A film and production studio making image films, brand stories and documentaries for companies across Europe and beyond.',
  cta: { label: 'View our work', href: '#work' },
  reelLabel: 'Play showreel',
  meta: ['Showreel', '2026', '02:14'],
  // Background: { src: '/media/hero.mp4', type: 'video/mp4', poster: '/media/hero.jpg' }
  video: null,
  image: null,
}

export const intro = {
  title: [
    { text: 'Every company' },
    { text: 'has a' },
    { text: 'story worth', bold: true },
    { text: 'telling.', bold: true },
  ],
  label: 'Studio',
  indexLabel: 'What we make',
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
  closing: 'Placeholder closing line: five disciplines, one team, one way of working.',
  cta: { label: 'Discover our services', href: '#services' },
}

export const servicesIntro = {
  label: 'Services',
  title: [{ text: 'Five ways' }, { text: 'to tell a story', bold: true }],
}

export const work = {
  label: 'Selected work',
  title: [{ text: 'Stories that' }, { text: 'move people', bold: true }],
  cta: { label: 'View all work', href: '#work' },
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
    cta: { label: 'Get in touch', href: '#contact' },
  },
}

export const clientsIntro = {
  label: 'Trusted by',
}

export const contact = {
  label: 'Contact',
  title: [{ text: 'Have a story?' }, { text: 'Let’s tell it', bold: true }],
  text: 'Placeholder line: tell us about your company and what you have in mind. We reply within two working days.',
}
