// Selected work. Fictional placeholder companies, not ASTRA clients.
//
//   image:  still for the gallery (see content/images.js)
//   video:  full film for the viewer —
//           bunny(id)                      Bunny Stream video (library below)
//           { type: 'file', src } | { type: 'vimeo' | 'youtube', id }
//   layout: optional 'wide' | 'half' to override the gallery rhythm

import { images } from './images'

// Bunny Stream video library. A video's id is the last part of its link:
// https://player.mediadelivery.net/play/783762/<id>
const BUNNY_LIBRARY = '783762'
const bunny = (id) => ({ type: 'bunny', library: BUNNY_LIBRARY, id })

export const projects = [
  { id: 'north', video: bunny('6a48b4c0-69ae-4e27-a54e-e1520d0de9e0'), title: 'NORTH', type: 'Company Film', location: 'Berlin', year: 2026, duration: '04:30', image: images.workNorth, description: 'A company film about a Berlin business at the start of its next chapter, told by the people who run it.' },
  { id: 'form', video: bunny('08250804-a968-49b3-975e-f69e0ee85f36'), title: 'FORM', type: 'Founder Story', location: 'Hamburg', year: 2026, duration: '06:10', image: images.workForm, description: 'A founder portrait filmed across one working week in Hamburg, from the factory floor to the board room.' },
  { id: 'orbit', video: bunny('52e7a82d-7a6c-4e78-bd18-273221d755f1'), title: 'ORBIT', type: 'Brand Film', location: 'Munich', year: 2025, duration: '01:45', image: images.workOrbit, description: 'A brand film built around a single interior and one long afternoon of light.' },
  { id: 'field-notes', title: 'FIELD NOTES', type: 'Documentary', location: 'Berlin', year: 2025, duration: '28:00', image: images.workFieldNotes, description: 'An observational documentary filmed over four months with a research team outside Berlin.' },
  { id: 'monument', title: 'MONUMENT', type: 'Image Film', location: 'Paris', year: 2025, duration: '02:20', image: images.workMonument, description: 'An image film shot in Paris over two early mornings, before the city wakes up.' },
  { id: 'kin', title: 'KIN', type: 'Editorial Film', location: 'Copenhagen', year: 2024, duration: '09:40', image: images.workKin, description: 'An editorial film about three generations of a family business in Copenhagen.' },
].map((p) => ({ video: null, ...p }))
