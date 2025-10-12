import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata = {
  metadataBase: new URL('https://www.husseinaliyassine.com'), 
  title: {
    default: 'Hussein Ali Yassine | Business Management Consultant & Marketing Strategist',
    template: '%s | Hussein Ali Yassine'
  },
  description: 'Hussein Ali Yassine - Business management consultant and marketing strategist with 12+ years of experience in Lebanon and the MENA region. Specializing in business strategy, brand development, and organizational growth.',
  keywords: [
    // Personal & Brand Identity
    'Hussein Ali Yassine',
    'Mike Yassine',
    'Mike Yassine Beirut',
    'Hussein Yassine consultant',
    'Business consultant Mike Yassine',
    'Marketing strategist Hussein Ali Yassine',
    'Beirut business consultant',
    'Lebanon marketing strategist',
  
    // Core Services
    'Business strategy consultant Lebanon',
    'Strategic planning consultant Beirut',
    'Marketing strategy consultant MENA',
    'Brand development expert Lebanon',
    'Business transformation consultant',
    'Operational excellence consultant Middle East',
    'Business process optimization Beirut',
    'Cost reduction consultant Lebanon',
    'Performance improvement advisor',
    'Digital marketing strategy consultant',
    'E-commerce strategy Lebanon',
    'Marketing campaign strategist Beirut',
    'Go-to-market strategy Lebanon',
    'Competitive advantage consultant',
    'Market positioning expert Beirut',
    'B2B marketing strategist Middle East',
    'B2C brand consultant Lebanon',
  
    // Industry & Regional Focus
    'MENA business consultant',
    'GCC market entry consultant',
    'Lebanon business advisor',
    'Beirut management consultant',
    'Middle East brand strategist',
    'Arab market marketing expert',
    'Lebanese SME consultant',
    'Business consultant for startups Lebanon',
    'Consulting for service businesses Beirut',
    'Business consultant for family businesses Lebanon',
  
    // Former Role & Credibility
    'Former Spirit Advertising director',
    'Ex-Marketing Director Lebanon',
    'Spirit Advertising alumni consultant',
    'Creative-to-commercial strategist',
  
    // Specialized Expertise
    'Crisis management consultant Lebanon',
    'Business continuity planning MENA',
    'Brand resilience advisor',
    'Marketing team leadership training',
    'Digital transformation consultant Beirut',
    'Marketing automation expert Lebanon',
    'ROI-driven marketing consultant',
    'Measurable business growth advisor',
    'Hands-on business consultant Beirut',
    'Embedded consulting Lebanon',
    'Sustainable growth strategist MENA',
  
    // Client Outcomes & Value Proposition
    'Actionable business frameworks',
    'Practical business consultant Lebanon',
    'Results-driven marketing strategist',
    'Business consultant with implementation support',
    'Strategic clarity for Middle East businesses',
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
    url: 'https://www.husseinaliyassine.com',
    title: 'Hussein Ali Yassine | Business Management Consultant & Marketing Strategist',
    description: 'Business management consultant with 12+ years of experience helping organizations in Lebanon and the MENA region achieve strategic clarity and sustainable growth.',
    siteName: 'Hussein Ali Yassine',
    images: [
      {
        url: '/collaborative-approach.png',
        width: 1200,
        height: 630,
        alt: 'Hussein Ali Yassine - Business Management Consultant'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hussein Ali Yassine | Business Management Consultant',
    description: 'Business management consultant and marketing strategist in Lebanon',
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
    canonical: 'https://www.husseinaliyassine.com'
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <meta name="google-site-verification" content="oL2E3c7bFdT7IwtgkpQoTKtt7FxRqgQvRJslo4PETcs" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Person',
              name: 'Hussein Ali Yassine',
              alternateName: ['Hussein Yassine', 'Mike Yassine'],
              url: 'https://www.husseinaliyassine.com',
              jobTitle: 'Business Management Consultant & Marketing Strategist',
              description: 'Business management consultant with over 12 years of experience in Lebanon and the MENA region, specializing in business strategy, brand development, and organizational growth.',
              workLocation: {
                '@type': 'Place',
                address: {
                  '@type': 'PostalAddress',
                  addressLocality: 'Beirut',
                  addressCountry: 'Lebanon'
                }
              },
              knowsAbout: [
                'Business Management',
                'Marketing Strategy',
                'Brand Development',
                'Business Consulting',
                'Strategic Planning',
                'MENA Markets',
                'Organizational Growth'
              ],
              hasOccupation: {
                '@type': 'Occupation',
                name: 'Business Management Consultant',
                occupationLocation: {
                  '@type': 'Country',
                  name: 'Lebanon'
                }
              },
              alumniOf: {
                '@type': 'Organization',
                name: 'Spirit Advertising',
                description: 'Former Marketing Director'
              },
              sameAs: [
                'https://www.linkedin.com/in/hussein-ali-yassine'
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
              description: 'Business management and marketing strategy consulting services for organizations in Lebanon and the MENA region',
              provider: {
                '@type': 'Person',
                name: 'Hussein Ali Yassine'
              },
              areaServed: {
                '@type': 'Country',
                name: 'Lebanon'
              },
              serviceType: [
                'Business Management Consulting',
                'Marketing Strategy',
                'Brand Development',
                'Business Strategy'
              ]
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
