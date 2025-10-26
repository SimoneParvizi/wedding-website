import { useRef, useEffect } from 'react';
import './PhotoGallery.css';

export default function PhotoGallery() {
  const trackRef = useRef<HTMLDivElement>(null);
  const photos = [
    '/assets/slides-us/club.JPG',
    '/assets/slides-us/loveland.JPG',
    '/assets/slides-us/dancing.JPG',
    '/assets/slides-us/porto.jpg',
    '/assets/slides-us/pescara.JPG',
    '/assets/slides-us/boat.jpg',
    '/assets/slides-us/kiss.jpg',
    '/assets/slides-us/bm.jpeg',
    '/assets/slides-us/africa-car.jpg',
  ];

  // Duplicate photos many times for very long seamless loop
  const duplicatedPhotos = Array(40).fill(photos).flat();

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const scrollContainer = track.parentElement;
    if (!scrollContainer) return;

    // Force animation restart to pick up new duration
    track.style.animation = 'none';
    void track.offsetHeight; // Trigger reflow
    track.style.animation = '';

    let interactionTimeout: NodeJS.Timeout;

    const handleInteractionStart = () => {
      track.style.animationPlayState = 'paused';
      clearTimeout(interactionTimeout);
    };

    const handleInteractionEnd = () => {
      clearTimeout(interactionTimeout);
      interactionTimeout = setTimeout(() => {
        track.style.animationPlayState = 'running';
      }, 1000);
    };

    scrollContainer.addEventListener('touchstart', handleInteractionStart);
    scrollContainer.addEventListener('mousedown', handleInteractionStart);
    scrollContainer.addEventListener('touchend', handleInteractionEnd);
    scrollContainer.addEventListener('mouseup', handleInteractionEnd);
    scrollContainer.addEventListener('scroll', handleInteractionStart);

    return () => {
      scrollContainer.removeEventListener('touchstart', handleInteractionStart);
      scrollContainer.removeEventListener('mousedown', handleInteractionStart);
      scrollContainer.removeEventListener('touchend', handleInteractionEnd);
      scrollContainer.removeEventListener('mouseup', handleInteractionEnd);
      scrollContainer.removeEventListener('scroll', handleInteractionStart);
      clearTimeout(interactionTimeout);
    };
  }, []);

  return (
    <section className="photo-gallery">
      <div className="photo-gallery__carousel">
        <div className="photo-gallery__slides">
          <div className="photo-gallery__track" ref={trackRef}>
            {duplicatedPhotos.map((photo, index) => {
              const shouldRotate = photo.includes('africa-car.jpg');
              if (shouldRotate && index < 1) {
                console.log('Found africa-car.jpg:', photo, 'shouldRotate:', shouldRotate);
              }
              return (
                <div
                  key={index}
                  className={`photo-gallery__slide ${shouldRotate ? 'photo-gallery__slide--rotate' : ''}`}
                >
                  <img
                    src={photo}
                    alt={`Gallery ${index % photos.length + 1}`}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
