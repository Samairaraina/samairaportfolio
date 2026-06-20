import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    role: 'Marketing & Sales Intern',
    company: 'MAG, Chandigarh',
    period: 'January 2026 – March 2026',
    highlights: [
      'Contributed to marketing and sales initiatives for a SaaS platform focused on business growth and operational efficiency.',
      'Assisted in creating marketing content, customer outreach strategies, and brand awareness campaigns.',
      'Conducted market research and analyzed customer needs to support business development efforts.',
      'Collaborated with teams to improve product communication and customer engagement.',
    ],
  },
  {
    role: 'Web Development Intern',
    company: 'InAmigos Foundation, Bilaspur',
    period: 'June 2026 – Present',
    highlights: [
      'Developing and maintaining website features to enhance user experience and accessibility.',
      'Working with modern web technologies to build responsive and visually appealing web pages.',
      'Collaborating with the team to implement design improvements and optimize website performance.',
      'Gaining hands-on experience in frontend development, website management, and real-world project workflows.',
      'Contributing to digital initiatives that support the foundation\'s social impact and community outreach programs.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="experience">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Background</p>
        <h2 className="section-title">Experience</h2>
        <p className="section-subtitle">
          My professional journey in tech so far.
        </p>
      </motion.div>

      <div className="timeline">
        {EXPERIENCES.map((exp, i) => (
          <motion.div
            key={i}
            className="timeline__item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.6, delay: i * 0.15, ease: 'easeOut' }}
          >
            <div className="timeline__dot" />
            <div className="timeline__content">
              <span className="timeline__period">{exp.period}</span>
              <h3 className="timeline__role">{exp.role}</h3>
              <p className="timeline__company">{exp.company}</p>
              <ul className="timeline__highlights">
                {exp.highlights.map((h, j) => (
                  <li key={j}>{h}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
