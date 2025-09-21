import React, { useState, useEffect } from 'react'
import './Header.css'

const Header: React.FC = () => {
  const [scrollY, setScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrollY(currentScrollY)

      // Hide header when navbar should appear (80% of viewport height)
      const heroHeight = window.innerHeight * 0.8
      setIsVisible(currentScrollY < heroHeight)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Calculate scale based on scroll position
  const startShrinking = window.innerHeight * 0.4 // Start shrinking after 40% of viewport
  const maxScroll = window.innerHeight * 0.75 // End shrinking at 75% of viewport
  const adjustedScrollY = Math.max(0, scrollY - startShrinking)
  const scrollRange = maxScroll - startShrinking
  const scale = Math.max(0.3, 1 - (adjustedScrollY / scrollRange) * 0.7) // Scale from 1 to 0.3

  return (
    <section
      className={`header-section ${!isVisible ? 'header-section--hidden' : ''}`}
      style={{
        transform: `scale(${scale})`,
        opacity: isVisible ? 1 : 0
      }}
    >
      <h1 className="header-title">Simone & Vita</h1>
    </section>
  )
}

export default Header