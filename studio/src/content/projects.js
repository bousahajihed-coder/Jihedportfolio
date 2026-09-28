// Selected work. Fictional placeholder companies, not ASTRA clients.
//
//   image:  still for the gallery (see content/images.js)
//   video:  full film for the viewer —
//           { type: 'file', src } | { type: 'vimeo' | 'youtube', id }
//   layout: optional 'wide' | 'half' to override the gallery rhythm

import { images } from './images'

export const projects = [
  { id: 'north', title: 'NORTH', type: 'Company Film', location: 'Berlin', year: 2026, duration: '04:30', image: images.workNorth, description: 'A company film about a Berlin business at the start of its next chapter, told by the people who run it.' },
  { id: 'form', title: 'FORM', type: 'Founder Story', location: 'Hamburg', year: 2026, duration: '06:10', image: images.workForm, description: 'A founder portrait filmed across one working week in Hamburg, from the factory floor to the board room.' },
  { id: 'orbit', title: 'ORBIT', type: 'Brand Film', location: 'Munich', year: 2025, duration: '01:45', image: images.workOrbit, description: 'A brand film built around a single interior and one long afternoon of light.' },
  { id: 'field-notes', title: 'FIELD NOTES', type: 'Documentary', location: 'Berlin', year: 2025, duration: '28:00', image: images.workFieldNotes, description: 'An observational documentary filmed over four months with a research team outside Berlin.' },
  { id: 'monument', title: 'MONUMENT', type: 'Image Film', location: 'Paris', year: 2025, duration: '02:20', image: images.workMonument, description: 'An image film shot in Paris over two early mornings, before the city wakes up.' },
  { id: 'kin', title: 'KIN', type: 'Editorial Film', location: 'Copenhagen', year: 2024, duration: '09:40', image: images.workKin, description: 'An editorial film about three generations of a family business in Copenhagen.' },
].map((p) => ({ video: null, ...p }))
