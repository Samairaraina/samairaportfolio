import { useRef, useState } from 'react'
import { motion } from 'framer-motion'

const PROJECTS = [
  {
    id: '01',
    title: 'Wedding Budget Planner',
    description: 'A smart wedding planning platform designed to help users manage wedding expenses, organize budgets, and track spending efficiently.',
    tech: ['JavaScript', 'CSS', 'Web Development'],
    demo: 'https://gowedding.vercel.app/',
    mockup: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" rx="16" fill="#0a0a0a" />
        <rect x="24" y="20" width="140" height="10" rx="3" fill="#1a1a1a" />
        <circle cx="570" cy="25" r="4" fill="#1a1a1a" />
        <circle cx="556" cy="25" r="4" fill="#1a1a1a" />
        <circle cx="542" cy="25" r="4" fill="#1a1a1a" />
        <rect x="24" y="50" width="260" height="160" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="66" width="100" height="6" rx="3" fill="#222" />
        <rect x="40" y="80" width="140" height="4" rx="2" fill="#1a1a1a" />
        <circle cx="80" cy="130" r="40" fill="none" stroke="#2a2a2a" strokeWidth="6" />
        <circle cx="80" cy="130" r="40" fill="none" stroke="#444" strokeWidth="6" strokeDasharray="188" strokeDashoffset="60" />
        <rect x="40" y="182" width="80" height="4" rx="2" fill="#2a2a2a" />
        <rect x="40" y="192" width="60" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="148" y="110" width="120" height="4" rx="2" fill="#2a2a2a" />
        <rect x="148" y="122" width="100" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="148" y="140" width="120" height="4" rx="2" fill="#2a2a2a" />
        <rect x="148" y="152" width="90" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="148" y="170" width="80" height="4" rx="2" fill="#2a2a2a" />
        <rect x="148" y="182" width="70" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="300" y="50" width="276" height="74" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="316" y="66" width="80" height="4" rx="2" fill="#2a2a2a" />
        <rect x="316" y="78" width="120" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="316" y="94" width="60" height="18" rx="5" fill="#222" />
        <text x="325" y="107" fontSize="7" fill="#555" fontFamily="Outfit">View</text>
        <rect x="300" y="136" width="276" height="74" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="316" y="152" width="80" height="4" rx="2" fill="#2a2a2a" />
        <rect x="316" y="164" width="120" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="316" y="180" width="60" height="18" rx="5" fill="#222" />
        <text x="325" y="193" fontSize="7" fill="#555" fontFamily="Outfit">View</text>
        <rect x="24" y="224" width="552" height="40" rx="8" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="236" width="60" height="16" rx="4" fill="#222" />
        <text x="48" y="247" fontSize="7" fill="#555" fontFamily="Outfit">Budget</text>
        <rect x="110" y="236" width="60" height="16" rx="4" fill="#1a1a1a" stroke="#222" strokeWidth="1" />
        <text x="118" y="247" fontSize="7" fill="#444" fontFamily="Outfit">Expenses</text>
        <rect x="180" y="236" width="60" height="16" rx="4" fill="#1a1a1a" stroke="#222" strokeWidth="1" />
        <text x="188" y="247" fontSize="7" fill="#444" fontFamily="Outfit">Vendors</text>
        <rect x="24" y="278" width="552" height="100" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="294" width="200" height="6" rx="3" fill="#2a2a2a" />
        <rect x="40" y="308" width="160" height="4" rx="2" fill="#1a1a1a" />
        <rect x="40" y="330" width="500" height="6" rx="3" fill="#1a1a1a" />
        <rect x="40" y="350" width="400" height="6" rx="3" fill="#1a1a1a" />
        <rect x="40" y="360" width="240" height="4" rx="2" fill="#181818" />
      </svg>
    ),
  },
  {
    id: '02',
    title: 'Breast Cancer Detection System',
    description: 'Leveraging AI and Deep Learning to assist healthcare professionals in the early detection of breast cancer.',
    highlights: [
      'AI-powered cancer prediction',
      'Healthcare-focused application',
      'User-friendly diagnostic interface',
      'Data-driven decision support',
    ],
    tech: ['AI/ML', 'JavaScript', 'Web Development'],
    demo: 'https://projectcancer.vercel.app/',
    mockup: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" rx="16" fill="#0a0a0a" />
        <rect x="24" y="20" width="180" height="10" rx="3" fill="#1a1a1a" />
        <circle cx="570" cy="25" r="4" fill="#1a1a1a" />
        <circle cx="556" cy="25" r="4" fill="#1a1a1a" />
        <circle cx="542" cy="25" r="4" fill="#1a1a1a" />
        <rect x="24" y="48" width="340" height="200" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="64" width="120" height="6" rx="3" fill="#2a2a2a" />
        <rect x="40" y="78" width="80" height="4" rx="2" fill="#1a1a1a" />
        <circle cx="120" cy="160" r="55" fill="none" stroke="#1a1a1a" strokeWidth="10" />
        <circle cx="120" cy="160" r="55" fill="none" stroke="#333" strokeWidth="10" strokeDasharray="345" strokeDashoffset="280" />
        <circle cx="120" cy="160" r="20" fill="#222" />
        <path d="M200 130 l20 20 l-20 20" stroke="#333" strokeWidth="2" strokeLinecap="round" />
        <path d="M230 130 l20 20 l-20 20" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
        <path d="M200 170 l20 20 l-20 20" stroke="#2a2a2a" strokeWidth="2" strokeLinecap="round" />
        <rect x="275" y="110" width="72" height="4" rx="2" fill="#2a2a2a" />
        <rect x="275" y="120" width="56" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="275" y="135" width="72" height="4" rx="2" fill="#2a2a2a" />
        <rect x="275" y="145" width="48" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="275" y="160" width="64" height="4" rx="2" fill="#2a2a2a" />
        <rect x="275" y="170" width="40" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="275" y="185" width="72" height="4" rx="2" fill="#2a2a2a" />
        <rect x="380" y="48" width="196" height="200" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="396" y="64" width="100" height="6" rx="3" fill="#2a2a2a" />
        <rect x="396" y="78" width="70" height="4" rx="2" fill="#1a1a1a" />
        <rect x="396" y="100" width="164" height="6" rx="3" fill="#1a1a1a" />
        <rect x="396" y="114" width="140" height="4" rx="2" fill="#181818" />
        <rect x="396" y="134" width="164" height="6" rx="3" fill="#1a1a1a" />
        <rect x="396" y="148" width="120" height="4" rx="2" fill="#181818" />
        <rect x="396" y="168" width="100" height="6" rx="3" fill="#1a1a1a" />
        <rect x="396" y="182" width="80" height="4" rx="2" fill="#181818" />
        <rect x="396" y="210" width="160" height="22" rx="5" fill="#222" />
        <text x="420" y="225" fontSize="7" fill="#555" fontFamily="Outfit">Analyze Scan</text>
        <rect x="24" y="262" width="552" height="120" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="278" width="180" height="6" rx="3" fill="#2a2a2a" />
        <rect x="40" y="292" width="130" height="4" rx="2" fill="#1a1a1a" />
        <rect x="40" y="314" width="520" height="4" rx="2" fill="#1a1a1a" />
        <rect x="40" y="326" width="480" height="4" rx="2" fill="#1a1a1a" />
        <rect x="40" y="338" width="500" height="4" rx="2" fill="#1a1a1a" />
        <rect x="40" y="350" width="350" height="4" rx="2" fill="#181818" />
        <rect x="40" y="362" width="200" height="4" rx="2" fill="#181818" />
      </svg>
    ),
  },
  {
    id: '03',
    title: 'CRISPR Labs',
    description: 'An interactive educational platform exploring CRISPR-Cas9 gene editing technology and next-generation genetic engineering innovations.',
    highlights: [
      'Interactive DNA visualizations',
      'CRISPR-Cas9 educational content',
      'Modern biotechnology concepts',
      'Responsive and immersive user experience',
    ],
    tech: ['JavaScript', 'CSS', 'Web Development', 'Research & Analytics'],
    demo: 'https://dna-liart-one.vercel.app/',
    mockup: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" rx="16" fill="#0a0a0a" />
        <rect x="24" y="20" width="130" height="10" rx="3" fill="#1a1a1a" />
        <circle cx="570" cy="25" r="4" fill="#1a1a1a" />
        <circle cx="556" cy="25" r="4" fill="#1a1a1a" />
        <circle cx="542" cy="25" r="4" fill="#1a1a1a" />
        <rect x="24" y="48" width="552" height="48" rx="8" fill="#111" stroke="#222" strokeWidth="1" />
        <circle cx="48" cy="72" r="12" fill="#1a1a1a" stroke="#222" strokeWidth="1" />
        <rect x="74" y="66" width="80" height="5" rx="2.5" fill="#2a2a2a" />
        <rect x="74" y="76" width="50" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="180" y="66" width="60" height="5" rx="2.5" fill="#2a2a2a" />
        <rect x="180" y="76" width="40" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="270" y="66" width="60" height="5" rx="2.5" fill="#2a2a2a" />
        <rect x="270" y="76" width="40" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="490" y="64" width="70" height="18" rx="5" fill="#222" />
        <text x="502" y="77" fontSize="7" fill="#555" fontFamily="Outfit">Explore</text>
        <rect x="24" y="110" width="260" height="130" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="126" width="100" height="6" rx="3" fill="#2a2a2a" />
        <rect x="40" y="140" width="80" height="4" rx="2" fill="#1a1a1a" />
        <path d="M100 170 Q130 140 160 170 Q190 200 220 170" stroke="#333" strokeWidth="2" fill="none" />
        <path d="M100 185 Q130 155 160 185 Q190 215 220 185" stroke="#2a2a2a" strokeWidth="2" fill="none" />
        <path d="M100 170 L100 185" stroke="#333" strokeWidth="1" />
        <path d="M160 170 L160 185" stroke="#333" strokeWidth="1" />
        <path d="M220 170 L220 185" stroke="#333" strokeWidth="1" />
        <circle cx="100" cy="170" r="3" fill="#444" />
        <circle cx="160" cy="170" r="3" fill="#444" />
        <circle cx="220" cy="170" r="3" fill="#444" />
        <circle cx="100" cy="185" r="3" fill="#333" />
        <circle cx="160" cy="185" r="3" fill="#333" />
        <circle cx="220" cy="185" r="3" fill="#333" />
        <rect x="300" y="110" width="276" height="130" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="316" y="126" width="100" height="6" rx="3" fill="#2a2a2a" />
        <rect x="316" y="140" width="70" height="4" rx="2" fill="#1a1a1a" />
        <rect x="316" y="162" width="244" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="316" y="176" width="200" height="4" rx="2" fill="#181818" />
        <rect x="316" y="196" width="244" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="316" y="210" width="180" height="4" rx="2" fill="#181818" />
        <rect x="316" y="225" width="100" height="4" rx="2" fill="#181818" />
        <rect x="24" y="254" width="552" height="128" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="270" width="160" height="6" rx="3" fill="#2a2a2a" />
        <rect x="40" y="284" width="110" height="4" rx="2" fill="#1a1a1a" />
        <rect x="40" y="306" width="520" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="40" y="320" width="480" height="4" rx="2" fill="#181818" />
        <rect x="40" y="336" width="500" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="40" y="350" width="420" height="4" rx="2" fill="#181818" />
        <rect x="40" y="366" width="300" height="4" rx="2" fill="#181818" />
      </svg>
    ),
  },
  {
    id: '05',
    title: 'SASYA – AI Agriculture Platform',
    description: 'An AI-powered agricultural intelligence platform for smarter farming through crop risk prediction, disease detection, weather insights, smart irrigation, and market intelligence.',
    highlights: [
      'AI-powered crop risk prediction',
      'Disease detection & weather insights',
      'Smart irrigation & market intelligence',
      'Sustainable farming focus',
    ],
    tech: ['JavaScript', 'Web Development', 'AI/ML', 'Agriculture Tech'],
    demo: 'https://frontend-ruby-one-89.vercel.app/',
    mockup: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" rx="16" fill="#0a0a0a" />
        <rect x="24" y="20" width="120" height="10" rx="3" fill="#1a1a1a" />
        <circle cx="570" cy="25" r="4" fill="#1a1a1a" />
        <circle cx="556" cy="25" r="4" fill="#1a1a1a" />
        <circle cx="542" cy="25" r="4" fill="#1a1a1a" />
        <rect x="24" y="48" width="552" height="180" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="64" width="160" height="6" rx="3" fill="#2a2a2a" />
        <rect x="40" y="78" width="110" height="4" rx="2" fill="#1a1a1a" />
        <path d="M80 120 L120 100 L160 130 L200 110 L240 140" stroke="#2a2a2a" strokeWidth="2" fill="none" />
        <path d="M80 120 L120 100 L160 130 L200 110 L240 140" stroke="#444" strokeWidth="2" fill="none" strokeDasharray="4 4" />
        <rect x="40" y="160" width="100" height="6" rx="3" fill="#2a2a2a" />
        <rect x="40" y="174" width="80" height="4" rx="2" fill="#1a1a1a" />
        <circle cx="72" cy="142" r="4" fill="#3a3a3a" />
        <circle cx="128" cy="126" r="4" fill="#3a3a3a" />
        <circle cx="184" cy="150" r="4" fill="#3a3a3a" />
        <rect x="300" y="64" width="260" height="148" rx="8" fill="#151515" stroke="#222" strokeWidth="1" />
        <rect x="316" y="80" width="100" height="5" rx="2.5" fill="#2a2a2a" />
        <rect x="316" y="92" width="70" height="3" rx="1.5" fill="#1a1a1a" />
        <rect x="316" y="112" width="228" height="4" rx="2" fill="#1a1a1a" />
        <rect x="316" y="124" width="200" height="3" rx="1.5" fill="#181818" />
        <rect x="316" y="144" width="228" height="4" rx="2" fill="#1a1a1a" />
        <rect x="316" y="156" width="180" height="3" rx="1.5" fill="#181818" />
        <rect x="316" y="176" width="228" height="4" rx="2" fill="#1a1a1a" />
        <rect x="316" y="188" width="160" height="3" rx="1.5" fill="#181818" />
        <rect x="24" y="242" width="270" height="140" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="258" width="120" height="6" rx="3" fill="#2a2a2a" />
        <rect x="40" y="272" width="90" height="4" rx="2" fill="#1a1a1a" />
        <rect x="40" y="294" width="238" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="40" y="308" width="200" height="4" rx="2" fill="#181818" />
        <rect x="40" y="328" width="238" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="40" y="342" width="180" height="4" rx="2" fill="#181818" />
        <rect x="40" y="358" width="100" height="4" rx="2" fill="#181818" />
        <rect x="306" y="242" width="270" height="140" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="322" y="258" width="120" height="6" rx="3" fill="#2a2a2a" />
        <rect x="322" y="272" width="90" height="4" rx="2" fill="#1a1a1a" />
        <rect x="322" y="294" width="238" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="322" y="308" width="200" height="4" rx="2" fill="#181818" />
        <rect x="322" y="328" width="238" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="322" y="342" width="180" height="4" rx="2" fill="#181818" />
        <rect x="322" y="358" width="100" height="4" rx="2" fill="#181818" />
      </svg>
    ),
  },
  {
    id: '04',
    title: 'NGO Website Prototype – InAmigos Foundation',
    description: 'A comprehensive NGO website prototype designed in Figma to enhance awareness, transparency, and community engagement.',
    highlights: [
      'Modern and user-friendly Figma prototype',
      'Pages for donations, volunteering, campaigns, impact stories',
      'Improved accessibility and navigation',
      'Responsive layouts aligned with the mission',
    ],
    tech: ['Figma', 'UI/UX Design', 'Wireframing', 'Prototyping', 'Design Thinking'],
    demo: 'https://www.figma.com/site/Xk22hDOBztgny2R6fxJHhq/NGO?node-id=0-1&p=f&t=tHsGQgzkS3a7etuq-0',
    mockup: (
      <svg viewBox="0 0 600 400" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="600" height="400" rx="16" fill="#0a0a0a" />
        <rect x="24" y="14" width="160" height="34" rx="8" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="36" y="24" width="50" height="14" rx="4" fill="#222" />
        <text x="42" y="34" fontSize="6" fill="#555" fontFamily="Outfit">Logo</text>
        <rect x="100" y="26" width="30" height="10" rx="3" fill="#1a1a1a" />
        <rect x="138" y="26" width="30" height="10" rx="3" fill="#1a1a1a" />
        <rect x="440" y="18" width="60" height="26" rx="6" fill="#222" />
        <text x="452" y="35" fontSize="8" fill="#666" fontFamily="Outfit">Donate</text>
        <rect x="510" y="18" width="60" height="26" rx="6" fill="#1a1a1a" stroke="#333" strokeWidth="1" />
        <text x="522" y="35" fontSize="8" fill="#555" fontFamily="Outfit">Join Us</text>
        <rect x="24" y="60" width="552" height="180" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="80" width="200" height="8" rx="4" fill="#2a2a2a" />
        <rect x="40" y="96" width="160" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="40" y="112" width="300" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="40" y="126" width="250" height="5" rx="2.5" fill="#1a1a1a" />
        <rect x="40" y="160" width="140" height="28" rx="6" fill="#222" />
        <text x="60" y="179" fontSize="8" fill="#666" fontFamily="Outfit">Learn More</text>
        <circle cx="500" cy="150" r="50" fill="#1a1a1a" stroke="#222" strokeWidth="1" />
        <polygon points="500,130 520,150 500,170 480,150" fill="#2a2a2a" />
        <rect x="24" y="252" width="552" height="56" rx="10" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="40" y="268" width="80" height="6" rx="3" fill="#2a2a2a" />
        <rect x="130" y="268" width="80" height="6" rx="3" fill="#1a1a1a" />
        <rect x="220" y="268" width="80" height="6" rx="3" fill="#1a1a1a" />
        <rect x="310" y="268" width="80" height="6" rx="3" fill="#1a1a1a" />
        <rect x="400" y="268" width="80" height="6" rx="3" fill="#1a1a1a" />
        <rect x="24" y="320" width="176" height="66" rx="8" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="36" y="334" width="60" height="5" rx="2.5" fill="#2a2a2a" />
        <rect x="36" y="346" width="100" height="4" rx="2" fill="#1a1a1a" />
        <rect x="36" y="360" width="80" height="4" rx="2" fill="#181818" />
        <rect x="212" y="320" width="176" height="66" rx="8" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="224" y="334" width="60" height="5" rx="2.5" fill="#2a2a2a" />
        <rect x="224" y="346" width="100" height="4" rx="2" fill="#1a1a1a" />
        <rect x="224" y="360" width="80" height="4" rx="2" fill="#181818" />
        <rect x="400" y="320" width="176" height="66" rx="8" fill="#111" stroke="#222" strokeWidth="1" />
        <rect x="412" y="334" width="60" height="5" rx="2.5" fill="#2a2a2a" />
        <rect x="412" y="346" width="100" height="4" rx="2" fill="#1a1a1a" />
        <rect x="412" y="360" width="80" height="4" rx="2" fill="#181818" />
      </svg>
    ),
  },
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.6 }}
      >
        <p className="section-label">Portfolio</p>
        <h2 className="section-title">Featured Projects</h2>
        <p className="section-subtitle">
          A selection of projects that showcase my skills and passion for technology.
        </p>
      </motion.div>

      <div className="projects__grid">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.title} project={project} index={i} />
        ))}
      </div>
    </section>
  )
}

