import './Ceremony.css';

export default function Ceremony() {
  return (
    <section className="ceremony">
      {/* Arrival Banner */}
      <div className="ceremony__banner">
        <div className="ceremony__banner-container">
          <p className="ceremony__banner-label">ARRIVAL</p>
          <p className="ceremony__banner-text">
            PLEASE ARRIVE AT LEAST ONE HOUR<br />
            BEFORE THE CEREMONY.
          </p>
        </div>
      </div>

      {/* Timeline Section */}
      <div className="ceremony__timeline-section">
        <div className="ceremony__container">
          {/* Reception */}
          <div className="ceremony__timeline-item">
            <div className="ceremony__timeline-left">
              <h3 className="ceremony__timeline-title">RECEPTION</h3>
              <p className="ceremony__timeline-description">
                Join us in celebrating this love and partnership of Dan and Soph. A seating plan will be displayed at reception for arrivals, please make sure you know your cleGshetel seating plan before entering the ceremony room.
              </p>
            </div>
            <div className="ceremony__timeline-right">
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">TIME</span>
                <span className="ceremony__timeline-value">11:30 - 12:45</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">WHERE</span>
                <span className="ceremony__timeline-value">RECEPTION AREA</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">PARKING</span>
                <span className="ceremony__timeline-value">FREE VALET ON ARRIVAL</span>
              </div>
            </div>
          </div>

          {/* Ceremony */}
          <div className="ceremony__timeline-item">
            <div className="ceremony__timeline-left">
              <h3 className="ceremony__timeline-title">CEREMONY</h3>
              <p className="ceremony__timeline-description">
                Join us in celebrating this love and partnership of Dan and Soph. A seating plan will be displayed at reception for arrivals, please make sure you know your cleGshetel seating plan before entering the ceremony room.
              </p>
            </div>
            <div className="ceremony__timeline-right">
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">TIME</span>
                <span className="ceremony__timeline-value">13:00 - 14:00</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">WHERE</span>
                <span className="ceremony__timeline-value">CEREMONY ROOM</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">SEATING</span>
                <span className="ceremony__timeline-value">PLAN WILL BE DISPLAYED ON ARRIVAL</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">PHOTOGRAPHY</span>
                <span className="ceremony__timeline-value">
                  PLEASE DO NOT SHARE ANY PHOTOS OF THE HAPPY COUPLE ON SOCIAL MEDIA UNTIL THEY POST A PHOTO THEMSELVES.
                </span>
              </div>
            </div>
          </div>

          {/* Meal */}
          <div className="ceremony__timeline-item">
            <div className="ceremony__timeline-left">
              <h3 className="ceremony__timeline-title">MEAL</h3>
              <p className="ceremony__timeline-description">
                Everyone will be seated at [Time of] the sitting tables in the Drewsfield Restaurant. Your seat option will have been discussed with you by the Bride and Groom before the day eve.
              </p>
            </div>
            <div className="ceremony__timeline-right">
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">TIME</span>
                <span className="ceremony__timeline-value">16:00 - 18:30</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">WHERE</span>
                <span className="ceremony__timeline-value">DREWSFIELD RESTAURANT</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">SEATING</span>
                <span className="ceremony__timeline-value">NAMES WILL BE DISPLAYED ON EACH CHAIR.</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">DIETARIES</span>
                <span className="ceremony__timeline-value">
                  MEAL OPTIONS WILL BE DISCUSSED WITH YOU BY THE BRIDE AND GROOM BEFORE THE DAY.
                </span>
              </div>
            </div>
          </div>

          {/* Celebrations */}
          <div className="ceremony__timeline-item">
            <div className="ceremony__timeline-left">
              <h3 className="ceremony__timeline-title">CELEBRATIONS</h3>
              <p className="ceremony__timeline-description">
                Grab a few drinks and celebrate the marriage of Dan and Soph, we will have a live band all throughout the day who will be doing a performance in the evening party. Songs are available on request.
              </p>
            </div>
            <div className="ceremony__timeline-right">
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">TIME</span>
                <span className="ceremony__timeline-value">17:00 - LATE</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">WHERE</span>
                <span className="ceremony__timeline-value">EVENT HALL</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">MUSIC</span>
                <span className="ceremony__timeline-value">BANDO!2 - ROCK, JAZZ, COUNTRY AND SOUL PLUS DJ PIRATE.</span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">DRINKS</span>
                <span className="ceremony__timeline-value">
                  2 X INDOOR BARS<br />
                  1 X OUTDOOR GIN BAR
                </span>
              </div>
              <div className="ceremony__timeline-detail">
                <span className="ceremony__timeline-label">FOOD</span>
                <span className="ceremony__timeline-value">
                  STREET FOOD BUFFET<br />
                  WOODFIRED PIZZAS<br />
                  FISH & CHIPS<br />
                  SWEET STALL
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}