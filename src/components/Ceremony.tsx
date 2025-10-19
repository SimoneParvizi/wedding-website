import './Ceremony.css';

export default function Ceremony() {
  return (
    <section className="ceremony">
      <div className="ceremony__container">
        <div className="ceremony__content">
          <h3 className="ceremony__title">CEREMONY</h3>
          <p className="ceremony__text">
            PLEASE ARRIVE AT LEAST ONE HOUR<br />
            BEFORE THE CEREMONY.
          </p>
          <div className="ceremony__details">
            <div className="ceremony__detail-item">
              <span className="ceremony__label">START DATE</span>
              <span className="ceremony__value">18/09</span>
            </div>
            <div className="ceremony__detail-item">
              <span className="ceremony__label">RECEPTION DRESS</span>
              <span className="ceremony__value">SMART / BLACK TIE OPTIONAL</span>
            </div>
            <div className="ceremony__detail-item">
              <span className="ceremony__label">TIME OF THE ARRIVAL</span>
              <span className="ceremony__value">3:00PM / 15:00</span>
            </div>
            <div className="ceremony__detail-item">
              <span className="ceremony__label">CEREMONY ROOM</span>
              <span className="ceremony__value">
                AT LEAST 45 MINS BEFORE<br />
                CEREMONY STARTS (AT 4:00PM)
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}