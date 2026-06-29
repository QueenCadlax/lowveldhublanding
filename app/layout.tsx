import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'

const geistSans = Geist({ variable: '--font-geist-sans', subsets: ['latin'] })
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Lowveld Hub | Premium Digital Agency',
  description:
    'Building premium websites, mobile apps, custom software and AI-powered digital solutions for businesses in South Africa and worldwide.',
  keywords: [
    'Lowveld Hub',
    'web design South Africa',
    'website development',
    'website designer',
    'software development',
    'custom software',
    'mobile app development',
    'AI automation',
    'digital agency',
    'web development',
    'Next.js development',
    'React development',
    'business websites',
    'eCommerce development',
    'SEO services',
    'branding',
    'UI UX design',
    'cloud solutions',
    'South Africa',
    'Africa',
    'global digital agency',
    'South AfricaWorldwide',
  ],
  generator: 'v0.app',
  openGraph: {
    title: 'Lowveld Hub | Premium Digital Agency',
    description:
      'Building premium websites, mobile apps, custom software and AI-powered digital solutions for businesses in South Africa and worldwide.',
    type: 'website',
    locale: 'en_ZA',
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
  other: {
    'geo.region': 'South AfricaWorldwide',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: 'white' },
    { media: '(prefers-color-scheme: dark)', color: 'black' },
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
