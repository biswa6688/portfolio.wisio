# Memory

Working notes for whoever (human or AI) picks this project up next. Append, don't rewrite history — add a dated entry.

## 2026-08-30 — Project created

- Built from scratch per brief: React + TypeScript, 3D interactive, dark/light/system theme with green primary, 100% infographic/illustrative (no stock photos), full resume content for Biswaranjan Nayak.
- **Owner-supplied content** (qualifications, experience, projects, products) came from the brief verbatim; descriptions for each project/product were written to be accurate to what was stated (domain, stack, client) without inventing unstated facts. If Biswaranjan wants richer descriptions (metrics, outcomes, screenshots), that needs new input from him — don't fabricate numbers.
- **Decision: no raster/stock images anywhere.** The brief requires images to match the app's color theme; stock photography can't do that reliably across light/dark. Went with hand-built SVG illustrations using `currentColor` instead. If a future request specifically wants photographic images (e.g. a real headshot), that's a deliberate exception to raise with the user, not something to source from a generic image search.
- **lucide-react has no GitHub/LinkedIn icons** in the installed version (brand icons were removed upstream). Using `GitBranch`/`Link2` as stand-ins with correct `aria-label`s. If upgrading lucide-react, check whether brand icons come back.
- **Git remote is configured** (`https://github.com/biswa6688/portfolio.wisio.git`) but push requires the operator's own GitHub credentials — the agent environment doesn't hold them. See `AGENTS.md` for the intended workflow once auth is available; if a push fails for auth reasons, say so plainly rather than silently skipping it.
- Tailwind v4 is CSS-first — there is intentionally no `tailwind.config.js`; all tokens live in `src/index.css`'s `@theme` block. Don't add a JS config file without removing the CSS one, or the two will conflict.

## 2026-08-30 — GitHub Pages deploy wired up

- Deploy source is GitHub Actions (`.github/workflows/deploy.yml`), not the legacy "deploy from branch" gh-pages approach. Workflow triggers on push to `main` (+ manual `workflow_dispatch`), builds with `npm ci && npm run build`, uploads `dist/`, deploys via `actions/deploy-pages`.
- **`vite.config.ts` has `base: '/portfolio.wisio/'` hardcoded** — required because this is a project Pages site (`biswa6688.github.io/portfolio.wisio/`), not a user/org root page. If the repo is ever renamed, or a custom domain is added, this `base` must change (root `/` for a custom domain or a `<user>.github.io` repo).
- Repo Settings → Pages → "Source" must be set to "GitHub Actions" (one-time, in the GitHub UI) for the workflow's deploy step to succeed — the agent can't do this from the CLI without a token with admin scope.
- Workflow only triggers on `main`. Work landing on other branches (e.g. `1.0.0`) won't deploy until merged to `main`.

## Open questions for Biswaranjan

- Real email address / LinkedIn / GitHub URLs — placeholders are in `src/data/profile.ts` (`hello@biswaranjannayak.dev`, generic LinkedIn root, `github.com/biswa6688`) and should be swapped for the real ones.
- Whether a downloadable résumé PDF is wanted (see `docs/FEATURES.md` backlog).
