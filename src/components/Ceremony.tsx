import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import './Ceremony.css';

export default function Ceremony() {
  const { t } = useTranslation();
  const [visibleSections, setVisibleSections] = useState<Record<string, Set<number>>>({
    reception: new Set(),
    ceremony: new Set(),
    meal: new Set(),
    celebrations: new Set(),
    schedule: new Set(),
  });

  const receptionRef = useRef<HTMLDivElement>(null);
  const ceremonyRef = useRef<HTMLDivElement>(null);
  const mealRef = useRef<HTMLDivElement>(null);
  const celebrationsRef = useRef<HTMLDivElement>(null);
  const scheduleRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createObserver = (ref: React.RefObject<HTMLDivElement>, sectionName: string, detailCount: number) => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              // Animate details one by one with staggered delays
              Array.from({ length: detailCount }).forEach((_, index) => {
                setTimeout(() => {
                  setVisibleSections((prev) => ({
                    ...prev,
                    [sectionName]: new Set([...prev[sectionName], index]),
                  }));
                }, index * 200); // 200ms delay between each detail
              });
              observer.disconnect(); // Stop observing after animation starts
            }
          });
        },
        {
          threshold: 0.3, // Trigger when 30% of the section is visible
        }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return observer;
    };

    const observers = [
      createObserver(receptionRef, 'reception', 3),
      createObserver(ceremonyRef, 'ceremony', 4),
      createObserver(mealRef, 'meal', 4),
      createObserver(celebrationsRef, 'celebrations', 5),
      createObserver(scheduleRef, 'schedule', 4),
    ];

    return () => observers.forEach((observer) => observer.disconnect());
  }, []);

  return (
    <section className="ceremony">
      {/* Timeline Section */}
      <div className="ceremony__timeline-section">
        <div className="ceremony__container">
          {/* Meal */}
          <div className="ceremony__timeline-item ceremony__timeline-item--accommodation">
            <div className="ceremony__timeline-schedule-title">
              <h3 className="ceremony__timeline-title">{t('ceremony.accommodation.title')}</h3>
              <p className="ceremony__timeline-description">
                {t('ceremony.accommodation.description')}
              </p>
            </div>
            <div className="ceremony__timeline-right" ref={mealRef}>
              <div className={`ceremony__timeline-detail ${visibleSections.meal.has(0) ? 'ceremony__timeline-detail--visible' : ''}`}>
                {/*<span className="ceremony__timeline-label">NUMBER OF ROOMS</span>*/}
                {/*<span className="ceremony__timeline-value">THERE ARE IN TOTAL xx ROOMS</span>*/}
              </div>
              {/*<div className={`ceremony__timeline-detail ${visibleSections.meal.has(1) ? 'ceremony__timeline-detail--visible' : ''}`}>*/}
              {/*  <span className="ceremony__timeline-label">WHERE</span>*/}
              {/*  <span className="ceremony__timeline-value">DREWSFIELD RESTAURANT</span>*/}
              {/*</div>*/}
              <div className={`ceremony__timeline-detail ${visibleSections.meal.has(3) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.accommodation.latestUpdate')}</span>
                <span className="ceremony__timeline-value">
                  {t('ceremony.accommodation.latestUpdateValue')}
                </span>
              </div>
            </div>
          </div>

          {/* Reception */}
          <div className="ceremony__timeline-item ceremony__timeline-item--plane">
            <div className="ceremony__timeline-schedule-title">
              <h3 className="ceremony__timeline-title">{t('ceremony.plane.title')}</h3>
              <p className="ceremony__timeline-description" dangerouslySetInnerHTML={{ __html: t('ceremony.plane.description') }} />
            </div>
            <div className="ceremony__timeline-right" ref={receptionRef}>
              <div className={`ceremony__timeline-detail ${visibleSections.reception.has(0) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.plane.airportsTuscany')}</span>
                <span className="ceremony__timeline-value" dangerouslySetInnerHTML={{ __html: t('ceremony.plane.airportsTuscanyValue').replace(/\n/g, '<br />') }} />
              </div>
              <div className={`ceremony__timeline-detail ${visibleSections.reception.has(1) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.plane.airportsLazio')}</span>
                <span className="ceremony__timeline-value" dangerouslySetInnerHTML={{ __html: t('ceremony.plane.airportsLazioValue').replace(/\n/g, '<br />') }} />
              </div>
              <div className={`ceremony__timeline-detail ${visibleSections.reception.has(2) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.plane.voucher')}</span>
                <span className="ceremony__timeline-value">{t('ceremony.plane.voucherValue')}</span>
              </div>
            </div>
          </div>

          {/* Ceremony */}
          <div className="ceremony__timeline-item ceremony__timeline-item--transfer">
            <div className="ceremony__timeline-schedule-title">
              <h3 className="ceremony__timeline-title">{t('ceremony.transfer.title')}</h3>
              <p className="ceremony__timeline-description">
                {t('ceremony.transfer.description')}
              </p>
            </div>
            <div className="ceremony__timeline-right" ref={ceremonyRef}>
              <div className={`ceremony__timeline-detail ${visibleSections.ceremony.has(0) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.transfer.duration')}</span>
                <span className="ceremony__timeline-value" dangerouslySetInnerHTML={{ __html: t('ceremony.transfer.durationValue').replace(/\n/g, '<br/>') }} />
              </div>
              <div className={`ceremony__timeline-detail ${visibleSections.ceremony.has(1) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.transfer.bus')}</span>
                <span className="ceremony__timeline-value">{t('ceremony.transfer.busValue')}</span>
              </div>
              <div className={`ceremony__timeline-detail ${visibleSections.ceremony.has(2) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.transfer.car')}</span>
                <span className="ceremony__timeline-value">
                  {t('ceremony.transfer.carValue')}
                </span>
              </div>
            </div>
          </div>

          {/* Weekend Schedule */}
          <div className="ceremony__timeline-item ceremony__timeline-item--schedule">
            <div className="ceremony__timeline-schedule-title">
              <h3 className="ceremony__timeline-title" dangerouslySetInnerHTML={{ __html: t('ceremony.schedule.title') }} />
              <p className="ceremony__timeline-description" dangerouslySetInnerHTML={{ __html: t('ceremony.schedule.description').replace(/\n/g, '<br />') }} />
            </div>
            <div className="ceremony__timeline-schedule-content" ref={scheduleRef}>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(0) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.schedule.thursday.date')}</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.thursday.who')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.thursday.whoValue')}</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.thursday.when')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.thursday.whenValue')}</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.thursday.what')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.thursday.whatValue')}</span>
                  </div>
                </div>
              </div>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(1) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.schedule.friday.date')}</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.friday.who')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.friday.whoValue')}</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.friday.when')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.friday.whenValue')}</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.friday.details')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.friday.detailsValue')}</span>
                  </div>
                </div>
              </div>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(2) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.schedule.saturday.date')}</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.saturday.what')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.saturday.whatValue')}</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.saturday.when')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value" dangerouslySetInnerHTML={{ __html: t('ceremony.schedule.saturday.whenValue').replace(/\n/g, '<br/>') }} />
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.saturday.details')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.saturday.detailsValue')}</span>
                  </div>
                </div>
              </div>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(3) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">{t('ceremony.schedule.sunday.date')}</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.sunday.what')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.sunday.whatValue')}</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.sunday.when')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.sunday.whenValue')}</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">{t('ceremony.schedule.sunday.details')}</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">{t('ceremony.schedule.sunday.detailsValue')}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}