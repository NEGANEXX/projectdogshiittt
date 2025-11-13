'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { destinationsData } from '@/lib/destinations-data'

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
          {destinationsData.map((dest, index) => (
            <Link key={dest.id} href={`/destinations/${dest.id}`}>
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative overflow-hidden rounded-2xl bg-white shadow-lg cursor-pointer h-full"
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
                  <div className="inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    Explore <ArrowRight size={18} />
                  </div>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

