'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, MapPin, Users, Calendar, Star } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { getDestinationById } from '@/lib/destinations-data'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function DestinationPage() {
  const params = useParams()
  const router = useRouter()
  const destination = getDestinationById(params.id as string)

  if (!destination) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Link href="/#destinations" className="text-primary hover:underline">
            Back to Destinations
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={destination.image}
          alt={destination.name}
          fill
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-16 text-white">
          <motion.button
            onClick={() => router.back()}
            className="absolute top-8 left-8 flex items-center gap-2 text-white hover:text-primary transition-colors z-10"
            whileHover={{ x: -5 }}
          >
            <ArrowLeft size={20} /> Back
          </motion.button>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-4"
          >
            {destination.name}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-gray-200 max-w-3xl"
          >
            {destination.description}
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Overview */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-3xl font-bold text-secondary mb-6">Overview</h2>
              <p className="text-gray-700 leading-relaxed mb-4">{destination.culture}</p>
              <p className="text-gray-700 leading-relaxed">{destination.cuisine}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-4">Highlights</h3>
              <ul className="space-y-3">
                {destination.highlights.map((highlight, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    className="flex items-start gap-3 text-gray-700"
                  >
                    <Star size={20} className="text-primary mt-1 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Attractions */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-4">Top Attractions</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {destination.attractions.map((attraction, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="p-4 bg-gray-50 rounded-lg hover:bg-primary/10 transition-colors"
                  >
                    <span className="font-semibold text-secondary">{attraction}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Image Gallery */}
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-bold text-secondary mb-4">Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {destination.images.map((img, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                    className="relative h-48 rounded-lg overflow-hidden group"
                  >
                    <Image
                      src={img}
                      alt={`${destination.name} ${index + 1}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Sidebar */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="lg:col-span-1"
          >
            <div className="bg-white p-8 rounded-lg shadow-lg border border-gray-200 h-fit sticky top-28">
              <h3 className="text-2xl font-bold text-secondary mb-6">Information</h3>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-primary" />
                  <div>
                    <span className="font-semibold">Location:</span> {destination.location}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Users size={20} className="text-primary" />
                  <div>
                    <span className="font-semibold">Population:</span> {destination.population}
                  </div>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <span className="font-semibold">Best Time to Visit:</span> {destination.bestTime}
                  </div>
                </div>
              </div>

              <Link
                href="/#tours"
                className="w-full block text-center px-8 py-4 bg-primary text-white rounded-full font-semibold shadow-lg hover:bg-primary-dark transition-all mb-6"
              >
                Book a Tour
              </Link>

              <div className="text-sm text-gray-600 text-center">
                <p>Want to explore {destination.name}?</p>
                <p className="mt-2">Check out our tours and packages!</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

