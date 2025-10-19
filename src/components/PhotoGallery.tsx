import './PhotoGallery.css';

export default function PhotoGallery() {
  const photos = [
    '/assets/slides/2.png',
    '/assets/slides/3.png',
    '/assets/slides/4.png',
    '/assets/slides/5.png',
  ];

  // Duplicate photos for seamless loop
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="photo-gallery">
      <div className="photo-gallery__carousel">
        <div className="photo-gallery__slides">
          <div className="photo-gallery__track">
            {duplicatedPhotos.map((photo, index) => (
              <div key={index} className="photo-gallery__slide">
                <img src={photo} alt={`Gallery ${index % photos.length + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
