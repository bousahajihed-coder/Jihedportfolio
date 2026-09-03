export default function Hero() {
  return (
    <section id="top" className="relative w-full min-h-screen flex flex-col justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-black" />
      <div
        className="absolute inset-0 bg-cover bg-center opacity-25"
        style={{ backgroundImage: "url('/hero-portrait.jpg')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/40" />

      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 md:px-10">
        <p className="text-accent text-sm font-medium tracking-[0.3em] uppercase mb-6">
          Producer
        </p>
        <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.05] mb-6 max-w-3xl">
          Automotive campaigns.
          <br />
          European productions.
        </h1>
        <p className="text-lg md:text-xl text-paper/70 max-w-xl mb-10">
          Fluent in five languages. Based in Berlin, working across Germany, Poland, Spain, and beyond.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <a
            href="#work"
            className="inline-flex items-center rounded-full bg-paper text-ink px-6 py-3 text-sm font-semibold hover:bg-accent transition-colors"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center rounded-full border border-white/25 px-6 py-3 text-sm font-semibold hover:border-accent hover:text-accent transition-colors"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-paper/50 hover:text-paper transition-colors z-10"
      >
        <span className="text-xs tracking-[0.2em] uppercase">Scroll</span>
        <span className="h-8 w-px bg-current animate-bounce" />
      </a>
    </section>
  )
}
