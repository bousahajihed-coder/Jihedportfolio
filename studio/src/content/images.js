// Every photograph on the site, in one place.
//
// Each slot has a shot brief describing the image it needs. Until `src` is
// set, the slot renders a graded placeholder frame (`scene`) with the brief
// as its caption. To use a real still, set `src` (and ideally `srcSet`):
//
//   src: 'https://images.unsplash.com/photo-…?w=2400&q=80&auto=format&fit=crop'
//   src: '/media/north-still.jpg'          (files placed in /public/media)
//
// Keep the set consistent: natural light, slightly warm grade, real
// locations, people at work — no handshakes, no visible third-party logos.

const slot = (scene, brief, alt) => ({ src: null, srcSet: null, scene, brief, alt })

export const images = {
  hero: slot('hero', 'Film crew on location at golden hour, camera and operator in frame', 'A film crew shooting on location at golden hour'),

  intro: {
    ...slot('workshop', 'Machinist at work in a workshop', 'A machinist operating a lathe in a workshop'),
    src: `${import.meta.env.BASE_URL}media/intro.jpg`,
    width: 2000,
    height: 1333,
  },

  serviceFilms: {
    ...slot('set', 'Camera operator at a cinema camera on set', 'A camera operator with a cinema camera on a studio set'),
    src: `${import.meta.env.BASE_URL}media/films.jpg`,
    width: 2000,
    height: 1124,
  },
  serviceStories: {
    ...slot('interview', 'Story being filmed in a café: subject, camera and boom mic', 'A conversation being filmed in a café, with a camera and boom microphone'),
    src: `${import.meta.env.BASE_URL}media/stories.jpg`,
    width: 2000,
    height: 1333,
  },
  serviceSocial: {
    ...slot('product', 'Live content shoot: camera rig with tablet monitor, presenter behind', 'A presenter being filmed for social content with a camera and tablet rig'),
    src: `${import.meta.env.BASE_URL}media/social.jpg`,
    width: 2000,
    height: 1334,
  },
  serviceCrew: slot('crew', 'Director, DoP and camera team on an exterior location, wide shot', 'A film crew working on an exterior location'),

  workNorth: slot('city', 'Company headquarters at dusk, city street, warm windows', 'An office building at dusk'),
  workForm: slot('portrait', 'Founder portrait in a factory, practical light, looking off camera', 'A founder portrait in a factory'),
  workOrbit: slot('studio', 'Brand film set: styled interior, soft window light', 'A styled interior set for a brand film'),
  workFieldNotes: slot('landscape', 'Wide landscape, figure walking, overcast northern light', 'A figure walking through a wide landscape'),
  workMonument: slot('architecture', 'Parisian architecture, morning light, people crossing a square', 'A square in Paris in morning light'),
  workKin: slot('kitchen', 'Family around a kitchen table, candid, warm afternoon light', 'A family talking around a kitchen table'),

  about: slot('team', 'Behind the scenes: director and DoP at the monitor, crew around', 'A director and cinematographer reviewing a shot at the monitor'),
  production: slot('set', 'Lighting set-up on a large interior location, crew rigging', 'A crew rigging lights on a large interior set'),
  international: slot('harbour', 'Wide cinematic city harbour at blue hour, city lights on water', 'A city harbour at blue hour'),
}
