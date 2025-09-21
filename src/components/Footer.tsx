import React from 'react'
import './Footer.css'

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icon">
          <svg width="62" height="47" viewBox="0 0 62 47" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M31 0C31 0 31 47 31 47" stroke="black" strokeWidth="2"/>
            <path d="M15.5 23.5C15.5 23.5 31 0 31 0C31 0 46.5 23.5 46.5 23.5" stroke="black" strokeWidth="2"/>
            <path d="M0 47C0 47 31 23.5 31 23.5C31 23.5 62 47 62 47" stroke="black" strokeWidth="2"/>
          </svg>
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