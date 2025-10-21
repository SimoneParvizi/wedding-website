import { useEffect, useRef, useState } from 'react';
import './Accommodation.css';

export default function Accommodation() {
  const accommodationRef = useRef<HTMLDivElement>(null);
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

    if (accommodationRef.current) {
      observer.observe(accommodationRef.current);
    }

    return () => {
      if (accommodationRef.current) {
        observer.unobserve(accommodationRef.current);
      }
    };
  }, []);

  const features = [
    {
      image: '/assets/slides/1.png',
      name: 'POOL',
    },
    {
      image: '/assets/slides/2.png',
      name: 'WINERY',
    },
  ];

  return (
    <section className="accommodation" ref={accommodationRef}>
      <div className={`accommodation__container ${isVisible ? 'accommodation__container--visible' : ''}`}>
        <h2 className="accommodation__heading">PERKS</h2>
        <p className="accommodation__text">
          THE VENUE HAS A BEAUTIFUL <span className="cursive">POOL</span> AND <span className="cursive">WINERY</span> FOR ALL GUESTS TO ENJOY.
        </p>
      </div>
      <div className="accommodation__features">
        {features.map((feature, index) => (
          <div key={index} className="accommodation__feature">
            <div className="accommodation__feature-image">
              <img
                src={feature.image}
                alt={feature.name}
              />
            </div>
            <p className="accommodation__feature-name">{feature.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
