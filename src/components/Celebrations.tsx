import './Celebrations.css';

export default function Celebrations() {
  return (
    <section className="celebrations">
      <div className="celebrations__container">
        <h2 className="celebrations__title">CELEBRATIONS</h2>
        <div className="celebrations__grid">
          <div className="celebrations__item">
            <img
              src="/assets/slides/6.png"
              alt="Celebration moment 1"
              className="celebrations__image"
            />
          </div>
          <div className="celebrations__item">
            <img
              src="/assets/slides/7.png"
              alt="Celebration moment 2"
              className="celebrations__image"
            />
          </div>
          <div className="celebrations__item">
            <img
              src="/assets/slides/8.png"
              alt="Celebration moment 3"
              className="celebrations__image"
            />
          </div>
        </div>
      </div>
    </section>
  );
}