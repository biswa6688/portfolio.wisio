# Architecture

## Stack rationale

- **Vite** — fast dev server + build for a static, single-page site; no SSR/backend needed since content is static resume data.
- **Tailwind CSS v4** — CSS-first config (`@theme` block in `src/index.css`) instead of a `tailwind.config.js`; design tokens (colors, fonts, keyframes) are defined once as CSS variables and consumed both by Tailwind utility classes and by hand-written CSS (`.eyebrow`, `.grid-backdrop`, etc).
- **`@react-three/fiber` + `@react-three/drei`** — declarative Three.js in React for the hero 3D scene, kept to a single `<Canvas>` for performance.
- **Framer Motion** — scroll-triggered reveals (`whileInView`) and micro-interactions; chosen over CSS-only animation because of the need for staggered, viewport-aware reveals.
- **lucide-react** — icon set; note brand icons (GitHub/LinkedIn) were removed upstream, so generic icons stand in with correct `aria-label`s.

## Theming

Two independent layers:

1. **Tailwind's `signal-*` color scale** — static tokens (don't change between light/dark), used for the primary green accent.
2. **CSS custom properties on `:root`/`html.light`/`html.dark`** (`--bg`, `--ink`, `--border`, etc.) — swapped by toggling a class on `<html>`. `ThemeContext` (`src/context/ThemeContext.tsx`) owns the `light | dark | system` state, resolves `system` against `prefers-color-scheme`, and applies the class. An inline script in `index.html` applies the class before React hydrates, to prevent a flash of the wrong theme.

Components consume theme via utility classes (`bg-surface`, `text-ink`, `border-line`, …) mapped to the CSS variables — never hardcoded hex values — so every component is theme-safe without needing to know the current mode. The one exception is `SignalSphere`, which receives `isDark` as a prop because Three.js materials need an explicit color value, not a CSS variable.

## Component layout

```
App.tsx                          # composes ThemeProvider + all sections
  context/ThemeContext.tsx       # light/dark/system state + persistence
  components/
    Nav.tsx                      # sticky nav, mobile drawer, theme toggle
    ui/
      SectionHeading.tsx         # shared "01 · Label · Title" heading pattern
      ThemeToggle.tsx            # segmented light/dark/system control
    three/
      SignalSphere.tsx           # the 3D hero visual (self-contained Canvas)
    illustrations/
      Illustrations.tsx          # all custom SVG art, currentColor-driven
    sections/
      Hero.tsx / About.tsx / Skills.tsx / Journey.tsx / Projects.tsx / Products.tsx / Contact.tsx
  data/
    profile.ts                   # single source of truth for all resume content
```

## Data flow

`src/data/profile.ts` exports typed constants (`profile`, `skillGroups`, `qualifications`, `experience`, `projects`, `products`). Section components import only what they need and map over it — no prop drilling, no global store needed since content is static at build time.

## Performance notes

- Single `<Canvas>` instance, `dpr` capped at `1.75`, node count kept at 46 to stay smooth on mid-range hardware.
- Framer Motion reveals use `viewport={{ once: true }}` so they don't re-trigger on scroll-back, keeping scroll performance steady.
- `prefers-reduced-motion` disables all CSS animation/transition globally (see `src/index.css`).
