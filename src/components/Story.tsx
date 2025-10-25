import { useEffect, useRef, useState } from 'react';
import './Story.css';

export default function Story() {
  const storyRef = useRef<HTMLDivElement>(null);
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

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  return (
    <section className="story" ref={storyRef}>
      <div className={`story__container ${isVisible ? 'story__container--visible' : ''}`}>
        <h2 className="story__heading">DEAR FRIENDS AND FAMILY</h2>
        <p className="story__text">
          YOU PRESENCE AT OUR WEDDING IS THE <span className="cursive">GREATEST</span> GIFT OF ALL. THERE IS NOTHING BETTER THAN ENJOYING THE ITALIAN SUN, SURROUNDED BY VINEYARDS AND THE WONDERFUL COMPANY OF THOSE <span className="cursive">DEAREST</span> TO US.
        </p>
      </div>
    </section>
  );
}