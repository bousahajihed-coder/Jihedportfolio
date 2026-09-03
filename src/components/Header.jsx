const links = [
  { label: 'Work', href: '#work' },
  { label: 'About', href: '#about' },
  { label: 'What I Do', href: '#what-i-do' },
  { label: 'Contact', href: '#contact' },
]

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-lime border-b border-ink/10">
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-20 flex items-center justify-between">
        <a
          href="#top"
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
        <a
          href="#contact"
          className="text-sm font-semibold bg-ink text-lime rounded-full px-4 py-2 hover:bg-ink/80 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </header>
  )
}
