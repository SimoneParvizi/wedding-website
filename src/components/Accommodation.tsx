import './Accommodation.css';

export default function Accommodation() {
  const hotels = [
    {
      image: '/assets/slides/4.png',
      name: 'PREMIER INN BEDFORD TOWN CENTRE',
      description: '5-10 MINS WALK FROM THE VENUE',
    },
    {
      image: '/assets/slides/5.png',
      name: 'PREMIER INN BEDFORD SOUTH',
      description: '5-10 MINS DRIVE FROM THE VENUE',
    },
  ];

  return (
    <section className="accommodation">
      <div className="accommodation__container">
        <div className="accommodation__intro">
          <h2 className="accommodation__title">
            THE ROOMS AT DREWFIELD HOUSE ARE RESERVED FOR<br />
            GUESTS. HOWEVER, IF YOU WANT TO GO TO TOWN THERE<br />
            ARE SOME ALTERNATIVE ACCOM TYPES TO CHOOSE FROM.<br />
            AS A LOCAL THERE ARE SOME BEAUTIFUL HOTELS NEARBY
          </h2>
        </div>
        <div className="accommodation__grid">
          {hotels.map((hotel, index) => (
            <div key={index} className="accommodation__item">
              <div className="accommodation__image-wrapper">
                <img
                  src={hotel.image}
                  alt={hotel.name}
                  className="accommodation__image"
                />
              </div>
              <div className="accommodation__info">
                <h3 className="accommodation__hotel-name">{hotel.name}</h3>
                <p className="accommodation__hotel-description">
                  {hotel.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
