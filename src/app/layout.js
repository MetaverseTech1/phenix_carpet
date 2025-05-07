import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import WhatsAppFloat from '@/components/layout/WhatsAppFloat'
import './globals.css'

export const metadata = {
  title: 'The Phenix Carpet',
  description: 'Luxury carpets and rugs by The Phenix Carpet',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
      <Header />
        <main>{children}</main>
        <WhatsAppFloat phoneNumber="9454049020" />
        <Footer />
      </body>
    </html>
  )
}