# CLAUDE.md

Instructions for Claude Code (or any AI agent) working in this repository.

## What this project is

3D interactive portfolio site for Biswaranjan Nayak (Fullstack Developer, 14+ years:
C#/.NET, Node.js, JavaScript/TypeScript, React, Angular, MongoDB, SQLite, MS SQL, MySQL,
PostgreSQL). Built with Vite + React 19 + TypeScript, Three.js via `@react-three/fiber` /
`@react-three/drei`, Tailwind CSS v4, Framer Motion.

## Mandatory workflow

1. **Before starting any new feature**, commit and push all previous valid changes to the git
   remote: `https://github.com/biswa6688/portfolio.wisio.git`. Never start new work on top of
   uncommitted or unpushed changes from a prior feature.
2. **After every new feature (or meaningful change)**, update documentation in the same commit:
   - [FEATURES.md](FEATURES.md) — add/update the feature row
   - [CHANGELOG.md](CHANGELOG.md) — add a dated entry
   - [MEMORY.md](MEMORY.md) — update decisions/placeholders if they changed
   - [README.md](README.md) — update if structure, scripts, or setup steps changed
3. Then commit and push again so the remote always reflects a fully-documented state.

## Document map

- `README.md` — setup, structure, how to run
- `FEATURES.md` — feature inventory and status (shipped vs planned)
- `CHANGELOG.md` — dated history of changes
- `MEMORY.md` — durable decisions, rationale, and known placeholders/TODOs for the owner
- `AGENT.md` — automation/agent workflow conventions (git workflow, doc-update rule, commit style)
- `CLAUDE.md` — this file

## Conventions

- All personal content (name, role, skills, experience, projects, contact info) lives in
  [src/data/profile.ts](src/data/profile.ts) — never hardcode copy into components.
- 3D scene code lives under `src/three/`; DOM/UI sections live under `src/components/`. Keep this
  split — the 3D canvas is a fixed background layer, DOM content scrolls on top of it via
  `IntersectionObserver`-driven active-section state in `src/App.tsx`.
- Run `npm run build` (runs `tsc -b && vite build`) before considering a change complete — it is
  the fastest signal for type errors and build breakage.
- No test suite exists yet; if adding non-trivial logic (not just markup/3D visuals), consider
  whether a lightweight test is warranted.
- Don't add backend/server code without discussing first — this is currently a static SPA.
