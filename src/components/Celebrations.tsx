import './Celebrations.css';

export default function Celebrations() {
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

  // Duplicate photos for seamless loop
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="celebrations">
      <div className="celebrations__carousel">
        <div className="celebrations__slides">
          <div className="celebrations__track">
            {duplicatedPhotos.map((photo, index) => (
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