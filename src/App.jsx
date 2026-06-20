import { useEffect } from 'react'
import { motion } from 'framer-motion'
import CustomCursor from './components/CustomCursor'
import FloatingElements from './components/FloatingElements'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Experience from './components/Experience'
import Achievements from './components/Achievements'
import Contact from './components/Contact'
import BrainChat from './components/BrainChat'
import './App.css'

function App() {
  useEffect(() => {
    const handleAnchor = (e) => {
      const target = e.target.closest('a[href^="#"]')
      if (!target) return
      e.preventDefault()
      const id = target.getAttribute('href').slice(1)
      const el = document.getElementById(id)
      if (el) el.scrollIntoView({ behavior: 'smooth' })
    }

    document.addEventListener('click', handleAnchor)
    return () => document.removeEventListener('click', handleAnchor)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <CustomCursor />
      <FloatingElements />
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Achievements />
      <Contact />
      <BrainChat />
      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Samaira Raina. Crafted with precision.</p>
      </footer>
    </motion.div>
  )
}

export default App
