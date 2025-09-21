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
        <div className="scroll-navigation">
          <Navigation />
        </div>
        <main className="main">
          <div className="scroll-header">
            <Header />
          </div>
          <div className="scroll-rest-content">
            <LinksSection />
            <RegistrySection />
          </div>
        </main>
        <div className="scroll-rest-content">
          <Footer />
        </div>
      </ScrollEffect>
    </div>
  )
}

export default App