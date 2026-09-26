// Selected work. The homepage gallery and the project viewer are driven
// entirely by this list. Order here is display order.
//
// Media fields (all optional; missing media renders a neutral placeholder frame):
//   thumbnail: { src, srcSet, alt }                    still used in the gallery
//   preview:   { src, type }                           short muted loop, plays in view
//   video:     { type: 'file', src, poster }           full film in the viewer
//              { type: 'vimeo' | 'youtube', id }
//
// layout (optional) overrides the gallery rhythm: 'full' | 'left' | 'right'

export const projects = [
  {
    id: 'nova',
    title: 'The Long Way Round',
    client: 'NOVA',
    category: 'Founder Story',
    year: 2026,
    duration: '06:40',
    description:
      'Twenty years, two near-bankruptcies and one stubborn idea. A portrait of the founder who refused to take the shortcut.',
    thumbnail: null,
    preview: null,
    video: null,
    credits: [
      ['Director', 'Name Surname'],
      ['Director of Photography', 'Name Surname'],
      ['Editor', 'Name Surname'],
    ],
  },
  {
    id: 'form',
    title: 'Made by Hand, Built to Last',
    client: 'FORM',
    category: 'Product Film',
    year: 2025,
    duration: '02:15',
    description:
      'A furniture maker, a single chair and the three hundred decisions behind it.',
    thumbnail: null,
    preview: null,
    video: null,
  },
  {
    id: 'atlas',
    title: 'Where the Map Ends',
    client: 'ATLAS',
    category: 'Corporate Documentary',
    year: 2025,
    duration: '24:10',
    description:
      'Six months inside a logistics company rebuilding itself — told by the people who keep it moving at four in the morning.',
    thumbnail: null,
    preview: null,
    video: null,
  },
  {
    id: 'kin',
    title: 'Family Business',
    client: 'KIN',
    category: 'Company Story',
    year: 2025,
    duration: '03:30',
    description:
      'Three generations, one kitchen table. What a family company passes on besides the business.',
    thumbnail: null,
    preview: null,
    video: null,
  },
  {
    id: 'motion',
    title: 'Everything Moves',
    client: 'MOTION',
    category: 'Brand Film',
    year: 2024,
    duration: '01:30',
    description:
      'A brand film about momentum, shot in a single continuous day across four cities.',
    thumbnail: null,
    preview: null,
    video: null,
  },
  {
    id: 'north',
    title: 'Questions We Never Asked',
    client: 'NORTH',
    category: 'Interview Series',
    year: 2024,
    duration: '8 × 04:00',
    description:
      'Eight employees, one chair, no script. An interview series about what work actually means.',
    thumbnail: null,
    preview: null,
    video: null,
  },
  {
    id: 'origin',
    title: 'Origin, Weekly',
    client: 'ORIGIN',
    category: 'Social Content',
    year: 2024,
    duration: '24 × 00:45',
    description:
      'A year-long vertical series turning a research lab into a story people follow every week.',
    thumbnail: null,
    preview: null,
    video: null,
  },
]
