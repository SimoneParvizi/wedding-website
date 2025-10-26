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

  // Duplicate photos many times for very long seamless loop
  const triplicatedPhotos = Array(20).fill(photos).flat();

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    const track = scrollContainer.querySelector('.celebrations__track') as HTMLElement;
    if (!track) return;

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