import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import './Registry.css';
import RSVPModal from './RSVPModal';

export default function Registry() {
  const { t } = useTranslation();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState<'yes' | 'no'>('yes');

  const handleOpenModal = (type: 'yes' | 'no') => {
    setModalType(type);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <section className="registry">
        <div className="registry__container">
          <p className="registry__label" dangerouslySetInnerHTML={{ __html: t('registry.label') }} />
          <div className="registry__image">
            <img src="/assets/sketch-podere.png" alt="Podere Montale sketch" />
          </div>
          <div className="registry__buttons">
            <button
              className="registry__button registry__button--yes"
              onClick={() => handleOpenModal('yes')}
            >
              {t('registry.buttonYes')}
            </button>
            <button
              className="registry__button registry__button--no"
              onClick={() => handleOpenModal('no')}
            >
              {t('registry.buttonNo')}
            </button>
          </div>
          <p className="registry__email">{t('registry.email')} <a href="mailto:simoneandvita@gmail.com">simoneandvita@gmail.com</a></p>
        </div>
      </section>

      <RSVPModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        type={modalType}
      />
    </>
  );
}