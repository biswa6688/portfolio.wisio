import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Search, ArrowRight, Command } from "lucide-react";

const commands = [
  { label: "About", hint: "Who I am", href: "#about" },
  { label: "Skills", hint: "The stack", href: "#skills" },
  { label: "Journey", hint: "Experience & qualification", href: "#journey" },
  { label: "Projects", hint: "Client sites", href: "#projects" },
  { label: "Products", hint: "RADIX, VISION, SDKs & telephony apps", href: "#products" },
  { label: "Contact", hint: "Say hello", href: "#contact" },
  { label: "Toggle theme", hint: "Cycle light / dark / system", action: "theme" as const },
];

export function CommandPalette({ onCycleTheme }: { onCycleTheme: () => void }) {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [index, setIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = commands.filter((c) => c.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  useEffect(() => {
    if (open) {
      setQuery("");
      setIndex(0);
      requestAnimationFrame(() => inputRef.current?.focus());
    }
  }, [open]);

  const run = (cmd: (typeof commands)[number]) => {
    if (cmd.action === "theme") onCycleTheme();
    else if (cmd.href) window.location.hash = cmd.href;
    setOpen(false);
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="hidden items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 font-mono text-[11px] text-ink-faint transition-colors hover:border-signal-500/60 hover:text-ink sm:flex"
        aria-label="Open command palette"
      >
        <Search size={12} />
        Quick jump
        <span className="ml-1 flex items-center gap-0.5 rounded border border-line-strong px-1.5 py-0.5 text-[10px]">
          <Command size={10} />K
        </span>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] flex items-start justify-center bg-black/40 px-4 pt-28 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -14, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -10, scale: 0.98 }}
              transition={{ duration: 0.18 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-md overflow-hidden rounded-2xl border border-line bg-surface shadow-2xl"
            >
              <div className="flex items-center gap-2.5 border-b border-line px-4 py-3">
                <Search size={15} className="text-ink-faint" />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setIndex(0);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === "ArrowDown") setIndex((i) => Math.min(i + 1, filtered.length - 1));
                    if (e.key === "ArrowUp") setIndex((i) => Math.max(i - 1, 0));
                    if (e.key === "Enter" && filtered[index]) run(filtered[index]);
                  }}
                  placeholder="Jump to a section, or toggle theme…"
                  className="w-full bg-transparent font-mono text-sm text-ink outline-none placeholder:text-ink-faint"
                />
              </div>
              <ul className="max-h-72 overflow-y-auto p-2">
                {filtered.length === 0 && (
                  <li className="px-3 py-6 text-center text-sm text-ink-faint">No matches</li>
                )}
                {filtered.map((c, i) => (
                  <li key={c.label}>
                    <button
                      onClick={() => run(c)}
                      onMouseEnter={() => setIndex(i)}
                      className={`flex w-full items-center justify-between rounded-lg px-3 py-2.5 text-left transition-colors ${
                        i === index ? "bg-signal-500/12 text-ink" : "text-ink-soft"
                      }`}
                    >
                      <span>
                        <span className="font-display text-sm font-medium">{c.label}</span>
                        <span className="ml-2 font-mono text-[11px] text-ink-faint">{c.hint}</span>
                      </span>
                      <ArrowRight size={13} className={i === index ? "text-signal-500" : "text-transparent"} />
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
