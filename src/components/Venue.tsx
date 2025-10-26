import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Venue.css';

export default function Venue() {
  const { t } = useTranslation();
  const venueRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (venueRef.current) {
      observer.observe(venueRef.current);
    }

    return () => {
      if (venueRef.current) {
        observer.unobserve(venueRef.current);
      }
    };
  }, []);

  return (
    <section className="venue" ref={venueRef}>
      <div className="venue__background">
        <img
          src="/assets/highres_big_background_web.jpg"
          alt="Venue background"
          className="venue__bg-image"
          loading="eager"
          fetchpriority="high"
        />
      </div>
      <div className={`venue__content ${isVisible ? 'venue__content--visible' : ''}`}>
        <p className="venue__join">{t('venue.joinUs')}</p>
        <h2 className="venue__title">
          PODERE<br />
          MONTALE
          <span className="venue__date-label--from-wrapper"><br /><span className="venue__date-label venue__date-label--from">{t('venue.from')}</span></span><br />
          03.07.2026<br />
          <span className="venue__date-label venue__date-label--to">{t('venue.to')}</span><br />
          05.07.2026
        </h2>
        <div className="venue__details">
          <p className="venue__address">
            {t('venue.address.line1')}<br />
            {t('venue.address.line2')}<br />
            {t('venue.address.line3')}
          </p>
        </div>
      </div>
    </section>
  );
}