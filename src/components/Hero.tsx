import { useEffect, useRef } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import './Hero.css';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use matchMedia to match the CSS media query exactly
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    let ticking = false;

    const updateTransforms = () => {
      const scrolled = window.scrollY;

      if (contentRef.current) {
        // On mobile, text scrolls away faster (normal scroll speed)
        // On desktop, text scrolls away slower (0.8x speed)
        const textOffset = isMobile ? scrolled * 1 : scrolled * 0.8;
        contentRef.current.style.transform = `translateY(${textOffset}px)`;
      }

      if (imageRef.current) {
        // Background image stays fixed (no parallax on mobile)
        // On desktop, background scrolls up (parallax effect)
        const imageOffset = isMobile ? 0 : scrolled * -0.3;
        imageRef.current.style.transform = `translateY(${imageOffset}px)`;
      }

      ticking = false;
    };

    const requestTick = () => {
      if (!ticking) {
        requestAnimationFrame(updateTransforms);
        ticking = true;
      }
    };

    // Use scroll event for both mobile and desktop
    window.addEventListener('scroll', requestTick, { passive: true });
    updateTransforms();

    return () => window.removeEventListener('scroll', requestTick);
  }, []);

  return (
    <>
      <section className="hero" ref={heroRef}>
        <div className="hero__image-container" ref={imageRef}>
          <img
            src="/assets/hero.jpg"
            alt="Simone & Vita"
            className="hero__image"
          />
        </div>
        <div className="hero__language-switcher">
          <LanguageSwitcher />
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
