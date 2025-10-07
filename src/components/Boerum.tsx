import React, { useState } from 'react'
import './Boerum.css'
import watercolorTuscany from '/assets/watercolor-tuscany.png'
import { useLanguage } from '../context/LanguageContext'

const Boerum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('food-drink')
  const { t } = useLanguage()

  return (
    <section className="boerum">
      <div className="boerum-container">
        <div className="boerum-main">
          {/* Section - Boerum Hill Introduction */}
          <div className="boerum-intro">
            {/* Sidebar Navigation */}
            <aside className="boerum-sidebar">
              <ul className="boerum-nav-list">
                <li className="boerum-nav-item">
                  <h3 className="boerum-nav-heading">{t('boerum.thursday')}</h3>
                  <span className="boerum-nav-link">{t('boerum.thursday.guests')}</span>
                  <span className="boerum-nav-link">{t('boerum.thursday.time')}</span>
                </li>
                <li className="boerum-nav-item">
                  <h3 className="boerum-nav-heading boerum-nav-heading--active">{t('boerum.friday')}</h3>
                  <span className="boerum-nav-link boerum-nav-link--active">{t('boerum.friday.guests')}</span>
                  <span className="boerum-nav-link boerum-nav-link--active">{t('boerum.friday.time')}</span>
                </li>
                <li className="boerum-nav-item">
                  <h3 className="boerum-nav-heading">{t('boerum.saturday')}</h3>
                  <span className="boerum-nav-link">{t('boerum.saturday.guests')}</span>
                  <span className="boerum-nav-link">{t('boerum.saturday.time')}</span>
                </li>
                <li className="boerum-nav-item">
                  <h3 className="boerum-nav-heading">{t('boerum.sunday')}</h3>
                  <span className="boerum-nav-link">{t('boerum.sunday.guests')}</span>
                  <span className="boerum-nav-link">{t('boerum.sunday.time')}</span>
                </li>
              </ul>
            </aside>

            {/* Main Description Area */}
            <div className="boerum-description">
              <div className="boerum-image-wrapper">
                <div className="boerum-image" style={{ backgroundImage: 'url(/assets/brooklyn-street.png)' }} />
              </div>
              <div className="boerum-text">
                <h2 className="boerum-heading" dangerouslySetInnerHTML={{ __html: t('boerum.heading').replace(/\n/g, '<br/>') }} />
                <p className="boerum-paragraph" dangerouslySetInnerHTML={{ __html: t('boerum.description').replace(/\n/g, '<br/>') }} />
                <div className="boerum-scroll-indicator">
                  <div className="boerum-scroll-border">
                    <div className="boerum-scroll-symbol">↓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section - Wedding Schedule */}
          <div className="boerum-resources">
            {/* Thursday */}
            <div className="boerum-resource-row">
              <h3 className="boerum-resource-title">{t('boerum.thursday')}</h3>
              <span className="boerum-resource-link">{t('boerum.thursday.guests')}</span>
              <span className="boerum-download-text">{t('boerum.thursday.time')}</span>
              <span className="boerum-resource-link">{t('boerum.thursday.event')}</span>
            </div>

            {/* Friday */}
            <div className="boerum-resource-row">
              <h3 className="boerum-resource-title">{t('boerum.friday')}</h3>
              <span className="boerum-resource-link">{t('boerum.friday.guests')}</span>
              <span className="boerum-download-text">{t('boerum.friday.time')}</span>
              <span className="boerum-resource-link">{t('boerum.friday.event')}</span>
            </div>

            {/* Saturday */}
            <div className="boerum-resource-row">
              <h3 className="boerum-resource-title">{t('boerum.saturday')}</h3>
              <span className="boerum-resource-link">{t('boerum.saturday.guests')}</span>
              <span className="boerum-download-text">{t('boerum.saturday.time')}</span>
              <span className="boerum-resource-link">{t('boerum.saturday.event')}</span>
            </div>

            {/* Sunday */}
            <div className="boerum-resource-row boerum-resource-row--last">
              <h3 className="boerum-resource-title">{t('boerum.sunday')}</h3>
              <span className="boerum-resource-link">{t('boerum.sunday.guests')}</span>
              <span className="boerum-download-text">{t('boerum.sunday.time')}</span>
              <span className="boerum-resource-link">{t('boerum.sunday.event')}</span>
            </div>
          </div>

          {/* Section - Location and travel times */}
          <div className="boerum-location">
            <div className="boerum-travel-times">
              <p className="boerum-location-description" dangerouslySetInnerHTML={{ __html: t('boerum.location.description').replace(/\n/g, '<br/>') }} />
              <ul className="boerum-travel-list">
                <li className="boerum-travel-item">
                  <span className="boerum-travel-time">27 MINUTE</span>
                  <span className="boerum-travel-destination">{t('boerum.travel.jfk')}</span>
                </li>
                <li className="boerum-travel-item">
                  <span className="boerum-travel-time">23 MINUTE</span>
                  <span className="boerum-travel-destination">{t('boerum.travel.bryant')}</span>
                </li>
                <li className="boerum-travel-item">
                  <span className="boerum-travel-time">14 MINUTE</span>
                  <span className="boerum-travel-destination">{t('boerum.travel.odeon')}</span>
                </li>
                <li className="boerum-travel-item boerum-travel-item--last">
                  <span className="boerum-travel-time">10 MINUTE</span>
                </li>
              </ul>
            </div>
            <div className="boerum-map">
              <img src={watercolorTuscany} alt="Tuscany map" className="boerum-map-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Boerum
