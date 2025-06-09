import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import GoogleAnalytics from '@/components/analytics/GoogleAnalytics'
import './globals.css'

export const metadata = {
  title: {
    default: 'Dhruv Rugs International - Luxury Carpets & Rugs',
    template: '%s | Dhruv Rugs International'
  },
  description: 'Premium luxury carpets and rugs manufacturer since 1996. Hand-knotted, hand-tufted, and handloom carpets for hospitality and residential spaces. Export quality from India.',
  keywords: 'luxury carpets, hand knotted rugs, hospitality carpets, premium rugs, Indian carpets, wool carpets, silk carpets, carpet manufacturer, carpet exporter',
  authors: [{ name: 'Dhruv Rugs International' }],
  creator: 'Dhruv Rugs International',
  publisher: 'Dhruv Rugs International',
  metadataBase: new URL('https://www.dhruvrugs.global'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.dhruvrugs.global',
    title: 'Dhruv Rugs International - Luxury Carpets & Rugs',
    description: 'Premium luxury carpets and rugs manufacturer since 1996. Hand-knotted, hand-tufted, and handloom carpets for hospitality and residential spaces.',
    siteName: 'Dhruv Rugs International',
    images: [
      {
        url: '/images/001_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Dhruv Rugs International - Luxury Carpets',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dhruv Rugs International - Luxury Carpets & Rugs',
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
        <link rel="canonical" href="https://www.dhruvrugs.global" />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "Dhruv Rugs International",
              "description": "Premium luxury carpets and rugs manufacturer since 1996",
              "url": "https://www.dhruvrugs.global",
              "telephone": "+91-8318600961",
              "email": "info@dhruvrugs.global",
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
              "logo": "https://www.dhruvrugs.global/images/LOGO3210.jpg",
              "image": "https://www.dhruvrugs.global/images/001_1.jpg"
            })
          }}
        />
      </head>
      <body>
        {/* <Header /> */}
        <main>{children}</main>
        {/* <WhatsAppFloat phoneNumber="8318600961" />
        <Footer /> */}
      </body>
    </html>
  )
}