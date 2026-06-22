import { motion } from 'framer-motion'

const CERTIFICATIONS = [
  {
    title: 'GitHub Workflow Mastery Course with AI',
    subtitle: 'Unstop \u2022 June 2026',
    description: 'Completed a hands-on certification focused on GitHub workflows, version control, collaboration practices, and AI-assisted development techniques.',
    skills: ['GitHub', 'Version Control', 'Collaboration', 'AI-Assisted Development'],
  },
  {
    title: 'British Airways \u2013 Engineering Job Simulation',
    subtitle: 'Forage \u2022 June 2026',
    description: 'Completed a virtual engineering job simulation involving real-world engineering scenarios, problem-solving, and operational risk assessment.',
    skills: ['Operational Risk Management', 'Analytical Thinking', 'Problem Solving'],
  },
  {
    title: 'Google Cloud & NVIDIA Developer Community',
    subtitle: 'Google Developer Program \u2022 June 2026',
    description: 'Joined the official Google Cloud & NVIDIA community through the Google Developer Program, gaining access to exclusive learning pathways, expert forums, and cloud credits for AI development.',
    skills: ['Google Cloud', 'NVIDIA', 'AI Infrastructure', 'Cloud Computing', 'Community'],
  },
  {
    title: 'British Airways \u2013 Data Science Job Simulation',
    subtitle: 'Forage \u2022 June 2026',
    description: 'Completed a data science simulation focused on data analysis, modeling, and extracting business insights from datasets.',
    skills: ['Data Modeling', 'Data Analytics', 'Critical Thinking', 'Data Interpretation'],
  },
]

export default function Achievements() {
  return (
    <section id="achievements" className="achievements">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Recognition</p>
        <h2 className="section-title">Certifications</h2>
        <p className="section-subtitle">
          Professional certifications that validate my skills and commitment to continuous learning.
        </p>
      </motion.div>

      <div className="achievements__grid">
        {CERTIFICATIONS.map((item, i) => (
          <motion.div
            key={i}
            className="achievement-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: i * 0.08, ease: 'easeOut' }}
          >
            <div className="achievement-card__badge">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 12l2 2 4-4"/>
              </svg>
            </div>
            <h3 className="achievement-card__title">{item.title}</h3>
            <p className="achievement-card__subtitle">{item.subtitle}</p>
            <p className="achievement-card__description">{item.description}</p>
            {item.skills && (
              <div className="achievement-card__skills">
                {item.skills.map((s) => (
                  <span key={s} className="achievement-card__skill-tag">{s}</span>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  )
}
