import Reveal from './Reveal'
import VerticalLabel from './VerticalLabel'

const services = [
  {
    title: 'For production companies',
    description:
      'Producer on awarded jobs. I take over the budget, crew up and run the job through shoot, post and delivery.',
  },
  {
    title: 'For agencies and brands',
    description:
      'Creative producer for campaigns and branded content, from brief and concept to production partners, approvals and delivery.',
  },
  {
    title: 'For multi-market productions',
    description:
      'Versioning, talent and logistics across European markets, produced in German, English, French and Arabic.',
  },
]

const skills = [
  'Budgets & Scheduling',
  'Crew & Vendor Management',
  'Casting & Talent',
  'Location Scouting',
  'Brand Ambassador Campaigns',
  'Multi-Market Localization',
  'Post-Production Supervision',
]

export default function WhatIDo() {
  return (
    <section id="what-i-do" className="relative w-full bg-paper text-ink border-t border-ink/10 py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-10 grid grid-cols-1 md:grid-cols-[48px_1fr] gap-4 md:gap-8">
        <VerticalLabel>What I Do</VerticalLabel>
        <div>
          <Reveal>
            <h2 className="font-display font-black uppercase text-3xl md:text-4xl mb-12 max-w-2xl leading-[1.05]">
              How I work with you.
            </h2>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="border-t-2 border-blue pt-6">
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-ink/70 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-2 mt-8">
            {skills.map((skill) => (
              <span
                key={skill}
                className="text-xs font-semibold uppercase tracking-wide bg-ink/5 border border-ink/15 rounded-full px-3 py-1.5"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
