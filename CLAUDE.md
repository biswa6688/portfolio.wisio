# CLAUDE.md

Instructions for Claude (or any AI agent) working in this repository.

## What this project is

A 3D interactive portfolio site for Biswaranjan Nayak, built with React + TypeScript + Vite, Tailwind CSS v4, Three.js (`@react-three/fiber`), and Framer Motion. Read [`README.md`](README.md) first for stack and structure, then [`docs/ARCHITECTURE.md`](docs/ARCHITECTURE.md) for how pieces connect.

## Hard rules for this repo

1. **Commit and push before starting new work.** Before adding any new feature, first `git add -A && git commit` and `git push` whatever is currently in a valid, working state. Never start new feature work on top of uncommitted changes. See [`AGENTS.md`](AGENTS.md) for the exact workflow.
2. **Update the docs in the same change that ships the feature.** Any new feature/component/section requires, in the same commit:
   - `docs/FEATURES.md` — add the feature to the feature log
   - `CHANGELOG.md` — add a dated entry
   - `docs/MEMORY.md` — note any non-obvious decision so a future session doesn't re-litigate it
   - `README.md` — only if the structure, commands, or setup changed
3. **All resume content lives in `src/data/profile.ts`.** Don't hardcode names, dates, or descriptions inside components — import from the data file so content stays in one place.
4. **Theme correctness.** Every new visual element must work in both light and dark mode (and honor `prefers-reduced-motion`). Use the CSS variables defined in `src/index.css` (`--bg`, `--ink`, `--border`, etc.) and the `signal-*` color scale — never hardcode a hex color for text/background.
5. **No stock images.** Illustration is done via custom SVG components in `src/components/illustrations/` driven by `currentColor`, so it always matches the active theme. If a new illustration is needed, add it there rather than pulling in a raster image.
6. **Verify before committing.** Run `npx tsc --noEmit` and `npm run build` and confirm both succeed before committing a feature.

## Common tasks

- **Add a new section**: create `src/components/sections/<Name>.tsx`, add its content to `src/data/profile.ts` if it's resume data, wire it into `src/App.tsx`, add a nav link in `src/components/Nav.tsx` if it should be in the nav.
- **Add a new illustration**: add a component to `src/components/illustrations/Illustrations.tsx` following the existing pattern (SVG, `currentColor`, `props.className` passthrough).
- **Change the primary color**: edit the `--color-signal-*` scale in `src/index.css` (`@theme` block). Do not introduce a second accent scale without updating `docs/FEATURES.md`'s design-system section.

## Out of scope unless explicitly asked

- Backend/CMS integration (content is static, in `profile.ts`, by design).
- Analytics/tracking scripts.
- Additional 3D scenes beyond the hero signature piece — keep the 3D budget to one scene for performance.
