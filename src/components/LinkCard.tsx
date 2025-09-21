import React from 'react'
import './LinkCard.css'

interface LinkCardProps {
  title: string
  backgroundImage: string
  overlay: string
  href: string
}

const LinkCard: React.FC<LinkCardProps> = ({ title, backgroundImage, overlay, href }) => {
  return (
    <a href={href} className="link-card">
      <div
        className="link-card-background"
        style={{
          background: `linear-gradient(${overlay}, ${overlay}), url('${backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
      >
        <h3 className="link-card-title">{title}</h3>
      </div>
    </a>
  )
}

export default LinkCard