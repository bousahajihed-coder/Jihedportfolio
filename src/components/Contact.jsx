import Reveal from './Reveal'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-black border-t border-white/10 py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-6">Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="text-3xl md:text-5xl font-bold mb-6 max-w-2xl mx-auto">
            Let&rsquo;s work together.
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="text-paper/60 text-base md:text-lg mb-10 max-w-xl mx-auto">
            Open to freelance and full-time producer opportunities, based in Berlin and available to
            travel for production.
          </p>
        </Reveal>
        <Reveal delay={0.15}>
          <a
            href="mailto:jihedbou@proton.me"
            className="inline-flex items-center rounded-full bg-paper text-ink px-8 py-4 text-base font-semibold hover:bg-accent transition-colors mb-14"
          >
            jihedbou@proton.me
          </a>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex items-center justify-center gap-6 text-sm text-paper/50">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-paper transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
