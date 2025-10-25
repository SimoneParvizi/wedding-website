import { useEffect, useState } from 'react';
import './RSVPModal.css';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'yes' | 'no';
}

export default function RSVPModal({ isOpen, onClose, type }: RSVPModalProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setSubmitStatus('idle');
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscape);
    }

    return () => {
      window.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      type: type === 'yes' ? 'Accepting' : 'Declining',
      name: formData.get('name'),
      adults: formData.get('adults'),
      kids: formData.get('kids'),
      dietary: formData.get('dietary'),
      message: formData.get('message'),
    };

    // Create mailto link with form data
    const subject = type === 'yes'
      ? `We are Coming! Count Us In for the Big Day!`
      : `Sadly can't make it.`;

    const totalGuests = (parseInt(data.adults as string) || 0) + (parseInt(data.kids as string) || 0);
    const guestsText = totalGuests === 1 ? 'person' : 'people';
    const adultsCount = parseInt(data.adults as string) || 0;
    const kidsCount = parseInt(data.kids as string) || 0;
    const guestBreakdown = kidsCount > 0
      ? `${adultsCount} ${adultsCount === 1 ? 'adult' : 'adults'} and ${kidsCount} ${kidsCount === 1 ? 'kid' : 'kids'}`
      : `${adultsCount} ${adultsCount === 1 ? 'adult' : 'adults'}`;

    const body = type === 'yes'
      ? `
Hey Simone & Vita!

${data.name} here. We're so excited to celebrate with you! We'll be there with ${totalGuests} ${guestsText} total (${guestBreakdown}).

${data.dietary ? `Just a heads up on dietary needs: ${data.dietary}\n` : ''}
${data.message ? `${data.message}\n` : ''}
Can't wait for the big day!

Many hugs,
${data.name}
      `.trim()
      : `
Hey Simone & Vita,

It's ${data.name}. I'm so sorry but I won't be able to make it to your wedding. I really wish I could be there to celebrate with you both!

${data.message ? `${data.message}\n` : ''}
Wishing you all the happiness in the world on your special day and beyond.

Many hugs,
${data.name}
      `.trim();

    const mailtoLink = `mailto:simoneandvita@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    // Open email client
    window.location.href = mailtoLink;

    setIsSubmitting(false);
    setSubmitStatus('success');

    // Close modal after a short delay
    setTimeout(() => {
      onClose();
    }, 1500);
  };

  return (
    <div className="rsvp-modal" onClick={handleBackdropClick}>
      <div className="rsvp-modal__content">
        <button className="rsvp-modal__close" onClick={onClose}>
          <span className="rsvp-modal__close-line rsvp-modal__close-line--1"></span>
          <span className="rsvp-modal__close-line rsvp-modal__close-line--2"></span>
        </button>

        <div className="rsvp-modal__header">
          <p className="rsvp-modal__label">
            {type === 'yes' ? 'WE ARE SO EXCITED!' : 'WE WILL MISS YOU'}
          </p>
          <h2 className="rsvp-modal__title">
            {type === 'yes'
              ? "CAN'T WAIT TO CELEBRATE WITH YOU"
              : 'THANK YOU FOR LETTING US KNOW'}
          </h2>
        </div>

        <form className="rsvp-modal__form" onSubmit={handleSubmit}>
          <div className="rsvp-modal__form-group">
            <label htmlFor="name" className="rsvp-modal__label-text">
              YOUR NAME
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rsvp-modal__input"
              placeholder="Enter your full name"
              required
            />
          </div>

          {type === 'yes' && (
            <>
              <div className="rsvp-modal__form-group">
                <label htmlFor="adults" className="rsvp-modal__label-text">
                  NUMBER OF ADULTS
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  className="rsvp-modal__input"
                  placeholder="How many adults?"
                  min="1"
                  required
                />
              </div>

              <div className="rsvp-modal__form-group">
                <label htmlFor="kids" className="rsvp-modal__label-text">
                  NUMBER OF KIDS
                </label>
                <input
                  type="number"
                  id="kids"
                  name="kids"
                  className="rsvp-modal__input"
                  placeholder="How many kids?"
                  min="0"
                  defaultValue="0"
                />
              </div>

              <div className="rsvp-modal__form-group">
                <label htmlFor="dietary" className="rsvp-modal__label-text">
                  DIETARY RESTRICTIONS
                </label>
                <textarea
                  id="dietary"
                  name="dietary"
                  className="rsvp-modal__textarea"
                  placeholder="Any allergies or dietary requirements?"
                  rows={3}
                />
              </div>
            </>
          )}

          <div className="rsvp-modal__form-group">
            <label htmlFor="message" className="rsvp-modal__label-text">
              MESSAGE <span className="cursive">(optional)</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="rsvp-modal__textarea"
              placeholder="Leave us a message..."
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="rsvp-modal__submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? 'SENDING...'
              : submitStatus === 'success'
              ? 'SENT!'
              : type === 'yes'
              ? 'CONFIRM ATTENDANCE'
              : 'SEND RESPONSE'}
          </button>
        </form>
      </div>
    </div>
  );
}
