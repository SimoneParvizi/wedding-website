import { useEffect, useRef } from 'react';
import './Hero.css';

export default function Hero() {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use matchMedia to match the CSS media query exactly
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    // Debug: log to console
    console.log('Hero mounted - isMobile:', isMobile, 'width:', window.innerWidth, 'matchMedia:', window.matchMedia('(max-width: 767px)').matches);

    // Skip parallax effect on mobile - clear any transforms
    if (isMobile) {
      console.log('Mobile detected - disabling parallax');
      if (heroRef.current) {
        heroRef.current.style.position = 'relative';
      }
      if (contentRef.current) {
        contentRef.current.style.transform = '';
        contentRef.current.style.position = 'relative';
      }
      if (imageRef.current) {
        imageRef.current.style.transform = '';
        imageRef.current.style.position = 'absolute';
      }
      return;
    }

    let ticking = false;

    const updateTransforms = () => {
      const scrolled = window.scrollY;

      if (contentRef.current) {
        // Text scrolls away slower
        const textOffset = scrolled * 0.8;
        contentRef.current.style.transform = `translateY(${textOffset}px)`;
      }

      if (imageRef.current) {
        // Background image scrolls up (parallax effect)
        const imageOffset = scrolled * -0.3;
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

    // Desktop: just use scroll
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
