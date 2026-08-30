# Features

Status tracked per feature. Update this file whenever a feature is added, changed, or removed.

## Shipped

| Feature | Description | Files |
|---|---|---|
| 3D background scene | Fixed-position Three.js canvas behind all content; starfield, ambient + point lighting | [src/three/Scene.tsx](src/three/Scene.tsx), [src/three/Starfield.tsx](src/three/Starfield.tsx) |
| Hero 3D model | Distorted icosahedron centerpiece with float animation, shown on Hero/About sections | [src/three/HeroModel.tsx](src/three/HeroModel.tsx) |
| 3D skill orb | Skills laid out on a sphere (Fibonacci distribution), auto-rotating, hover-to-highlight with floating labels | [src/three/SkillOrb.tsx](src/three/SkillOrb.tsx) |
| Camera parallax rig | Camera lerps position based on pointer position and active section | [src/three/Scene.tsx](src/three/Scene.tsx) |
| Scroll-synced nav | Fixed pill nav, active section highlighted via IntersectionObserver, smooth-scroll on click | [src/components/Nav.tsx](src/components/Nav.tsx), [src/App.tsx](src/App.tsx) |
| Hero section | Name, role, tagline, CTA buttons, scroll cue | [src/components/Hero.tsx](src/components/Hero.tsx) |
| About section | Bio copy driven by profile data | [src/components/About.tsx](src/components/About.tsx) |
| Skills section | Categorized skill grid (Backend/Frontend/Language/Database) alongside 3D orb | [src/components/Skills.tsx](src/components/Skills.tsx) |
| Experience timeline | Vertical timeline with role/company/period/highlights | [src/components/Experience.tsx](src/components/Experience.tsx) |
| Projects grid | Card grid with tech tags and optional external link | [src/components/Projects.tsx](src/components/Projects.tsx) |
| Contact section | Mailto CTA, social links, footer | [src/components/Contact.tsx](src/components/Contact.tsx) |
| Scroll-reveal animation | Shared `Reveal` wrapper (Framer Motion `whileInView`) used across sections | [src/components/Reveal.tsx](src/components/Reveal.tsx) |
| Central content model | All personal data in one typed file, no hardcoded copy in components | [src/data/profile.ts](src/data/profile.ts) |
| Qualification section | Education timeline (HSC through M.Tech) as a striped list | [src/components/Qualifications.tsx](src/components/Qualifications.tsx) |
| Products section | Lengthy write-ups of telephony/real-time-communication products built (client integrations + RADIX softphone, VISION screen recorder, WebRTC wrapper SDK) | [src/components/Products.tsx](src/components/Products.tsx) |
| Real experience data | Actual employers, roles and date ranges (NIIT, CORD, CNET, Cadence, VIS Networks) | [src/data/profile.ts](src/data/profile.ts) |
| Real project links | AmbujaExporters.in, TariniExporters.in, PaxBlue.in, Pramax.in with descriptions | [src/data/profile.ts](src/data/profile.ts) |

## Fixed

- **3D scene was invisible in the browser.** Two compounding bugs: (1) the Canvas used a
  Tailwind class `!fixed` intended as an important-modifier, but Tailwind v4 moved that syntax to
  a trailing `!` (`fixed!`), so the leading `!` did nothing and the canvas had no positioning;
  (2) once positioned via inline `style` with `zIndex: -10`, this environment's Chromium
  compositor silently dropped the negative-z-index fixed layer from the painted output entirely
  (confirmed by isolating a raw WebGL triangle test, which rendered fine, and by toggling z-index
  from -10 to 0 with no other change). Fixed by using inline `style` for fixed positioning and
  keeping the canvas at `zIndex: 0` while the DOM content (`<main>`, `<nav>`) uses `z-10`/`z-50`
  to stack above it. Verified via headless-browser screenshots on both the Hero and Skills
  sections. See [src/three/Scene.tsx](src/three/Scene.tsx).

## Planned / Ideas

- Resume/CV download button
- Contact form with backend (or third-party form service) instead of mailto-only
- Light/dark theme toggle
- Code-split the Three.js bundle (currently a single large chunk) via dynamic import
- Deployment pipeline (GitHub Actions → static host)
- Real LinkedIn URL and additional social links
- Screenshots/live links for the four listed projects
