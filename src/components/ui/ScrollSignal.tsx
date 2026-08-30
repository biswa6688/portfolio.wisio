import { useEffect, useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";

const sectionIds = ["top", "about", "skills", "journey", "projects", "products", "contact"];

export function ScrollSignal() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 24, mass: 0.3 });
  const [active, setActive] = useState("top");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* top signal-strength bar */}
      <motion.div
        style={{ scaleX: progress }}
        className="fixed left-0 top-0 z-[60] h-[2.5px] w-full origin-left bg-gradient-to-r from-signal-600 via-signal-400 to-signal-300"
      />

      {/* side rail of section dots, desktop only */}
      <div className="fixed right-6 top-1/2 z-40 hidden -translate-y-1/2 flex-col items-center gap-3 lg:flex">
        {sectionIds.map((id) => (
          <a
            key={id}
            href={`#${id}`}
            aria-label={`Jump to ${id}`}
            className="group relative flex h-3 w-3 items-center justify-center"
          >
            <span
              className={`h-1.5 w-1.5 rounded-full transition-all ${
                active === id ? "scale-150 bg-signal-500" : "bg-line-strong group-hover:bg-signal-400"
              }`}
            />
            <span className="pointer-events-none absolute right-5 whitespace-nowrap rounded-md border border-line bg-surface px-2 py-1 font-mono text-[10px] uppercase tracking-wide text-ink-soft opacity-0 transition-opacity group-hover:opacity-100">
              {id}
            </span>
          </a>
        ))}
      </div>
    </>
  );
}
