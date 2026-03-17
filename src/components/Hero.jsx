import { useState, useEffect } from 'react'
import './Hero.css'

const TYPING_TEXTS = [
  'Frontend Developer',
  'React Enthusiast',
  'UI/UX Lover',
  'DSA Learner',
]

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [textIndex, setTextIndex] = useState(0)
  const [charIndex, setCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    setTimeout(() => setVisible(true), 100)
  }, [])

  useEffect(() => {
    const current = TYPING_TEXTS[textIndex]
    const speed = isDeleting ? 60 : 110

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayText(current.slice(0, charIndex + 1))
        setCharIndex(prev => prev + 1)
        if (charIndex + 1 === current.length) {
          setTimeout(() => setIsDeleting(true), 1500)
        }
      } else {
        setDisplayText(current.slice(0, charIndex - 1))
        setCharIndex(prev => prev - 1)
        if (charIndex - 1 === 0) {
          setIsDeleting(false)
          setTextIndex(prev => (prev + 1) % TYPING_TEXTS.length)
        }
      }
    }, speed)

    return () => clearTimeout(timeout)
  }, [charIndex, isDeleting, textIndex])

  return (
    <section className="hero container" id="home">
      <div className="hero-bg"></div>
      <div className="hero-grid"></div>

      <div className={`hero-content ${visible ? 'visible' : ''}`}>
        <div className="hero-greeting">
          <span className="hero-wave">👋</span> Hello, I am
        </div>

        <h1 className="hero-name">Asadur Rahman</h1>

        <div className="hero-typing-wrapper">
          <span className="hero-typing-prefix">I am a </span>
          <span className="hero-typing-text">
            {displayText}
            <span className="hero-cursor">|</span>
          </span>
        </div>

        <p className="hero-desc">
          I build digital experiences that are functional and beautiful.
          Passionate about JavaScript, React, and all things web development.
        </p>

        <div className="hero-btns">
          <a href="#projects" className="btn-primary">View Projects</a>
          <a href="#contact" className="btn-outline">Get In Touch</a>
        </div>

        <div className="hero-scroll-hint">
          <span>Scroll Down</span>
          <div className="hero-scroll-line"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero