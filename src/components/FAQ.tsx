import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openCard, setOpenCard] = useState<number | null>(null); // No card open by default

  const quizCards = [
    {
      question: 'WHERE DID WE MEET?',
      answer: 'We met at Shelter in 2022, a techno club in Amsterdam.',
    },
    {
      question: "WHAT'S OUR FAVOURITE ITALIAN DISH?",
      answer: 'Pizza Pizza Pizza!',
    },
    {
      question: "WHAT'S OUR FAVOURITE DUTCH DISH?",
      answer: 'Pizza Pizza Pizza!',
    },
    {
      question: 'WHAT CAR DO WE DRIVE?',
      answer: "SIKE! We don't have a car."
    },
    {
      question: 'HOW MANY KIDS WOULD WE LIKE TO HAVE?',
      answer: 'Five',
    },
    {
      question: 'WHAT WOULD BE OUR DREAM HOUSE?',
      answer: 'A farm house in Italy',
    },
    {
      question: 'WHAT DO WE DO FOR JOBS?',
      answer: 'Siem is a software engineer, and Vita is a Marketing Manager.',
    },
    {
      question: 'WHERE DID WE GET THIS AWESOME SITE?',
      answer: 'Simone did it ;)',
    },
  ];

  const toggleCard = (index: number) => {
    setOpenCard(openCard === index ? null : index);
  };

  return (
    <section className="faq">
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
              className={`faq__card ${openCard === index ? 'faq__card--open' : ''}`}
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
  );
}