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
  - *Why:* the user's real bio/projects/links are placeholders in several spots (experience
    companies, project descriptions, LinkedIn URL) — keeping everything in one typed file makes
    it a single edit point instead of hunting across components.
- **Repository workflow:** commit and push all valid changes to
  `https://github.com/biswa6688/portfolio.wisio.git` **before** starting each new feature, and
  update README/FEATURES/CHANGELOG/MEMORY alongside every feature change.
  - *Why:* explicit user instruction — keeps history bisectable and docs never drift from code.

## Known Placeholders (need real content from owner)

- `experience` entries in `src/data/profile.ts` use "Your Company" / "Previous Company" — replace
  with real employers, roles, and dates.
- `projects` entries are generic placeholders — replace with 2-4 real shipped projects.
- `profile.social.linkedin` is empty — add real LinkedIn URL.
- `profile.social.github` guesses `github.com/biswa6688` — confirm/correct.

## Environment Notes

- Developed on Windows (win32), directory was not a git repo at project start — initialized
  fresh and pointed at the remote above.
- Node/npm tooling used for all package management (no yarn/pnpm lockfile).
