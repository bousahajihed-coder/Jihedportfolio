import VerticalLabel from './VerticalLabel'

const roles = [
  { years: '2024 – now', title: 'Creative Producer', company: 'AUTO1 Group (wirkaufendeinauto.de, Autohero), Berlin' },
  { years: '2024 – now', title: 'Producer (freelance)', company: 'INLEGACY Studios, Berlin' },
  { years: '2023 – 2024', title: 'Producer (freelance)', company: 'GMP Global Media Production, Berlin' },
  { years: '2023 – 2024', title: 'Video Producer / Director', company: 'TBD Media Deutschland, Berlin' },
  { years: '2021 – 2022', title: 'Camera Operator (freelance)', company: 'Berlin' },
  { years: '2019 – 2023', title: 'BA Cinematography and Film/Video Production', company: 'SRH Berlin' },
]

export default function Experience() {
  return (
    <section id="experience" className="relative w-full bg-sky text-ink py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[48px_1fr] gap-4 md:gap-8">
        <VerticalLabel>Experience</VerticalLabel>
        <div>
          <h2 className="font-display font-black uppercase text-3xl md:text-4xl mb-10 max-w-2xl leading-[1.05]">
            Experience.
          </h2>
          <ul className="border-t border-ink/15">
            {roles.map((role) => (
              <li
                key={`${role.title}-${role.company}`}
                className="grid grid-cols-1 sm:grid-cols-[140px_1fr] md:grid-cols-[160px_1fr_1fr] gap-1 sm:gap-6 py-4 border-b border-ink/15"
              >
                <span className="text-sm font-semibold text-ink/55 tabular-nums">{role.years}</span>
                <span className="font-bold">{role.title}</span>
                <span className="text-ink/70 sm:col-start-2 md:col-start-auto">{role.company}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
