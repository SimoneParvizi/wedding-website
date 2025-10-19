import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero__image-container">
        <img
          src="/assets/hero.jpg"
          alt="Daniel & Sophie"
          className="hero__image"
        />
      </div>
      <div className="hero__content">
        <h1 className="hero__title">
          SIMONE<br /><span className="hero__ampersand">&</span> VITA
        </h1>
      </div>
    </section>
  );
}
