import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Work from './components/Work'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative bg-paper min-h-screen">
      <Header />
      <Hero />
      <Marquee />
      <About />
      <WhatIDo />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}
