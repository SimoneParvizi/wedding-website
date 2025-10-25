import { useState, useEffect, useRef } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openCard, setOpenCard] = useState<number | null>(null); // No card open by default
  const [visibleCards, setVisibleCards] = useState<Set<number>>(new Set());
  const sectionRef = useRef<HTMLDivElement>(null);

  const quizCards = [
    {
      question: 'HOW DID VITA CALLED SIMONE IN THE FIRST PERIOD THEY WERE DATING?',
      answer: 'Campari. Simone drinks a lot of Campari.',
    },
    {
      question: "WHAT'S OUR FAVOURITE COMEDY MOVIE?",
      answer: 'Austin Powers.',
    },
    {
      question: "",
      answer: '',
    },
    {
      question: 'WHAT CAR DO WE DRIVE?',
      answer: "Depends on the Uber driver."
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
    {
      question: '',
      answer: '',
    },
  ];

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
          <p className="gifting__label">DON'T FORGET TO BRING</p>
          <h2 className="gifting__text">
            Sunscreen, Mosquito repellent, Swimwear and towel, A light sweater or scarf for the evenings. <br /> <br /> Make
            sure to bring <span className="cursive">everything</span> your kids might need, it can get quite warm in July. We'll make sure
            there's <span className="cursive">plenty of shade</span> and activities to keep them happy and comfortable.
          </h2>
          <div className="gifting__image">
            <img src="/assets/hero-background.jpg" alt="Background illustration" />
          </div>
        </div>
      </section>
      <section className="faq" ref={sectionRef}>
        <div className="faq__container">
          <p className="faq__label">FUN FACT QUIZ</p>
        <h2 className="faq__title">
          HOW MUCH DO YOU KNOW<br />
          ABOUT SIMONE AND VITA?
        </h2>
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