import React, { useState } from 'react'
import './Boerum.css'

const Boerum: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('food-drink')

  return (
    <section className="boerum">
      <div className="boerum-container">
        <div className="boerum-main">
          {/* Section - Boerum Hill Introduction */}
          <div className="boerum-intro">
            {/* Sidebar Navigation */}
            <aside className="boerum-sidebar">
              <ul className="boerum-nav-list">
                <li className="boerum-nav-item">
                  <h3 className="boerum-nav-heading">SHOPPING</h3>
                  <a href="#shopping-tour" className="boerum-nav-link">Walking Tour</a>
                  <a href="#shopping-gallery" className="boerum-nav-link">Photo Gallery</a>
                </li>
                <li className="boerum-nav-item">
                  <h3 className="boerum-nav-heading boerum-nav-heading--active">FOOD & DRINK</h3>
                  <a href="#food-tour" className="boerum-nav-link boerum-nav-link--active">Walking Tour</a>
                  <a href="#food-gallery" className="boerum-nav-link boerum-nav-link--active">Photo Gallery</a>
                </li>
                <li className="boerum-nav-item">
                  <h3 className="boerum-nav-heading">CULTURAL<br/>LANDMARKS</h3>
                  <a href="#cultural-tour" className="boerum-nav-link">Walking Tour</a>
                  <a href="#cultural-gallery" className="boerum-nav-link">Photo Gallery</a>
                </li>
                <li className="boerum-nav-item">
                  <h3 className="boerum-nav-heading">GREEN SPACE</h3>
                  <a href="#green-tour" className="boerum-nav-link">Walking Tour</a>
                  <a href="#green-gallery" className="boerum-nav-link">Photo Gallery</a>
                </li>
              </ul>
            </aside>

            {/* Main Description Area */}
            <div className="boerum-description">
              <div className="boerum-image-wrapper">
                <div className="boerum-image" style={{ backgroundImage: 'url(/assets/brooklyn-street.png)' }} />
              </div>
              <div className="boerum-text">
                <h2 className="boerum-heading">BOERUM HILL,<br/>BROOKLYN,<br/>N.Y.</h2>
                <p className="boerum-paragraph">
                  Boerum Hill gives acces to downtown conveniences with all the<br/>
                  charm of Brownstone Brooklyn. Offering a variety of favored<br/>
                  eateries, local shops and designer boutiques, the tree-lined streets<br/>
                  and surrounding parks welcome opportunities for days spent<br/>
                  outdoors. Cultural landmarks embed history and sophistication<br/>
                  within a modern, thriving community.
                </p>
                <div className="boerum-scroll-indicator">
                  <div className="boerum-scroll-border">
                    <div className="boerum-scroll-symbol">↓</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section - Neighborhood amenities and resources */}
          <div className="boerum-resources">
            {/* Shopping */}
            <div className="boerum-resource-row">
              <h3 className="boerum-resource-title">SHOPPING</h3>
              <a href="#shopping-tour" className="boerum-resource-link">WALKING TOUR</a>
              <div className="boerum-resource-download">
                <span className="boerum-download-text">DOWNLOAD</span>
              </div>
              <a href="#shopping-gallery" className="boerum-resource-link">PHOTO GALLERY</a>
            </div>

            {/* Food & Drink */}
            <div className="boerum-resource-row">
              <h3 className="boerum-resource-title">FOOD & DRINK</h3>
              <a href="#food-tour" className="boerum-resource-link">WALKING TOUR</a>
              <div className="boerum-resource-download">
                <span className="boerum-download-text">DOWNLOAD</span>
              </div>
              <a href="#food-gallery" className="boerum-resource-link">PHOTO GALLERY</a>
            </div>

            {/* Cultural Landmarks */}
            <div className="boerum-resource-row">
              <h3 className="boerum-resource-title">CULTURAL LANDMARKS</h3>
              <a href="#cultural-tour" className="boerum-resource-link">WALKING TOUR</a>
              <div className="boerum-resource-download">
                <span className="boerum-download-text">DOWNLOAD</span>
              </div>
              <a href="#cultural-gallery" className="boerum-resource-link">PHOTO GALLERY</a>
            </div>

            {/* Green Space */}
            <div className="boerum-resource-row boerum-resource-row--last">
              <h3 className="boerum-resource-title">GREEN SPACE</h3>
              <a href="#green-tour" className="boerum-resource-link">WALKING TOUR</a>
              <div className="boerum-resource-download">
                <span className="boerum-download-text">DOWNLOAD</span>
              </div>
              <a href="#green-gallery" className="boerum-resource-link">PHOTO GALLERY</a>
            </div>
          </div>

          {/* Section - Location and travel times */}
          <div className="boerum-location">
            <div className="boerum-travel-times">
              <p className="boerum-location-description">
                Cited as the northwest portion of Brooklyn, Boerum Hill is located just outside the<br/>
                commercial thoroughfares of New York City. It is a central hub to many surrounding areas,<br/>
                and a distinct section of the city on its own.
              </p>
              <ul className="boerum-travel-list">
                <li className="boerum-travel-item">
                  <span className="boerum-travel-time">27 MINUTE</span>
                  <span className="boerum-travel-destination">Drive to JFK International Airport</span>
                </li>
                <li className="boerum-travel-item">
                  <span className="boerum-travel-time">23 MINUTE</span>
                  <span className="boerum-travel-destination">Train to Bryant Park</span>
                </li>
                <li className="boerum-travel-item">
                  <span className="boerum-travel-time">14 MINUTE</span>
                  <span className="boerum-travel-destination">Cab to The Odeon</span>
                </li>
                <li className="boerum-travel-item boerum-travel-item--last">
                  <span className="boerum-travel-time">10 MINUTE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Boerum
