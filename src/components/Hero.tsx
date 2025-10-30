import { useEffect, useRef, forwardRef } from 'react';
import './Hero.css';

const Hero = forwardRef<HTMLDivElement>((_props, ref) => {
  const contentRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Use matchMedia to match the CSS media query exactly
    const isMobile = window.matchMedia('(max-width: 767px)').matches;

    let ticking = false;

    const updateTransforms = () => {
      const scrolled = window.scrollY;

      if (contentRef.current) {
        // On mobile, text scrolls away faster (normal scroll speed)
        // On desktop, text scrolls away slower (0.8x speed)
        const textOffset = isMobile ? scrolled : scrolled * 0.8;
        // Use translate3d for GPU acceleration
        contentRef.current.style.transform = `translate3d(0, ${textOffset}px, 0)`;
      }

      if (imageRef.current) {
        // Background image stays fixed (no parallax on mobile)
        // On desktop, background scrolls up (parallax effect)
        const imageOffset = isMobile ? 0 : scrolled * -0.3;
        // Use translate3d for GPU acceleration
        imageRef.current.style.transform = `translate3d(0, ${imageOffset}px, 0)`;
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
      <section className="hero" ref={ref}>
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
});

Hero.displayName = 'Hero';

export default Hero;
