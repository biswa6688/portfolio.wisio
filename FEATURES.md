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

## Planned / Ideas

- Real project data + screenshots/links (currently placeholder projects)
- Resume/CV download button
- Contact form with backend (or third-party form service) instead of mailto-only
- Light/dark theme toggle
- Code-split the Three.js bundle (currently a single large chunk) via dynamic import
- Deployment pipeline (GitHub Actions → static host)
- Real LinkedIn URL and additional social links
