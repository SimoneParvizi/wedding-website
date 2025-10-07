import React from 'react'
import './Footer.css'
import sketchPodere from '/assets/sketch-podere.png'
import { useLanguage } from '../context/LanguageContext'

const Footer: React.FC = () => {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-icon">
          <img src={sketchPodere} alt="Podere Montale sketch" />
        </div>
        <div className="footer-details">
          <p className="footer-date">{t('footer.date')}</p>
          <p className="footer-venue">{t('footer.venue')}</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer