import { Suspense } from "react";
import { motion } from "framer-motion";
import { ArrowDownRight, GitBranch, Link2, Mail } from "lucide-react";
import { SignalSphere } from "../three/SignalSphere";
import { WaveformArt } from "../illustrations/Illustrations";
import { profile } from "../../data/profile";
import { useTheme } from "../../context/ThemeContext";

export function Hero() {
  const { resolved } = useTheme();

  return (
    <section id="top" className="relative overflow-hidden pt-32 sm:pt-40">
      <div className="grid-backdrop pointer-events-none absolute inset-0 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,black,transparent)]" />
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-5 pb-20 sm:px-8 lg:grid-cols-[1.1fr_0.9fr] lg:gap-4">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-signal-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-500" />
            </span>
            <span className="font-mono text-[11px] uppercase tracking-wider text-ink-soft">Line is live · {profile.experienceYears}+ years</span>
          </div>

          <h1 className="font-display text-4xl font-semibold leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {profile.name}
            <span className="block text-signal-500 text-glow">{profile.role}</span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-ink-soft sm:text-lg">{profile.summary}</p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-signal-500 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#04140f] transition-transform hover:-translate-y-0.5"
            >
              View the work
              <ArrowDownRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-line-strong px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-ink transition-colors hover:border-signal-500 hover:text-signal-500"
            >
              Get in touch
            </a>
            <div className="flex items-center gap-3 pl-1 text-ink-faint">
              <a href={profile.socials.github} aria-label="GitHub" className="hover:text-signal-500"><GitBranch size={17} /></a>
              <a href={profile.socials.linkedin} aria-label="LinkedIn" className="hover:text-signal-500"><Link2 size={17} /></a>
              <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-signal-500"><Mail size={17} /></a>
            </div>
          </div>

          <WaveformArt className="mt-12 h-10 w-64 text-signal-500/70" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: "easeOut", delay: 0.15 }}
          className="relative aspect-square w-full max-w-lg justify-self-center"
        >
          <div className="absolute inset-8 rounded-full bg-signal-500/10 blur-3xl" />
          <Suspense fallback={<div className="grid h-full place-items-center font-mono text-xs text-ink-faint">rendering signal…</div>}>
            <SignalSphere isDark={resolved === "dark"} />
          </Suspense>
        </motion.div>
      </div>
    </section>
  );
}
