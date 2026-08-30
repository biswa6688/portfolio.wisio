// Central content source for the portfolio. Edit this file to update site content.

export const profile = {
  name: 'Biswaranjan Nayak',
  role: 'Fullstack Developer',
  tagline: '14+ years engineering scalable web applications across the .NET and JavaScript ecosystems.',
  email: 'ranjan6688@gmail.com',
  location: 'India',
  social: {
    github: 'https://github.com/biswa6688',
    linkedin: '',
  },
}

export const skills = [
  { name: 'C# / .NET', category: 'Backend' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'JavaScript', category: 'Language' },
  { name: 'TypeScript', category: 'Language' },
  { name: 'React', category: 'Frontend' },
  { name: 'Angular', category: 'Frontend' },
  { name: 'MongoDB', category: 'Database' },
  { name: 'SQLite', category: 'Database' },
  { name: 'MS SQL', category: 'Database' },
  { name: 'MySQL', category: 'Database' },
  { name: 'PostgreSQL', category: 'Database' },
] as const

export type Qualification = {
  degree: string
  institution: string
  year: string
}

export const qualifications: Qualification[] = [
  { degree: 'HSC', institution: 'BSE, Odisha', year: '2003' },
  { degree: 'ISC', institution: 'CHSE, Odisha', year: '2006' },
  { degree: 'B.Sc.', institution: 'Sambalpur University', year: '2009' },
  { degree: 'GNIIT', institution: 'NIIT University', year: '2010' },
  { degree: 'B.Tech', institution: 'NIT, Rourkela', year: '2013' },
  { degree: 'M.Tech', institution: 'NIT, Rourkela', year: '2015' },
]

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

// Ordered most-recent first.
export const experience: Experience[] = [
  {
    role: 'Tech Lead',
    company: 'VIS Networks Pvt Ltd',
    period: '2015 — Present',
    summary:
      'Led design and development of telephony and real-time communication products, from low-level native integrations (TAPI, Avaya IP Office, Avaya POM, PJSIP) up through JavaScript SDKs consumed by client-facing web applications.',
    highlights: [
      'Owned end-to-end delivery of enterprise telephony integrations for clients including FANUC India, Eros International and Tech Mahindra',
      'Built RADIX, a C/C#/PJSIP-based softphone with a JavaScript SDK layer',
      'Built VISION, a native Windows screen recorder exposed to web apps via a JavaScript SDK',
      'Designed a reusable WebRTC wrapper SDK adopted across multiple client applications',
    ],
  },
  {
    role: 'Software Developer',
    company: 'Cadence Software Solutions Pvt Ltd',
    period: '2012 — 2015',
    summary: 'Delivered fullstack web applications and business software solutions.',
    highlights: [
      'Built and maintained production web applications end to end',
      'Worked across frontend, backend and database layers',
    ],
  },
  {
    role: 'Faculty',
    company: 'CNET (Center of Networking Education)',
    period: '2011 — 2012',
    summary: 'Taught networking and software development courses.',
    highlights: ['Delivered technical training to students in networking and programming'],
  },
  {
    role: 'Faculty',
    company: 'CORD (Chinmata Organization of Rural Development)',
    period: '2010 — 2012',
    summary: 'Taught foundational computer science and programming courses.',
    highlights: ['Delivered technical training as part of a rural development education initiative'],
  },
  {
    role: 'Faculty',
    company: 'NIIT',
    period: '2010 — 2011',
    summary: 'Taught programming and software development courses.',
    highlights: ['Delivered structured technical training curricula to students'],
  },
]

export type Project = {
  title: string
  description: string
  tech: string[]
  link?: string
}

export const projects: Project[] = [
  {
    title: 'AmbujaExporters.in',
    description:
      'E-commerce/business site for an exporter of handicraft and filigree work, showcasing and selling handcrafted products to international buyers.',
    tech: [],
    link: 'https://ambujaexporters.in',
  },
  {
    title: 'TariniExporters.in',
    description:
      'Business site for a gemstone exporter, presenting and selling gemstone products to a global customer base.',
    tech: [],
    link: 'https://tariniexporters.in',
  },
  {
    title: 'PaxBlue.in',
    description: 'Web platform built for a multi-level marketing (MLM) business model.',
    tech: [],
    link: 'https://paxblue.in',
  },
  {
    title: 'Pramax.in',
    description: 'Web platform built for a multi-level marketing (MLM) business model.',
    tech: [],
    link: 'https://pramax.in',
  },
]

