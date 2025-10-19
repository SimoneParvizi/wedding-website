import { useEffect, useRef } from 'react';
import './Celebrations.css';

export default function Celebrations() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const photos = [
    '/assets/slides/1.png',
    '/assets/slides/2.png',
    '/assets/slides/3.png',
    '/assets/slides/4.png',
    '/assets/slides/5.png',
    '/assets/slides/6.png',
    '/assets/slides/7.png',
    '/assets/slides/8.png',
    '/assets/slides/9.png',
  ];

  // Triple photos for seamless infinite loop
  const triplicatedPhotos = [...photos, ...photos, ...photos];

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const handleScroll = () => {
      const scrollWidth = scrollContainer.scrollWidth / 3;
      const scrollLeft = scrollContainer.scrollLeft;

      // Reset scroll position when reaching the end or beginning
      if (scrollLeft >= scrollWidth * 2) {
        scrollContainer.scrollLeft = scrollWidth;
      } else if (scrollLeft === 0) {
        scrollContainer.scrollLeft = scrollWidth;
      }
    };

    // Set initial scroll position to middle section
    scrollContainer.scrollLeft = scrollContainer.scrollWidth / 3;

    scrollContainer.addEventListener('scroll', handleScroll);
    return () => scrollContainer.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section className="celebrations">
      <div className="celebrations__carousel">
        <div className="celebrations__slides" ref={scrollRef}>
          <div className="celebrations__track">
            {triplicatedPhotos.map((photo, index) => (
              <div key={index} className="celebrations__slide">
                <img
                  src={photo}
                  alt={`Celebration ${index % photos.length + 1}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}