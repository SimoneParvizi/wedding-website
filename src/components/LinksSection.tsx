import React from 'react'
import LinkCard from './LinkCard'
import './LinksSection.css'

const LinksSection: React.FC = () => {
  const linkCards = [
    {
      title: 'OUR STORY',
      backgroundImage: '/assets/our-story-bg.jpg',
      overlay: 'rgba(0, 0, 0, 0.1)',
      href: '#story'
    },
    {
      title: 'THE DETAILS',
      backgroundImage: '/assets/details-bg.jpg',
      overlay: 'rgba(0, 0, 0, 0.2)',
      href: '#details'
    },
    {
      title: 'RSVP',
      backgroundImage: '/assets/rsvp-bg.jpg',
      overlay: 'rgba(0, 0, 0, 0.3)',
      href: '#rsvp'
    },
    {
      title: 'REGISTRY',
      backgroundImage: '/assets/registry-bg-448a8b.jpg',
      overlay: 'rgba(0, 0, 0, 0.2)',
      href: '#registry'
    }
  ]

  return (
    <section className="links-section">
      {linkCards.map((card, index) => (
        <LinkCard
          key={index}
          title={card.title}
          backgroundImage={card.backgroundImage}
          overlay={card.overlay}
          href={card.href}
        />
      ))}
    </section>
  )
}

export default LinksSection