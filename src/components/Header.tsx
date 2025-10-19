import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const storySection = document.querySelector('.story');
      const photoGallerySection = document.querySelector('.photo-gallery');

      if (storySection && photoGallerySection) {
        const storyRect = storySection.getBoundingClientRect();
        const photoRect = photoGallerySection.getBoundingClientRect();

        // Check if header is over story or photo-gallery sections
        const isOverWhiteSection = (storyRect.top < 50 && storyRect.bottom > 0) ||
                                   (photoRect.top < 50 && photoRect.bottom > 0);

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
