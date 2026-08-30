# Changelog

All notable changes to this project are documented here. Format loosely follows [Keep a Changelog](https://keepachangelog.com/).

## [0.1.0] - 2026-08-30

### Added
- Initial project scaffold: React 19 + TypeScript + Vite, Tailwind CSS v4.
- Design system: "Signal" token set — green primary (`signal-*` scale), Space Grotesk/Inter/JetBrains Mono type stack, light/dark surface variables.
- `ThemeContext` supporting light / dark / **system** modes, persisted via `localStorage`, with a boot-time inline script in `index.html` to avoid theme flash.
- `ThemeToggle` segmented control in the nav.
- 3D signature hero visual: `SignalSphere` — a rotating icosphere node network with animated signal pulses, built with `@react-three/fiber` + `@react-three/drei`.
- Custom SVG illustration library (`src/components/illustrations`) covering: waveform, call handset, IVR tree, outbound campaign, softphone SDK, screen recorder, WebRTC SDK, export crate, gemstone, and network/MLM art — all theme-matched via `currentColor`.
- Sections: Hero, About, Skills (infographic progress bars by category), Journey (dual timeline: Experience + Qualification), Projects (client sites), Products (built products/SDKs), Contact.
- Full resume content wired in from `src/data/profile.ts`: profile, skill groups, qualifications, experience, projects, products.
- Scroll-triggered reveal animations via Framer Motion across all sections.
- Responsive nav with mobile menu.
- Documentation set: `README.md`, `CLAUDE.md`, `AGENTS.md`, `CHANGELOG.md`, `docs/FEATURES.md`, `docs/ARCHITECTURE.md`, `docs/MEMORY.md`.

### Notes
- lucide-react no longer ships brand icons (GitHub/LinkedIn); generic icons (`GitBranch`, `Link2`) used with correct `aria-label`s instead.
