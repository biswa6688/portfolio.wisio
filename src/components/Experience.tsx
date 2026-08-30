import { Reveal } from './Reveal'
import { experience } from '../data/profile'

export function Experience() {
  return (
    <section id="experience" className="relative mx-auto max-w-3xl px-6 py-32">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          Experience
        </h2>
      </Reveal>

      <div className="mt-10 space-y-10 border-l border-white/10 pl-8">
        {experience.map((job, i) => (
          <Reveal key={job.company + job.period} delay={0.1 * i}>
            <div className="relative">
              <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full bg-sky-400" />
              {job.period && (
                <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
                  {job.period}
                </p>
              )}
              <h3 className="mt-1 text-xl font-semibold text-white">{job.role}</h3>
              <p className="text-sm text-sky-300">{job.company}</p>
              <p className="mt-3 text-sm text-white/60">{job.summary}</p>
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-white/50">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
