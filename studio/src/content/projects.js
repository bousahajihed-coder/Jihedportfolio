// Selected work. Fictional clients and filler titles — replace with real
// work once permission is confirmed.
//
//   thumbnail: { src, alt }                 still for the gallery
//   logo:      { src, alt }                 optional client logo
//   video:     { type: 'file', src } | { type: 'vimeo' | 'youtube', id }
//   scene:     placeholder still while no thumbnail is set

export const projects = [
  { id: 'nova', client: 'NOVA', title: 'The Long Way Round', service: 'Brand Stories', year: 2026, duration: '06:40', scene: 'dusk', description: 'Placeholder description. A founder portrait told over twenty years and three countries.' },
  { id: 'form', client: 'FORM', title: 'Made by Hand', service: 'Films', year: 2026, duration: '02:15', scene: 'interior', description: 'Placeholder description. A furniture maker and the decisions behind a single chair.' },
  { id: 'atlas', client: 'ATLAS', title: 'Where the Map Ends', service: 'Documentaries', year: 2025, duration: '24:10', scene: 'landscape', description: 'Placeholder description. Six months inside a company rebuilding itself.' },
  { id: 'kin', client: 'KIN', title: 'Family Business', service: 'Brand Stories', year: 2025, duration: '03:30', scene: 'portrait', description: 'Placeholder description. Three generations and one kitchen table.' },
  { id: 'motion', client: 'MOTION', title: 'Everything Moves', service: 'Films', year: 2025, duration: '01:30', scene: 'night', description: 'Placeholder description. A brand film shot in one continuous day across four cities.' },
  { id: 'north', client: 'NORTH', title: 'Questions We Never Asked', service: 'Editorial', year: 2025, duration: '8 × 04:00', scene: 'studio', description: 'Placeholder description. An interview series about what work actually means.' },
  { id: 'origin', client: 'ORIGIN', title: 'Field Notes', service: 'Editorial', year: 2024, duration: '12 × 03:00', scene: 'coast', description: 'Placeholder description. A year-long editorial series from a research station.' },
  { id: 'meridian', client: 'MERIDIAN', title: 'Six Cities', service: 'Production', year: 2024, duration: '—', scene: 'crew', description: 'Placeholder description. Production services for an international campaign in six cities.' },
  { id: 'vale', client: 'VALE', title: 'The Harvest', service: 'Documentaries', year: 2024, duration: '32:00', scene: 'earth', description: 'Placeholder description. A season with the people who grow what a company sells.' },
].map((p) => ({ thumbnail: null, logo: null, video: null, ...p }))
