import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './FAQ.css';

export default function FAQ() {
  const { t } = useTranslation();
  const [openCard, setOpenCard] = useState<number | null>(null); // No card open by default
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const quizCards = t('quiz.questions', { returnObjects: true }) as Array<{question: string; answer: string}>;

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate cards one by one with staggered delays
            quizCards.forEach((_, index) => {
              setTimeout(() => {
                setVisibleCards((prev) => new Set(prev).add(index));
              }, index * 250); // 250ms delay between each card
            });
            observer.disconnect(); // Stop observing after animation starts
          }
        });
      },
      {
        threshold: 0.1, // Trigger when 10% of the section is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <section className="gifting">
        <div className="gifting__container">
          <p className="gifting__label">{t('dontForget.label')}</p>
          <h2 className="gifting__text">
            {t('dontForget.text')} <br /> <br />
            {t('dontForget.kids').split(t('dontForget.everything')).map((part, index, arr) => (
              index === arr.length - 1 ? (
                part.split(t('dontForget.plentyOfShade')).map((subpart, subindex, subarr) => (
                  <span key={`sub-${subindex}`}>
                    {subpart}
                    {subindex < subarr.length - 1 && <span className="cursive">{t('dontForget.plentyOfShade')}</span>}
                  </span>
                ))
              ) : (
                <span key={index}>
                  {part}
                  <span className="cursive">{t('dontForget.everything')}</span>
                </span>
              )
            ))}
          </h2>
          <div className="gifting__image">
            <img src="/assets/ywllow-flowers.jpg" alt="Background illustration" />
          </div>
        </div>
      </section>
      <section className="faq" ref={sectionRef}>
        <div className="faq__container">
          <p className="faq__label">{t('quiz.label')}</p>
        <h2 className="faq__title" dangerouslySetInnerHTML={{ __html: t('quiz.title') }} />
        <div className="faq__grid">
          {quizCards.map((card, index) => (
            <div
              key={index}
              className={`faq__card ${openCard === index ? 'faq__card--open' : ''} ${
                visibleCards.has(index) ? 'faq__card--visible' : ''
              }`}
              onClick={() => toggleCard(index)}
            >
              <h3 className="faq__card-question">{card.question}</h3>
              <p className="faq__card-answer">{card.answer}</p>
              <div className="faq__card-icon">
                <span className="faq__card-icon-line faq__card-icon-line--horizontal" />
                <span className="faq__card-icon-line faq__card-icon-line--vertical" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}