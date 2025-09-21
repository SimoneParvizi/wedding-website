import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import HeroSection from './HeroSection'
import './ScrollEffect.css'

gsap.registerPlugin(ScrollTrigger)

interface ScrollEffectProps {
  children?: React.ReactNode
}

const ScrollEffect: React.FC<ScrollEffectProps> = ({ children }) => {
  useEffect(() => {
    // Initially hide elements
    gsap.set(".scroll-navigation .navigation", { y: -50, transformOrigin: "top center" })
    gsap.set(".hero-text-main", { opacity: 0, y: 30 })
    gsap.set(".hero-text-details", { opacity: 0 })

    // Main scroll effect timeline
    const mainTL = gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-wrapper",
        start: "top top",
        end: "+=150%",
        pin: true,
        scrub: true,
        markers: false
      }
    })

    mainTL.to(".scroll-image", {
      scale: 2,
      z: 350,
      transformOrigin: "center center",
      ease: "power1.inOut"
    })
    .to(".scroll-hero", {
      scale: 1.1,
      transformOrigin: "center center",
      ease: "power1.inOut"
    }, "<")
    .to(".hero-text-main", {
      opacity: 1,
      y: 0,
      ease: "power1.inOut"
    }, "+=20%")
    .to(".hero-text-details", {
      opacity: 1,
      ease: "power1.inOut"
    }, "<")
    .to(".hero-text-main", {
      opacity: 0,
      y: -30,
      ease: "power1.inOut"
    }, "+=40%")
    .to(".hero-text-details", {
      opacity: 0,
      ease: "power1.inOut"
    }, "<")

    // Header shrinking and navbar appearing together (after hero section)
    gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-after-content",
        start: "top+=450px center",
        end: "top+=550px center",
        scrub: 0.3,
        markers: false
      }
    })
    .to(".scroll-header", {
      scale: 0.3,
      ease: "power1.inOut"
    })
    .to(".scroll-navigation .navigation", {
      y: 0,
      ease: "power1.inOut",
      transformOrigin: "top center"
    }, "<")

    // Hide navbar when scrolling back to hero
    gsap.timeline({
      scrollTrigger: {
        trigger: ".scroll-after-content",
        start: "top bottom",
        end: "top center",
        scrub: 0.3
      }
    })
    .to(".scroll-navigation .navigation", {
      y: -50,
      ease: "power1.inOut"
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <>
      <div className="scroll-wrapper">
        <div className="scroll-content">
          <section className="scroll-section scroll-hero">
            <HeroSection />
          </section>
        </div>
        <div className="scroll-image-container">
          <img
            src="https://assets-global.website-files.com/63ec206c5542613e2e5aa784/643312a6bc4ac122fc4e3afa_main%20home.webp"
            alt="Main Home"
            className="scroll-image"
          />
        </div>
      </div>
      <div className="scroll-after-content">
        {children}
      </div>
    </>
  )
}

export default ScrollEffect