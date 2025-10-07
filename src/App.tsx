import React from 'react'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import Boerum from './components/Boerum'
import RegistrySection from './components/RegistrySection'
import Footer from './components/Footer'
import ScrollEffect from './components/ScrollEffect'
import LanguageToggle from './components/LanguageToggle'
import { LanguageProvider, useLanguage } from './context/LanguageContext'
import './App.css'

function AppContent() {
  const { language, toggleLanguage } = useLanguage()

  return (
    <div className="app">
      <LanguageToggle language={language} onToggle={toggleLanguage} />
      <ScrollEffect>
        <main className="main">
          <div className="scroll-header">
            <Header />
          </div>
          <div className="scroll-rest-content">
            <Boerum />
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

function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  )
}

export default App