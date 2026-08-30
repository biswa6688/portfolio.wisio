import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { skillGroups } from "../../data/profile";

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading
        index="02"
        label="Stack"
        title="The stack, measured honestly"
        description="Not a cloud of logos — a signal strength reading for each tool, based on years of production use."
      />
      <div className="grid gap-6 sm:grid-cols-2">
        {skillGroups.map((group, gi) => (
          <motion.div
            key={group.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: gi * 0.06 }}
            className="rounded-2xl border border-line bg-surface p-6 sm:p-7"
          >
            <h3 className="eyebrow mb-5">{group.label}</h3>
            <ul className="flex flex-col gap-4">
              {group.items.map((item) => (
                <li key={item.name}>
                  <div className="mb-1.5 flex items-baseline justify-between">
                    <span className="font-display text-sm font-medium text-ink">{item.name}</span>
                    <span className="font-mono text-[11px] text-ink-faint">{item.level}%</span>
                  </div>
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-inset">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.level}%` }}
                      viewport={{ once: true, margin: "-40px" }}
                      transition={{ duration: 0.9, ease: "easeOut" }}
                      className="h-full rounded-full bg-gradient-to-r from-signal-600 to-signal-400"
                    />
                  </div>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
