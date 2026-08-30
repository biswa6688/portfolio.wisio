# Project Memory

Durable context and decisions for this repo. Update whenever a decision changes or new context
is learned. This is project documentation (checked into git) — separate from any personal AI
assistant memory system.

## Owner

- **Name:** Biswaranjan Nayak
- **Email:** ranjan6688@gmail.com
- **Role:** Fullstack Developer, 14+ years experience
- **Stack:** C#/.NET, Node.js, JavaScript, TypeScript, React, Angular, MongoDB, SQLite, MS SQL,
  MySQL, PostgreSQL

## Goal

3D interactive personal portfolio site showcasing the above profile: role, skills, experience,
and projects.

## Key Decisions

- **Stack chosen:** Vite + React 19 + TypeScript + Three.js (`@react-three/fiber` +
  `@react-three/drei`) + Tailwind CSS v4 + Framer Motion.
  - *Why:* fastest path to a performant, maintainable 3D-interactive SPA with strong typing and
    a component model that keeps 3D and DOM content decoupled.
- **3D scene is a fixed background canvas**, DOM content scrolls on top of it (not a full
  scrollytelling/3D-camera-fly-through page).
  - *Why:* simpler to build and maintain, works well on mobile, avoids scroll-jacking UX issues,
    while still delivering a genuinely interactive 3D experience (hover skill nodes, pointer
    parallax, auto-rotating orb).
- **All content centralized in `src/data/profile.ts`.**
  - *Why:* keeps personal data (bio, qualifications, experience, projects, products) a single
    edit point instead of scattering copy across components.
- **Repository workflow:** commit and push all valid changes to
  `https://github.com/biswa6688/portfolio.wisio.git` **before** starting each new feature, and
  update README/FEATURES/CHANGELOG/MEMORY alongside every feature change.
  - *Why:* explicit user instruction — keeps history bisectable and docs never drift from code.
- **The fixed background `<Canvas>` must use `zIndex: 0` (or any non-negative value), never a
  negative z-index, even though "put a fixed layer behind everything" is normally solved with
  negative z-index.**
  - *Why:* in this dev/test environment, a `zIndex: -10` fixed Three.js canvas rendered nothing
    at all — draw calls fired every frame (confirmed via instrumentation) but the composited
    output only ever showed the clear color. Isolated with a raw WebGL triangle (rendered fine at
    z-index 0) and by toggling the canvas's z-index from -10 to 0 with zero other changes (fixed
    it immediately). DOM content (`<main>`, `<nav>` in [src/App.tsx](src/App.tsx)) already stacks
    above via `z-10`/`z-50`, so zIndex 0 on the canvas is sufficient and safe.
  - *How to apply:* if the 3D layer ever goes invisible again, check z-index sign before anything
    else in the Three.js pipeline — it's a cheap, easy-to-miss check.
- Tailwind v4 moved the important-modifier from a **leading** `!` (v3: `!fixed`) to a **trailing**
  `!` (v4: `fixed!`). A leading `!` silently does nothing (no error, class just doesn't apply) —
  this caused the canvas positioning bug above. Prefer inline `style` for anything
  positioning-critical rather than relying on the important-modifier syntax.

## Content status

- `experience`, `qualifications`, `projects`, and `products` in `src/data/profile.ts` all hold
  real data from the owner.
- `profile.social.linkedin` is still empty — add real LinkedIn URL when available.
- `profile.social.github` guesses `github.com/biswa6688` — confirm/correct.
- The four `projects` entries (AmbujaExporters.in, TariniExporters.in, PaxBlue.in, Pramax.in)
  have no `tech` tags since the actual stack used for those client sites isn't known — fill in
  if known, otherwise leave empty.

## Environment Notes

- Developed on Windows (win32), directory was not a git repo at project start — initialized
  fresh and pointed at the remote above.
- Node/npm tooling used for all package management (no yarn/pnpm lockfile).
- Verifying 3D/visual changes requires an actual rendered screenshot (headless Chromium via
  Playwright, since no bundled screenshot tool exists here) — console-error-free and a passing
  `npm run build` are NOT sufficient proof the 3D scene is visible.
