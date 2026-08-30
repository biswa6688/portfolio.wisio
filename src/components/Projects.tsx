import { Reveal } from './Reveal'
import { projects } from '../data/profile'

export function Projects() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-32">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">
          Projects
        </h2>
      </Reveal>

      <div className="mt-10 grid gap-6 sm:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.title} delay={0.1 * i}>
            <div className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur transition-colors hover:border-sky-400/40 hover:bg-white/10">
              <h3 className="text-lg font-semibold text-white">{project.title}</h3>
              <p className="mt-2 text-sm text-white/60">{project.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-xs text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-4 inline-block text-sm font-medium text-sky-300 group-hover:underline"
                >
                  View project →
                </a>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
