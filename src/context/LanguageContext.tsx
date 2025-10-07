import React, { createContext, useContext, useState, ReactNode } from 'react'

type Language = 'en' | 'it'

interface LanguageContextType {
  language: Language
  toggleLanguage: () => void
  t: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

interface LanguageProviderProps {
  children: ReactNode
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'it' : 'en')
  }

  const t = (key: string): string => {
    return translations[language][key] || key
  }

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Footer
    'footer.date': 'Friday, July 3rd, 2026',
    'footer.venue': 'Podere Montale, Tuscany',

    // Boerum section
    'boerum.shopping': 'SHOPPING',
    'boerum.foodDrink': 'FOOD & DRINK',
    'boerum.culturalLandmarks': 'CULTURAL LANDMARKS',
    'boerum.greenSpace': 'GREEN SPACE',
    'boerum.walkingTour': 'WALKING TOUR',
    'boerum.download': 'DOWNLOAD',
    'boerum.photoGallery': 'PHOTO GALLERY',
    'boerum.heading': 'BOERUM HILL,\nBROOKLYN,\nN.Y.',
    'boerum.description': 'Boerum Hill gives acces to downtown conveniences with all the\ncharm of Brownstone Brooklyn. Offering a variety of favored\neateries, local shops and designer boutiques, the tree-lined streets\nand surrounding parks welcome opportunities for days spent\noutdoors. Cultural landmarks embed history and sophistication\nwithin a modern, thriving community.',
    'boerum.location.description': 'Cited as the northwest portion of Brooklyn, Boerum Hill is located just outside the\ncommercial thoroughfares of New York City. It is a central hub to many surrounding areas,\nand a distinct section of the city on its own.',
    'boerum.travel.jfk': 'Drive to JFK International Airport',
    'boerum.travel.bryant': 'Train to Bryant Park',
    'boerum.travel.odeon': 'Cab to The Odeon',
  },
  it: {
    // Footer
    'footer.date': 'Venerdì 3 luglio 2026',
    'footer.venue': 'Podere Montale, Toscana',

    // Boerum section
    'boerum.shopping': 'SHOPPING',
    'boerum.foodDrink': 'CIBO E BEVANDE',
    'boerum.culturalLandmarks': 'LUOGHI CULTURALI',
    'boerum.greenSpace': 'SPAZI VERDI',
    'boerum.walkingTour': 'TOUR A PIEDI',
    'boerum.download': 'SCARICA',
    'boerum.photoGallery': 'GALLERIA FOTOGRAFICA',
    'boerum.heading': 'BOERUM HILL,\nBROOKLYN,\nN.Y.',
    'boerum.description': 'Boerum Hill offre accesso alle comodità del centro con tutto il\nfascino di Brownstone Brooklyn. Offrendo una varietà di ristoranti\npreferiti, negozi locali e boutique di design, le strade alberate\ne i parchi circostanti accolgono opportunità per giornate trascorse\nall\'aperto. I luoghi culturali incorporano storia e raffinatezza\nall\'interno di una comunità moderna e fiorente.',
    'boerum.location.description': 'Citata come la porzione nord-occidentale di Brooklyn, Boerum Hill si trova appena fuori\nle arterie commerciali di New York City. È un hub centrale per molte aree circostanti,\ne una sezione distinta della città a sé stante.',
    'boerum.travel.jfk': 'In auto per l\'aeroporto internazionale JFK',
    'boerum.travel.bryant': 'In treno per Bryant Park',
    'boerum.travel.odeon': 'In taxi per The Odeon',
  }
}
