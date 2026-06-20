import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const QUESTIONS = [
  { q: 'Favorite Project?', a: 'The Breast Cancer Detection project. AI helping healthcare > me fighting CSS.' },
  { q: 'Why Healthcare AI?', a: 'Because helping people with tech is cooler than fixing bugs at 2 AM.' },
  { q: 'Current Goal?', a: 'Become a Full-Stack Developer and MONEY.' },
  { q: 'Fun Fact?', a: 'I once debugged for 2 hours. The bug was a missing semicolon.' },
  { q: 'Skills?', a: 'React, JavaScript, GitHub, Figma, and controlled panic.' },
  { q: 'Internship Experience?', a: 'Built websites and mastered the art of saying "good point" in meetings.' },
]

function useTypewriter(text, speed = 35) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1))
      i++
      if (i >= text.length) {
        clearInterval(interval)
        setDone(true)
      }
    }, speed)
    return () => clearInterval(interval)
  }, [text, speed])

  return { displayed, done }
}

function TypingDots() {
  return (
    <span className="brain__dots">
      <span className="brain__dot" style={{ animationDelay: '0s' }} />
      <span className="brain__dot" style={{ animationDelay: '0.15s' }} />
      <span className="brain__dot" style={{ animationDelay: '0.3s' }} />
    </span>
  )
}

function Reply({ text }) {
  const { displayed, done } = useTypewriter(text)
  return (
    <span>
      {displayed}
      {!done && <span className="brain__cursor">|</span>}
    </span>
  )
}

export default function BrainChat() {
  const [open, setOpen] = useState(false)
  const [activeQ, setActiveQ] = useState(null)
  const [showTyping, setShowTyping] = useState(false)
  const [showAnswer, setShowAnswer] = useState(false)
  const [history, setHistory] = useState([])
  const endRef = useRef(null)

  useEffect(() => {
    if (endRef.current) endRef.current.scrollIntoView({ behavior: 'smooth' })
  }, [history, showTyping, showAnswer])

  const ask = (q, a) => {
    setActiveQ({ q, a })
    setShowTyping(true)
    setShowAnswer(false)
    setHistory([...history, { q, a }])

    setTimeout(() => {
      setShowTyping(false)
      setShowAnswer(true)
    }, 1200)
  }

  const reset = () => {
    setActiveQ(null)
    setShowTyping(false)
    setShowAnswer(false)
    setHistory([])
  }

  return (
    <>
      {/* Floating trigger */}
        <motion.button
          className="brain__trigger"
          onClick={() => setOpen(!open)}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          aria-label="Inside Sam's Brain"
        >
          <span className="brain__trigger-text">Inside Sam's Brain</span>
        </motion.button>

      {/* Chat panel */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="brain__panel"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="brain__panel-inner">
              {/* Header */}
              <div className="brain__header">
                <div className="brain__header-icon">
                  <span style={{ fontSize: '1rem', lineHeight: 1 }}>🧠</span>
                </div>
                <div className="brain__header-text">
                  <span className="brain__header-title">Inside Sam's Brain</span>
                  <span className="brain__header-status">Online</span>
                </div>
                <button className="brain__close" onClick={() => setOpen(false)} aria-label="Close">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6L6 18"/><path d="M6 6l12 12"/></svg>
                </button>
              </div>

              {/* Body */}
              <div className="brain__body">
                {history.length === 0 && !activeQ && (
                  <div className="brain__welcome">
                    <div className="brain__welcome-icon">
                      <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>🧠</span>
                    </div>
                    <p className="brain__welcome-text">Pick a question to explore what's going on inside.</p>
                  </div>
                )}

                {history.map((item, i) => (
                  <div key={i} className="brain__exchange">
                    <div className="brain__q-bubble">{item.q}</div>
                    <div className="brain__a-bubble">
                      <Reply text={item.a} />
                    </div>
                  </div>
                ))}

                {showTyping && (
                  <div className="brain__exchange">
                    <div className="brain__a-bubble brain__a-bubble--typing">
                      <TypingDots />
                    </div>
                  </div>
                )}

                <div ref={endRef} />
              </div>

              {/* Question grid */}
              <div className="brain__questions">
                {QUESTIONS.map((item) => (
                  <motion.button
                    key={item.q}
                    className="brain__q-btn"
                    onClick={() => ask(item.q, item.a)}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    {item.q}
                  </motion.button>
                ))}
                {history.length > 0 && (
                  <motion.button
                    className="brain__q-btn brain__q-btn--reset"
                    onClick={reset}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                  >
                    Reset
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
