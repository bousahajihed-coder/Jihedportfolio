import { AnimatePresence, motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import AvailabilityBadge from './AvailabilityBadge'

const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  const { scrollY } = useScroll()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useMotionValueEvent(scrollY, 'change', (latest) => {
    setScrolled(latest > 20)
  })

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 w-full z-50 bg-sky border-b transition-shadow duration-300 ${
        scrolled ? 'border-ink/10 shadow-md' : 'border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
          onClick={() => setMenuOpen(false)}
          className="font-display font-black uppercase leading-[0.9] text-xl tracking-tight text-ink"
        >
          Jihed
          <br />
          Bousaha
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold uppercase tracking-wide text-ink/70">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-ink transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <div className="hidden lg:block">
            <AvailabilityBadge className="text-ink/70" />
          </div>
          <a
            href="#contact"
            className="inline-flex text-sm font-semibold bg-ink text-sky rounded-full px-4 py-2 hover:bg-ink/80 transition-colors"
          >
            Get in touch
          </a>
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            className="md:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={{ rotate: menuOpen ? 45 : 0, y: menuOpen ? 6 : 0 }}
              className="block w-6 h-0.5 bg-ink origin-center"
            />
            <motion.span
              animate={{ opacity: menuOpen ? 0 : 1 }}
              className="block w-6 h-0.5 bg-ink"
            />
            <motion.span
              animate={{ rotate: menuOpen ? -45 : 0, y: menuOpen ? -6 : 0 }}
              className="block w-6 h-0.5 bg-ink origin-center"
            />
          </button>
        </div>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-ink/10"
          >
            <nav className="max-w-6xl mx-auto px-6 py-6 flex flex-col gap-5 text-base font-semibold uppercase tracking-wide text-ink/80">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-ink transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <AvailabilityBadge className="text-ink/70 mt-1" />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
