import type { Metadata } from 'next'
import { Poppins, Cormorant_Garamond } from 'next/font/google'
import './globals.css'

const poppins = Poppins({
  weight: ['300', '400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
})

const cormorant = Cormorant_Garamond({
  weight: ['400', '600', '700'],
  subsets: ['latin'],
  variable: '--font-cormorant',
})

export const metadata: Metadata = {
  title: 'CUIRANNA | Discover Morocco',
  description: 'Experience authentic Moroccan adventures with CUIRANNA. From the Atlas Mountains to the Sahara Desert.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${poppins.variable} ${cormorant.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  )
}

