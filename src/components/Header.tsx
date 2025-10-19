import { useEffect, useState } from 'react';
import './Header.css';

export default function Header() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerRect = document.querySelector('.header')?.getBoundingClientRect();
      if (!headerRect) return;

      // Get all sections
      const storySection = document.querySelector('.story');
      const photoGallerySection = document.querySelector('.photo-gallery');
      const ceremonySection = document.querySelector('.ceremony');
      const accommodationSection = document.querySelector('.accommodation');

      // Get individual images in celebrations carousel
      const celebrationImages = document.querySelectorAll('.celebrations__slide');

      let isOverWhiteSection = false;

      // Check white background sections
      if (storySection) {
        const rect = storySection.getBoundingClientRect();
        if (rect.top < 50 && rect.bottom > 0) isOverWhiteSection = true;
      }
      if (photoGallerySection) {
        const rect = photoGallerySection.getBoundingClientRect();
        if (rect.top < 50 && rect.bottom > 0) isOverWhiteSection = true;
      }
      if (ceremonySection) {
        const rect = ceremonySection.getBoundingClientRect();
        if (rect.top < 50 && rect.bottom > 0) isOverWhiteSection = true;
      }
      if (accommodationSection) {
        const rect = accommodationSection.getBoundingClientRect();
        if (rect.top < 50 && rect.bottom > 0) isOverWhiteSection = true;
      }

      // Check if header center overlaps with any celebration image
      let isOverImage = false;
      const headerCenter = window.innerWidth / 2;
      celebrationImages.forEach((img) => {
        const imgRect = img.getBoundingClientRect();
        // Check if header center point is within an image bounds
        if (headerCenter >= imgRect.left && headerCenter <= imgRect.right &&
            imgRect.top < 50 && imgRect.bottom > 50) {
          isOverImage = true;
        }
      });

      // If over an image, should NOT be dark (stay white)
      // If over white section but NOT over image, should be dark (turn black)
      // Otherwise, stay white
      if (isOverImage) {
        setIsDark(false); // Over image = white text
      } else {
        setIsDark(isOverWhiteSection); // Over white section = black text
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
