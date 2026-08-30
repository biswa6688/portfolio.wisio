export const profile = {
  name: "Biswaranjan Nayak",
  role: "Fullstack Developer",
  tagline: "14+ years building the wire between people and the systems that carry their voice.",
  summary:
    "I build real-time communication, media, and desktop systems — the layer that most developers never touch: raw sockets, telephony stacks, screen pixels, and native OS APIs. From IVR systems running on Avaya hardware to a softphone SDK used inside browsers, my work sits close to the metal but ships as clean, embeddable products.",
  location: "Odisha, India",
  experienceYears: 14,
  email: "hello@biswaranjannayak.dev",
  socials: {
    github: "https://github.com/biswa6688",
    linkedin: "https://www.linkedin.com/",
  },
};

export const skillGroups = [
  {
    label: "Languages",
    items: [
      { name: "C#", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "C", level: 70 },
    ],
  },
  {
    label: "Platforms & Frameworks",
    items: [
      { name: ".NET", level: 92 },
      { name: "Node.js", level: 92 },
      { name: "React", level: 90 },
      { name: "Angular", level: 78 },
    ],
  },
  {
    label: "Data",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "MSSQL", level: 85 },
      { name: "MySQL", level: 80 },
      { name: "PostgreSQL", level: 78 },
      { name: "SQLite", level: 80 },
    ],
  },
  {
    label: "Real-Time & Native",
    items: [
      { name: "PJSIP / SIP", level: 90 },
      { name: "WebRTC", level: 88 },
      { name: "TAPI / Avaya", level: 85 },
      { name: "Windows Native APIs", level: 82 },
    ],
  },
];

export type QualificationEntry = {
  degree: string;
  institute: string;
  year: string;
};

export const qualifications: QualificationEntry[] = [
  { degree: "M.Tech", institute: "NIT, Rourkela", year: "2015" },
  { degree: "B.Tech", institute: "NIT, Rourkela", year: "2013" },
  { degree: "GNIIT", institute: "NIIT University", year: "2010" },
  { degree: "B.Sc", institute: "Sambalpur University", year: "2009" },
  { degree: "ISC", institute: "CHSE, Odisha", year: "2006" },
  { degree: "HSC", institute: "BSE, Odisha", year: "2003" },
];

export type ExperienceEntry = {
  company: string;
  role: string;
  blurb: string;
};

export const experience: ExperienceEntry[] = [
  {
    company: "VIS Networks Pvt Ltd",
    role: "Tech Lead",
    blurb:
      "Leading development of real-time communication products — softphones, screen recorders, and WebRTC SDKs — from native backend to browser-facing JS APIs.",
  },
  {
    company: "Cadence Software Solutions Pvt Ltd",
    role: "Software Developer",
    blurb:
      "Built telephony and IVR applications on TAPI and Avaya platforms for enterprise clients, integrating call control into business workflows.",
  },
  {
    company: "CNET (Center of Networking Education)",
    role: "Faculty",
    blurb: "Taught networking fundamentals and applied systems concepts to students entering the IT industry.",
  },
  {
    company: "CORD (Chinmata Organization of Rural Development)",
    role: "Faculty",
    blurb: "Delivered technical and computer literacy training as part of a rural development education initiative.",
  },
  {
    company: "NIIT",
    role: "Faculty",
    blurb: "Trained students in programming fundamentals and software development practices.",
  },
];

export type ProjectEntry = {
  name: string;
  url: string;
  domain: string;
  description: string;
  tags: string[];
};

export const projects: ProjectEntry[] = [
  {
    name: "AmbujaExporters.in",
    url: "https://ambujaexporters.in",
    domain: "Handicraft & Filigree Export",
    description:
      "An e-commerce and catalog platform for a handicraft and silver-filigree exporter, presenting artisan products to an international buyer base with catalog browsing and inquiry workflows.",
    tags: ["E-Commerce", "Export", "Catalog"],
  },
  {
    name: "TariniExporters.in",
    url: "https://tariniexporters.in",
    domain: "Gemstone Export",
    description:
      "A gemstone export storefront built to showcase high-value inventory with rich product detail, built for trust and clarity with an international clientele.",
    tags: ["E-Commerce", "Export", "Gemstones"],
  },
  {
    name: "PaxBlue.in",
    url: "https://paxblue.in",
    domain: "Multi-Level Marketing",
    description:
      "A network-marketing platform handling member enrollment, downline hierarchies, and commission structures for an MLM business model.",
    tags: ["MLM", "Commission Engine", "Member Portal"],
  },
  {
    name: "Pramax.in",
    url: "https://pramax.in",
    domain: "Multi-Level Marketing",
    description:
      "A second MLM platform delivering distributor management, tiered payout logic, and reporting for network-driven sales operations.",
    tags: ["MLM", "Payouts", "Reporting"],
  },
];

export type ProductEntry = {
  name: string;
  tagline: string;
  description: string;
  stack: string[];
  client?: string;
};

export const products: ProductEntry[] = [
  {
    name: "FANUC Telephony Suite",
    tagline: "Rich-feature telephony app on TAPI + Avaya IP Office",
    description:
      "A desktop telephony application built on TAPI and Avaya IP Office for FANUC India, giving staff call control — dial, transfer, hold, conference — directly from their workstation, tied into internal business tools.",
    stack: ["C#", "TAPI", "Avaya IP Office"],
    client: "FANUC India",
  },
  {
    name: "Eros IVR System",
    tagline: "Interactive voice response on TAPI + Avaya IP Office",
    description:
      "An IVR application for Eros International built on TAPI and Avaya IP Office, routing inbound calls through automated voice menus to the right department or agent without manual switchboard handling.",
    stack: ["C#", "TAPI", "Avaya IP Office", "IVR"],
    client: "Eros International",
  },
  {
    name: "Tech Mahindra Outbound Suite",
    tagline: "Rich-feature telephony app on Avaya POM",
    description:
      "A telephony application built on Avaya Proactive Outreach Manager (POM) for Tech Mahindra, powering outbound campaign calling with call disposition, scheduling, and agent controls.",
    stack: ["C#", "Avaya POM"],
    client: "Tech Mahindra",
  },
  {
    name: "RADIX Softphone",
    tagline: "Embeddable softphone with a JavaScript SDK",
    description:
      "A full softphone named RADIX with a C/C# + PJSIP backend and a JavaScript SDK layer, letting any web application add telephone features — dial, answer, hold, transfer — without building SIP handling from scratch.",
    stack: ["C", "C#", "PJSIP", "JavaScript SDK"],
  },
  {
    name: "VISION Screen Recorder",
    tagline: "Native screen recorder with a JavaScript SDK",
    description:
      "A screen recording engine named VISION built on Windows native libraries, exposed through a JavaScript SDK so any web application can capture and manage screen recordings as part of its own feature set.",
    stack: ["C#", "Windows Native APIs", "JavaScript SDK"],
  },
  {
    name: "WebRTC Wrapper SDK",
    tagline: "A drop-in real-time communication layer",
    description:
      "A WebRTC wrapper SDK that abstracts signaling, peer connection setup, and media negotiation behind a simple API, so any web application can add voice and video calling without owning WebRTC's complexity directly.",
    stack: ["JavaScript", "TypeScript", "WebRTC"],
  },
];
