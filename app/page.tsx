'use client'

import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Destinations from '@/components/Destinations'
import Tours from '@/components/Tours'
import Experiences from '@/components/Experiences'
import Testimonials from '@/components/Testimonials'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'
import ParticleBackground from '@/components/ParticleBackground'

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    // Handle hash navigation on page load
    if (window.location.hash) {
      const hash = window.location.hash
      setTimeout(() => {
        const element = document.querySelector(hash)
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    }
  }, [])

  return (
    <main className="relative min-h-screen bg-white">
      <ParticleBackground />
      <div
        className="pointer-events-none fixed inset-0 z-[5] transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(212, 165, 116, 0.1), transparent 80%)`,
        }}
      />
      <Navbar />
      <Hero />
      <Destinations />
      <Tours />
      <Experiences />
      <Testimonials />
      <CTA />
      <Footer />
    </main>
  )
}

