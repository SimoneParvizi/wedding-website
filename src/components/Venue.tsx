import './Venue.css';

export default function Venue() {
  return (
    <section className="venue">
      <div className="venue__background">
        <img
          src="/assets/highres_big_background_web.jpg"
          alt="Venue background"
          className="venue__bg-image"
          loading="eager"
          fetchPriority="high"
        />
      </div>
      <div className="venue__content">
        <p className="venue__join">JOIN US</p>
        <h2 className="venue__title">
          PODERE<br />
          MONTALE<br />
          03.07.2026
        </h2>
        <div className="venue__details">
          <p className="venue__address">
            SEGGIANO<br />
            GROSSETO<br />
            TUSCANY, ITALY
          </p>
        </div>
      </div>
    </section>
  );
}