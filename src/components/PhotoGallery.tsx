import './PhotoGallery.css';

export default function PhotoGallery() {
  const photos = [
    '/assets/slides/2.png',
    '/assets/slides/3.png',
    '/assets/slides/4.png',
    '/assets/slides/5.png',
  ];

  return (
    <section className="photo-gallery">
      <div className="photo-gallery__container">
        {photos.map((photo, index) => (
          <div key={index} className="photo-gallery__item">
            <img src={photo} alt={`Gallery ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
}
