import { Reveal } from './Reveal'
import { qualifications } from '../data/profile'

export function Qualifications() {
  return (
    <section id="qualifications" className="relative mx-auto max-w-3xl px-6 py-32">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          Qualification
        </h2>
      </Reveal>

      <div className="mt-10 overflow-hidden rounded-2xl border border-white/10">
        {qualifications.map((q, i) => (
          <Reveal key={q.degree + q.year} delay={0.05 * i}>
            <div
              className={`flex items-center justify-between gap-4 px-5 py-4 ${
                i % 2 === 0 ? 'bg-white/5' : 'bg-white/[0.02]'
              }`}
            >
              <div>
                <p className="font-semibold text-white">{q.degree}</p>
                <p className="text-sm text-white/50">{q.institution}</p>
              </div>
              <span className="shrink-0 rounded-full border border-white/10 bg-black/30 px-3 py-1 text-xs text-sky-300">
                {q.year}
              </span>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
