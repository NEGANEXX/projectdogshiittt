export interface LoyaltyOffer {
  id: string
  code: string
  discount: number // percentage (5, 10, 15, etc.)
  points: number
  description: string
  validUntil?: string
  minPurchase?: number
}

export const loyaltyOffers: LoyaltyOffer[] = [
  {
    id: 'discount-5',
    code: 'CUIRANNA5',
    discount: 5,
    points: 50,
    description: '5% discount on your next booking',
    minPurchase: 500,
  },
  {
    id: 'discount-10',
    code: 'CUIRANNA10',
    discount: 10,
    points: 100,
    description: '10% discount on your next booking',
    minPurchase: 1000,
  },
  {
    id: 'discount-15',
    code: 'CUIRANNA15',
    discount: 15,
    points: 150,
    description: '15% discount on your next booking',
    minPurchase: 2000,
  },
  {
    id: 'discount-20',
    code: 'CUIRANNA20',
    discount: 20,
    points: 200,
    description: '20% discount on your next booking',
    minPurchase: 3000,
  },
  {
    id: 'discount-25',
    code: 'CUIRANNA25',
    discount: 25,
    points: 250,
    description: '25% discount on your next booking',
    minPurchase: 4000,
  },
  {
    id: 'discount-30',
    code: 'CUIRANNA30',
    discount: 30,
    points: 300,
    description: '30% discount on your next booking',
    minPurchase: 5000,
  },
  {
    id: 'discount-50',
    code: 'CUIRANNA50',
    discount: 50,
    points: 500,
    description: '50% discount on your next booking',
    minPurchase: 8000,
  },
  {
    id: 'discount-100',
    code: 'CUIRANNA100',
    discount: 100,
    points: 1000,
    description: 'FREE booking (100% discount)',
    minPurchase: 10000,
  },
]

export interface UserLoyalty {
  points: number
  redeemedCodes: string[]
  earnedPoints: number
  totalSpent: number
}

// Initialize user with 100 points
export function initializeLoyalty(): UserLoyalty {
  if (typeof window === 'undefined') {
    return { points: 0, redeemedCodes: [], earnedPoints: 0, totalSpent: 0 }
  }
  
  const stored = localStorage.getItem('loyalty')
  if (stored) {
    return JSON.parse(stored)
  }
  
  const newUser: UserLoyalty = {
    points: 100, // Welcome bonus
    redeemedCodes: [],
    earnedPoints: 100,
    totalSpent: 0,
  }
  
  localStorage.setItem('loyalty', JSON.stringify(newUser))
  return newUser
}

export function getLoyaltyPoints(): number {
  if (typeof window === 'undefined') return 0
  const loyalty = initializeLoyalty()
  return loyalty.points
}

export function redeemCode(offerId: string): { success: boolean; message: string } {
  if (typeof window === 'undefined') {
    return { success: false, message: 'Not available' }
  }
  
  const loyalty = initializeLoyalty()
  const offer = loyaltyOffers.find((o) => o.id === offerId)
  
  if (!offer) {
    return { success: false, message: 'Offer not found' }
  }
  
  if (loyalty.redeemedCodes.includes(offer.code)) {
    return { success: false, message: 'Code already redeemed' }
  }
  
  if (loyalty.points < offer.points) {
    return { success: false, message: `Insufficient points. You need ${offer.points} points.` }
  }
  
  loyalty.points -= offer.points
  loyalty.redeemedCodes.push(offer.code)
  localStorage.setItem('loyalty', JSON.stringify(loyalty))
  
  return { success: true, message: `Code ${offer.code} redeemed successfully!` }
}

export function addPoints(amount: number) {
  if (typeof window === 'undefined') return
  
  const loyalty = initializeLoyalty()
  loyalty.points += amount
  loyalty.earnedPoints += amount
  localStorage.setItem('loyalty', JSON.stringify(loyalty))
}

export function getRedeemedCodes(): string[] {
  if (typeof window === 'undefined') return []
  const loyalty = initializeLoyalty()
  return loyalty.redeemedCodes
}

export function validateDiscountCode(code: string): { valid: boolean; discount: number; message: string } {
  const loyalty = initializeLoyalty()
  const offer = loyaltyOffers.find((o) => o.code === code.toUpperCase())
  
  if (!offer) {
    return { valid: false, discount: 0, message: 'Invalid code' }
  }
  
  if (!loyalty.redeemedCodes.includes(offer.code)) {
    return { valid: false, discount: 0, message: 'Code not redeemed. Please redeem it first in Loyalty Program.' }
  }
  
  return { valid: true, discount: offer.discount, message: `${offer.discount}% discount applied!` }
}

