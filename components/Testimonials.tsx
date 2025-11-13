'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Quote } from 'lucide-react'
import Image from 'next/image'

const testimonials = [
  {
    quote:
      'An absolutely incredible experience! The desert camp was magical, and our guide made every moment special.',
    author: 'Sarah Johnson',
    location: 'United States',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'The best trip of our lives! Morocco exceeded all expectations. The food, culture, and people were amazing.',
    author: 'Michael Chen',
    location: 'Canada',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
  },
  {
    quote:
      'From the Atlas Mountains to the Sahara, every day was a new adventure. Highly recommend!',
    author: 'Emma Williams',
    location: 'United Kingdom',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
  },
]

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Stories
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Traveler Experiences
          </h2>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gray-50 p-8 rounded-2xl relative"
            >
              <Quote className="absolute top-4 right-4 text-primary/20" size={40} />
              <p className="text-gray-700 mb-6 text-lg italic relative z-10">
                "{testimonial.quote}"
              </p>
              <div className="flex items-center gap-4">
                <div className="relative w-14 h-14 rounded-full overflow-hidden">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.author}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.author}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

