import React, { useEffect, useState } from 'react'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY
      const windowHeight = window.innerHeight
      // Calculate progress, allowing it to go beyond 1 for text fade-in
      const progress = scrollPosition / windowHeight
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
          transform: `scale(${1 + Math.min(scrollProgress, 1) * 8})`
        }}
      />
      <div className="hero-overlay" />
      <div
        className="hero-content"
        style={{
          opacity: scrollProgress >= 1 ? Math.min((scrollProgress - 1) / 0.3, 1) : 0
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