# Studio website — Phase 1

Structural prototype for the studio's homepage. Neutral on purpose: the
name, logo, palette, typefaces and motion language are placeholders that
later stages will replace.

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
| Services                           | `src/content/services.js`             |
| Client logos                       | `src/content/clients.js`              |
| All other homepage copy            | `src/content/home.js`                 |

### Media

Every image and video goes through `src/components/ui/Media.jsx`:

- `video: { src, type, poster }` → muted loop that plays only while visible
  (and never autoplays with reduced motion enabled)
- `image: { src, srcSet, alt }` → lazy-loaded responsive image
- neither → a monochrome placeholder frame

The hero, interlude, project thumbnails and previews all accept these
fields in the content files. A project's full film goes in `video`:
`{ type: 'file', src }`, `{ type: 'vimeo', id }` or `{ type: 'youtube', id }`.

### Contact form

Set `contactFormEndpoint` in `site.js` to POST submissions as JSON (for
example to Formspree or a serverless function). With no endpoint set, the
form opens the visitor's mail client with the message pre-filled.

### Themes and rhythm

Each section sets `data-theme="light" | "mist" | "dark"`. Components use
only the semantic tokens (`--bg`, `--fg`, `--muted`, `--line`), so a new
palette only touches `tokens.css`.

### Motion

Phase 1 has only a subtle reveal (`components/ui/Reveal.jsx` +
`hooks/useReveal.js`), the hero title rising on load, and hover states.
Timing lives in the `--ease-*` / `--dur-*` tokens. All of it is disabled
under `prefers-reduced-motion`.
