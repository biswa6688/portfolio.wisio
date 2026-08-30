import { motion } from 'framer-motion'
import { profile } from '../data/profile'

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen flex-col items-center justify-center px-6 text-center"
    >
      <motion.p
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 rounded-full border border-white/10 bg-white/5 px-4 py-1 text-xs uppercase tracking-[0.3em] text-sky-300"
      >
        {profile.role} · 14+ Years
      </motion.p>
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1 }}
        className="max-w-3xl text-4xl font-bold tracking-tight text-white sm:text-6xl"
      >
        {profile.name}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="mt-6 max-w-xl text-balance text-base text-white/60 sm:text-lg"
      >
        {profile.tagline}
      </motion.p>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="mt-10 flex gap-4"
      >
        <a
          href="#projects"
          className="rounded-full bg-sky-400 px-6 py-2.5 text-sm font-semibold text-black transition-transform hover:scale-105"
        >
          View Work
        </a>
        <a
          href="#contact"
          className="rounded-full border border-white/20 px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-white/10"
        >
          Contact Me
        </a>
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-8 text-xs uppercase tracking-widest text-white/40"
      >
        Scroll
      </motion.div>
    </section>
  )
}
