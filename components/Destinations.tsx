'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'

const destinations = [
  {
    name: 'Marrakech',
    description: 'The Red City with vibrant souks and historic palaces',
    image: 'https://images.unsplash.com/photo-1624805098931-098c0d918b34?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
  {
    name: 'Fes',
    description: 'Ancient medina and spiritual heart of Morocco',
    image: 'https://images.unsplash.com/photo-1559925523-10de9e23cf90?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
  {
    name: 'Chefchaouen',
    description: 'The Blue Pearl nestled in the Rif Mountains',
    image: 'https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
  {
    name: 'Sahara Desert',
    description: 'Endless dunes and starlit nights in the desert',
    image: 'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
  {
    name: 'Essaouira',
    description: 'Coastal gem with blue boats and historic medina',
    image: 'https://images.unsplash.com/photo-1613057157282-cc3cbe630b26?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    name: 'Atlas Mountains',
    description: 'Majestic peaks and traditional Berber villages',
    image: 'https://images.unsplash.com/photo-1560789590-ee4cc7125967?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
]

export default function Destinations() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="destinations" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Explore
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Popular Destinations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover the most enchanting cities and regions of Morocco
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {destinations.map((dest, index) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={dest.image}
                  alt={dest.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h3 className="text-2xl font-bold text-secondary mb-2">{dest.name}</h3>
                <p className="text-gray-600 mb-4">{dest.description}</p>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all"
                >
                  Explore <ArrowRight size={18} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

