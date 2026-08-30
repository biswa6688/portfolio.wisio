# Biswaranjan Nayak — 3D Interactive Portfolio

A fully interactive, infographic-driven portfolio site for **Biswaranjan Nayak**, Fullstack Developer (14+ years, real-time communications & desktop systems).

Live signature piece: a rotating 3D "signal sphere" (WebGL, react-three-fiber) representing the SIP/WebRTC mesh networks his products route calls through — everything else on the page (skills, timeline, projects, products) is rendered as custom SVG infographics, not screenshots or stock photos, so every visual matches the theme exactly.

## Tech stack

| Concern | Choice |
|---|---|
| Framework | React 19 + TypeScript |
| Build tool | Vite 8 |
| 3D | Three.js + `@react-three/fiber` + `@react-three/drei` |
| Styling | Tailwind CSS v4 (CSS-first `@theme` tokens) |
| Motion | Framer Motion |
| Icons | lucide-react |

No CSS framework component kit, no stock imagery, no `localStorage`-dependent build step — theme preference is the only thing persisted (`localStorage`), and it's read synchronously in `index.html` to avoid a flash of the wrong theme.

## Design system

See [`docs/FEATURES.md`](docs/FEATURES.md) for the full breakdown. Short version:

- **Primary color**: Signal Green (`#00C896` light / `#1DE0A8` dark) — the color of an active call.
- **Type**: Space Grotesk (display), Inter (body), JetBrains Mono (labels/data/eyebrows).
- **Theme**: light / dark / **system**, toggled via a segmented control in the nav, resolved with `prefers-color-scheme` and persisted per explicit choice only (system stays live-reactive).
- **Illustration**: 100% custom SVG components in `src/components/illustrations/`, built from `currentColor` so they always match the active theme — see [`docs/FEATURES.md`](docs/FEATURES.md#why-no-stock-images) for why this replaces raster "images."

## Getting started

```bash
npm install
npm run dev       # http://localhost:5173
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

## Project structure

```
src/
  components/
    three/SignalSphere.tsx        # the 3D hero visual
    illustrations/                # theme-matched SVG art
    sections/                     # Hero, About, Skills, Journey, Projects, Products, Contact
    ui/                           # SectionHeading, ThemeToggle
    Nav.tsx
  context/ThemeContext.tsx        # light/dark/system state
  data/profile.ts                 # all resume content lives here
docs/
  FEATURES.md        # feature log, kept current with every change
  MEMORY.md           # working notes / decisions for future sessions
  ARCHITECTURE.md     # how the pieces fit together
CLAUDE.md              # instructions for AI agents working in this repo
AGENTS.md              # agent workflow & repo conventions (git-first policy)
CHANGELOG.md            # dated log of shipped changes
```

## Editing content

All resume content (name, role, skills, qualifications, experience, projects, products) lives in one place: **`src/data/profile.ts`**. Update that file and every section re-renders automatically — no component edits needed for a content-only change.

## Documentation & workflow policy

This repo follows a **commit-before-you-build** policy: before any new feature is started, the previous valid state is committed and pushed first. See [`AGENTS.md`](AGENTS.md) for the exact rule and [`CHANGELOG.md`](CHANGELOG.md) for the history. Every feature addition updates `docs/FEATURES.md` (and `CHANGELOG.md`) in the same commit that ships it.

## Deployment

Static output (`npm run build` → `dist/`) — deployable to Vercel, Netlify, GitHub Pages, or any static host.
