import { useState } from 'react';
import './FAQ.css';

export default function FAQ() {
  const [openCard, setOpenCard] = useState<number | null>(2); // Default open card is "Where did we meet?"

  const quizCards = [
    {
      question: 'WHO IS MARVO?',
      answer: 'Marvo is our pet dog! He is named after our love for Marvel movies.',
    },
    {
      question: 'WHO ARE OUR FAVOURITE BAND?',
      answer: 'Our favourite band are the Foo Fighters, more importantly our favourite album is "The Colour and Shape"',
    },
    {
      question: 'WHERE DID WE MEET?',
      answer: 'We met at Creamfields in 2015, waiting in the queue to buy some loaded fries from the burger shack.',
    },
    {
      question: 'WHERE IS OUR DREAM HOUSE?',
      answer: 'Our dream house is in Newton-Le-Willows.',
    },
    {
      question: 'WHAT CAR DO WE DRIVE?',
      answer: 'Volkswagen T-Roc is our beloved family car. We call her Trisha.',
    },
    {
      question: "WHAT'S OUR GO-TO TAKEAWAY?",
      answer: 'Pizza Pizza Pizza!',
    },
    {
      question: 'WHAT DO WE DO FOR JOBS?',
      answer: 'Dan is a professional musician, and Soph is a school teacher.',
    },
    {
      question: 'WHERE DID WE GET THIS AWESOME SITE?',
      answer: 'Simon Fairhurst, an award winning web designer made it for us in Framer!',
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
          ABOUT DAN AND SOPH?
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