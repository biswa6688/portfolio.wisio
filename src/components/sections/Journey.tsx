import type { ReactNode } from "react";
import { motion } from "framer-motion";
import { Briefcase, GraduationCap } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { experience, qualifications } from "../../data/profile";

function TimelineList({
  icon: Icon,
  label,
  children,
}: {
  icon: typeof Briefcase;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-line bg-surface p-6 sm:p-8">
      <div className="mb-7 flex items-center gap-2.5">
        <span className="grid h-8 w-8 place-items-center rounded-full bg-signal-500/12 text-signal-500">
          <Icon size={15} />
        </span>
        <h3 className="font-display text-lg font-semibold text-ink">{label}</h3>
      </div>
      <ol className="relative flex flex-col gap-8 border-l border-line pl-6">{children}</ol>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        index="03"
        label="Timeline"
        title="From classroom to call routing"
        description="Two parallel tracks: the roles that shaped how I build, and the study that got me there."
      />
      <div className="grid gap-6 lg:grid-cols-2">
        <TimelineList icon={Briefcase} label="Experience">
          {experience.map((e, i) => (
            <motion.li
              key={e.company}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-signal-500 ring-4 ring-surface" />
              <p className="font-display text-base font-semibold text-ink">{e.role}</p>
              <p className="font-mono text-xs uppercase tracking-wide text-signal-600">{e.company}</p>
              <p className="mt-2 text-sm text-ink-soft">{e.blurb}</p>
            </motion.li>
          ))}
        </TimelineList>

        <TimelineList icon={GraduationCap} label="Qualification">
          {qualifications.map((q, i) => (
            <motion.li
              key={`${q.degree}-${q.year}`}
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="relative"
            >
              <span className="absolute -left-[29px] top-1 h-2.5 w-2.5 rounded-full bg-signal-500 ring-4 ring-surface" />
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <p className="font-display text-base font-semibold text-ink">{q.degree}</p>
                <span className="font-mono text-xs text-ink-faint">{q.year}</span>
              </div>
              <p className="font-mono text-xs uppercase tracking-wide text-signal-600">{q.institute}</p>
            </motion.li>
          ))}
        </TimelineList>
      </div>
    </section>
  );
}
