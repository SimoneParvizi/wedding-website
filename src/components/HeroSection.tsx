import React, { useEffect, useState } from 'react'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      // Calculate progress from 0 to 1 based on first viewport scroll
      const progress = Math.min(scrollPosition / windowHeight, 1)
      setScrollProgress(progress)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section className="hero-section">
      <div className="hero-background-main" />
      <div
        className="hero-background-intro"
        style={{
          transform: `scale(${1 + scrollProgress * 8})`
        }}
      />
      <div className="hero-overlay" />
      <div
        className="hero-content"
        style={{
          opacity: scrollProgress < 0.8 ? 1 : 1 - ((scrollProgress - 0.8) / 0.2)
        }}
      >
        <p className="hero-text-main">
          With love and gratitude, we invite you to share in the joy of our wedding day.
        </p>
        <p className="hero-text-details">
          Friday, July 3rd, 2026<br />
          Podere Montale, Tuscany
        </p>
      </div>
    </section>
  )
}

export default HeroSection