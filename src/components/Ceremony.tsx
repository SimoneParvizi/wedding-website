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
              <h3 className="ceremony__timeline-title">WEEKEND SCHEDULE</h3>
              <p className="ceremony__timeline-description">
                There will be plenty of food, snacks, drinks, and water available throughout the weekend. If you have any special requests or dietary needs, please let us know in advance so we can accommodate them.<br />
                <br />
                If you'd like to pick up something yourself, the nearest supermarket is in Castel del Pano, a small village about 12km from Podere Montale.
              </p>
            </div>
            <div className="ceremony__timeline-schedule-content" ref={scheduleRef}>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(0) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">THURSDAY, JULY 2</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHO</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">INTIMATE FAMILY</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHEN</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">CHECK-IN FROM 3:00 PM</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHAT</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">LATER IN THE DAY, WE'LL ENJOY A WINE TASTING</span>
                  </div>
                </div>
              </div>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(1) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">FRIDAY, JULY 3</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHO</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">ALL OTHER GUESTS</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHEN</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">CHECK-IN OPENS FROM 3:00 PM</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">DETAILS</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">FROM 6:00 PM, WE'LL HAVE AN APERITVO TO OFFICIALLY START THE WEEKEND</span>
                  </div>
                </div>
              </div>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(2) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">SATURDAY, JULY 4</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHAT</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">THE BIG DAY</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHEN</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">- TIME BREAKFAST "TBD" <br/> - TIME CEREMONY "TBD" <br/> - TIME DINNER "TBD" </span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">DETAILS</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">THE CEREMONY IS FOLLOWED BY A TOAST, DELICIOUS FOOD, DRINKS AND THE DINNER. THEN, WE WILL OPEN THE DANCE FLOOR AND CELEBRATE LATE INTO THE NIGHT</span>
                  </div>
                </div>
              </div>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(3) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">SUNDAY, JULY 5</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHAT</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">GOODBYE BREAKFAST</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHEN</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">9:00 AM</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">DETAILS</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">WE'LL HAVE A FAREWELL BREAKFAST BEFORE CHECKING-OUT AND SAYING OUR GOODBYES</span>
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