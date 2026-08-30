import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { SectionHeading } from "../ui/SectionHeading";
import { ExportCrateArt, GemstoneArt, NetworkMlmArt } from "../illustrations/Illustrations";
import { projects } from "../../data/profile";

const artByIndex = [ExportCrateArt, GemstoneArt, NetworkMlmArt, NetworkMlmArt];

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        index="04"
        label="Client Sites"
        title="Projects delivered end-to-end"
        description="Full platforms built and shipped for exporters and network-marketing businesses."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => {
          const Art = artByIndex[i % artByIndex.length];
          return (
            <motion.a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06 }}
              className="group relative overflow-hidden rounded-2xl border border-line bg-surface p-6 transition-colors hover:border-signal-500/60 sm:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-wider text-signal-600">{p.domain}</p>
                  <h3 className="mt-1 font-display text-xl font-semibold text-ink">{p.name}</h3>
                </div>
                <Art className="h-16 w-16 shrink-0 text-signal-500/80 transition-transform group-hover:scale-105" />
              </div>
              <p className="mt-4 text-sm text-ink-soft">{p.description}</p>
              <div className="mt-5 flex flex-wrap items-center gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-line-strong px-2.5 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-faint">
                    {t}
                  </span>
                ))}
              </div>
              <span className="mt-5 inline-flex items-center gap-1.5 font-mono text-xs text-signal-500 opacity-0 transition-opacity group-hover:opacity-100">
                Visit site <ExternalLink size={12} />
              </span>
            </motion.a>
          );
        })}
      </div>
    </section>
  );
}
