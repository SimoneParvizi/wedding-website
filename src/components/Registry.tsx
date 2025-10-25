import { useState } from 'react';
import './Registry.css';
import RSVPModal from './RSVPModal';

export default function Registry() {
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
          <p className="registry__label">PLEASE CLICK HERE BELOW AND LET US KNOW <br /> IF WE'LL TO SEE YOU THERE THE 03.07.2026</p>
          <div className="registry__image">
            <img src="/assets/sketch-podere.png" alt="Podere Montale sketch" />
          </div>
          <div className="registry__buttons">
            <button
              className="registry__button registry__button--yes"
              onClick={() => handleOpenModal('yes')}
            >
              I'm definitely going to be there
            </button>
            <button
              className="registry__button registry__button--no"
              onClick={() => handleOpenModal('no')}
            >
              Unfortunately, I have to miss it
            </button>
          </div>
          <p className="registry__email">For any further question you can email us anytime at <a href="mailto:simoneandvita@gmail.com">simoneandvita@gmail.com</a></p>
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