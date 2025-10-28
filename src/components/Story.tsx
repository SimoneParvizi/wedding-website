import { useEffect, useRef, useState } from 'react';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from './LanguageSwitcher';
import './Story.css';

export default function Story() {
  const { t } = useTranslation();
  const storyRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.unobserve(storyRef.current);
      }
    };
  }, []);

  return (
    <section className="story" ref={storyRef}>
      <div className={`story__container ${isVisible ? 'story__container--visible' : ''}`}>
        <div className="story__language-switcher">
          <LanguageSwitcher />
        </div>
        <h2 className="story__heading">{t('story.heading')}</h2>
        <p className="story__text">
          {t('story.text').split(t('story.greatest')).map((part, index, arr) => (
            index === arr.length - 1 ? (
              part.split(t('story.dearest')).map((subpart, subindex, subarr) => (
                <span key={`sub-${subindex}`}>
                  {subpart}
                  {subindex < subarr.length - 1 && <span className="cursive">{t('story.dearest')}</span>}
                </span>
              ))
            ) : (
              <span key={index}>
                {part}
                <span className="cursive">{t('story.greatest')}</span>
              </span>
            )
          ))}
        </p>
      </div>
    </section>
  );
}