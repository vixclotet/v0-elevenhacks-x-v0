import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { MotionProvider } from '@/components/motion-provider'
import { AudioProvider } from '@/components/audio-provider'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800', '900'],
})

export const metadata: Metadata = {
  title: 'Sticker Mule | Custom Stickers & Merch That Kicks Ass',
  description: 'Create custom stickers, labels, magnets, buttons, and more with free worldwide shipping, free proofs, and lightning-fast delivery. Trusted by 350,000+ businesses.',
  keywords: ['custom stickers', 'sticker printing', 'die cut stickers', 'custom labels', 'merch', 'promotional products'],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.jpg', type: 'image/jpeg', sizes: '512x512' },
    ],
    apple: [{ url: '/favicon.jpg', sizes: '180x180', type: 'image/jpeg' }],
    shortcut: '/favicon.svg',
  },
  manifest: '/site.webmanifest',
  openGraph: {
    title: 'Sticker Mule | Custom Stickers & Merch That Kicks Ass',
    description: 'Create custom stickers, labels, magnets, buttons, and more with free worldwide shipping.',
    type: 'website',
    images: [{ url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.33.15%E2%80%AFPM-E2kiR7ULDsDbnpIt5qHYnZ4httlqkD.png', width: 1456, height: 816, alt: 'Sticker Mule — Custom stickers & merch that kick ass' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sticker Mule | Custom Stickers & Merch That Kicks Ass',
    description: 'Create custom stickers, labels, magnets, buttons, and more with free worldwide shipping.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202026-05-06%20at%209.33.15%E2%80%AFPM-E2kiR7ULDsDbnpIt5qHYnZ4httlqkD.png'],
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
      <head>
        <link rel="preconnect" href="https://api.fontshare.com" />
        <link
          href="https://api.fontshare.com/v2/css?f[]=satoshi@900,800,700,500,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans antialiased">
        <MotionProvider>
          <AudioProvider>
            {children}
          </AudioProvider>
        </MotionProvider>
      </body>
    </html>
  )
}
