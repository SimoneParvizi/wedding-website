import './Registry.css';

export default function Registry() {
  return (
    <section className="registry">
      <div className="registry__container">
        <p className="registry__label">HOPE TO SEE YOU THERE THE 03.07.2026</p>
        <div className="registry__image">
          <img src="/assets/sketch-podere.png" alt="Podere Montale sketch" />
        </div>
        <div className="registry__buttons">
          <button className="registry__button registry__button--yes">
            I'm definitely going to be there
          </button>
          <button className="registry__button registry__button--no">
            Unfortunately, I have to miss it
          </button>
        </div>
      </div>
    </section>
  );
}