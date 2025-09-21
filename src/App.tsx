import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LinksSection from './components/LinksSection'
import RegistrySection from './components/RegistrySection'
import Footer from './components/Footer'
import ScrollEffect from './components/ScrollEffect'
import './App.css'

function App() {
  return (
    <div className="app">
      <ScrollEffect>
        <Navigation />
        <main className="main">
          <HeroSection />
          <Header />
          <LinksSection />
          <RegistrySection />
        </main>
        <Footer />
      </ScrollEffect>
    </div>
  )
}

export default App