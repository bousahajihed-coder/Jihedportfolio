import Reveal from './Reveal'

const socials = [
  { label: 'LinkedIn', href: 'https://linkedin.com' },
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'YouTube', href: 'https://youtube.com' },
]

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-ink text-paper py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <Reveal>
          <p className="text-lime text-sm font-semibold tracking-[0.3em] uppercase mb-6">Contact</p>
        </Reveal>
        <Reveal delay={0.05}>
          <h2 className="font-display font-black uppercase text-4xl md:text-6xl mb-6 max-w-2xl mx-auto leading-[1.05]">
            Let&rsquo;s work <span className="italic">together.</span>
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
            className="inline-flex items-center rounded-full bg-orange text-ink px-8 py-4 text-base font-semibold hover:bg-orange/90 transition-colors mb-14"
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
