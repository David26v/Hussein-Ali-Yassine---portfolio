import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://husseinali-yassine.com'), 
  title: {
    default: 'Hussein Ali Yassine | Business Consultant & Entrepreneur',
    template: '%s | Hussein Ali Yassine'
  },
  description: 'Hussein Ali Yassine - Business consultant, entrepreneur, and strategic advisor specializing in business development, operational excellence, and growth strategies.',
  keywords: [
    'Hussein Ali Yassine',
    'Hussein Yassine', 
    'business consultant',
    'entrepreneur',
    'business development',
    'strategic consulting',
    'business advisor',
    'operational excellence'
  ],
  authors: [{ name: 'Hussein Ali Yassine' }],
  creator: 'Hussein Ali Yassine',
  publisher: 'Hussein Ali Yassine',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://husseinali-yassine.com',
    title: 'Hussein Ali Yassine | Business Consultant & Entrepreneur',
    description: 'Business consultant, entrepreneur, and strategic advisor specializing in business development and growth strategies.',
    siteName: 'Hussein Ali Yassine',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Hussein Ali Yassine - Business Consultant'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussein Ali Yassine | Business Consultant & Entrepreneur',
    description: 'Business consultant, entrepreneur, and strategic advisor',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  },
  alternates: {
    canonical: 'https://husseinali-yassine.com'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hussein Ali Yassine',
              alternateName: 'Hussein Yassine',
              url: 'https://husseinali-yassine.com',
              jobTitle: 'Business Consultant & Entrepreneur',
              description: 'Business consultant and strategic advisor specializing in business development, operational excellence, and growth strategies for emerging companies.',
              knowsAbout: [
                'Business Development',
                'Strategic Planning',
                'Operational Excellence',
                'Business Consulting',
                'Entrepreneurship'
              ],
              sameAs: [
                'https://www.linkedin.com/in/hussein-ali-yassine',
                'https://medium.com/@hussein-ali-yassine',
                'https://twitter.com/hussein_yassine'
              ]
            })
          }}
        />
        {/* Professional Service Schema */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Hussein Ali Yassine Consulting',
              description: 'Strategic business consulting services',
              provider: {
                '@type': 'Person',
                name: 'Hussein Ali Yassine'
              },
              areaServed: 'Worldwide',
              serviceType: 'Business Consulting'
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}