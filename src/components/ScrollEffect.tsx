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
            src="/assets/transparent_intro.png"
            alt="Main Home"
            className="scroll-image"
          />
        </div>
      </div>
      <div className="scroll-after-content">
        {children}
      </div>
      <svg style={{ position: 'absolute', width: 0, height: 0 }}>
        <filter id='noiseFilter'>
          <feTurbulence
            type='fractalNoise'
            baseFrequency='0.9'
            stitchTiles='stitch'/>
          <feColorMatrix in="colorNoise" type="matrix" values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 1 0" />
          <feComposite operator="in" in2="SourceGraphic" result="monoNoise"/>
          <feBlend in="SourceGraphic" in2="monoNoise" mode="screen" />
        </filter>
      </svg>
    </>
  )
}

export default ScrollEffect