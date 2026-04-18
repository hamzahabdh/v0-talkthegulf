import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'

export const metadata: Metadata = {
  title: 'talkthegulf — Learn Gulf Arabic',
  description: 'Real Gulf Arabic for real conversations. Phrases, culture, and insights from someone who learned the hard way. Dialect first.',
  generator: 'v0.app',
  metadataBase: new URL('https://talkthegulf.com'),
  openGraph: {
    title: 'talkthegulf — Learn Gulf Arabic',
    description: 'Real Gulf Arabic for real conversations. Phrases, culture, and insights from someone who learned the hard way.',
    url: 'https://talkthegulf.com',
    siteName: 'talkthegulf',
    locale: 'en_GB',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'talkthegulf — Learn Gulf Arabic',
    description: 'Real Gulf Arabic for real conversations. Dialect first.',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link 
          href="https://fonts.cdnfonts.com/css/hacen-tunisia" 
          rel="stylesheet" 
        />
        <link 
          href="https://fonts.googleapis.com/css2?family=Shantell+Sans:wght@400;700&family=Libre+Baskerville:wght@400;700&family=Inter:wght@400;500&display=swap" 
          rel="stylesheet" 
        />
      </head>
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
