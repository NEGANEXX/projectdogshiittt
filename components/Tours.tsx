'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Star, Clock, MapPin } from 'lucide-react'
import Image from 'next/image'

const tours = [
  {
    title: 'Sahara Desert Adventure',
    category: 'desert',
    price: '7,800 MAD',
    duration: '4 Days',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    badge: 'Popular',
  },
  {
    title: 'Imperial Cities Tour',
    category: 'cities',
    price: '10,950 MAD',
    duration: '7 Days',
    rating: '4.8',
    image: 'https://images.unsplash.com/photo-1624805098931-098c0d918b34?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
  {
    title: 'Atlas Mountains Trek',
    category: 'mountains',
    price: '5,200 MAD',
    duration: '3 Days',
    rating: '5.0',
    image: 'https://images.unsplash.com/photo-1560789590-ee4cc7125967?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    badge: 'New',
  },
  {
    title: 'Coastal Paradise',
    category: 'coast',
    price: '6,200 MAD',
    duration: '5 Days',
    rating: '4.7',
    image: 'https://images.unsplash.com/photo-1613057157282-cc3cbe630b26?q=80&w=1200&auto=format&fit=crop&ixlib=rb-4.1.0',
  },
  {
    title: 'Marrakech Express',
    category: 'cities',
    price: '5,200 MAD',
    duration: '3 Days',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1624805098931-098c0d918b34?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
  {
    title: 'Desert & Mountains',
    category: 'desert',
    price: '11,900 MAD',
    duration: '8 Days',
    rating: '4.9',
    image: 'https://images.unsplash.com/photo-1510952267577-fc96d5ca660a?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
    badge: 'Best Value',
  },
]

const filters = ['all', 'desert', 'cities', 'mountains', 'coast']

export default function Tours() {
  const [activeFilter, setActiveFilter] = useState('all')
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  const filteredTours =
    activeFilter === 'all'
      ? tours
      : tours.filter((tour) => tour.category === activeFilter)

  return (
    <section id="tours" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Tours
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Featured Adventures
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Handpicked experiences crafted for unforgettable memories
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 rounded-full font-semibold transition-all capitalize ${
                activeFilter === filter
                  ? 'bg-primary text-white shadow-lg'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {filter}
            </motion.button>
          ))}
        </div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTours.map((tour, index) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={tour.image}
                  alt={tour.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                {tour.badge && (
                  <div className="absolute top-4 right-4 px-3 py-1 bg-accent text-white rounded-full text-xs font-semibold">
                    {tour.badge}
                  </div>
                )}
              </div>
              <div className="p-6">
                <div className="text-xs text-primary font-semibold uppercase mb-2">
                  {tour.category}
                </div>
                <h3 className="text-xl font-bold text-secondary mb-3">{tour.title}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span className="flex items-center gap-1">
                    <Star size={16} className="text-yellow-400 fill-yellow-400" />
                    {tour.rating}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={16} />
                    {tour.duration}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="text-2xl font-serif font-bold text-primary">
                    {tour.price}
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all"
                  >
                    Book Now
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

