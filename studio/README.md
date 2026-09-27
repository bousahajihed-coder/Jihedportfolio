# Studio website — Phase 1

Homepage prototype. Its layout, palette and motion follow the reference
screenshots. All wording is filler, all imagery is placeholder and all client
and service names are fictional, ready to be replaced.

Page order: hero (background video) → intro with service card → blue
"Services" title → pinned full-screen service slider (scroll steps through
the services with a counter, tabs and colour wipes) → Our Work grid →
About + Careers → client marquee → Contact → footer. "Services ☰" in the
header opens a full-screen menu.

```bash
cd studio
npm install
npm run dev      # local development
npm run build    # production build in dist/
```

Stack: Vite + React, plain CSS with custom properties. No UI or
animation libraries.

## Where things live

| To change…                         | Edit                                  |
| ---------------------------------- | ------------------------------------- |
| Company name, logo, contact, nav   | `src/config/site.js`                  |
| Colors, fonts, type scale, spacing | `src/styles/tokens.css`               |
| Webfont loading                    | `index.html` (`<link>` to the fonts)  |
| Projects (Selected Work + viewer)  | `src/content/projects.js`             |
| Services (slider, menu, footer)    | `src/content/services.js`             |
| Client marquee                     | `src/content/clients.js`              |
| All other homepage copy            | `src/content/home.js`                 |

### Media

Every image and video goes through `src/components/ui/Media.jsx`:

- `video: { src, type, poster }` → muted loop that plays only while visible
  (and never autoplays with reduced motion enabled)
- `image: { src, srcSet, alt }` → lazy-loaded responsive image
- neither → a colour-graded placeholder; the `scene` field picks its look

The hero, service slides (`media`), work tiles (`thumbnail`, `logo`) and
client marquee (`logo`) all accept these fields in the content files. A project's full film goes in `video`:
`{ type: 'file', src }`, `{ type: 'vimeo', id }` or `{ type: 'youtube', id }`.

### Contact form

Set `contactFormEndpoint` in `site.js` to POST submissions as JSON (for
example to Formspree or a serverless function). With no endpoint set, the
form opens the visitor's mail client with the message pre-filled.

### Motion

- Hero: background slowly settles from a zoom; headline lines rise in.
- Headlines everywhere: each line rises out of a mask when scrolled into view.
- Intro: background blocks drift at different speeds (parallax); the card's
  accent border pulses.
- Services: the panel grows from an inset frame to full screen, then each
  scroll step swaps the service with a blue/indigo wipe.
- Work tiles: staggered reveal, image zoom and arrow on hover.
- Buttons: fill rises and the label rolls on hover.
- Client names scroll in an endless marquee.

Timing lives in the `--ease*` / `--dur` tokens. Everything is disabled
under `prefers-reduced-motion`.
