import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Intro from './components/sections/Intro'
import Services from './components/sections/Services'
import Work from './components/sections/Work'
import About from './components/sections/About'
import Clients from './components/sections/Clients'
import Contact from './components/sections/Contact'
import ProjectViewer from './components/sections/ProjectViewer'
import { hero } from './content/home'

// The hero's play button opens the showreel in the same viewer the work
// grid uses. Add `reel: { type, src | id }` to hero in content/home.js.
const reel = [
  {
    id: 'showreel',
    title: 'Showreel',
    client: 'Studio Name',
    service: 'Showreel',
    year: new Date().getFullYear(),
    description: 'Placeholder: the studio showreel plays here.',
    video: hero.reel ?? null,
    scene: 'hero',
  },
]

export default function App() {
  const [reelOpen, setReelOpen] = useState(null)

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero onPlayReel={() => setReelOpen(0)} />
        <Intro />
        <Services />
        <Work />
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
      <ProjectViewer projects={reel} index={reelOpen} onChange={() => {}} onClose={() => setReelOpen(null)} />
    </>
  )
}
