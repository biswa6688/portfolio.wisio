import { useEffect, useState } from 'react'
import { Scene } from './three/Scene'
import { Nav } from './components/Nav'
import { Hero } from './components/Hero'
import { About } from './components/About'
import { Qualifications } from './components/Qualifications'
import { Skills } from './components/Skills'
import { Experience } from './components/Experience'
import { Products } from './components/Products'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

const sectionIds = [
  'hero',
  'about',
  'qualifications',
  'skills',
  'experience',
  'products',
  'projects',
  'contact',
]

function App() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { threshold: 0.4 },
    )

    sectionIds.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="relative min-h-screen text-white">
      <Scene activeSection={activeSection} />
      <Nav activeSection={activeSection} />
      <main className="relative z-10">
        <Hero />
        <About />
        <Qualifications />
        <Skills />
        <Experience />
        <Products />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App
