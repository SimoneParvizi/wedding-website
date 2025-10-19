import './PhotoGallery.css';

export default function PhotoGallery() {
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

  // Duplicate photos for seamless loop
  const duplicatedPhotos = [...photos, ...photos];

  return (
    <section className="photo-gallery">
      <div className="photo-gallery__carousel">
        <div className="photo-gallery__slides">
          <div className="photo-gallery__track">
            {duplicatedPhotos.map((photo, index) => (
              <div key={index} className="photo-gallery__slide">
                <img
                  src={photo}
                  alt={`Gallery ${index % photos.length + 1}`}
                  className={photo.includes('africa-car.jpg') ? 'photo-gallery__slide--rotate' : ''}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
