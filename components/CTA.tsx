'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function CTA() {
  const { ref, inView } = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <section className="relative py-20 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url(https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?w=1920&auto=format&fit=crop&q=80&ixlib=rb-4.1.0)',
        }}
      />
      <div className="absolute inset-0 bg-secondary" />
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold mb-4">
            Ready to Start Your Moroccan Adventure?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Let our travel experts create a personalized itinerary just for you
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Contact Us
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

