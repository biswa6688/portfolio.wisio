# Changelog

All notable changes to this project are documented here. Dates in YYYY-MM-DD.

## 2026-08-30

### Added
- Initial project scaffold: Vite + React 19 + TypeScript
- Three.js 3D scene via `@react-three/fiber` and `@react-three/drei`: starfield background,
  distorted-icosahedron hero model, Fibonacci-sphere skill orb with hover labels
- Camera parallax rig reacting to pointer position and active section
- Tailwind CSS v4 styling (via `@tailwindcss/vite`)
- Framer Motion scroll-reveal animations
- Sections: Hero, About, Skills, Experience, Projects, Contact
- Scroll-synced pill navigation (IntersectionObserver-driven active state)
- Centralized content model at `src/data/profile.ts`
- Project documentation: README, FEATURES, CHANGELOG, MEMORY, CLAUDE.md, AGENT.md
- Git repository initialized, remote set to `https://github.com/biswa6688/portfolio.wisio.git`

### Added
- Qualification section (education timeline: HSC 2003 → M.Tech 2015)
- Products section with lengthy descriptions of telephony/RTC products built (FANUC India,
  Eros International, Tech Mahindra integrations; RADIX softphone; VISION screen recorder;
  WebRTC wrapper SDK)
- Real experience data: NIIT (2010–2011), CORD (2010–2012), CNET (2011–2012), Cadence Software
  Solutions (2012–2015), VIS Networks (2015–present)
- Real project entries with links: AmbujaExporters.in, TariniExporters.in, PaxBlue.in, Pramax.in

### Fixed
- **3D scene was completely invisible.** Root cause was two-fold: an inert Tailwind `!fixed`
  class (v4 moved the important-modifier to a trailing `!`) left the canvas unpositioned, and
  once switched to inline `style`, a `zIndex: -10` value caused this environment's headless
  Chromium compositor to drop the layer entirely — confirmed by isolating a raw WebGL triangle
  (rendered fine) and by toggling z-index from -10 to 0 (fixed it) with nothing else changed.
  Canvas now renders at `zIndex: 0` with DOM content stacked above via existing `z-10`/`z-50`.
  Verified with headless-browser screenshots on Hero and Skills sections.
