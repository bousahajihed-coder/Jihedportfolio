# ASTRA — website

Homepage for ASTRA, a Berlin film production studio making films about
companies, people and ideas. Art direction: cinematic and editorial —
black and ivory surfaces, warm grey metadata, burnt orange and copper as
accents only. Project companies are fictional placeholders.

Page order (numbered chapters): hero → 01 Studio → 02 What we do (pinned
service slider) → 03 Selected work → 04 About + Careers → 05 Production →
06 International → 07 Contact → footer. "Services" in the header opens a
full-screen menu.

## Photography

Every image slot lives in `src/content/images.js`, with a shot brief for
each. Until a slot has a `src`, it shows a graded placeholder frame with
the brief as its caption. To add a photograph, set `src` (a URL or a file
in `public/media/`) and `alt`; sizing, cropping and overlays are handled
by the layout. Keep the set consistent: natural light, warm grade, real
locations and people at work.

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
| Photographs (all slots)            | `src/content/images.js`               |
| Colors, fonts, type scale, spacing | `src/styles/tokens.css`               |
| Webfont loading                    | `index.html` (`<link>` to the fonts)  |
| Projects (Selected Work + viewer)  | `src/content/projects.js`             |
| Services (slider, menu, form)      | `src/content/services.js`             |
| All other homepage copy            | `src/content/home.js`                 |

### Media

Every image and video goes through `src/components/ui/Media.jsx`:

- `video: { src, type, poster }` → muted loop that plays only while visible
  (and never autoplays with reduced motion enabled)
- `image: { src, srcSet, alt }` → lazy-loaded responsive image
- neither → a colour-graded placeholder; the `scene` field picks its look

Image slots come from `content/images.js`; the hero also accepts a
background `video`. A project's full film goes in `video`:
`{ type: 'file', src }`, `{ type: 'vimeo', id }` or `{ type: 'youtube', id }`.

### Contact form

Set `contactFormEndpoint` in `site.js` to POST submissions as JSON (for
example to Formspree or a serverless function). With no endpoint set, the
form opens the visitor's mail client with the message pre-filled.

### Motion

- Hero: fades up from black, the image settles slowly, headline lines rise.
- Headlines: each line rises out of a mask when scrolled into view.
- Production stages: numbers turn to the accent, titles shift on hover.
- Services: the frame opens to full screen, then stills dissolve slowly
  from one discipline to the next; a copper line marks the active tab.
- Work: slow push-in, the still drifts with the pointer, a "View film"
  label follows the cursor and the title takes the accent colour.
- Links: underline retracts and redraws in the accent colour.

Timing lives in the `--ease*` / `--dur` tokens. Everything is disabled
under `prefers-reduced-motion`.
