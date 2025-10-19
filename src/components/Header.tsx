import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const storySection = document.querySelector('.story');
      const photoGallerySection = document.querySelector('.photo-gallery');
      const ceremonySection = document.querySelector('.ceremony');
      const accommodationSection = document.querySelector('.accommodation');

      if (storySection && photoGallerySection && ceremonySection && accommodationSection) {
        const storyRect = storySection.getBoundingClientRect();
        const photoRect = photoGallerySection.getBoundingClientRect();
        const ceremonyRect = ceremonySection.getBoundingClientRect();
        const accommodationRect = accommodationSection.getBoundingClientRect();

        // Check if header is over white sections
        const isOverWhiteSection = (storyRect.top < 50 && storyRect.bottom > 0) ||
                                   (photoRect.top < 50 && photoRect.bottom > 0) ||
                                   (ceremonyRect.top < 50 && ceremonyRect.bottom > 0) ||
                                   (accommodationRect.top < 50 && accommodationRect.bottom > 0);

        setIsDark(isOverWhiteSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial state

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${isDark ? 'header--dark' : ''}`}>
      <div className="header__content">
        <div className="header__left">SIMONE & VITA</div>
        <div className="header__right">03.07.2026</div>
      </div>
    </header>
  );
}
