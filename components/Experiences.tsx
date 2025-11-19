'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import Image from 'next/image'

const experienceImages = [
  {
    local: '/images/experience-1.jpg',
    fallback: 'https://images.unsplash.com/photo-1624805098931-098c0d918b34?w=800&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
  {
    local: '/images/experience-2.jpg',
    fallback: 'https://images.unsplash.com/photo-1538600838042-6a0c694ffab5?w=600&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
  {
    local: '/images/experience-3.jpg',
    fallback: 'https://images.unsplash.com/photo-1559925523-10de9e23cf90?w=1200&auto=format&fit=crop&q=80&ixlib=rb-4.1.0',
  },
]

const features = [
  {
    icon: '🍵',
    title: 'Traditional Tea Ceremonies',
    description: 'Learn the art of Moroccan mint tea',
  },
  {
    icon: '🎨',
    title: 'Artisan Workshops',
    description: 'Create with local craftsmen',
  },
  {
    icon: '🍽️',
    title: 'Cooking Classes',
    description: 'Master authentic Moroccan recipes',
  },
]

export default function Experiences() {
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })
  const [imageSources, setImageSources] = useState<string[]>([])

  useEffect(() => {
    const sources: string[] = []
    let loadedCount = 0
    const totalImages = experienceImages.length

    experienceImages.forEach((img, index) => {
      const image = new window.Image()
      image.onload = () => {
        sources[index] = img.local
        loadedCount++
        if (loadedCount === totalImages) {
          setImageSources([...sources])
        }
      }
      image.onerror = () => {
        sources[index] = img.fallback
        loadedCount++
        if (loadedCount === totalImages) {
          setImageSources([...sources])
        }
      }
      image.src = img.local
    })
  }, [])

  return (
    <section id="experiences" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            ref={ref}
          >
            <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-semibold mb-4">
              Experiences
            </span>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-6">
              Live Like a Local
            </h2>
            <p className="text-gray-600 mb-8 text-lg">
              Immerse yourself in authentic Moroccan culture through unique experiences
              designed to connect you with local traditions, cuisine, and people.
            </p>

            <div className="space-y-6 mb-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: -30 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex gap-4 items-start"
                >
                  <div className="text-4xl flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h4 className="text-xl font-bold text-secondary mb-1">
                      {feature.title}
                    </h4>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-all"
            >
              View All Experiences
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            className="grid grid-cols-2 gap-4"
          >
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src={imageSources[0] || experienceImages[0].fallback}
                alt="Moroccan Experience"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group">
              <Image
                src={imageSources[1] || experienceImages[1].fallback}
                alt="Moroccan Experience"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden group col-span-2">
              <Image
                src={imageSources[2] || experienceImages[2].fallback}
                alt="Moroccan Experience"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                unoptimized
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

