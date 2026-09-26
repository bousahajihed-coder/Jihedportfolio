import { interlude } from '../../content/home'
import Media from '../ui/Media'
import Reveal from '../ui/Reveal'
import './Interlude.css'

// A full-bleed pause between chapters: one image, one line.
export default function Interlude() {
  return (
    <section className="interlude" data-theme="dark" aria-label="Interlude">
      <Media fill video={interlude.video} image={interlude.image} tone={0} caption="Behind the scenes — placeholder" />
      <div className="interlude__shade" aria-hidden="true" />
      <div className="interlude__content container">
        <Reveal as="blockquote" className="interlude__quote display">
          <p>“{interlude.quote}”</p>
        </Reveal>
      </div>
    </section>
  )
}
