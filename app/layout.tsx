import { Inter, Poppins } from 'next/font/google'
import './globals.css'
import type { Metadata } from 'next'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import { ThemeProvider } from '@/components/ThemeProvider'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({ 
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  variable: '--font-poppins',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Kitchen Remodeling SEO Services by Moaz Haider | Grow Your Kitchen Remodel Business',
  description: 'Expert Kitchen Remodeling SEO services that drive real results. Increase local visibility, generate high-quality leads, and boost revenue for your kitchen remodeling business. Work directly with Moaz Haider, a dedicated SEO specialist.',
  keywords: 'kitchen remodeling SEO, kitchen remodel SEO services, SEO for kitchen remodelers, kitchen renovation SEO, cabinet company SEO, local SEO for kitchen remodeling',
  authors: [{ name: 'Moaz Haider' }],
  creator: 'Moaz Haider',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://moazhaider.com',
    siteName: 'Moaz Haider - Kitchen Remodeling SEO Expert',
    title: 'Kitchen Remodeling SEO Services by Moaz Haider | Grow Your Kitchen Remodel Business',
    description: 'Expert Kitchen Remodeling SEO services that drive real results. Increase local visibility, generate high-quality leads, and boost revenue.',
    images: [
      {
        url: 'https://moazhaider.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Moaz Haider - Kitchen Remodeling SEO Expert',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kitchen Remodeling SEO Services by Moaz Haider',
    description: 'Expert Kitchen Remodeling SEO services that drive real results.',
    creator: '@moazhaider',
    images: ['https://moazhaider.com/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
  },
}

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': 'https://moazhaider.com/#website',
      url: 'https://moazhaider.com',
      name: 'Moaz Haider - Kitchen Remodeling SEO Expert',
      description: 'Expert Kitchen Remodeling SEO Services',
      publisher: {
        '@id': 'https://moazhaider.com/#person',
      },
      inLanguage: 'en-US',
    },
    {
      '@type': 'WebPage',
      '@id': 'https://moazhaider.com/#webpage',
      url: 'https://moazhaider.com',
      name: 'Kitchen Remodeling SEO Services by Moaz Haider | Grow Your Kitchen Remodel Business',
      isPartOf: {
        '@id': 'https://moazhaider.com/#website',
      },
      about: {
        '@id': 'https://moazhaider.com/#person',
      },
      description: 'Expert Kitchen Remodeling SEO services that drive real results. Increase local visibility, generate high-quality leads, and boost revenue.',
      inLanguage: 'en-US',
    },
    {
      '@type': 'Person',
      '@id': 'https://moazhaider.com/#person',
      name: 'Moaz Haider',
      url: 'https://moazhaider.com',
      image: {
        '@type': 'ImageObject',
        '@id': 'https://moazhaider.com/#personlogo',
        url: 'https://moazhaider.com/moaz-haider.jpg',
        caption: 'Moaz Haider',
      },
      description: 'Kitchen Remodeling SEO Expert specializing in driving organic traffic and quality leads for kitchen remodeling businesses.',
      jobTitle: 'SEO Specialist',
      knowsAbout: ['SEO', 'Kitchen Remodeling SEO', 'Local SEO', 'Content Marketing', 'Link Building'],
      sameAs: [
        'https://www.linkedin.com/in/moazhaider',
        'https://twitter.com/moazhaider',
        'https://facebook.com/moazhaider',
      ],
    },
    {
      '@type': 'ProfessionalService',
      '@id': 'https://moazhaider.com/#service',
      name: 'Moaz Haider - Kitchen Remodeling SEO Services',
      image: 'https://moazhaider.com/logo.png',
      url: 'https://moazhaider.com',
      telephone: '+1-XXX-XXX-XXXX',
      priceRange: '$$',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'US',
      },
      geo: {
        '@type': 'GeoCoordinates',
      },
      description: 'Professional Kitchen Remodeling SEO services helping remodeling businesses increase organic visibility, generate quality leads, and grow revenue.',
      areaServed: {
        '@type': 'GeoCircle',
        geoMidpoint: {
          '@type': 'GeoCoordinates',
        },
        geoRadius: 'Global',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Kitchen Remodeling SEO Services',
        itemListElement: [
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'On-Page Optimization for Kitchen Remodelers',
              description: 'Comprehensive on-page SEO optimization including titles, meta descriptions, header structure, content optimization, and internal linking.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Off-Page SEO & Link Building',
              description: 'White-hat link building strategies and digital PR tailored for home improvement and kitchen remodeling industries.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Kitchen Remodeling SEO Audit',
              description: 'Comprehensive SEO audits identifying technical issues, content gaps, and opportunities for kitchen remodeling websites.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Keyword Research',
              description: 'In-depth keyword research focusing on kitchen remodeling, renovation terms, and high-intent local search queries.',
            },
          },
          {
            '@type': 'Offer',
            itemOffered: {
              '@type': 'Service',
              name: 'Local SEO for Kitchen Remodelers',
              description: 'Google Business Profile optimization, local citations, and service area targeting for kitchen remodeling businesses.',
            },
          },
        ],
      },
    },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`} suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
