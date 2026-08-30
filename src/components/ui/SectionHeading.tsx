import { motion } from "framer-motion";

export function SectionHeading({
  index,
  label,
  title,
  description,
}: {
  index: string;
  label: string;
  title: string;
  description?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mb-12 flex flex-col gap-3 sm:mb-16"
    >
      <div className="flex items-center gap-3">
        <span className="eyebrow">{index}</span>
        <span className="h-px flex-1 max-w-16 bg-line-strong" />
        <span className="eyebrow">{label}</span>
      </div>
      <h2 className="font-display text-3xl font-semibold tracking-tight text-ink sm:text-4xl">{title}</h2>
      {description && <p className="max-w-2xl text-ink-soft">{description}</p>}
    </motion.div>
  );
}
