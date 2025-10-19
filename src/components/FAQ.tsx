import './FAQ.css';

export default function FAQ() {
  const faqs = [
    {
      question: 'HOW MUCH DO YOU KNOW ABOUT DAN & SOPHIE?',
      answer: 'MAYBE A LOT, MAYBE A LITTLE.',
    },
    {
      question: 'WHAT IS THE DRESS CODE?',
      answer: 'SMART / BLACK TIE OPTIONAL',
    },
    {
      question: 'CAN I BRING A PLUS ONE?',
      answer: 'IF YOUR INVITATION SAYS "AND GUEST", THEN YES! OTHERWISE, WE\'D PREFER IF IT WAS JUST YOU.',
    },
    {
      question: 'WHAT TIME SHOULD I ARRIVE?',
      answer: 'PLEASE ARRIVE AT LEAST 45 MINUTES BEFORE THE CEREMONY STARTS AT 4:00PM.',
    },
  ];

  return (
    <section className="faq">
      <div className="faq__container">
        <h2 className="faq__title">HOW MUCH DO YOU KNOW<br />ABOUT DAN & SOPHIE?</h2>
        <div className="faq__list">
          {faqs.map((faq, index) => (
            <div key={index} className="faq__item">
              <h3 className="faq__question">{faq.question}</h3>
              <p className="faq__answer">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}