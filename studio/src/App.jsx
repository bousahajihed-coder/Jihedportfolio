import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Intro from './components/sections/Intro'
import SelectedWork from './components/sections/SelectedWork'
import Services from './components/sections/Services'
import Approach from './components/sections/Approach'
import Interlude from './components/sections/Interlude'
import About from './components/sections/About'
import Clients from './components/sections/Clients'
import Contact from './components/sections/Contact'

// The homepage reads as a sequence of chapters. Each section declares its
// own theme (light / mist / dark) to create rhythm between them.
export default function App() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <span id="top" />
        <Hero />
        <Intro />
        <SelectedWork />
        <Services />
        <Approach />
        <Interlude />
        <About />
        <Clients />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
