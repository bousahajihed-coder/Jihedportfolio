import Header from './components/Header'
import Hero from './components/Hero'
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
      <About />
      <WhatIDo />
      <Work />
      <Contact />
      <Footer />
    </div>
  )
}
