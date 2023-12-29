import type { Metadata } from 'next'
import { Navbar, Footer } from '@/components'

import './globals.css'



export const metadata = {
  title: 'Create Next App',
  description: 'Discover the best cars in the world.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='relative'>
        <Navbar />
        {children}
        <Footer />
        </body>
    </html>
  )
}