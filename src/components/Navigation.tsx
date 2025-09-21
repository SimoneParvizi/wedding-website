import React, { useState, useEffect } from 'react'
import './Navigation.css'

const Navigation: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      // Show navbar when user scrolls past the hero section (approximately 600px)
      const heroHeight = window.innerHeight * 0.8 // Approximate hero section height
      setIsVisible(window.scrollY > heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`navigation ${isVisible ? 'navigation--visible' : 'navigation--hidden'}`}>
      <div className="nav-content">
        <div className="nav-links nav-links--left">
          <a href="#home" className="nav-link">Home</a>
          <a href="#story" className="nav-link">OUR STORY</a>
        </div>
        <div className="nav-center">
          <span className="nav-title">Simone & Vita</span>
        </div>
        <div className="nav-links nav-links--right">
          <a href="#details" className="nav-link">Details</a>
          <a href="#rsvp" className="nav-link">RSVP</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation