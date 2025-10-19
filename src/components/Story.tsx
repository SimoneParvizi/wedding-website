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
        <h2 className="story__heading">STORY</h2>
        <p className="story__text">
          AS A PAIR OF MUSIC FANATICS, SIEM AND VITA MET EACH OTHER AT A LOCAL MUSIC FESTIVAL WITH FRIENDS.
        </p>
      </div>
    </section>
  );
}