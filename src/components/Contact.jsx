import Reveal from './Reveal'

const socials = [{ label: 'LinkedIn', href: 'https://www.linkedin.com/in/jihed-bousaha-b8a691224/' }]

export default function Contact() {
  return (
    <section id="contact" className="relative w-full bg-ink text-paper py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 text-center">
        <p className="text-sky text-sm font-semibold tracking-[0.3em] uppercase mb-6">Contact</p>
        <Reveal>
          <h2 className="font-display font-black uppercase text-3xl md:text-5xl mb-6 max-w-2xl mx-auto leading-[1.05]">
            Need a producer?
          </h2>
        </Reveal>
        <p className="text-paper/70 text-base md:text-lg mb-10 max-w-xl mx-auto">
          Send me your dates, budget range and a short brief. Based in Berlin, available for
          productions across Europe.
        </p>
        <a
          href="mailto:contact@jihedbousaha.com"
          className="inline-flex items-center rounded-full bg-blue text-paper px-8 py-4 text-base font-semibold hover:bg-blue/90 transition-colors mb-12"
        >
          contact@jihedbousaha.com
        </a>

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
      </div>
    </section>
  )
}
