import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Story from './components/Story';
import PhotoGallery from './components/PhotoGallery';
import Venue from './components/Venue';
import Ceremony from './components/Ceremony';
import Celebrations from './components/Celebrations';
import Accommodation from './components/Accommodation';
import FAQ from './components/FAQ';
import Registry from './components/Registry';
import PasswordGate from './components/PasswordGate';
import './App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showPasswordGate, setShowPasswordGate] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authenticated = localStorage.getItem('wedding_authenticated') === 'true';
    setIsAuthenticated(authenticated);
    setShowPasswordGate(!authenticated);
    setIsLoading(false);
  }, []);

  const handleAuthentication = () => {
    setIsAuthenticated(true);
    // Keep password gate visible for fade transition
    setTimeout(() => {
      setShowPasswordGate(false);
    }, 3600);
  };

  if (isLoading) {
    return null; // Or a loading spinner if you prefer
  }

  return (
    <>
      {showPasswordGate && <PasswordGate onAuthenticated={handleAuthentication} />}
      {isAuthenticated && (
        <div className="app">
          <Header />
          <Hero />
          <Story />
          <PhotoGallery />
          <Venue />
          <Ceremony />
          <Celebrations />
          <Accommodation />
          <FAQ />
          <Registry />
        </div>
      )}
    </>
  );
}

export default App;