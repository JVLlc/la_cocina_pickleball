
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'La Cocina Pickleball',
  description: 'La casa del Pickleball en español.',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
   
      <body className={inter.className}>{children}</body>
    </html>
  )
}
