import React from 'react'
import './Navigation.css'

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
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