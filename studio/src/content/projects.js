// Work grid + project viewer. Fictional clients only — replace with real
// work once permission is confirmed.
//
//   thumbnail: { src, alt }                 tile image
//   logo:      { src, alt }                 client logo (white) on the tile
//   video:     { type: 'file', src } | { type: 'vimeo' | 'youtube', id }
//   scene:     placeholder image style while no thumbnail is set

export const projects = [
  { id: 'nova', client: 'NOVA', title: 'Placeholder project title', service: 'Founders', year: 2026, duration: '04:20', scene: 'night', logoStyle: 'crest', description: 'Placeholder description of the project in one or two sentences.' },
  { id: 'form', client: 'FORM', title: 'Placeholder project title', service: 'Products', year: 2026, duration: '02:10', scene: 'metal', logoStyle: 'ring', description: 'Placeholder description of the project in one or two sentences.' },
  { id: 'atlas', client: 'ATLAS', title: 'Placeholder project title', service: 'Image Films', year: 2025, duration: '03:00', scene: 'dusk', logoStyle: 'serif', description: 'Placeholder description of the project in one or two sentences.' },
  { id: 'kin', client: 'KIN', title: 'Placeholder project title', service: 'Documentaries', year: 2025, duration: '18:40', scene: 'interior', logoStyle: 'block', description: 'Placeholder description of the project in one or two sentences.' },
  { id: 'motion', client: 'MOTION', title: 'Placeholder project title', service: 'Products', year: 2025, duration: '01:45', scene: 'tech', logoStyle: 'stack', description: 'Placeholder description of the project in one or two sentences.' },
  { id: 'north', client: 'NORTH', title: 'Placeholder project title', service: 'Image Films', year: 2025, duration: '02:30', scene: 'mountain', logoStyle: 'grid', description: 'Placeholder description of the project in one or two sentences.' },
  { id: 'origin', client: 'ORIGIN', title: 'Placeholder project title', service: 'Social', year: 2024, duration: '12 × 00:45', scene: 'coast', logoStyle: 'ring', description: 'Placeholder description of the project in one or two sentences.' },
  { id: 'meridian', client: 'MERIDIAN', title: 'Placeholder project title', service: 'Founders', year: 2024, duration: '05:10', scene: 'forest', logoStyle: 'crest', description: 'Placeholder description of the project in one or two sentences.' },
  { id: 'vale', client: 'VALE', title: 'Placeholder project title', service: 'Documentaries', year: 2024, duration: '22:00', scene: 'earth', logoStyle: 'serif', description: 'Placeholder description of the project in one or two sentences.' },
].map((p) => ({ thumbnail: null, logo: null, video: null, ...p }))
