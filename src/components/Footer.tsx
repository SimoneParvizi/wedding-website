import React from 'react'
import './Footer.css'
import sketchPodere from '/assets/sketch-podere.png'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icon">
          <img src={sketchPodere} alt="Podere Montale sketch" />
        </div>
        <div className="footer-details">
          <p className="footer-date">Friday, July 3rd, 2026</p>
          <p className="footer-venue">Podere Montale, Tuscany</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer