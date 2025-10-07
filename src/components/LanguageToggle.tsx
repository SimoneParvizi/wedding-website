import React from 'react'
import './LanguageToggle.css'

interface LanguageToggleProps {
  language: string
  onToggle: () => void
}

const LanguageToggle: React.FC<LanguageToggleProps> = ({ language, onToggle }) => {
  return (
    <button className="language-toggle" onClick={onToggle} aria-label="Toggle language">
      <span className="flag-icon">🇮🇹</span>
    </button>
  )
}

export default LanguageToggle
