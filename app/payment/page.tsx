'use client'

import { CreditCardForm } from '@/components/ui/payment-card'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function PaymentPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="pt-24 pb-20">
        <CreditCardForm />
      </div>
      <Footer />
    </main>
  )
}