function ProjectCard({ project }) {
  const cardRef = useRef(null)
  const [spotlight, setSpotlight] = useState({ x: 50, y: 50 })
  const [isHovered, setIsHovered] = useState(false)

  const handleMouseMove = (e) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const x = ((e.clientX - rect.left) / rect.width) * 100
    const y = ((e.clientY - rect.top) / rect.height) * 100
    setSpotlight({ x, y })
  }

  return (
    <motion.article
      ref={cardRef}
      className={`project-card ${isHovered ? 'is-hovered' : ''}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, delay: project.id * 0.08, ease: 'easeOut' }}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => { setIsHovered(false); setSpotlight({ x: 50, y: 50 }) }}
    >
      <div className="project-card__cover">
        <div className="project-card__mockup">{project.mockup}</div>
        <div className="project-card__overlay" />
        <div
          className="project-card__spotlight"
          style={{
            background: `radial-gradient(circle at ${spotlight.x}% ${spotlight.y}%, rgba(255,255,255,0.06) 0%, transparent 60%)`,
          }}
        />
        <div className="project-card__glass">
          <span className="project-card__number">{project.id}</span>
          <div className="project-card__glass-text">
            <h3 className="project-card__glass-title">{project.title}</h3>
            <span className="project-card__glass-action">View Project</span>
          </div>
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="project-card__arrow"
            onClick={(e) => e.stopPropagation()}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17l9.2-9.2M17 17V7H7"/></svg>
          </a>
        </div>
      </div>
      <div className="project-card__body">
        <div className="project-card__tech">
          {project.tech.map((t) => (
            <span key={t} className="project-card__tech-tag">{t}</span>
          ))}
        </div>
        <p className="project-card__description">{project.description}</p>
        {project.highlights && (
          <ul className="project-card__highlights">
            {project.highlights.map((h, j) => (
              <li key={j}>{h}</li>
            ))}
          </ul>
        )}
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn--small btn--primary"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
          Live Demo
        </a>
      </div>
    </motion.article>
  )
}
