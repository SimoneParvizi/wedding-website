import Header from './components/Header';
import Hero from './components/Hero';
import LanguageSwitcher from './components/LanguageSwitcher';
import Story from './components/Story';
import PhotoGallery from './components/PhotoGallery';
import Venue from './components/Venue';
import Ceremony from './components/Ceremony';
import Celebrations from './components/Celebrations';
import Accommodation from './components/Accommodation';
import FAQ from './components/FAQ';
import Registry from './components/Registry';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__language-switcher">
        <LanguageSwitcher />
      </div>
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
  );
}

export default App;