'use client'

import { useParams, useRouter } from 'next/navigation'
import { motion } from 'framer-motion'
import { ArrowLeft, Star, Clock, MapPin, Users, Calendar, Check, X } from 'lucide-react'
import Image from 'next/image'
import { getTourById } from '@/lib/tours-data'
import Link from 'next/link'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function TourDetailsPage() {
  const params = useParams()
  const router = useRouter()
  const tour = getTourById(params.id as string)

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Tour not found</h1>
          <Link href="/#tours" className="text-primary hover:underline">
            Back to Tours
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
          src={tour.image}
          alt={tour.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60" />
        <div className="relative z-10 h-full flex items-end">
          <div className="container mx-auto px-4 pb-12 text-white">
            <motion.button
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              onClick={() => router.back()}
              className="mb-6 flex items-center gap-2 hover:text-primary transition-colors"
            >
              <ArrowLeft size={20} />
              Back
            </motion.button>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {tour.badge && (
                <span className="inline-block px-4 py-2 bg-accent text-white rounded-full text-sm font-semibold mb-4">
                  {tour.badge}
                </span>
              )}
              <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">{tour.title}</h1>
              <div className="flex flex-wrap items-center gap-6 text-lg">
                <span className="flex items-center gap-2">
                  <Star size={20} className="text-yellow-400 fill-yellow-400" />
                  {tour.rating}
                </span>
                <span className="flex items-center gap-2">
                  <Clock size={20} />
                  {tour.duration}
                </span>
                <span className="flex items-center gap-2">
                  <MapPin size={20} />
                  {tour.location}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-secondary mb-4">Overview</h2>
              <p className="text-gray-700 leading-relaxed text-lg">{tour.description}</p>
            </motion.section>

            {/* Highlights */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Highlights</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tour.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-primary flex-shrink-0" />
                    <p className="text-gray-700">{highlight}</p>
                  </div>
                ))}
              </div>
            </motion.section>

            {/* Itinerary */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-3xl font-serif font-bold text-secondary mb-6">Itinerary</h2>
              <div className="space-y-8">
                {tour.itinerary.map((day, index) => (
                  <div key={day.day} className="border-l-4 border-primary pl-6 relative">
                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-primary border-4 border-white" />
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-secondary mb-2">
                        Day {day.day}: {day.title}
                      </h3>
                      {day.accommodation && (
                        <p className="text-sm text-gray-500 mb-2">
                          <span className="font-semibold">Accommodation:</span> {day.accommodation}
                        </p>
                      )}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Activities:</h4>
                        <ul className="space-y-2">
                          {day.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start gap-2 text-gray-700">
                              <span className="text-primary mt-1">•</span>
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-800 mb-2">Meals:</h4>
                        <div className="flex flex-wrap gap-2">
                          {day.meals.map((meal, mealIndex) => (
                            <span
                              key={mealIndex}
                              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                            >
                              {meal}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-2xl shadow-lg p-6 sticky top-24"
            >
              <div className="text-center mb-6">
                <div className="text-4xl font-serif font-bold text-primary mb-2">
                  {tour.price}
                </div>
                <p className="text-gray-600">per person</p>
              </div>

              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-3">
                  <Users size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Group Size</p>
                    <p className="font-semibold">{tour.groupSize}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Best Time</p>
                    <p className="font-semibold">{tour.bestTime}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={20} className="text-primary" />
                  <div>
                    <p className="text-sm text-gray-600">Difficulty</p>
                    <p className="font-semibold">{tour.difficulty}</p>
                  </div>
                </div>
              </div>

              <Link
                href="/payment"
                className="w-full block text-center px-6 py-4 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl mb-4"
              >
                Book Now
              </Link>

              <div className="border-t pt-6 space-y-4">
                <div>
                  <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                    <Check size={20} className="text-green-500" />
                    Includes
                  </h3>
                  <ul className="space-y-2">
                    {tour.includes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <Check size={16} className="text-green-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold text-secondary mb-3 flex items-center gap-2">
                    <X size={20} className="text-red-500" />
                    Excludes
                  </h3>
                  <ul className="space-y-2">
                    {tour.excludes.map((item, index) => (
                      <li key={index} className="flex items-start gap-2 text-sm text-gray-700">
                        <X size={16} className="text-red-500 mt-0.5 flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

