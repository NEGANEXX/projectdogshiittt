'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const sizeClasses = {
    sm: 'h-16 w-auto',
    md: 'h-20 w-auto',
    lg: 'h-28 w-auto',
  }

  return (
    <motion.div
      className={`flex items-center ${className}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Image
        src="/logo.png"
        alt="OUIRANNA Logo"
        width={size === 'sm' ? 240 : size === 'md' ? 300 : 400}
        height={size === 'sm' ? 80 : size === 'md' ? 100 : 140}
        className={sizeClasses[size]}
        priority
        style={{ objectFit: 'contain' }}
        unoptimized
      />
    </motion.div>
  )
}

