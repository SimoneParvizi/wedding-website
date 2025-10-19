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
          We are beyond excited to celebrate this special adventure in Tuscany with all of you.
          <br />
          <br /> We can’t wait to raise a glass together under the Italian sun, surrounded by vineyards, olive trees, and lots of love and laughter.
        </p>
      </div>
    </section>
  );
}