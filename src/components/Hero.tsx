import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;

      if (contentRef.current) {
        // Text scrolls away slower
        const textOffset = scrolled * 0.8;
        contentRef.current.style.transform = `translateY(${textOffset}px)`;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero__image-container">
          <img
            src="/assets/hero.jpg"
            alt="Simone & Vita"
            className="hero__image"
          />
        </div>
        <div className="hero__content" ref={contentRef}>
          <h1 className="hero__title">
            SIMONE<br /><span className="hero__ampersand">&</span> VITA
          </h1>
        </div>
      </section>
      <div className="hero-spacer" />
    </>
  );
}
