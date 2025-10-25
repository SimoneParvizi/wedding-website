import { useState, useEffect, useRef } from 'react';
import './Ceremony.css';

export default function Ceremony() {
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
          {/* Reception */}
          <div className="ceremony__timeline-item ceremony__timeline-item--reception">
            <div className="ceremony__timeline-schedule-title">
              <h3 className="ceremony__timeline-title">ARRIVING BY PLANE</h3>
              <p className="ceremony__timeline-description">
              For whoever decide to come by plane, we're happy to <strong>reimburse €100</strong> per person for flights if desired.
              </p>
            </div>
            <div className="ceremony__timeline-right" ref={receptionRef}>
              <div className={`ceremony__timeline-detail ${visibleSections.reception.has(0) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">AIRPORTS IN TUSCANY</span>
                <span className="ceremony__timeline-value"> - FLORENCE  AIRPORT "AMERIGO VESPUCCI" <br /> - PISA AIRPORT "GALILEO GALILEI"</span>
              </div>
              <div className={`ceremony__timeline-detail ${visibleSections.reception.has(1) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">AIRPORTS IN LAZIO</span>
                <span className="ceremony__timeline-value">- ROME FIUMICINO AIRPORT "LEONARDO DA VINCI" <br />- ROME CIAMPINO AIRPORT "G.B. PASTINE"</span>
              </div>
              <div className={`ceremony__timeline-detail ${visibleSections.reception.has(2) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">VOUCHER VALUE</span>
                <span className="ceremony__timeline-value">100 EUROS</span>
              </div>
            </div>
          </div>

          {/* Ceremony */}
          <div className="ceremony__timeline-item">
            <div className="ceremony__timeline-schedule-title">
              <h3 className="ceremony__timeline-title">TRANSFER</h3>
              <p className="ceremony__timeline-description">
                We're here to help you get to the venue. Choose between organized transport or the freedom of a road trip.
              </p>
            </div>
            <div className="ceremony__timeline-right" ref={ceremonyRef}>
              <div className={`ceremony__timeline-detail ${visibleSections.ceremony.has(0) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">TRIP DURATION</span>
                <span className="ceremony__timeline-value">- 2 HRS 50 MIN FROM ROME FIUMICINO (193KM) <br/> - 2 HRS 35 MIN FROM ROME CIAMPINO (219KM)<br/> - 2 HRS 15 MIN FROM FLORENCE (147KM) <br/> - 2 HRS 25 MIN FROM PISA (216KM) </span>
              </div>
              <div className={`ceremony__timeline-detail ${visibleSections.ceremony.has(1) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">BUS</span>
                <span className="ceremony__timeline-value">A BUS CAN BE MADE AVAILABLE FROM BOTH ROME AND FLORENCE. PLEASE LET US KNOW IF YOU'D LIKE TO MAKE USE OF IT</span>
              </div>
              <div className={`ceremony__timeline-detail ${visibleSections.ceremony.has(2) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">CAR</span>
                <span className="ceremony__timeline-value">
                  IF YOU'D PREFER TO MAKE A LONGER TRIP OUT OF IT, WE RECOMMEND RENTING A CAR AND EXPLORING THE SURROUNDINGS. AT THE VENUE THERE ARE PARKING SLOTS AVAILABLE
                </span>
              </div>
            </div>
          </div>

          {/* Meal */}
          <div className="ceremony__timeline-item">
            <div className="ceremony__timeline-schedule-title">
              <h3 className="ceremony__timeline-title">ACCOMMODATION</h3>
              <p className="ceremony__timeline-description">
                We will be staying at Podere Montale, surrounded by olive trees and vineyards. We chose a place that represents us, since we love nature and we think will allow
                us to forgot about the rest and fully enjoy the wedding day.
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
                <span className="ceremony__timeline-label">LATEST UPDATE</span>
                <span className="ceremony__timeline-value">
                  WE WILL LATE YOU KNOW IN JUNE THE DISPOSITIONS OF THE ROOMS
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
                    <span className="ceremony__timeline-value">CHECK-IN IS AVAILABLE FROM 3:00 PM</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHAT</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">LATER IN THE DAY, WE'LL ENJOY A WINE TASTING TO UNFOLD, CATCH UP, AND KNOW EACH OTHER BETTER</span>
                  </div>
                </div>
              </div>
              <div className={`ceremony__timeline-detail ceremony__timeline-detail--day ${visibleSections.schedule.has(1) ? 'ceremony__timeline-detail--visible' : ''}`}>
                <span className="ceremony__timeline-label">FRIDAY, JULY 3</span>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHAT</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">ARRIVAL DAY & APERITIVO</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">WHEN</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">CHECK-IN OPENS AGAIN FROM 3:00 PM FOR ALL OTHER GUESTS</span>
                  </div>
                </div>
                <div className="ceremony__timeline-subdetail">
                  <span className="ceremony__timeline-label">DETAILS</span>
                  <div className="ceremony__timeline-value-container">
                    <span className="ceremony__timeline-value">FROM 6:00 PM, WE'LL START WITH AN APERITVO TO OFFICIALLY START THE WEEKEND</span>
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
                    <span className="ceremony__timeline-value">- THE BREAKFAST TIMING IS STILL "TBD" <br/> - THE CERIMONY STARTING TIME IS "TBD" <br/> - DINNER STARTS BEING SERVED "TBD" </span>
                  </div>
                  ""
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