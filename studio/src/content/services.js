// What ASTRA makes. Drives the pinned service slider, the menu, the
// contact form and the footer.
import { images } from './images'

export const services = [
  {
    id: 'films',
    name: 'Films',
    summary: 'Corporate films · Image films · Brand stories',
    text: 'Corporate films, image films and brand stories built around a clear narrative.',
    image: images.serviceFilms,
  },
  {
    id: 'editorial',
    name: 'Editorial',
    summary: 'Documentary · Founder stories · Editorial series',
    text: 'Documentary and editorial storytelling focused on people, ideas and real stories.',
    image: images.serviceEditorial,
  },
  {
    id: 'content',
    name: 'Content',
    summary: 'Campaign films · Social · Interviews',
    text: 'Campaign films, social content, interviews and digital formats designed for modern audiences.',
    image: images.serviceContent,
  },
  {
    id: 'production',
    name: 'Production',
    summary: 'Local and international production services',
    text: 'Full production services for local and international shoots, from pre-production through post.',
    image: images.serviceProduction,
  },
]
