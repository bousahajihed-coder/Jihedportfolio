// Homepage copy. Temporary Phase 1 wording, kept apart from the components
// so it can be rewritten without touching layout code.

export const hero = {
  eyebrow: 'Film & storytelling studio',
  title: ['Every company', 'has a story.'],
  lede: 'We tell the stories behind companies.',
  cta: { label: 'View our work', href: '#work' },
  reelLabel: 'Showreel 2026',
  // Background media: drop in a muted loop and a poster frame.
  // video: { src: '/media/reel.mp4', type: 'video/mp4', poster: '/media/reel.jpg' }
  video: null,
  image: null,
}

export const intro = {
  label: 'What we do',
  statement: 'We find the story inside a company — its people, its products, its reason to exist —',
  statementMuted: 'and turn it into films people actually want to watch.',
  aside:
    'Image films, founder stories, product films, documentaries, interviews and social series. Different formats, one discipline: story first.',
}

export const work = {
  label: 'Selected work',
  title: 'Stories we’ve told',
  allWorkLabel: 'All work',
}

export const servicesIntro = {
  label: 'Services',
  title: 'What we make',
  lede: 'Seven formats. Each one starts the same way — with the story.',
}

export const approach = {
  label: 'Approach',
  title: ['Story first.', 'Film second.'],
  lede: 'Most production companies start with the camera. We start with questions.',
  steps: [
    {
      title: 'Discover',
      text: 'We get to know the company, the people, the product and the ambition — before we talk about shots.',
    },
    {
      title: 'Define',
      text: 'We find the one story worth telling and decide how it should be told: format, tone, voice.',
    },
    {
      title: 'Create',
      text: 'We produce the film with the crew, craft and production approach the story needs. Nothing more, nothing less.',
    },
    {
      title: 'Deliver',
      text: 'We shape the film for the platforms and audiences that matter, so it keeps working long after launch.',
    },
  ],
}

export const interlude = {
  quote: 'The camera is the last thing we pick up.',
  // Optional full-bleed media behind the quote.
  video: null,
  image: null,
}

export const about = {
  label: 'About',
  statement:
    'We are filmmakers, journalists and strategists. We ask more questions than most — because the best story is rarely the first one we’re told.',
  body: [
    'We work closely with a small number of companies at a time, from the first conversation to the final cut. The people you meet at the start are the people on set.',
    'Based in [City], working wherever the story is.',
  ],
  traits: [
    { title: 'Human', text: 'People first, logos second.' },
    { title: 'Curious', text: 'We ask until we understand.' },
    { title: 'Strategic', text: 'Every film has a job to do.' },
    { title: 'Cinematic', text: 'Crafted for the big screen, even on a phone.' },
    { title: 'International', text: 'Multilingual crews, global productions.' },
    { title: 'Hands on', text: 'Small team, no hand-offs.' },
  ],
}

export const clientsIntro = {
  label: 'Clients',
  title: 'Companies we’ve told stories for',
  note: 'Placeholder marks — fictional names for layout purposes.',
}

export const contact = {
  label: 'Contact',
  title: ['Have a story?', 'Let’s tell it.'],
  lede: 'Tell us a little about your company and what you have in mind. We reply within two working days.',
}
