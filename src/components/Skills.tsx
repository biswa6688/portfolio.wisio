import { Reveal } from './Reveal'
import { skills } from '../data/profile'

const categories = Array.from(new Set(skills.map((s) => s.category)))

export function Skills() {
  return (
    <section id="skills" className="relative mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-32">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Skills</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-4 max-w-xl text-2xl font-medium text-white sm:text-3xl">
          A rotating orb of my core stack — drag to explore in 3D.
        </p>
      </Reveal>

      {/* Spacer to let the 3D SkillOrb (rendered in the fixed background canvas) be visible */}
      <div className="pointer-events-none h-[420px] sm:h-[480px]" />

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {categories.map((category, i) => (
          <Reveal key={category} delay={0.1 * i}>
            <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <h3 className="mb-3 text-xs font-semibold uppercase tracking-widest text-white/40">
                {category}
              </h3>
              <ul className="space-y-1.5">
                {skills
                  .filter((s) => s.category === category)
                  .map((s) => (
                    <li key={s.name} className="text-sm text-white/80">
                      {s.name}
                    </li>
                  ))}
              </ul>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
