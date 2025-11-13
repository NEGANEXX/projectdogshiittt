'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowDown, Play } from 'lucide-react'
import { useInView } from 'react-intersection-observer'

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1624805098931-098c0d918b34?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    title: 'Discover the',
    highlight: 'Magic of Morocco',
  },
  {
    image: 'https://images.unsplash.com/photo-1559925523-10de9e23cf90?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    title: 'Explore Ancient',
    highlight: 'Medinas & Souks',
  },
  {
    image: 'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    title: 'Journey Through',
    highlight: 'Sahara Desert',
  },
]

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [stats, setStats] = useState({ travelers: 0, destinations: 0, satisfaction: 0 })
  const { ref, inView } = useInView({ threshold: 0.5 })

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    if (inView) {
      const animate = (target: number, setter: (val: number) => void) => {
        let current = 0
        const increment = target / 100
        const timer = setInterval(() => {
          current += increment
          if (current >= target) {
            setter(target)
            clearInterval(timer)
          } else {
            setter(Math.floor(current))
          }
        }, 20)
      }

      animate(5000, (val) => setStats((s) => ({ ...s, travelers: val })))
      animate(150, (val) => setStats((s) => ({ ...s, destinations: val })))
      animate(98, (val) => setStats((s) => ({ ...s, satisfaction: val })))
    }
  }, [inView])

  return (
    <section id="home" className="relative h-screen overflow-hidden">
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
              className="absolute inset-0 z-0"
            >
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
            </motion.div>
          )
        ))}
      </AnimatePresence>

      <div className="relative z-[15] h-full flex items-center justify-center text-center text-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block px-6 py-2 glass rounded-full mb-6 text-sm font-semibold"
          >
            ✨ Authentic Moroccan Experiences
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold mb-6"
          >
            <span className="block">{slides[currentSlide].title}</span>
            <span className="block gradient-text">{slides[currentSlide].highlight}</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto"
          >
            From the Atlas Mountains to the Sahara Desert, embark on unforgettable journeys
            through ancient medinas, vibrant souks, and breathtaking landscapes.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex gap-4 justify-center flex-wrap mb-12"
          >
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Explore Tours
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 glass rounded-full font-semibold border-2 border-white/50 hover:border-white transition-all flex items-center gap-2"
            >
              <Play size={20} fill="white" />
              Watch Video
            </motion.button>
          </motion.div>

          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={{ opacity: inView ? 1 : 0 }}
            className="flex gap-8 md:gap-12 justify-center flex-wrap"
          >
            {[
              { value: stats.travelers, label: 'Happy Travelers', suffix: '+' },
              { value: stats.destinations, label: 'Destinations', suffix: '+' },
              { value: stats.satisfaction, label: '% Satisfaction', suffix: '%' },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-primary mb-2">
                  {stat.value.toLocaleString()}{stat.suffix}
                </div>
                <div className="text-sm text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 text-white text-center"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-sm">Scroll</span>
          <ArrowDown size={24} />
        </div>
      </motion.div>

      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 z-10 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all ${
              index === currentSlide ? 'w-8 bg-primary' : 'w-2 bg-white/50'
            }`}
          />
        ))}
      </div>
    </section>
  )
}

