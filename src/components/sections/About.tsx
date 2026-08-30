import { motion } from "framer-motion";
import { SectionHeading } from "../ui/SectionHeading";
import { CallHandsetArt } from "../illustrations/Illustrations";
import { profile } from "../../data/profile";

const stats = [
  { value: "14+", label: "Years shipping software" },
  { value: "10+", label: "Products & platforms built" },
  { value: "5", label: "Database engines worked with" },
  { value: "3", label: "Telephony platforms integrated" },
];

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl scroll-mt-24 px-5 py-20 sm:px-8 sm:py-28">
      <SectionHeading index="01" label="Profile" title="Fullstack, but the interesting kind" description={profile.summary} />
      <div className="grid gap-6 lg:grid-cols-[1fr_1fr]">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className="rounded-2xl border border-line bg-surface p-6 sm:p-8"
        >
          <CallHandsetArt className="mb-6 h-16 w-16 text-signal-500" />
          <p className="text-ink-soft">
            My path started teaching networking fundamentals in classrooms, then moved into building the systems those
            classrooms only described — SIP stacks, IVR trees, screen capture pipelines, and browser SDKs that hide the
            hard parts of real-time media behind a clean API. I still write .NET and Node.js day to day, but the work
            I'm proudest of lives closer to the operating system than a typical web stack does.
          </p>
          <p className="mt-4 text-ink-soft">
            Based in Odisha, India, currently Tech Lead at VIS Networks, shipping products used inside enterprise
            telephony deployments and embedded into other companies' web applications.
          </p>
        </motion.div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="flex flex-col justify-between rounded-2xl border border-line bg-inset p-6"
            >
              <span className="font-display text-3xl font-semibold text-signal-500 sm:text-4xl">{s.value}</span>
              <span className="mt-3 text-sm text-ink-soft">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
