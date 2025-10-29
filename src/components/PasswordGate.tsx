import { useState, FormEvent, KeyboardEvent } from 'react';
import './PasswordGate.css';

interface PasswordGateProps {
  onAuthenticated: () => void;
}

const PasswordGate = ({ onAuthenticated }: PasswordGateProps) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [isShaking, setIsShaking] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [showWipe, setShowWipe] = useState(false);
  const [wipeTop, setWipeTop] = useState(false);
  const [fadeWipe, setFadeWipe] = useState(false);
  const [hideGate, setHideGate] = useState(false);

  const correctPassword = import.meta.env.VITE_ACCESS_PASSWORD || 'wedding2025';

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (password === correctPassword) {
      setIsSuccess(true);
      localStorage.setItem('wedding_authenticated', 'true');

      // Trigger wipe animation
      setTimeout(() => {
        setShowWipe(true);
        setWipeTop(true);
      }, 800);

      // Hide the password gate before fade starts
      setTimeout(() => {
        setHideGate(true);
      }, 2200);

      // Start fade out after wipe is complete
      setTimeout(() => {
        setFadeWipe(true);
      }, 2300);

      // Load website underneath while fading
      setTimeout(() => {
        onAuthenticated();
      }, 2400);
    } else {
      setError(true);
      setIsShaking(true);
      setPassword('');

      setTimeout(() => {
        setIsShaking(false);
      }, 500);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit(e as any);
    }
  };

  return (
    <>
      <div className={`password-gate ${isSuccess ? 'success' : ''} ${hideGate ? 'hidden' : ''}`}>
        <div className="password-gate__background" />
        <div className={`password-gate__content ${isSuccess ? 'active' : ''}`}>
          <div className={`password-gate__container ${isSuccess ? 'success' : ''}`}>
            <h1 className="password-gate__title">
              SIMONE<br /><span className="password-gate__ampersand">&</span> VITA
            </h1>
            <p className="password-gate__subtitle cursive">
              Our Wedding
            </p>
            {!isSuccess ? (
              <>
                <div className={`password-gate__form-container ${isShaking ? 'shake' : ''}`}>
                  <form onSubmit={handleSubmit}>
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder="Enter password"
                      className={`password-gate__input ${error ? 'error' : ''}`}
                      autoFocus
                    />
                    {error && (
                      <p className="password-gate__error">Incorrect password</p>
                    )}
                    <button type="submit" className="password-gate__button">
                      Enter
                    </button>
                  </form>
                </div>
                <p className="password-gate__message">
                  Please enter the password from your invitation
                </p>
              </>
            ) : (
              <p className="password-gate__success-message cursive">
                Welcome
              </p>
            )}
          </div>
        </div>
      </div>

      <div className={`animation-wipe ${wipeTop ? 'top' : ''} ${showWipe ? 'show' : ''} ${fadeWipe ? 'fade' : ''}`}>
        <span className="box-1"></span>
        <span className="box-2"></span>
        <span className="loader">
          <svg xmlns="http://www.w3.org/2000/svg" style={{ margin: 'auto', display: 'block' }} width="200px" height="200px" viewBox="0 0 100 100" preserveAspectRatio="xMidYMid">
            <path d="M10 50A40 40 0 0 0 90 50A40 42 0 0 1 10 50" fill="#000000" stroke="none">
              <animateTransform attributeName="transform" type="rotate" dur="1s" repeatCount="indefinite" keyTimes="0;1" values="0 50 51;360 50 51"></animateTransform>
            </path>
          </svg>
        </span>
      </div>
    </>
  );
};

export default PasswordGate;
