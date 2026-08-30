import { Reveal } from './Reveal'
import { profile } from '../data/profile'

export function Contact() {
  return (
    <section
      id="contact"
      className="relative mx-auto flex min-h-[70vh] max-w-2xl flex-col items-center justify-center px-6 py-32 text-center"
    >
      <Reveal>
        <h2 className="text-sm font-semibold uppercase tracking-[0.3em] text-sky-300">Contact</h2>
      </Reveal>
      <Reveal delay={0.1}>
        <p className="mt-6 text-3xl font-semibold text-white sm:text-4xl">
          Let's build something together.
        </p>
      </Reveal>
      <Reveal delay={0.2}>
        <p className="mt-4 text-white/60">
          Open to fullstack roles and collaborations. Reach out any time.
        </p>
      </Reveal>
      <Reveal delay={0.3}>
        <a
          href={`mailto:${profile.email}`}
          className="mt-8 inline-block rounded-full bg-sky-400 px-8 py-3 text-sm font-semibold text-black transition-transform hover:scale-105"
        >
          {profile.email}
        </a>
      </Reveal>
      <Reveal delay={0.4}>
        <div className="mt-6 flex gap-6 text-sm text-white/50">
          {profile.social.github && (
            <a href={profile.social.github} target="_blank" rel="noreferrer" className="hover:text-white">
              GitHub
            </a>
          )}
          {profile.social.linkedin && (
            <a href={profile.social.linkedin} target="_blank" rel="noreferrer" className="hover:text-white">
              LinkedIn
            </a>
          )}
        </div>
      </Reveal>

      <footer className="mt-24 text-xs text-white/30">
        © {new Date().getFullYear()} {profile.name}. Built with React, Three.js and Tailwind.
      </footer>
    </section>
  )
}
