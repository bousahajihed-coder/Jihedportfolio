// What ASTRA makes. Drives the pinned service slider, the menu, the
// contact form and the footer.
import { images } from './images'

export const services = [
  {
    id: 'films',
    name: 'Films',
    summary: 'Corporate films · Image films · Brand films',
    text: 'Corporate films, image films and brand films built around a clear narrative.',
    image: images.serviceFilms,
  },
  {
    id: 'stories',
    name: 'Stories',
    summary: 'Founder stories · Company stories · Interviews · Documentaries',
    text: 'Founder and company stories, interviews and documentaries focused on people, ideas and real moments.',
    image: images.serviceStories,
  },
  {
    id: 'social',
    name: 'Social',
    summary: 'Social films · Content series · Reels · Short form',
    text: 'Social films, content series, reels and short-form formats made for the platforms your audience uses.',
    image: images.serviceSocial,
  },
  {
    id: 'crew',
    name: 'Crew',
    summary: 'Directors · DoPs · Camera · Production · Crew booking',
    text: 'Directors, DoPs, camera and production teams, booked for your shoot locally or internationally.',
    image: images.serviceCrew,
  },
]
