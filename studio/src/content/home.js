// Homepage copy. Headlines are lists of lines; `bold: true` sets a line in
// the heavier cut.
import { images } from './images'

export const hero = {
  meta: ['ASTRA', 'Film production', 'Berlin'],
  title: [{ text: 'Films for' }, { text: 'companies,' }, { text: 'people' }, { text: 'and ideas.', bold: true }],
  text: 'We develop and produce films that make companies, people and ideas worth paying attention to.',
  cta: { label: 'View our work', href: '#work' },
  secondary: { label: 'Start a project', href: '#contact' },
  reelLabel: 'Play showreel',
  // Background loop behind the headline (muted, loops, plays while visible).
  // File lives in public/media/. Add `poster: `${base}media/hero.jpg`` for a
  // still that shows before the first frame loads.
  video: { src: `${import.meta.env.BASE_URL}media/hero.mp4`, type: 'video/mp4' },
  image: images.hero,
}

export const intro = {
  label: 'Studio',
  title: [{ text: 'Every company' }, { text: 'has a story.', bold: true }],
  lead: 'The strongest stories are not always the loudest.',
  text: [
    'They are found in the people behind a company, the ideas that shaped it, the products that changed something and the moments that deserve to be remembered.',
    'ASTRA develops and produces films that bring those stories into focus.',
  ],
  image: images.intro,
}

export const servicesIntro = {
  label: 'What we do',
  title: [{ text: 'From the first' }, { text: 'idea to the' }, { text: 'final frame.', bold: true }],
  text: 'We work across the entire production process, building the right creative and production team around every project.',
}

export const work = {
  label: 'Selected work',
  title: [{ text: 'Selected', bold: true }, { text: 'work' }],
  text: 'A selection of films, stories and productions.',
  cta: { label: 'Start a project', href: '#contact' },
}

export const about = {
  label: 'About',
  title: [{ text: 'We are' }, { text: 'producers,' }, { text: 'storytellers' }, { text: 'and filmmakers.', bold: true }],
  lead: 'ASTRA is a production studio working with companies, brands and people to create films with substance.',
  text: [
    'We bring together directors, cinematographers, editors, designers, crews and production partners depending on what each project requires.',
    'From a focused interview shoot to a multi-market production, we build the production around the story.',
    'We are based in Berlin and work internationally.',
  ],
  cta: { label: 'More about ASTRA', href: '#production' },
  image: images.about,
  careers: {
    title: 'Careers',
    text: 'Directors, cinematographers, editors and producers: we are always glad to hear from you.',
    cta: { label: 'Get in touch', href: '#contact' },
  },
}

export const production = {
  label: 'Production',
  title: [{ text: 'Built for' }, { text: 'the real world.', bold: true }],
  lead: 'Good production is invisible when it works.',
  text: [
    'It means the right people, the right locations, the right equipment, the right schedule and enough attention to detail that the creative can stay at the centre.',
    'ASTRA handles the practical side of production from development and pre-production through shoot management and post-production.',
  ],
  stages: [
    'Development',
    'Pre-production',
    'Casting',
    'Locations',
    'Crew',
    'Production',
    'Post-production',
    'International production',
  ],
  image: images.production,
}

export const international = {
  label: 'International',
  title: [{ text: 'Berlin' }, { text: 'and beyond.', bold: true }],
  text: 'We produce locally and internationally, working with trusted crews and creative partners across different markets.',
  places: ['Based in Berlin', 'Productions across Europe', 'Partners worldwide'],
  image: images.international,
}

export const contact = {
  label: 'Contact',
  title: [{ text: 'Have a story' }, { text: 'to make?', bold: true }],
  lead: 'Tell us what you are working on.',
  text: 'Whether you already have a script, a creative concept or simply the beginning of an idea, we can help shape the production around it.',
  emailLabel: 'Contact ASTRA',
}
