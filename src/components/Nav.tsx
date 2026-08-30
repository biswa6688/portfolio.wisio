import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ui/ThemeToggle";
import { CommandPalette } from "./ui/CommandPalette";
import { useTheme } from "../context/ThemeContext";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#journey", label: "Journey" },
  { href: "#projects", label: "Projects" },
  { href: "#products", label: "Products" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { cycle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all ${
        scrolled ? "border-b border-line bg-surface/85 backdrop-blur-md" : "border-b border-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 sm:px-8">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-ink">
          BN<span className="text-signal-500">.</span>
        </a>
        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="font-mono text-xs uppercase tracking-wider text-ink-soft transition-colors hover:text-signal-500">
              {l.label}
            </a>
          ))}
        </div>
        <div className="flex items-center gap-3">
          <CommandPalette onCycleTheme={cycle} />
          <ThemeToggle />
          <button
            className="grid h-8 w-8 place-items-center rounded-full border border-line md:hidden"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={15} /> : <Menu size={15} />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-line bg-surface px-5 pb-5 md:hidden">
          <div className="flex flex-col gap-4 pt-4">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="font-mono text-xs uppercase tracking-wider text-ink-soft">
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
