const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-ink/85 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-18 py-4 flex items-center justify-between">
        <a href="#top" className="text-sm font-semibold tracking-[0.2em] uppercase text-paper">
          Jihed Bousaha
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-paper/70">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-teal transition-colors">
              {link.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="text-sm font-semibold bg-orange text-ink rounded-full px-4 py-2 hover:bg-orange/90 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
