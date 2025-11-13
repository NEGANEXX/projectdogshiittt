'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Plane } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import Logo from './Logo'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { href: '#home', label: 'Home' },
    { href: '#destinations', label: 'Destinations' },
    { href: '#tours', label: 'Tours' },
    { href: '#experiences', label: 'Experiences' },
    { href: '#about', label: 'About' },
    { href: '#contact', label: 'Contact' },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg py-3'
          : 'bg-white/80 backdrop-blur-sm py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <motion.a
            href="#home"
            className="group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Logo size="md" />
          </motion.a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <motion.a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-gray-700 hover:text-primary transition-colors relative group no-underline"
                whileHover={{ y: -2 }}
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
              </motion.a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/login"
              className="px-6 py-2.5 bg-transparent border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-white transition-all no-underline"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Login
            </motion.a>
            <motion.button
              className="px-6 py-2.5 bg-primary text-white rounded-full font-semibold hover:bg-primary-dark transition-all shadow-lg hover:shadow-xl"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Plan Your Trip
            </motion.button>
          </div>

          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 space-y-4 pb-4"
            >
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="block text-gray-700 hover:text-primary transition-colors no-underline"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.label}
                </a>
              ))}
              <a
                href="/login"
                className="block text-gray-700 hover:text-primary transition-colors no-underline mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
              <a
                href="/login"
                className="block text-gray-700 hover:text-primary transition-colors no-underline"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Login
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}

