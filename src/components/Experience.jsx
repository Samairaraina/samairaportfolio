import { motion } from 'framer-motion'

const EXPERIENCES = [
  {
    role: 'Python Developer',
    company: 'CodeAlpha · Internship',
    period: 'Aug 2026 – Present · 1 mo',
    location: 'Lucknow, Uttar Pradesh, India · Remote',
    skills: ['Python (Programming Language)'],
    highlights: [
      'Developing Python applications and solving real-world problems through code.',
      'Writing clean, efficient, and maintainable Python code for assigned tasks and projects.',
      'Applying data structures, algorithms, and best practices in daily development work.',
      'Learning industry workflows through hands-on development and code reviews.',
    ],
  },
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
    link: 'https://www.instagram.com/mag.insights?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==',
    linkLabel: 'Instagram',
  },
  {
    role: 'Web Development Intern',
    company: 'InAmigos Foundation, Bilaspur',
    period: 'June 2026 – June 2026',
    highlights: [
      'Developing and maintaining website features to enhance user experience and accessibility.',
      'Working with modern web technologies to build responsive and visually appealing web pages.',
      'Collaborating with the team to implement design improvements and optimize website performance.',
      'Gaining hands-on experience in frontend development, website management, and real-world project workflows.',
      'Contributing to digital initiatives that support the foundation\'s social impact and community outreach programs.',
    ],
    link: 'https://inamigosfoundation.org.in/',
    linkLabel: 'Website',
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
              {exp.location && <p className="timeline__location">{exp.location}</p>}
              {exp.skills && exp.skills.length > 0 && (
                <div className="timeline__skills">
                  {exp.skills.map((skill) => (
                    <span key={skill} className="timeline__skill-tag">{skill}</span>
                  ))}
                </div>
              )}
              {exp.link && (
                <a href={exp.link} target="_blank" rel="noopener noreferrer" className="timeline__link">
                  {exp.linkLabel === 'Instagram' ? (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
                  ) : (
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>
                  )}
                  {exp.linkLabel}
                </a>
              )}
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
