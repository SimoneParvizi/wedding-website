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

    // Boerum section - Schedule
    'boerum.thursday': 'Thursday 2',
    'boerum.thursday.guests': 'Family Only',
    'boerum.thursday.time': 'from 15:00',
    'boerum.thursday.event': 'Dinner',
    'boerum.friday': 'Friday 3',
    'boerum.friday.guests': 'Everybody',
    'boerum.friday.time': 'from 13:00',
    'boerum.friday.event': 'Check-in & Aperitivo on the pool',
    'boerum.saturday': 'Saturday 4',
    'boerum.saturday.guests': 'Everybody',
    'boerum.saturday.time': 'from 16:00',
    'boerum.saturday.event': 'Cerimony and Dinner',
    'boerum.sunday': 'Sunday 5',
    'boerum.sunday.guests': 'Everybody',
    'boerum.sunday.time': 'by 12:00',
    'boerum.sunday.event': 'Check-out',
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

    // Boerum section - Schedule
    'boerum.thursday': 'Giovedì 2',
    'boerum.thursday.guests': 'Solo Famiglia',
    'boerum.thursday.time': 'dalle 15:00',
    'boerum.thursday.event': 'Cena',
    'boerum.friday': 'Venerdì 3',
    'boerum.friday.guests': 'Tutti',
    'boerum.friday.time': 'dalle 13:00',
    'boerum.friday.event': 'Check-in e Aperitivo in piscina',
    'boerum.saturday': 'Sabato 4',
    'boerum.saturday.guests': 'Tutti',
    'boerum.saturday.time': 'dalle 16:00',
    'boerum.saturday.event': 'Cerimonia e Cena',
    'boerum.sunday': 'Domenica 5',
    'boerum.sunday.guests': 'Tutti',
    'boerum.sunday.time': 'entro le 12:00',
    'boerum.sunday.event': 'Check-out',
    'boerum.heading': 'BOERUM HILL,\nBROOKLYN,\nN.Y.',
    'boerum.description': 'Boerum Hill offre accesso alle comodità del centro con tutto il\nfascino di Brownstone Brooklyn. Offrendo una varietà di ristoranti\npreferiti, negozi locali e boutique di design, le strade alberate\ne i parchi circostanti accolgono opportunità per giornate trascorse\nall\'aperto. I luoghi culturali incorporano storia e raffinatezza\nall\'interno di una comunità moderna e fiorente.',
    'boerum.location.description': 'Citata come la porzione nord-occidentale di Brooklyn, Boerum Hill si trova appena fuori\nle arterie commerciali di New York City. È un hub centrale per molte aree circostanti,\ne una sezione distinta della città a sé stante.',
    'boerum.travel.jfk': 'In auto per l\'aeroporto internazionale JFK',
    'boerum.travel.bryant': 'In treno per Bryant Park',
    'boerum.travel.odeon': 'In taxi per The Odeon',
  }
}
