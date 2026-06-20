import { motion } from 'framer-motion'

export default function About() {
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
          <div className="about__portrait">
            <img src="/about-profile.jpeg" alt="Samaira Raina" />
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
