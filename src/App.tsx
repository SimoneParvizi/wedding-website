import React from 'react'
import Navigation from './components/Navigation'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import LinksSection from './components/LinksSection'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Header />
      <main className="main">
        <HeroSection />
        <LinksSection />
      </main>
    </div>
  )
}

export default App