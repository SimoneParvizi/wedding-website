import React, { useState } from 'react'
import './CategoryMenu.css'

interface Category {
  id: string
  title: string
  links: {
    walkingTour: string
    photoGallery: string
  }
}

const CategoryMenu: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('our-story')

  const categories: Category[] = [
    {
      id: 'our-story',
      title: 'OUR STORY',
      links: {
        walkingTour: '#our-story-tour',
        photoGallery: '#our-story-gallery'
      }
    },
    {
      id: 'details',
      title: 'THE DETAILS',
      links: {
        walkingTour: '#details-tour',
        photoGallery: '#details-gallery'
      }
    },
    {
      id: 'rsvp',
      title: 'RSVP',
      links: {
        walkingTour: '#rsvp-tour',
        photoGallery: '#rsvp-gallery'
      }
    },
    {
      id: 'registry',
      title: 'REGISTRY',
      links: {
        walkingTour: '#registry-tour',
        photoGallery: '#registry-gallery'
      }
    }
  ]

  return (
    <section className="category-menu">
      <div className="category-menu-container">
        {categories.map((category) => (
          <div
            key={category.id}
            className={`category-item ${selectedCategory === category.id ? 'selected' : ''}`}
            onClick={() => setSelectedCategory(category.id)}
          >
            <h3 className="category-title">{category.title}</h3>
            <a href={category.links.walkingTour} className="category-link">
              WALKING TOUR
            </a>
            <a href={category.links.photoGallery} className="category-link">
              PHOTO GALLERY
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryMenu
