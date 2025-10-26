import { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import './LanguageSwitcher.css';

const languages = [
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'it', name: 'Italiano', flag: '🇮🇹' },
  { code: 'nl', name: 'Nederlands', flag: '🇳🇱' },
];

export default function LanguageSwitcher() {
  const { i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLanguage = languages.find((lang) => lang.code === i18n.language) || languages[0];

  const changeLanguage = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="language-switcher" ref={dropdownRef}>
      <button
        className="language-switcher__button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Change language"
      >
        <span className="language-switcher__flag">{currentLanguage.flag}</span>
      </button>

      {isOpen && (
        <div className="language-switcher__dropdown">
          {languages.map((lang) => (
            <button
              key={lang.code}
              className={`language-switcher__option ${
                lang.code === currentLanguage.code ? 'language-switcher__option--active' : ''
              }`}
              onClick={() => changeLanguage(lang.code)}
            >
              <span className="language-switcher__flag">{lang.flag}</span>
              <span className="language-switcher__name">{lang.name}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
