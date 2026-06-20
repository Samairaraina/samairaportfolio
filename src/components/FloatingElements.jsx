import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'

const SHAPES = [
  { type: 'circle', size: 24, initial: { x: '10%', y: '20%' } },
  { type: 'square', size: 20, initial: { x: '85%', y: '15%' } },
  { type: 'circle', size: 16, initial: { x: '70%', y: '70%' } },
  { type: 'square', size: 28, initial: { x: '20%', y: '80%' } },
  { type: 'circle', size: 12, initial: { x: '50%', y: '40%' } },
  { type: 'square', size: 18, initial: { x: '90%', y: '50%' } },
  { type: 'circle', size: 32, initial: { x: '5%', y: '50%' } },
  { type: 'square', size: 14, initial: { x: '40%', y: '10%' } },
]

function getRandomPosition() {
  return {
    x: Math.random() * 90 + 5 + '%',
    y: Math.random() * 80 + 10 + '%',
  }
}

function getRandomDuration() {
  return 15 + Math.random() * 25
}

export default function FloatingElements() {
  const [elements, setElements] = useState([])

  useEffect(() => {
    setElements(
      SHAPES.map((shape) => ({
        ...shape,
        end: getRandomPosition(),
        duration: getRandomDuration(),
        delay: Math.random() * 10,
      }))
    )
  }, [])

  return (
    <div className="floating-elements" style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0 }}>
      {elements.map((el, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            left: el.initial.x,
            top: el.initial.y,
            width: el.size,
            height: el.size,
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: el.type === 'circle' ? '50%' : '2px',
            transform: el.type === 'square' ? 'rotate(45deg)' : 'none',
          }}
          animate={{
            x: [0, 30, -20, 10, 0],
            y: [0, -20, 30, -10, 0],
            opacity: [0.3, 0.6, 0.2, 0.5, 0.3],
            rotate: el.type === 'square' ? [45, 90, 45, 0, 45] : [0, 180, 360],
          }}
          transition={{
            duration: el.duration,
            repeat: Infinity,
            delay: el.delay,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}
