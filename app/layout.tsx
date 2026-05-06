import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Sticker Mule | Custom Stickers & Merch That Kicks Ass',
  description: 'Create custom stickers, labels, magnets, buttons, and more with free worldwide shipping, free proofs, and lightning-fast delivery. Trusted by 350,000+ businesses.',
  keywords: ['custom stickers', 'sticker printing', 'die cut stickers', 'custom labels', 'merch', 'promotional products'],
  openGraph: {
    title: 'Sticker Mule | Custom Stickers & Merch That Kicks Ass',
    description: 'Create custom stickers, labels, magnets, buttons, and more with free worldwide shipping.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sticker Mule | Custom Stickers & Merch That Kicks Ass',
    description: 'Create custom stickers, labels, magnets, buttons, and more with free worldwide shipping.',
  },
}

export const viewport: Viewport = {
  themeColor: '#FF4D00',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
