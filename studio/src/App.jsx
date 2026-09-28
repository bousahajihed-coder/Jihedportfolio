import { useState } from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Intro from './components/sections/Intro'
import Services from './components/sections/Services'
import Work from './components/sections/Work'
import About from './components/sections/About'
import Production from './components/sections/Production'
import International from './components/sections/International'
import Contact from './components/sections/Contact'
import ProjectViewer from './components/sections/ProjectViewer'
import { site } from './config/site'
import { hero } from './content/home'

// The hero's play button opens the showreel in the same viewer the work
// gallery uses. Add `reel: { type, src | id }` to hero in content/home.js.
const reel = [
  {
    id: 'showreel',
    title: 'Showreel',
    type: 'Showreel',
    location: site.base,
    year: new Date().getFullYear(),
    description: `${site.name} showreel.`,
    video: hero.reel ?? null,
    image: hero.image,
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
        <Production />
        <International />
        <Contact />
      </main>
      <Footer />
      <ProjectViewer projects={reel} index={reelOpen} onChange={() => {}} onClose={() => setReelOpen(null)} />
    </>
  )
}
