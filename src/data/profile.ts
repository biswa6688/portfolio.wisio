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

export type Experience = {
  role: string
  company: string
  period: string
  summary: string
  highlights: string[]
}

export const experience: Experience[] = [
  {
    role: 'Senior Fullstack Developer',
    company: 'Your Company',
    period: '2020 — Present',
    summary: 'Leading design and development of enterprise web applications.',
    highlights: [
      'Architected fullstack solutions using .NET, Node.js and React',
      'Mentored engineers and drove technical standards across teams',
      'Owned database design across SQL Server, PostgreSQL and MongoDB',
    ],
  },
  {
    role: 'Fullstack Developer',
    company: 'Previous Company',
    period: '2014 — 2020',
    summary: 'Built and maintained multiple production web platforms.',
    highlights: [
      'Delivered full lifecycle features from database to UI',
      'Worked across Angular and React frontends',
      'Optimized SQL and NoSQL data layers for scale',
    ],
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
    title: 'Project One',
    description: 'Replace with a short description of a real project you shipped.',
    tech: ['React', 'Node.js', 'MongoDB'],
  },
  {
    title: 'Project Two',
    description: 'Replace with a short description of a real project you shipped.',
    tech: ['C#', '.NET', 'MS SQL'],
  },
  {
    title: 'Project Three',
    description: 'Replace with a short description of a real project you shipped.',
    tech: ['Angular', 'TypeScript', 'PostgreSQL'],
  },
]
