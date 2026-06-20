import { motion } from 'framer-motion'

const CATEGORIES = [
  {
    title: 'Programming Languages',
    items: [
      {
        name: 'Java',
        description: 'Object-oriented programming, data structures, and algorithmic problem-solving.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M8 20c4 1 8 0 8-2"/><path d="M8 17c4 1 8 0 8-2"/><path d="M11 3c4 0 6 3 6 6s-2 4-6 4H9v4"/><path d="M9 3v10"/></svg>,
      },
      {
        name: 'JavaScript',
        description: 'Modern ES6+ development, async programming, and DOM manipulation.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="3" width="18" height="18" rx="2"/><text x="8" y="16" fontSize="10" fontWeight="bold" fill="currentColor" stroke="none">JS</text></svg>,
      },
      {
        name: 'C Programming',
        description: 'Systems programming, memory management, and low-level optimization.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 10v4"/><path d="M14 8h4a2 2 0 012 2v4a2 2 0 01-2 2h-4"/><path d="M6 8h4a2 2 0 012 2v4a2 2 0 01-2 2H6"/><path d="M10 8V6a2 2 0 012-2h4"/><path d="M2 8h4"/></svg>,
      },
    ],
  },
  {
    title: 'Web Development',
    items: [
      {
        name: 'HTML',
        description: 'Semantic markup, accessible structure, and SEO-optimized content.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l1.5 16L12 21l5.5-2L19 3H5z"/><path d="M8.5 7h7"/><path d="M8.5 11h7"/></svg>,
      },
      {
        name: 'CSS',
        description: 'Responsive design, flexbox, grid, animations, and modern styling.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 3l1.5 16L12 21l5.5-2L19 3H5z"/><path d="M9 7h6l-.5 4H10"/><path d="M10 11h4l-.25 2.5L12 14.5l-1.75-.5"/></svg>,
      },
      {
        name: 'Node.js',
        description: 'Server-side JavaScript, REST APIs, and backend application development.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l9 5v10l-9 5-9-5V7l9-5z"/><path d="M12 7v10"/><path d="M8 9l4-2 4 2"/></svg>,
      },
      {
        name: 'Web Development',
        description: 'Full-stack development, responsive design, and modern web frameworks.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
      },
    ],
  },
  {
    title: 'Database & Version Control',
    items: [
      {
        name: 'Database Management System (DBMS)',
        description: 'Database design, SQL queries, normalization, and data integrity management.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="6" rx="8" ry="3"/><path d="M4 6v6c0 1.7 3.6 3 8 3s8-1.3 8-3V6"/><path d="M4 12v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>,
      },
      {
        name: 'GitHub',
        description: 'Version control, collaborative development, CI/CD, and project management.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="18" cy="18" r="3"/><circle cx="6" cy="6" r="3"/><path d="M6 21V9c0-1.1.9-2 2-2h4"/><path d="M13 10l3-3-3-3"/></svg>,
      },
    ],
  },
  {
    title: 'AI & Analytics',
    items: [
      {
        name: 'Generative AI Tools',
        description: 'Leveraging LLMs, prompt engineering, and AI-powered development workflows.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2l2 7h7l-5.5 4 2 7L12 16l-5.5 4 2-7L3 9h7z"/></svg>,
      },
      {
        name: 'Data Analytics',
        description: 'Data visualization, statistical analysis, and insight-driven decision making.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 3v18h18"/><path d="M7 16l4-8 4 4 4-6"/></svg>,
      },
      {
        name: 'Research and Analytics',
        description: 'Systematic research, data interpretation, and evidence-based recommendations.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="M21 21l-4.3-4.3"/></svg>,
      },
    ],
  },
  {
    title: 'Creative & Business Skills',
    items: [
      {
        name: 'Canva',
        description: 'Professional graphic design, presentations, and visual content creation.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>,
      },
      {
        name: 'Marketing',
        description: 'Digital marketing strategy, brand positioning, and audience engagement.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
      },
      {
        name: 'Creative Thinking',
        description: 'Innovative problem-solving, ideation, and out-of-the-box conceptualization.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18h6"/><path d="M10 22h4"/><path d="M15.09 14c.18-.98.65-1.74 1.41-2.5A4.65 4.65 0 0018 8 6 6 0 006 8c0 1 .23 2.23 1.5 3.5A4.61 4.61 0 008.91 14"/></svg>,
      },
      {
        name: 'Design Thinking',
        description: 'User-centered design, prototyping, iterative development, and empathy-driven solutions.',
        icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15 9 22 9 16 14 19 22 12 17 5 22 8 14 2 9 9 9 12 2"/></svg>,
      },
    ],
  },
]

const categoryVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.08 },
  },
}

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

export default function Skills() {
  return (
    <section id="skills" className="skills">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Expertise</p>
        <h2 className="section-title">Skills &amp; Expertise</h2>
        <p className="section-subtitle">
          Combining technology, creativity, and analytical thinking to build impactful digital experiences.
        </p>
      </motion.div>

      <div className="skills__categories">
        {CATEGORIES.map((category) => (
          <motion.div
            key={category.title}
            className="skills-category"
            variants={categoryVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: '-50px' }}
          >
            <div className="skills-category__header">
              <span className="skills-category__line" />
              <h3 className="skills-category__title">{category.title}</h3>
              <span className="skills-category__line" />
            </div>

            <div className="skills-category__grid">
              {category.items.map((skill) => (
                <SkillCard key={skill.name} skill={skill} />
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

function SkillCard({ skill }) {
  return (
    <motion.div className="skill-card" variants={cardVariants}>
      <div className="skill-card__icon">{skill.icon}</div>
      <span className="skill-card__name">{skill.name}</span>
      <div className="skill-card__bar">
        <motion.div
          className="skill-card__bar-fill"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          style={{ transformOrigin: 'left' }}
        />
      </div>
      <div className="skill-card__description">{skill.description}</div>
    </motion.div>
  )
}
