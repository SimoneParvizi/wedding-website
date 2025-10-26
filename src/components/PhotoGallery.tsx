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

  // Duplicate photos many times for truly seamless infinite loop
  const duplicatedPhotos = [...photos, ...photos, ...photos, ...photos, ...photos, ...photos];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    // Force animation restart to pick up new duration
    track.style.animation = 'none';
    void track.offsetHeight; // Trigger reflow
    track.style.animation = '';
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
