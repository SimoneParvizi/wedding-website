import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import './RSVPModal.css';

interface RSVPModalProps {
  isOpen: boolean;
  onClose: () => void;
  type: 'yes' | 'no';
}

export default function RSVPModal({ isOpen, onClose, type }: RSVPModalProps) {
  const { t } = useTranslation();
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
      travelOption: formData.get('travelOption'),
      message: formData.get('message'),
    };

    // Create mailto link with form data
    const subject = type === 'yes'
      ? t('rsvp.email.subjectYes')
      : t('rsvp.email.subjectNo');

    const totalGuests = (parseInt(data.adults as string) || 0) + (parseInt(data.kids as string) || 0);
    const guestsText = totalGuests === 1 ? t('rsvp.email.person') : t('rsvp.email.people');
    const adultsCount = parseInt(data.adults as string) || 0;
    const kidsCount = parseInt(data.kids as string) || 0;
    const guestBreakdown = kidsCount > 0
      ? `${adultsCount} ${adultsCount === 1 ? t('rsvp.email.adult') : t('rsvp.email.adults')} and ${kidsCount} ${kidsCount === 1 ? t('rsvp.email.kid') : t('rsvp.email.kids')}`
      : `${adultsCount} ${adultsCount === 1 ? t('rsvp.email.adult') : t('rsvp.email.adults')}`;

    const travelText = data.travelOption === 'plane-with-voucher'
      ? t('rsvp.form.travelPlaneVoucher')
      : data.travelOption === 'plane-no-voucher'
      ? t('rsvp.form.travelPlaneNoVoucher')
      : data.travelOption === 'not-plane'
      ? t('rsvp.form.travelNotPlane')
      : '';

    const body = type === 'yes'
      ? `
Hey Simone & Vita!

${data.name} ${t('rsvp.email.bodyYesIntro')} ${totalGuests} ${guestsText} ${t('rsvp.email.bodyYesTotal')} (${guestBreakdown}).

${travelText ? `${travelText}\n` : ''}
${data.dietary ? `${t('rsvp.email.bodyYesDietary')} ${data.dietary}\n` : ''}
${data.message ? `${data.message}\n` : ''}
${t('rsvp.email.bodyYesClosing')}
${data.name}
      `.trim()
      : `
Hey Simone & Vita,

It's ${data.name}. ${t('rsvp.email.bodyNoIntro')}

${data.message ? `${data.message}\n` : ''}
${t('rsvp.email.bodyNoClosing')}
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
            {type === 'yes' ? t('rsvp.yes.label') : t('rsvp.no.label')}
          </p>
          <h2 className="rsvp-modal__title">
            {type === 'yes' ? t('rsvp.yes.title') : t('rsvp.no.title')}
          </h2>
        </div>

        <form className="rsvp-modal__form" onSubmit={handleSubmit}>
          <div className="rsvp-modal__form-group">
            <label htmlFor="name" className="rsvp-modal__label-text">
              {t('rsvp.form.name')}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="rsvp-modal__input"
              placeholder={t('rsvp.form.namePlaceholder')}
              required
            />
          </div>

          {type === 'yes' && (
            <>
              <div className="rsvp-modal__form-group">
                <label htmlFor="adults" className="rsvp-modal__label-text">
                  {t('rsvp.form.adults')}
                </label>
                <input
                  type="number"
                  id="adults"
                  name="adults"
                  className="rsvp-modal__input"
                  placeholder={t('rsvp.form.adultsPlaceholder')}
                  min="1"
                  required
                />
              </div>

              <div className="rsvp-modal__form-group">
                <label htmlFor="kids" className="rsvp-modal__label-text">
                  {t('rsvp.form.kids')}
                </label>
                <input
                  type="number"
                  id="kids"
                  name="kids"
                  className="rsvp-modal__input"
                  placeholder={t('rsvp.form.kidsPlaceholder')}
                  min="0"
                  defaultValue="0"
                />
              </div>

              <div className="rsvp-modal__form-group">
                <label htmlFor="dietary" className="rsvp-modal__label-text">
                  {t('rsvp.form.dietary')}
                </label>
                <textarea
                  id="dietary"
                  name="dietary"
                  className="rsvp-modal__textarea"
                  placeholder={t('rsvp.form.dietaryPlaceholder')}
                  rows={3}
                />
              </div>

              <div className="rsvp-modal__form-group">
                <label className="rsvp-modal__label-text">
                  {t('rsvp.form.travel')}
                </label>
                <div className="rsvp-modal__radio-group">
                  <label className="rsvp-modal__radio-label">
                    <input
                      type="radio"
                      name="travelOption"
                      value="plane-with-voucher"
                      className="rsvp-modal__radio"
                    />
                    <span className="rsvp-modal__radio-text">
                      {t('rsvp.form.travelPlaneVoucher')}
                    </span>
                  </label>
                  <label className="rsvp-modal__radio-label">
                    <input
                      type="radio"
                      name="travelOption"
                      value="plane-no-voucher"
                      className="rsvp-modal__radio"
                    />
                    <span className="rsvp-modal__radio-text">
                      {t('rsvp.form.travelPlaneNoVoucher')}
                    </span>
                  </label>
                  <label className="rsvp-modal__radio-label">
                    <input
                      type="radio"
                      name="travelOption"
                      value="not-plane"
                      className="rsvp-modal__radio"
                    />
                    <span className="rsvp-modal__radio-text">
                      {t('rsvp.form.travelNotPlane')}
                    </span>
                  </label>
                </div>
              </div>
            </>
          )}

          <div className="rsvp-modal__form-group">
            <label htmlFor="message" className="rsvp-modal__label-text">
              {t('rsvp.form.message')} <span className="cursive">{t('rsvp.form.messageOptional')}</span>
            </label>
            <textarea
              id="message"
              name="message"
              className="rsvp-modal__textarea"
              placeholder={t('rsvp.form.messagePlaceholder')}
              rows={4}
            />
          </div>

          <button
            type="submit"
            className="rsvp-modal__submit"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? t('rsvp.form.submitting')
              : submitStatus === 'success'
              ? t('rsvp.form.sent')
              : type === 'yes'
              ? t('rsvp.form.submitYes')
              : t('rsvp.form.submitNo')}
          </button>
        </form>
      </div>
    </div>
  );
}
