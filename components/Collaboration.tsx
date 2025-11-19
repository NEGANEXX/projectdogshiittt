'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin, Star, ExternalLink } from 'lucide-react'
import Image from 'next/image'

const hotels = [
  {
    id: 1,
    name: 'Heure Bleue Palais – Relais & Châteaux',
    location: '2 Rue Ibn Battouta, 44000 Essaouira, Morocco',
    website: 'https://heure-bleue.com',
    highlights: [
      'Historic riad converted into luxury hotel',
      'Member of the prestigious Relais & Châteaux group',
      'Boutique feel with only 33 rooms',
      'Located in the heart of the medina (old town)',
      'Elegant design with high service level',
    ],
    whyItStandsOut: 'Boutique feel (only 33 rooms) in the heart of the medina (old town); elegance, high service level.',
    recommendedFor: 'Travellers looking for refined, central, traditional-charm accommodation in Essaouira.',
    image: '/images/collaboration/heure-bleue-1.jpg',
  },
  {
    id: 2,
    name: 'Villa Maroc',
    location: '10 Rue Abdellah Ben Yassine, Essaouira 44000, Morocco',
    website: 'https://villa-maroc.com',
    highlights: [
      'Historic guesthouse turned hotel',
      'Atmospheric layout with authentic charm',
      'Excellent spa and hammam facilities',
      'More informal than ultra-luxury',
      'Great value for money',
    ],
    whyItStandsOut: 'More informal than ultra-luxury, with a real character, and good value.',
    recommendedFor: 'Those who want somewhere with character and comfort, without ultra-premium price tag.',
    image: '/images/collaboration/villa-maroc-1.jpg',
  },
  {
    id: 3,
    name: 'Hôtel Le Golf d\'Essaouira & Spa',
    location: 'Domaine Mogador, Diabat 44000, Morocco',
    website: 'https://golf-essaouira.com',
    highlights: [
      'Large resort-style hotel',
      'Located on or near a golf course',
      'Perfect for leisure & families',
      'Extensive amenities and facilities',
      'Away from the medina hustle',
    ],
    whyItStandsOut: 'If you prefer resort-style with amenities, maybe away from the medina hustle.',
    recommendedFor: 'Families, golf-enthusiasts, longer stays, or if you want more space and facilities.',
    image: '/images/collaboration/golf-essaouira-1.jpg',
  },
]

export default function Collaboration() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  return (
    <section id="collaboration" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-12"
        >
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
            Partnerships
          </span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
            Our Hotel Collaborations
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We partner with the finest hotels in Essaouira to offer you exceptional accommodation experiences
          </p>
        </motion.div>

        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {hotels.map((hotel, index) => (
            <motion.div
              key={hotel.id}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -10 }}
              className="group relative bg-white rounded-2xl shadow-lg overflow-hidden h-full flex flex-col"
            >
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement
                    target.src = 'https://images.unsplash.com/photo-1613057157282-cc3cbe630b26?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.1.0'
                  }}
                  unoptimized
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              <div className="p-6 flex-1 flex flex-col">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-2xl font-bold text-secondary flex-1">{hotel.name}</h3>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex items-center gap-2 text-gray-600 mb-4">
                  <MapPin size={16} className="text-primary" />
                  <span className="text-sm">{hotel.location}</span>
                </div>

                <div className="mb-4 flex-1">
                  <h4 className="font-semibold text-secondary mb-2">Highlights:</h4>
                  <ul className="space-y-1 text-sm text-gray-600">
                    {hotel.highlights.slice(0, 3).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2 text-sm">Why it stands out:</h4>
                  <p className="text-sm text-gray-600 italic">{hotel.whyItStandsOut}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-secondary mb-2 text-sm">Recommended for:</h4>
                  <p className="text-sm text-gray-600">{hotel.recommendedFor}</p>
                </div>

                <a
                  href={hotel.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto inline-flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all text-center justify-center group"
                >
                  Visit Website
                  <ExternalLink size={18} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

