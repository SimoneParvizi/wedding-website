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
        <h2 className="venue__title">
          DREWFIELD<br />HOUSE<br />18.09.2027
        </h2>
        <div className="venue__details">
          <p className="venue__address">
            GREAT TEWS PLACE<br />
            CHAWTON, BEDFORD<br />
            UNITED KINGDOM<br />
            BEDFORDXXXXX@GMAIL.COM
          </p>
        </div>
      </div>
    </section>
  );
}