import Header from './components/Header'
import Hero from './components/Hero'
import Work from './components/Work'
import About from './components/About'
import WhatIDo from './components/WhatIDo'
import Experience from './components/Experience'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="relative bg-paper min-h-screen">
      <Header />
      <Hero />
      <Work />
      <About />
      <WhatIDo />
      <Experience />
      <Contact />
      <Footer />
    </div>
  )
}
