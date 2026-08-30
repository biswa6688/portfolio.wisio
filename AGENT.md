# AGENT.md

Agent/automation workflow conventions for this repository. Applies to any AI coding agent
(Claude Code or otherwise) contributing here.

## Git workflow (mandatory)

- Remote: `https://github.com/biswa6688/portfolio.wisio.git`
- **Before every new feature:** ensure the working tree is clean and the previous feature's
  valid changes are committed and pushed. Do not stack unpushed work.
- **Commit messages:** short, imperative, conventional-commit style where it fits
  (`feat: ...`, `fix: ...`, `docs: ...`, `chore: ...`).
- **After every feature:** update README/FEATURES/CHANGELOG/MEMORY as needed (see
  [CLAUDE.md](CLAUDE.md)), then commit + push again so docs and code land together.
- Never force-push to the remote without explicit user confirmation.
- Never commit `node_modules`, `dist`, or `.env`-style secrets (see `.gitignore`).

## Feature loop

1. Confirm previous changes are committed + pushed.
2. Implement the feature.
3. Run `npm run build` to verify types and build succeed.
4. Update docs (FEATURES.md, CHANGELOG.md, MEMORY.md if decisions changed, README.md if
   setup/structure changed).
5. Commit (code + docs together) and push.

## Content changes

Content-only changes (bio text, project descriptions, skills, links) should only touch
[src/data/profile.ts](src/data/profile.ts) — no component edits required.

## Design/interaction constraints to preserve

- 3D canvas (`src/three/Scene.tsx`) stays a fixed full-viewport background (`position: fixed`,
  behind content, `-z-10`) — do not turn it into a scroll-jacking full 3D camera-fly-through
  without discussing tradeoffs (mobile perf, accessibility, motion sickness).
- Respect `prefers-reduced-motion` if adding further animation-heavy features.
- Keep bundle size in mind — Three.js is already the largest dependency; avoid adding another
  heavy 3D/animation library without reason.
