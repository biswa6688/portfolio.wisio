# Biswaranjan Nayak — Portfolio

3D interactive portfolio site for **Biswaranjan Nayak**, Fullstack Developer (14+ years).

Live 3D scene (Three.js via React Three Fiber) rendered as a fixed background, with scroll-driven
DOM content sections (Hero, About, Skills, Experience, Projects, Contact) layered on top.

## Tech Stack

- **Build tool:** Vite
- **Framework:** React 19 + TypeScript
- **3D:** Three.js, @react-three/fiber, @react-three/drei
- **Animation:** Framer Motion
- **Styling:** Tailwind CSS v4

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview production build locally
```

## Project Structure

```
src/
  three/            3D scene components (Canvas, Starfield, HeroModel, SkillOrb)
  components/       DOM sections (Hero, About, Skills, Experience, Projects, Contact, Nav)
  data/profile.ts    Single source of truth for site content — name, skills, experience, projects
  App.tsx            Layout, active-section tracking (IntersectionObserver)
```

## Editing Content

All personal content (name, role, skills, experience, projects, contact links) lives in
[src/data/profile.ts](src/data/profile.ts). Edit that file to update the site — no need to touch
components.

## Documentation

- [FEATURES.md](FEATURES.md) — feature list and status
- [CHANGELOG.md](CHANGELOG.md) — dated history of changes
- [CLAUDE.md](CLAUDE.md) — instructions for Claude Code when working in this repo
- [AGENT.md](AGENT.md) — agent/automation workflow notes
- [MEMORY.md](MEMORY.md) — durable project context and decisions

## Deployment

Static build output is in `dist/` after `npm run build` — deployable to any static host
(Vercel, Netlify, GitHub Pages, Azure Static Web Apps, etc).

## Repository Workflow

Every new feature is committed and pushed to
[github.com/biswa6688/portfolio.wisio](https://github.com/biswa6688/portfolio.wisio) **before**
starting the next feature. Documentation (README, FEATURES, CHANGELOG, MEMORY) is updated
alongside every feature change.
