'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Gift, Star, CheckCircle, XCircle, Percent } from 'lucide-react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { loyaltyOffers, initializeLoyalty, redeemCode, type UserLoyalty } from '@/lib/loyalty-data'

export default function LoyaltyPage() {
  const [loyalty, setLoyalty] = useState<UserLoyalty>({ points: 0, redeemedCodes: [], earnedPoints: 0, totalSpent: 0 })
  const [redeeming, setRedeeming] = useState<string | null>(null)
  const { ref, inView } = useInView({ threshold: 0.1, triggerOnce: true })

  useEffect(() => {
    setLoyalty(initializeLoyalty())
  }, [])

  const handleRedeem = (offerId: string) => {
    setRedeeming(offerId)
    const result = redeemCode(offerId)
    
    if (result.success) {
      setLoyalty(initializeLoyalty())
      alert(result.message)
    } else {
      alert(result.message)
    }
    
    setRedeeming(null)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-primary via-primary-dark to-secondary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Gift size={64} className="mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">
              Programme Fidélité
            </h1>
            <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
              Gagnez des points et obtenez des codes de réduction exclusifs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Points Display */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-4xl mx-auto bg-gradient-to-r from-primary to-primary-dark rounded-2xl p-8 shadow-xl"
          >
            <div className="flex flex-col md:flex-row items-center justify-between text-white">
              <div>
                <h2 className="text-3xl font-bold mb-2">Vos Points</h2>
                <p className="text-white/80">Utilisez vos points pour obtenir des codes de réduction</p>
              </div>
              <div className="text-center md:text-right mt-4 md:mt-0">
                <div className="text-6xl font-bold mb-2">{loyalty.points}</div>
                <div className="flex items-center gap-2 justify-center md:justify-end">
                  <Star size={24} className="fill-yellow-400 text-yellow-400" />
                  <span className="text-lg">Points</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Offers Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-secondary mb-4">
              Codes de Réduction Disponibles
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Échangez vos points contre des codes de réduction exclusifs
            </p>
          </motion.div>

          <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {loyaltyOffers.map((offer, index) => {
              const isRedeemed = loyalty.redeemedCodes.includes(offer.code)
              const canAfford = loyalty.points >= offer.points
              
              return (
                <motion.div
                  key={offer.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.1 }}
                  className={`bg-white rounded-2xl shadow-lg overflow-hidden border-2 ${
                    isRedeemed
                      ? 'border-green-500'
                      : canAfford
                      ? 'border-primary hover:border-primary-dark'
                      : 'border-gray-300 opacity-75'
                  }`}
                >
                  <div className={`p-6 ${
                    isRedeemed
                      ? 'bg-green-50'
                      : offer.discount >= 50
                      ? 'bg-gradient-to-br from-red-500 to-red-600 text-white'
                      : offer.discount >= 20
                      ? 'bg-gradient-to-br from-orange-500 to-orange-600 text-white'
                      : 'bg-gradient-to-br from-primary to-primary-dark text-white'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <Percent size={32} />
                        <span className="text-3xl font-bold">{offer.discount}%</span>
                      </div>
                      {isRedeemed && (
                        <CheckCircle size={24} className="text-green-500" />
                      )}
                    </div>
                    <h3 className="text-xl font-bold mb-2">{offer.code}</h3>
                    <p className="text-sm opacity-90">{offer.description}</p>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gray-600">Coût:</span>
                      <span className="text-2xl font-bold text-primary flex items-center gap-2">
                        <Star size={20} className="fill-yellow-400 text-yellow-400" />
                        {offer.points} points
                      </span>
                    </div>
                    
                    {offer.minPurchase && (
                      <p className="text-sm text-gray-500 mb-4">
                        Achat minimum: {offer.minPurchase} MAD
                      </p>
                    )}
                    
                    {isRedeemed ? (
                      <div className="bg-green-100 text-green-700 px-4 py-3 rounded-lg text-center font-semibold">
                        Code déjà obtenu
                      </div>
                    ) : canAfford ? (
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleRedeem(offer.id)}
                        disabled={redeeming === offer.id}
                        className="w-full px-6 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary-dark transition-all disabled:opacity-50"
                      >
                        {redeeming === offer.id ? 'Traitement...' : 'Échanger'}
                      </motion.button>
                    ) : (
                      <div className="bg-gray-100 text-gray-600 px-4 py-3 rounded-lg text-center">
                        Points insuffisants
                      </div>
                    )}
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-secondary mb-8 text-center">
              Comment ça fonctionne?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">1</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Inscrivez-vous</h3>
                <p className="text-gray-600">
                  Recevez 100 points de bienvenue dès votre inscription
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">2</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Gagnez des points</h3>
                <p className="text-gray-600">
                  Gagnez 50 points pour chaque réservation effectuée
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 }}
                className="text-center p-6"
              >
                <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-white">3</span>
                </div>
                <h3 className="text-xl font-bold mb-2">Échangez</h3>
                <p className="text-gray-600">
                  Utilisez vos points pour obtenir des codes de réduction
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}

