# AGENTS.md

Workflow conventions for any agent (human or AI) making changes in this repository.

## Git-first policy (required)

**Before creating any new feature, commit and push the previous valid changes first.**

Concretely, the loop for every unit of work is:

1. Confirm the working tree is in a valid state (`npx tsc --noEmit` and `npm run build` both succeed).
2. `git add -A`
3. `git commit -m "<type>: <summary>"` — see commit message format below.
4. `git push origin main` (or the active branch).
5. Only *then* start the next feature/change.

If a feature is mid-flight and not yet valid, do not commit it as "done" — either commit it clearly marked as work-in-progress on a branch, or finish it to a valid state before committing to `main`.

## Remote

```
origin  https://github.com/biswa6688/portfolio.wisio.git
```

## Commit message format

```
<type>: <short summary>

<optional body — what changed and why>
```

Types used in this repo: `feat`, `fix`, `docs`, `style`, `refactor`, `chore`, `content`.

Examples:
- `feat: add 3D signal sphere hero visual`
- `content: add all resume data (qualifications, experience, projects, products)`
- `docs: update FEATURES.md and CHANGELOG.md for skills infographic`

## Documentation-on-every-feature rule

Every commit that adds or changes a user-facing feature must also update:
- `docs/FEATURES.md` (what shipped)
- `CHANGELOG.md` (dated entry)

And, when relevant:
- `docs/MEMORY.md` (a decision or constraint future sessions should know about)
- `README.md` (if commands, structure, or setup changed)
- `CLAUDE.md` (if agent-facing instructions changed)

A feature commit without its doc update is considered incomplete.

## Before pushing

- [ ] `npx tsc --noEmit` passes
- [ ] `npm run build` succeeds
- [ ] Checked in both light and dark theme
- [ ] `docs/FEATURES.md` + `CHANGELOG.md` updated
