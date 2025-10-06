import React from 'react'
import './WeddingCalendar.css'

const WeddingCalendar: React.FC = () => {
  const weddingDates = [
    { date: 29, day: 'Saturday', month: 'June', isWeddingDay: false },
    { date: 30, day: 'Sunday', month: 'June', isWeddingDay: false },
    { date: 1, day: 'Monday', month: 'July', isWeddingDay: false },
    { date: 2, day: 'Tuesday', month: 'July', isWeddingDay: false },
    { date: 3, day: 'Wednesday', month: 'July', isWeddingDay: true },
    { date: 4, day: 'Thursday', month: 'July', isWeddingDay: false },
    { date: 5, day: 'Friday', month: 'July', isWeddingDay: false },
    { date: 6, day: 'Saturday', month: 'July', isWeddingDay: false }
  ]

  return (
    <section className="wedding-calendar">
      <h2 className="calendar-title">Wedding Weekend</h2>
      <div className="calendar-container">
        {weddingDates.map((dateInfo, index) => (
          <div
            key={index}
            className={`calendar-day ${dateInfo.isWeddingDay ? 'wedding-day' : ''}`}
          >
            <div className="day-name">{dateInfo.day}</div>
            <div className="date-number">{dateInfo.date}</div>
            <div className="month-name">{dateInfo.month}</div>
            {dateInfo.isWeddingDay && (
              <div className="wedding-indicator">💒</div>
            )}
          </div>
        ))}
      </div>
    </section>
  )
}

export default WeddingCalendar