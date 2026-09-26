import { intro } from '../../content/home'
import Reveal from '../ui/Reveal'
import SectionLabel from '../ui/SectionLabel'
import './Intro.css'

export default function Intro() {
  return (
    <section className="section intro" data-theme="light" aria-labelledby="intro-title">
      <div className="container grid">
        <Reveal className="intro__label">
          <SectionLabel index={1}>{intro.label}</SectionLabel>
        </Reveal>

        <Reveal as="h2" id="intro-title" className="intro__statement display" delay={100}>
          {intro.statement} <span className="muted">{intro.statementMuted}</span>
        </Reveal>

        <Reveal as="p" className="intro__aside" delay={200}>
          {intro.aside}
        </Reveal>
      </div>
    </section>
  )
}
