import React, { useState } from 'react'
import './Boerum.css'
import watercolorTuscany from '/assets/watercolor-tuscany.png'
import openTabIcon from '/assets/transparent_open_tab.png'
import { useLanguage } from '../context/LanguageContext'

const Boerum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('food-drink')
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { t } = useLanguage()

  const images = [
    '/assets/slides/1.png',
    '/assets/slides/2.png',
    '/assets/slides/3.png',
    '/assets/slides/4.png',
    '/assets/slides/5.png',
    '/assets/slides/6.png',
    '/assets/slides/7.png',
    '/assets/slides/8.png',
    '/assets/slides/9.png',
  ]

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const handleImageClick = () => {
    setIsModalOpen(true)
  }

  const handleCloseModal = () => {
    setIsModalOpen(false)
  }

  return (
    <section className="boerum">
      <div className="boerum-container">
        <div className="boerum-main">
          {/* Section - Boerum Hill Introduction */}
          <div className="boerum-intro">
            {/* Main Description Area */}
            <div className="boerum-description">
              <div className="boerum-image-wrapper">
                <div className="boerum-image-carousel">
                  <button className="boerum-carousel-arrow boerum-carousel-arrow-left" onClick={handlePrevImage}>
                    ‹
                  </button>
                  <div className="boerum-image" style={{ backgroundImage: `url(${images[currentImageIndex]})` }} onClick={handleImageClick} />
                  <button className="boerum-carousel-arrow boerum-carousel-arrow-right" onClick={handleNextImage}>
                    ›
                  </button>
                  <div className="boerum-carousel-indicators">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        className={`boerum-carousel-dot ${index === currentImageIndex ? 'boerum-carousel-dot--active' : ''}`}
                        onClick={() => setCurrentImageIndex(index)}
                        aria-label={`Go to image ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
              <div className="boerum-text">
                <h2 className="boerum-heading" dangerouslySetInnerHTML={{ __html: t('boerum.heading').replace(/\n/g, '<br/>') }} />
                <p className="boerum-paragraph" dangerouslySetInnerHTML={{ __html: t('boerum.description').replace(/\n/g, '<br/>') }} />
              </div>
            </div>
          </div>

          {/* Section - Wedding Schedule */}
          <div className="boerum-resources">
            {/* Thursday */}
            <div className="boerum-resource-row">
              <div className="boerum-resource-title">{t('boerum.thursday')}</div>
              <div className="boerum-resource-link">{t('boerum.thursday.guests')}</div>
              <div className="boerum-resource-download">
                <span className="boerum-download-text">{t('boerum.thursday.time')}</span>
              </div>
              <div className="boerum-resource-link">{t('boerum.thursday.event')}</div>
            </div>

            {/* Friday */}
            <div className="boerum-resource-row">
              <div className="boerum-resource-title">{t('boerum.friday')}</div>
              <div className="boerum-resource-link">{t('boerum.friday.guests')}</div>
              <div className="boerum-resource-download">
                <span className="boerum-download-text">{t('boerum.friday.time')}</span>
              </div>
              <div className="boerum-resource-link">{t('boerum.friday.event')}</div>
            </div>

            {/* Saturday */}
            <div className="boerum-resource-row">
              <div className="boerum-resource-title">{t('boerum.saturday')}</div>
              <div className="boerum-resource-link">{t('boerum.saturday.guests')}</div>
              <div className="boerum-resource-download">
                <span className="boerum-download-text">{t('boerum.saturday.time')}</span>
              </div>
              <div className="boerum-resource-link">{t('boerum.saturday.event')}</div>
            </div>

            {/* Sunday */}
            <div className="boerum-resource-row boerum-resource-row--last">
              <div className="boerum-resource-title">{t('boerum.sunday')}</div>
              <div className="boerum-resource-link">{t('boerum.sunday.guests')}</div>
              <div className="boerum-resource-download">
                <span className="boerum-download-text">{t('boerum.sunday.time')}</span>
              </div>
              <div className="boerum-resource-link">{t('boerum.sunday.event')}</div>
            </div>
          </div>

          {/* Section - Location and travel times */}
          <div className="boerum-location">
            <div className="boerum-travel-times">
              <p className="boerum-location-description">{t('boerum.location.description')}</p>
              <ul className="boerum-travel-list">
                <li className="boerum-travel-item">
                  <a
                    href="https://www.google.com/maps/dir/Aeroporto+di+Roma+-+Fiumicino+Leonardo+da+Vinci+(FCO),+Fiumicino,+Metropolitan+City+of+Rome+Capital,+Italy/Podere+Montale+Winery,+Poggioferro,+localit%C3%A1+Podere+Montale,+Strada+Comunale+di+Poggio+Ferro,+58038+Seggiano+GR,+Italy/@42.4109937,11.2135575,9z/data=!4m14!4m13!1m5!1m1!1s0x1325f0793898141f:0xafe513b4e358316f!2m2!1d12.2519211!2d41.8034632!1m5!1m1!1s0x13296d94e16fda37:0xc37c0f8703e682f2!2m2!1d11.544474!2d42.9555954!3e0?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boerum-travel-link"
                  >
                    <span className="boerum-travel-time">{t('boerum.travel.time1')}</span>
                    <span className="boerum-travel-destination">
                      {t('boerum.travel.destination1')}
                      <img src={openTabIcon} alt="Open in new tab" className="boerum-external-link-icon" />
                    </span>
                  </a>
                </li>
                <li className="boerum-travel-item">
                  <a
                    href="https://www.google.com/maps/dir/Aeroporto+di+Firenze+%E2%80%9CAmerigo+Vespucci%E2%80%9D+(FLR),+Via+del+Termine,+Firenze,+Metropolitan+City+of+Florence,+Italy/Podere+Montale+Winery,+Poggioferro,+localit%C3%A1+Podere+Montale,+Strada+Comunale+di+Poggio+Ferro,+58038+Seggiano+GR,+Italy/@43.3791477,11.1459195,10z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x132a5700d9c8c257:0xf212e4766dd926b2!2m2!1d11.2027587!2d43.8094619!1m5!1m1!1s0x13296d94e16fda37:0xc37c0f8703e682f2!2m2!1d11.544474!2d42.9555954!3e0?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boerum-travel-link"
                  >
                    <span className="boerum-travel-time">{t('boerum.travel.time2')}</span>
                    <span className="boerum-travel-destination">
                      {t('boerum.travel.destination2')}
                      <img src={openTabIcon} alt="Open in new tab" className="boerum-external-link-icon" />
                    </span>
                  </a>
                </li>
                <li className="boerum-travel-item">
                  <a
                    href="https://www.google.com/maps/dir/Pisa+International+Airport+(PSA),+Piazzale+D'Ascanio,+Pisa,+Province+of+Pisa,+Italy/Podere+Montale+Winery,+Poggioferro,+localit%C3%A1+Podere+Montale,+Strada+Comunale+di+Poggio+Ferro,+58038+Seggiano+GR,+Italy/@43.2847243,10.4195925,9z/data=!3m1!4b1!4m14!4m13!1m5!1m1!1s0x12d59180c9f0b2d1:0x790c25e1cb0e3017!2m2!1d10.3942843!2d43.6869635!1m5!1m1!1s0x13296d94e16fda37:0xc37c0f8703e682f2!2m2!1d11.544474!2d42.9555954!3e0?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boerum-travel-link"
                  >
                    <span className="boerum-travel-time">{t('boerum.travel.time3')}</span>
                    <span className="boerum-travel-destination">
                      {t('boerum.travel.destination3')}
                      <img src={openTabIcon} alt="Open in new tab" className="boerum-external-link-icon" />
                    </span>
                  </a>
                </li>
                <li className="boerum-travel-item">
                  <a
                    href="https://www.google.com/maps/dir/Marina,+Citt%C3%A0+Sant'Angelo,+Province+of+Pescara,+Italy/Podere+Montale+Winery,+Poggioferro,+localit%C3%A1+Podere+Montale,+Strada+Comunale+di+Poggio+Ferro,+58038+Seggiano+GR,+Italy/@42.7908962,12.0085137,8.63z/data=!4m15!4m14!1m5!1m1!1s0x1331a48399cd738f:0xc74095b32c6e9574!2m2!1d14.1386161!2d42.523476!1m5!1m1!1s0x13296d94e16fda37:0xc37c0f8703e682f2!2m2!1d11.544474!2d42.9555954!3e0!5i2?entry=ttu&g_ep=EgoyMDI1MTAwNC4wIKXMDSoASAFQAw%3D%3D"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="boerum-travel-link"
                  >
                    <span className="boerum-travel-time">{t('boerum.travel.time4')}</span>
                    <span className="boerum-travel-destination">
                      {t('boerum.travel.destination4')}
                      <img src={openTabIcon} alt="Open in new tab" className="boerum-external-link-icon" />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            <div className="boerum-map">
              <img src={watercolorTuscany} alt="Tuscany map" className="boerum-map-image" />
            </div>
          </div>
        </div>
      </div>

      {/* Modal for zoomed image */}
      {isModalOpen && (
        <div className="boerum-modal" onClick={handleCloseModal}>
          <div className="boerum-modal-content">
            <button className="boerum-modal-close" onClick={handleCloseModal}>×</button>
            <img src={images[currentImageIndex]} alt="Zoomed view" className="boerum-modal-image" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Boerum
