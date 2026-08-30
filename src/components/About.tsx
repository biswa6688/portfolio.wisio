import { Reveal } from './Reveal'
import { profile } from '../data/profile'

export function About() {
  return (
    <section id="about" className="relative mx-auto max-w-3xl px-6 py-32">
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">About</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 text-2xl font-medium leading-relaxed text-white sm:text-3xl">
          I'm {profile.name}, a fullstack developer with {profile.tagline.split(' ')[0]} of
          experience building reliable, scalable products across the .NET and JavaScript
          ecosystems.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-6 text-base leading-relaxed text-white/60">
          Over 14+ years I've worked across the full stack — from relational and document
          databases to enterprise C#/.NET services, Node.js APIs, and modern React and Angular
          frontends. I care about clean architecture, maintainable code, and shipping software
          that holds up in production.
        </p>
      </Reveal>
    </section>
  )
}
