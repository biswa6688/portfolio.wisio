import { Moon, Sun, MonitorSmartphone } from "lucide-react";
import { useTheme, type ThemeMode } from "../../context/ThemeContext";

const options: { mode: ThemeMode; icon: typeof Sun; label: string }[] = [
  { mode: "light", icon: Sun, label: "Light theme" },
  { mode: "dark", icon: Moon, label: "Dark theme" },
  { mode: "system", icon: MonitorSmartphone, label: "Match system theme" },
];

export function ThemeToggle() {
  const { mode, setMode } = useTheme();
  return (
    <div
      role="radiogroup"
      aria-label="Theme"
      className="flex items-center gap-0.5 rounded-full border border-line bg-surface p-1"
    >
      {options.map(({ mode: m, icon: Icon, label }) => {
        const active = mode === m;
        return (
          <button
            key={m}
            role="radio"
            aria-checked={active}
            aria-label={label}
            title={label}
            onClick={() => setMode(m)}
            className={`grid h-7 w-7 place-items-center rounded-full transition-colors ${
              active ? "bg-signal-500 text-[#04140f]" : "text-ink-faint hover:text-ink"
            }`}
          >
            <Icon size={14} strokeWidth={2.4} />
          </button>
        );
      })}
    </div>
  );
}
