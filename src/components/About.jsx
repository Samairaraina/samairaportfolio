import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const IMAGES = [
  { src: '/about-profile.jpeg', alt: 'Samaira Raina portrait 1' },
  { src: '/about-2.jpeg', alt: 'Samaira Raina portrait 2' },
  { src: '/about-3.jpeg', alt: 'Samaira Raina portrait 3' },
]

export default function About() {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % IMAGES.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  return (
    <section id="about" className="about">
      <motion.div
        className="about__grid"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="about__image">
          <div className="about__slideshow">
            <div className="about__portrait">
              <AnimatePresence mode="wait">
                <motion.img
                  key={index}
                  src={IMAGES[index].src}
                  alt={IMAGES[index].alt}
                  initial={{ opacity: 0, scale: 1.05 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                />
              </AnimatePresence>
            </div>
            <div className="about__dots">
              {IMAGES.map((_, i) => (
                <button
                  key={i}
                  className={`about__dot${i === index ? ' about__dot--active' : ''}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Photo ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="about__content">
          <p className="section-label">About Me</p>
          <h2 className="section-title">
            Crafting digital<br />experiences with purpose
          </h2>
          <div className="about__text">
            <p>
              I'm a Computer Science &amp; Data Science student with a deep passion for web development and artificial intelligence.
              I believe in building software that not only performs flawlessly but also delivers an exceptional user experience.
            </p>
            <p>
              My journey spans from crafting responsive web applications with modern frameworks to exploring how machine learning
              can transform healthcare. I'm driven by curiosity, meticulous attention to detail, and a commitment to excellence
              in every line of code I write.
            </p>
          </div>
          <div className="about__stats">
            <div className="about__stat">
              <span className="about__stat-number">4+</span>
              <span className="about__stat-label">Projects Completed</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">3</span>
              <span className="about__stat-label">Technologies</span>
            </div>
            <div className="about__stat">
              <span className="about__stat-number">2</span>
              <span className="about__stat-label">Years Learning</span>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
