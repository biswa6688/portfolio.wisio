import { motion } from "framer-motion";
import { GitBranch, Link2, Mail, ArrowUpRight } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { profile } from "../../data/profile";

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading index="06" label="Contact" title="Let's route something together" />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6 }}
        className="grid gap-6 rounded-2xl border border-line bg-surface p-8 sm:p-12 lg:grid-cols-[1.2fr_0.8fr]"
      >
        <div>
          <p className="max-w-lg text-lg text-ink-soft">
            Open to fullstack, real-time communications, and native-integration work — from SIP/WebRTC systems to
            desktop apps that need to talk to the OS directly.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-7 inline-flex items-center gap-2 rounded-full bg-signal-500 px-5 py-3 font-mono text-xs font-semibold uppercase tracking-wider text-[#04140f] transition-transform hover:-translate-y-0.5"
          >
            {profile.email}
            <ArrowUpRight size={14} />
          </a>
        </div>
        <div className="flex flex-col justify-center gap-3 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
          <a href={profile.socials.github} className="flex items-center gap-2.5 text-sm text-ink-soft hover:text-signal-500">
            <GitBranch size={16} /> GitHub
          </a>
          <a href={profile.socials.linkedin} className="flex items-center gap-2.5 text-sm text-ink-soft hover:text-signal-500">
            <Link2 size={16} /> LinkedIn
          </a>
          <a href={`mailto:${profile.email}`} className="flex items-center gap-2.5 text-sm text-ink-soft hover:text-signal-500">
            <Mail size={16} /> Email
          </a>
          <p className="mt-2 font-mono text-xs text-ink-faint">{profile.location}</p>
        </div>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line px-5 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 font-mono text-[11px] text-ink-faint sm:flex-row">
        <span>© {new Date().getFullYear()} {profile.name}. Built with React, TypeScript & react-three-fiber.</span>
        <span>Status: <span className="text-signal-500">line open</span></span>
      </div>
    </footer>
  );
}
