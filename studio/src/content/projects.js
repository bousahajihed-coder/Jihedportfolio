// Selected work. The first three are real films (titles as in Bunny);
// the rest are fictional placeholders until more films are added.
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
const BUNNY_CDN = 'vz-c6b670d2-55a.b-cdn.net'
const bunny = (id) => ({ type: 'bunny', library: BUNNY_LIBRARY, id })
// Bunny's still for a video, used as the tile image (keeps the slot's alt
// text and placeholder as a fallback).
const bunnyStill = (slot, id) => ({ ...slot, src: `https://${BUNNY_CDN}/${id}/thumbnail.jpg` })

export const projects = [
  { id: 'shell', video: bunny('6a48b4c0-69ae-4e27-a54e-e1520d0de9e0'), title: 'Shell E-mobility Innovation', type: 'Corporate Film', duration: '09:33', image: bunnyStill(images.workNorth, '6a48b4c0-69ae-4e27-a54e-e1520d0de9e0') },
  { id: 'bayer', video: bunny('08250804-a968-49b3-975e-f69e0ee85f36'), title: 'Bayer Medical Breakthroughs', type: 'Corporate Film', duration: '05:25', image: bunnyStill(images.workForm, '08250804-a968-49b3-975e-f69e0ee85f36') },
  { id: 'air-up', video: bunny('52e7a82d-7a6c-4e78-bd18-273221d755f1'), title: 'Air Up Hydration Revolution', type: 'Brand Film', duration: '05:42', image: bunnyStill(images.workOrbit, '52e7a82d-7a6c-4e78-bd18-273221d755f1') },
  { id: 'field-notes', title: 'FIELD NOTES', type: 'Documentary', location: 'Berlin', year: 2025, duration: '28:00', image: images.workFieldNotes, description: 'An observational documentary filmed over four months with a research team outside Berlin.' },
  { id: 'monument', title: 'MONUMENT', type: 'Image Film', location: 'Paris', year: 2025, duration: '02:20', image: images.workMonument, description: 'An image film shot in Paris over two early mornings, before the city wakes up.' },
  { id: 'kin', title: 'KIN', type: 'Editorial Film', location: 'Copenhagen', year: 2024, duration: '09:40', image: images.workKin, description: 'An editorial film about three generations of a family business in Copenhagen.' },
].map((p) => ({ video: null, ...p }))
