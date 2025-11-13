'use client'

import Logo from './Logo'

export default function Footer() {
  return (
    <footer id="contact" className="bg-secondary text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <div className="mb-4">
              <Logo size="md" className="text-white" />
            </div>
            <p className="text-gray-300 mb-4">
              Your gateway to authentic Moroccan experiences. Discover the beauty, culture, and
              adventure that Morocco has to offer.
            </p>
            <div className="flex gap-4">
              {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-2xl hover:scale-110 transition-transform no-underline"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              {['Destinations', 'Tours', 'Experiences', 'About Us'].map((link) => (
                <li key={link}>
                  <a href={`#${link.toLowerCase()}`} className="hover:text-primary transition-colors no-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4">Support</h4>
            <ul className="space-y-2 text-gray-300">
              {['FAQ', 'Travel Guide', 'Terms & Conditions', 'Privacy Policy'].map((link) => (
                <li key={link}>
                  <a href="#" className="hover:text-primary transition-colors no-underline">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="font-bold text-primary mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-300">
              <li>📍 23, rue Maarif Aviation, Rabat</li>
              <li>📞 +212 537 635 750</li>
              <li>✉️ info@ouiranna.ma</li>
              <li>🕒 Mon-Sat: 9AM - 6PM</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400">
            <p>&copy; 2025 OUIRANNA. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

