# Studio website — Phase 1

Homepage prototype for a European film and production studio. Art
direction: cinematic and editorial: black and ivory surfaces, warm grey
metadata, burnt orange and copper used only as accents. All wording is
filler, imagery is placeholder and client names are fictional.

Page order (each section is a numbered chapter):
hero (full-screen film opening) → 01 Studio: statement + index of
disciplines → 02 Services: pinned full-screen slider (one discipline per
scroll step, slow dissolves, counter and tabs) → 03 Selected work: large
editorial gallery → 04 About + Careers → client marquee → 05 Contact →
footer. "Services" in the header opens a full-screen menu.

## Design system

- **Surfaces:** add `surface-dark` or `surface-light` to a section. It sets
  the background, text, secondary text (`--text-2`), hairlines (`--rule`)
  and accent (`--accent`) for everything inside.
- **Type roles** (`tokens.css`): `--fs-hero`, `--fs-section`,
  `--fs-feature`, `--fs-project`, `--fs-lead`, `--fs-body`, `--fs-meta`.
  Display type is Inter Tight (uppercase, light, one medium emphasis line);
  body and metadata are Inter.
- **Components:** `Headline` (masked line reveals), `SectionLabel`
  (chapter marker with hairline), `Button` (`link` / `outline` / `solid`,
  all hard-edged), `Media` (image, video or placeholder still).

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
| Disciplines (index, slider, menu)  | `src/content/services.js`             |
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

- Hero: fades up from black, the image settles slowly, headline lines rise.
- Headlines: each line rises out of a mask when scrolled into view.
- Studio index: numbers turn to the accent, titles shift, arrow appears.
- Services: the frame opens to full screen, then stills dissolve slowly
  from one discipline to the next; a copper line marks the active tab.
- Work: slow push-in and a small exposure lift on hover.
- Links: underline retracts and redraws in the accent colour.
- Client names drift in a slow marquee.

Timing lives in the `--ease*` / `--dur` tokens. Everything is disabled
under `prefers-reduced-motion`.
