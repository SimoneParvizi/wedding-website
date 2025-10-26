import { useEffect, useRef, useState } from 'react';
import './Venue.css';

export default function Venue() {
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
        <p className="venue__join">JOIN US</p>
        <h2 className="venue__title">
          PODERE<br />
          MONTALE
          <span className="venue__date-label--from-wrapper"><br /><span className="venue__date-label venue__date-label--from">from</span></span><br />
          03.07.2026<br />
          <span className="venue__date-label venue__date-label--to">to</span><br />
          05.07.2026
        </h2>
        <div className="venue__details">
          <p className="venue__address">
            SEGGIANO,<br />
            GROSSETO,<br />
            TUSCANY, ITALY
          </p>
        </div>
      </div>
    </section>
  );
}