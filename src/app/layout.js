import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import './globals.css'

export const metadata = {
  title: {
    default: 'The Phenix Carpet - Luxury Carpets & Rugs',
    template: '%s | The Phenix Carpet'
  },
  description: 'Premium luxury carpets and rugs manufacturer since 1996. Hand-knotted, hand-tufted, and handloom carpets for hospitality and residential spaces. Export quality from India.',
  keywords: 'luxury carpets, hand knotted rugs, hospitality carpets, premium rugs, Indian carpets, wool carpets, silk carpets, carpet manufacturer, carpet exporter',
  authors: [{ name: 'The Phenix Carpet' }],
  creator: 'The Phenix Carpet',
  publisher: 'The Phenix Carpet',
  metadataBase: new URL('https://www.thephenixcarpets.com'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.thephenixcarpets.com',
    title: 'The Phenix Carpet - Luxury Carpets & Rugs',
    description: 'Premium luxury carpets and rugs manufacturer since 1996. Hand-knotted, hand-tufted, and handloom carpets for hospitality and residential spaces.',
    siteName: 'The Phenix Carpet',
    images: [
      {
        url: '/images/001_1.jpg',
        width: 1200,
        height: 630,
        alt: 'The Phenix Carpet - Luxury Carpets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Phenix Carpet - Luxury Carpets & Rugs',
    description: 'Premium luxury carpets and rugs manufacturer since 1996. Hand-knotted, hand-tufted, and handloom carpets.',
    images: ['/images/001_1.jpg'],
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
    google: 'S95Pc8Mn27VdKiDXyNg-iqOxq1FsPQW6jc-F3fcj7IY', 
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Google Analytics */}
        <GoogleAnalytics GA_MEASUREMENT_ID="G-L5QQSH4MYZ" />
        
        {/* Additional SEO meta tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="canonical" href="https://www.thephenixcarpets.com" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "The Phenix Carpet",
              "description": "Premium luxury carpets and rugs manufacturer since 1996",
              "url": "https://www.thephenixcarpets.com",
              "telephone": "+91-9454049020",
              "email": "info@thephenixcarpets.com",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Gaderiyapur, Mondh",
                "addressLocality": "Bhadohi",
                "addressRegion": "Uttar Pradesh",
                "postalCode": "221406",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": "25.3960",
                "longitude": "82.5687"
              },

              "areaServed": [ "USA", "India"],
              "serviceType": "Carpet Manufacturing and Export",
              "logo": "https://www.thephenixcarpets.com/images/logo.png",
              "image": "https://www.thephenixcarpets.com/images/001_1.jpg"
            })
          }}
        />
      </head>
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        <WhatsAppFloat phoneNumber="9454049020" />
        {/* <Footer /> */}
      </body>
    </html>
  )
}