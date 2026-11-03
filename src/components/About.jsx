import Reveal from './Reveal'
import VerticalLabel from './VerticalLabel'

const facts = [
  { value: '2019', label: 'In production since' },
  { value: '€500k+', label: 'Largest budget' },
  { value: '6+', label: 'European markets' },
  { value: '4', label: 'Working languages' },
]

const languages = [
  { name: 'Arabic', level: 'Native' },
  { name: 'English', level: 'Fluent' },
  { name: 'French', level: 'Fluent' },
  { name: 'German', level: 'Fluent' },
  { name: 'Italian', level: 'Elementary' },
]

export default function About() {
  return (
    <section id="about" className="relative w-full bg-paper text-ink border-t border-ink/10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[48px_1fr] gap-4 md:gap-8">
        <VerticalLabel>About</VerticalLabel>
        <div>
          <div className="grid md:grid-cols-2 gap-10 md:gap-16 mb-16">
            <Reveal>
              <p className="font-display font-black text-2xl md:text-3xl leading-[1.15]">
                I started in the camera department and worked my way up through productions of all
                sizes, from small, hands-on <span className="italic">run and gun</span> teams to
                campaigns with budgets over <span className="italic">€500k</span> and brand
                ambassadors across multiple European markets.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <div className="text-ink/75 text-base md:text-lg leading-relaxed space-y-5">
                <p>
                  I stay close to the process, from the first conversation to final delivery:
                  building the team, casting, budgets, locations, the shoot, post and versioning.
                </p>
                <p>
                  Today I produce commercial and branded campaigns for AUTO1 Group’s brands wirkaufendeinauto.de and Autohero, and take on
                  commercial and branded productions with INLEGACY Studios. Working across markets,
                  cultures and languages is a big part of how I produce.
                </p>
                <p>
                  I am hands on, calm when things get complicated, and focused on making the idea
                  work within the budget.
                </p>
              </div>
            </Reveal>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 border-y border-ink/10 py-8 mb-16">
            {facts.map((fact) => (
              <div key={fact.label}>
                <div className="font-display font-black text-3xl md:text-4xl mb-1">{fact.value}</div>
                <div className="text-xs md:text-sm text-ink/55 tracking-wide uppercase font-semibold">
                  {fact.label}
                </div>
              </div>
            ))}
          </div>

          <h3 className="text-sm font-semibold tracking-[0.3em] uppercase text-ink/50 mb-6">
            Languages
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
            {languages.map((lang) => (
              <div
                key={lang.name}
                className="flex items-center justify-between py-2 border-b border-ink/10"
              >
                <span className="font-semibold">{lang.name}</span>
                <span className="text-sm text-ink/55">{lang.level}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
