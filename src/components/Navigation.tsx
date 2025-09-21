import React from 'react'
import './Navigation.css'

const Navigation: React.FC = () => {
  return (
    <nav className="navigation">
      <div className="nav-content">
        <div className="logo">
          <img src="/logo.svg" alt="J&J" className="logo-image" />
          <span className="date">June 23rd, 2025</span>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link">Home</a>
          <a href="#story" className="nav-link">OUR STORY</a>
          <a href="#details" className="nav-link">Details</a>
          <a href="#rsvp" className="nav-link">RSVP</a>
        </div>
      </div>
    </nav>
  )
}

export default Navigation