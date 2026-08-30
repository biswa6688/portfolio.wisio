const sections = [
  { id: 'hero', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'qualifications', label: 'Qualification' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'products', label: 'Products' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export function Nav({ activeSection }: { activeSection: string }) {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className="fixed left-1/2 top-4 z-50 max-w-[95vw] -translate-x-1/2">
      <ul className="flex gap-1 overflow-x-auto rounded-full border border-white/10 bg-black/40 px-2 py-1.5 backdrop-blur-md">
        {sections.map((section) => (
          <li key={section.id}>
            <button
              onClick={() => scrollTo(section.id)}
              className={`rounded-full px-3 py-1.5 text-xs font-medium transition-colors sm:text-sm ${
                activeSection === section.id
                  ? 'bg-sky-400/20 text-sky-300'
                  : 'text-white/60 hover:text-white'
              }`}
            >
              {section.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}
