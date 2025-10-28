import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Accommodation.css';

export default function Accommodation() {
  const { t } = useTranslation();
  const accommodationRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPoolIndex, setCurrentPoolIndex] = useState(0);
  const [currentWineryIndex, setCurrentWineryIndex] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (accommodationRef.current) {
      observer.observe(accommodationRef.current);
    }

    return () => {
      if (accommodationRef.current) {
        observer.unobserve(accommodationRef.current);
      }
    };
  }, []);

  const poolImages = [
    '/assets/pool/pool-1.jpg',
    '/assets/pool/pool-2.png',
    '/assets/pool/pool-3.jpg',
  ];

  const wineryImages = [
    '/assets/winery/winery-1.png',
    '/assets/winery/winery-2.png',
    '/assets/winery/winery-3.png',
  ];

  const nextPoolImage = () => {
    setCurrentPoolIndex((prev) => (prev + 1) % poolImages.length);
  };

  const prevPoolImage = () => {
    setCurrentPoolIndex((prev) => (prev - 1 + poolImages.length) % poolImages.length);
  };

  const nextWineryImage = () => {
    setCurrentWineryIndex((prev) => (prev + 1) % wineryImages.length);
  };

  const prevWineryImage = () => {
    setCurrentWineryIndex((prev) => (prev - 1 + wineryImages.length) % wineryImages.length);
  };

  return (
    <section className="accommodation" ref={accommodationRef}>
      <div className={`accommodation__container ${isVisible ? 'accommodation__container--visible' : ''}`}>
        <h2 className="accommodation__heading">{t('perks.heading')}</h2>
        <p className="accommodation__text">
          {t('perks.text').split(t('perks.pool')).map((part, index, arr) => (
            index === arr.length - 1 ? (
              part.split(t('perks.winery')).map((subpart, subindex, subarr) => (
                <span key={`sub-${subindex}`}>
                  {subpart}
                  {subindex < subarr.length - 1 && <span className="cursive">{t('perks.winery')}</span>}
                </span>
              ))
            ) : (
              <span key={index}>
                {part}
                <span className="cursive">{t('perks.pool')}</span>
              </span>
            )
          ))}
        </p>
      </div>
      <div className="accommodation__features">
        {/* Pool */}
        <div className="accommodation__feature">
          <div className="accommodation__feature-carousel">
            <button className="accommodation__arrow accommodation__arrow--left" onClick={prevPoolImage}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="accommodation__feature-image">
              <img src={poolImages[currentPoolIndex]} alt="POOL" />
            </div>
            <button className="accommodation__arrow accommodation__arrow--right" onClick={nextPoolImage}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="accommodation__feature-name">{t('perks.pool')}</p>
        </div>

        {/* Winery */}
        <div className="accommodation__feature">
          <div className="accommodation__feature-carousel">
            <button className="accommodation__arrow accommodation__arrow--left" onClick={prevWineryImage}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M12 4L6 10L12 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
            <div className="accommodation__feature-image">
              <img src={wineryImages[currentWineryIndex]} alt={t('perks.winery')} />
            </div>
            <button className="accommodation__arrow accommodation__arrow--right" onClick={nextWineryImage}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M8 4L14 10L8 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
          <p className="accommodation__feature-name">{t('perks.winery')}</p>
        </div>
      </div>
    </section>
  );
}
