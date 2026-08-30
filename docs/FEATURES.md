# Features

Living feature log. Update this file in the same commit as any feature you ship (see `AGENTS.md`).

## Design system

- **Primary color**: Signal Green — `--color-signal-500 #00C896` (light), `--color-signal-400 #1DE0A8` (dark accent). Full 50–900 scale in `src/index.css`.
- **Theme modes**: `light`, `dark`, `system` (auto-follows OS, live-reactive to OS changes while `system` is selected). Persisted choice only for explicit light/dark; `system` is the default and isn't written to storage.
- **Typography**: Space Grotesk (display/headings), Inter (body copy), JetBrains Mono (eyebrows, tags, data labels, stats).
- **Motif**: a "signal/call" visual language throughout — pulse rings, waveforms, node/edge networks — tying the abstract design back to Biswaranjan's real-time-communications domain.

### Why no stock images

The brief requires images that match the app's color theme. Stock/raster photography can't guarantee that — it ships with its own fixed colors and doesn't adapt to light/dark or to the green accent. Instead, every illustration on the site is a hand-built SVG component (`src/components/illustrations/Illustrations.tsx`) drawn with `currentColor`, so it inherits the active theme's ink/signal color automatically in both light and dark mode, with zero drift.

## Sections

| Section | What it shows | Illustration/infographic |
|---|---|---|
| Hero | Name, role, tagline, CTAs, social links | 3D `SignalSphere` (WebGL) + waveform SVG |
| About | Summary, quick stats | Call-handset SVG, animated stat cards |
| Skills | 4 skill groups (Languages, Platforms & Frameworks, Data, Real-Time & Native) | Animated proficiency bars |
| Journey | Experience + Qualification as two parallel timelines | Dot-and-line timeline, icon-labeled |
| Projects | 4 client sites (export/gemstone/MLM platforms) | Per-project SVG art (crate, gem, network) |
| Products | 6 built products/SDKs (telephony apps, RADIX, VISION, WebRTC SDK) | Per-product SVG art (handset, IVR tree, campaign, SDK brackets, recorder, browser/peers) |
| Contact | Email + social links | — |

## Interactivity

- 3D hero sphere: auto-rotates, ambient drift, animated signal pulses traveling along edges; respects theme color.
- Scroll-triggered reveal animation on every section (Framer Motion `whileInView`, `once: true`).
- Theme toggle: instant switch, no flash-of-wrong-theme on load (inline boot script in `index.html`).
- **Scroll signal bar** (`ui/ScrollSignal.tsx`): a thin top progress bar (spring-smoothed) tracking scroll depth, plus a desktop-only side rail of section dots (via `IntersectionObserver`) that highlights the active section and jumps to any section on click.
- **Command palette** (`ui/CommandPalette.tsx`): `⌘K` / `Ctrl+K` opens a searchable quick-jump menu to any section, plus a "toggle theme" command; arrow keys + Enter to navigate, Escape to close. A "Quick jump" trigger button lives in the nav on larger screens.
- Responsive: mobile nav drawer, all grids collapse to single column below `sm`.
- Accessibility: visible focus rings (`:focus-visible`), `aria-label`s on icon-only controls, `prefers-reduced-motion` honored globally.

## Content model

All resume content is centralized in `src/data/profile.ts`:
- `profile` — name, role, tagline, summary, contact
- `skillGroups` — 4 categories × rated skills
- `qualifications` — 6 entries (HSC → M.Tech)
- `experience` — 5 roles (NIIT → VIS Networks)
- `projects` — 4 client sites, each with domain, description, tags
- `products` — 6 built products/SDKs, each with tagline, description, stack, client (where applicable)

## Backlog / ideas not yet built

- Resume/CV PDF download button.
- Project/product detail pages (currently single-page cards).
- Contact form (currently `mailto:` only).
