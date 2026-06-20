import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0.5 })
  const portraitRef = useRef(null)
  const [parallax, setParallax] = useState({ x: 0, y: 0 })
  const [portraitHovered, setPortraitHovered] = useState(false)

  useEffect(() => {
    const onMouse = (e) => {
      setMousePos({ x: e.clientX / window.innerWidth, y: e.clientY / window.innerHeight })
    }
    window.addEventListener('mousemove', onMouse)
    return () => window.removeEventListener('mousemove', onMouse)
  }, [])

  const handlePortraitMove = (e) => {
    if (!portraitRef.current) return
    const rect = portraitRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2
    setParallax({ x: x * 8, y: y * 8 })
  }

  const handlePortraitLeave = () => {
    setParallax({ x: 0, y: 0 })
    setPortraitHovered(false)
  }

  const spotlightX = mousePos.x * 100
  const spotlightY = mousePos.y * 100

  return (
    <section id="hero" className="hero">
      {/* Grid background */}
      <div className="hero__grid">
        <div className="hero__grid-line hero__grid-line--v" style={{ left: '20%' }} />
        <div className="hero__grid-line hero__grid-line--v" style={{ left: '40%' }} />
        <div className="hero__grid-line hero__grid-line--v" style={{ left: '60%' }} />
        <div className="hero__grid-line hero__grid-line--v" style={{ left: '80%' }} />
        <div className="hero__grid-line hero__grid-line--h" style={{ top: '20%' }} />
        <div className="hero__grid-line hero__grid-line--h" style={{ top: '40%' }} />
        <div className="hero__grid-line hero__grid-line--h" style={{ top: '60%' }} />
        <div className="hero__grid-line hero__grid-line--h" style={{ top: '80%' }} />
      </div>

      {/* Floating geometric shapes */}
      <div className="hero__shapes">
        <motion.div
          className="hero__shape hero__shape--circle"
          animate={{ x: [0, 30, -10, 0], y: [0, -20, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__shape hero__shape--square"
          animate={{ x: [0, -25, 10, 0], y: [0, 20, -15, 0], rotate: [0, 45, 90, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__shape hero__shape--circle-sm"
          animate={{ x: [0, 20, -15, 0], y: [0, -15, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="hero__shape hero__shape--diamond"
          animate={{ x: [0, -15, 20, 0], y: [0, 25, -10, 0], rotate: [0, -45, -90, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>

      {/* Cursor spotlight */}
      <div
        className="hero__spotlight"
        style={{
          background: `radial-gradient(circle at ${spotlightX}% ${spotlightY}%, rgba(255,255,255,0.03) 0%, transparent 50%)`,
        }}
      />

      <div className="hero__inner">
        {/* Left — Text */}
        <div className="hero__text">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            <p className="hero__greeting">Samaira Raina</p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <h1 className="hero__headline">
              Building Intelligent<br />
              <span className="hero__headline-accent">Digital Experiences</span>
            </h1>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <p className="hero__subheadline">
              Turning ideas into impactful products through code, creativity, and data.
            </p>
          </motion.div>

          <motion.div
            className="hero__actions"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: 'easeOut' }}
          >
            <MagneticBtn>
              <a href="#projects" className="btn btn--primary">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"/><path d="M12 5l7 7-7 7"/></svg>
              </a>
            </MagneticBtn>

            <div className="hero__social">
              <a href="https://github.com/Samairaraina" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="GitHub">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/samaira-raina-483a91369" target="_blank" rel="noopener noreferrer" className="hero__social-link" aria-label="LinkedIn">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right — Portrait */}
        <motion.div
          className="hero__portrait"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.15, ease: 'easeOut' }}
          ref={portraitRef}
          onMouseMove={handlePortraitMove}
          onMouseEnter={() => setPortraitHovered(true)}
          onMouseLeave={handlePortraitLeave}
        >
          {/* Glow behind */}
          <div className="hero__portrait-glow-bg" />

          {/* Glass card */}
          <motion.div
            className="hero__portrait-card"
            animate={{
              x: parallax.x,
              y: parallax.y,
              rotate: portraitHovered ? parallax.x * 0.15 : 0,
              scale: portraitHovered ? 1.02 : 1,
            }}
            transition={{ type: 'spring', stiffness: 150, damping: 15 }}
          >
            {/* Floating animation wrapper */}
            <motion.div
              className="hero__portrait-float"
              animate={{ y: [0, -6, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="hero__portrait-frame">
                <img src="/profile.jpeg" alt="Samaira Raina" />
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="hero__scroll"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <span>Scroll</span>
        <div className="hero__scroll-line" />
      </motion.div>
    </section>
  )
}

function MagneticBtn({ children }) {
  const ref = useRef(null)
  const [pos, setPos] = useState({ x: 0, y: 0 })

  const handleMouse = (e) => {
    if (!ref.current) return
    const rect = ref.current.getBoundingClientRect()
    const x = e.clientX - rect.left - rect.width / 2
    const y = e.clientY - rect.top - rect.height / 2
    setPos({ x: x * 0.3, y: y * 0.3 })
  }

  const handleLeave = () => setPos({ x: 0, y: 0 })

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={handleLeave}
      style={{
        display: 'inline-block',
        transform: `translate(${pos.x}px, ${pos.y}px)`,
        transition: 'transform 0.15s ease-out',
      }}
    >
      {children}
    </div>
  )
}
