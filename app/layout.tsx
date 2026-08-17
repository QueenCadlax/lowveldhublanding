import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Geist, Geist_Mono } from 'next/font/google'
import './globals.css'
import { StructuredData } from '@/components/site/structured-data'

const geistSans = Geist({ 
  variable: '--font-geist-sans', 
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})
const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
  display: 'swap',
  preload: true,
})

export const metadata: Metadata = {
  title: {
    default: 'Lowveld Hub | Web Development | Software Development & Digital Transformation',
    template: '%s | Lowveld Hub',
  },
  description:
    'Lowveld Hub is a premium AI and digital transformation company specialising in web development, custom software, AI solutions, business systems, cloud infrastructure and data intelligence for businesses across South Africa and worldwide.',
  keywords: [
    'web development',
    'website development',
    'website design',
    'custom software',
    'software development',
    'AI automation',
    'AI solutions',
    'artificial intelligence',
    'business systems',
    'CRM development',
    'ERP development',
    'mobile app development',
    'cloud solutions',
    'digital transformation',
    'business intelligence',
    'Power BI',
    'SEO',
    'South Africa',
    'Mpumalanga',
    'Lowveld Hub',
  ],
  authors: [{ name: 'Lowveld Hub' }],
  creator: 'Lowveld Hub',
  publisher: 'Lowveld Hub',
  applicationName: 'Lowveld Hub',
  category: 'Technology',
  classification: 'Web Development; AI; Software Development; Digital Transformation',
  generator: 'v0.app',
  alternates: {
    canonical: 'https://lowveldhub.co.za',
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      maxImagePreview: 'large',
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  },
  openGraph: {
    title: 'Lowveld Hub | Web Development | Software Development & Digital Transformation',
    description:
      'We build premium websites, custom software, AI solutions and intelligent business systems that help ambitious organisations grow, automate operations and scale with confidence.',
    type: 'website',
    locale: 'en_ZA',
    url: 'https://lowveldhub.co.za',
    siteName: 'Lowveld Hub',
    images: [{ url: 'https://lowveldhub.co.za/og-image.jpg', width: 1200, height: 630, alt: 'Lowveld Hub digital transformation company' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lowveld Hub | Web Development | Software Development & Digital Transformation',
    description:
      'We build premium websites, custom software, AI solutions and intelligent business systems that help ambitious organisations grow, automate operations and scale with confidence.',
    images: ['https://lowveldhub.co.za/og-image.jpg'],
  },
  icons: {
    icon: [
      { url: '/favicon_io/favicon.ico' },
      { url: '/favicon_io/favicon-32x32.png', type: 'image/png' },
      { url: '/favicon_io/favicon-16x16.png', type: 'image/png' },
    ],
    apple: '/favicon_io/apple-touch-icon.png',
    shortcut: '/favicon_io/favicon.ico',
  },
  manifest: '/favicon_io/site.webmanifest',
  other: {
    'geo.region': 'ZA',
    'geo.placename': 'Mpumalanga, South Africa',
    'msapplication-TileColor': '#09090B',
    'theme-color': '#09090B',
    'apple-mobile-web-app-title': 'Lowveld Hub',
    'application-name': 'Lowveld Hub',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light dark',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#09090B' },
    { media: '(prefers-color-scheme: dark)', color: '#09090B' },
  ],
  initialScale: 1,
  maximumScale: 5,
  width: 'device-width',
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
        <StructuredData />
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