export type Product = {
  title: string
  tagline: string
  description: string
  tech: string[]
}

export const products: Product[] = [
  {
    title: 'Telephony Rich-Features App — FANUC India',
    tagline: 'Enterprise telephony feature app built on TAPI and Avaya IP Office',
    description:
      'A telephony rich-features application built for FANUC India on top of TAPI (Telephony Application Programming Interface) integrated with Avaya IP Office. The application exposed core telephony operations — call control (make/answer/hold/transfer/conference), presence, and call-event notifications — directly inside the client\'s desktop workflow, removing the need for staff to switch between a physical handset and their business applications. Integrating against Avaya IP Office at the PBX level required handling real-world call-state edge cases (multi-line, hold/retrieve, transfer completion) reliably, since the app sat in the critical path of everyday business communication for the client.',
    tech: ['TAPI', 'Avaya IP Office', 'C#', 'Windows'],
  },
  {
    title: 'Telephony IVR App — Eros International',
    tagline: 'Interactive Voice Response system on TAPI and Avaya IP Office',
    description:
      'An IVR (Interactive Voice Response) application developed for Eros International using TAPI over an Avaya IP Office deployment. The system automated inbound call handling — routing callers through voice-prompted menus, collecting DTMF input, and directing calls to the correct department or queue — reducing manual call handling load and giving the business a consistent, scriptable front door for inbound telephony traffic.',
    tech: ['TAPI', 'Avaya IP Office', 'IVR', 'C#'],
  },
  {
    title: 'Telephony Rich-Features App — Tech Mahindra',
    tagline: 'Rich telephony feature integration on Avaya POM',
    description:
      'A telephony rich-features application delivered for Tech Mahindra, built on Avaya POM (Proactive Outreach Manager). The application integrated proactive/outbound campaign telephony capabilities with rich in-call features, enabling structured outbound calling workflows alongside the standard call-control feature set expected in an enterprise contact-center-style environment.',
    tech: ['Avaya POM', 'C#', 'Telephony'],
  },
  {
    title: 'RADIX — Softphone',
    tagline: 'Cross-application softphone: C / C# core with a PJSIP backend and a JavaScript SDK',
    description:
      'RADIX is a softphone product built with a native C/C# core on top of PJSIP as the SIP/media backend, paired with a JavaScript SDK that lets any web application embed full telephony capability — registration, call placement/receipt, hold/transfer, DTMF, and call-state events — without building SIP handling from scratch. The native layer handles the heavy lifting (SIP signalling via PJSIP, audio device and media handling), while the JavaScript SDK exposes a simple, application-facing API so web teams can add "phone in the browser tab" functionality to their own products by consuming the SDK rather than reimplementing softphone internals.',
    tech: ['C', 'C#', 'PJSIP', 'JavaScript SDK'],
  },
  {
    title: 'VISION — Screen Recorder',
    tagline: 'Native Windows screen recorder with a JavaScript SDK for web integration',
    description:
      'VISION is a screen-recording product with a backend built on native Windows libraries for capturing screen and (where required) call-related activity at the OS level, paired with a JavaScript SDK so any web application can trigger, control, and consume recordings without dealing with native capture APIs directly. This pairing — native performance and OS-level access on the backend, simple JavaScript-facing controls on the frontend — mirrors the RADIX architecture and let client applications add screen-recording/session-capture features (e.g. for compliance or QA review in telephony workflows) with a small integration surface.',
    tech: ['Windows Native APIs', 'C/C++', 'JavaScript SDK'],
  },
  {
    title: 'WebRTC Wrapper SDK',
    tagline: 'Reusable JavaScript SDK abstracting WebRTC for telephony features in any web app',
    description:
      'A WebRTC wrapper SDK designed to be dropped into any web application to add telephony features — peer connection setup, media negotiation, call signalling hooks, and connection-state handling — without every consuming application needing to understand raw WebRTC APIs, ICE/STUN/TURN configuration, or browser inconsistencies directly. By centralizing that complexity behind one SDK, client applications could adopt browser-based calling features consistently, with the SDK acting as the shared integration layer across multiple products (in the same way RADIX and VISION exposed native capability through JavaScript SDKs).',
    tech: ['WebRTC', 'JavaScript', 'SDK Design'],
  },
]
