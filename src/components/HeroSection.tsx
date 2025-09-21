import React from 'react'
import './HeroSection.css'

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
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