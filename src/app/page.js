import React from 'react';
import { Metadata } from 'next';
import HeroSection from '@/components/home/HeroSection';
import AboutSiteSection from '@/components/home/AboutSiteSection';
import AboutUsSection from '@/components/home/AboutUsSection';
import ProductCategory from '@/components/home/ProductCategory';
import ProductShowcase from '@/components/home/ProductShowcase';
import InstagramWall from '@/components/home/InstagramWall';
import { slides, categories, collectionsInstagramWall } from '../lib/data';

// SEO Metadata
export const metadata = {
  title: 'Premium Hand Knotted Rugs & Carpets | Dhruv Rugs International',
  description: 'Discover exquisite hand knotted rugs, hand tufted carpets, and luxury area rugs at Dhruv Rugs International. Custom sizes available. Premium quality since 2020.',
  keywords: 'hand knotted rugs, hand tufted carpets, luxury rugs, area rugs, custom rugs, handmade carpets, premium rugs India, traditional rugs, modern rugs',
  authors: [{ name: 'Dhruv Rugs International' }],
  creator: 'Dhruv Rugs International',
  publisher: 'Dhruv Rugs International',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://dhruvrugs.com'), // Replace with your actual domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Premium Hand Knotted Rugs & Carpets | Dhruv Rugs International',
    description: 'Discover exquisite hand knotted rugs, hand tufted carpets, and luxury area rugs. Custom sizes and premium quality craftsmanship.',
    url: '/',
    siteName: 'Dhruv Rugs International',
    images: [
      {
        url: '/images/001_1.jpg',
        width: 1200,
        height: 630,
        alt: 'Premium Hand Knotted Rugs by Dhruv Rugs International',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Premium Hand Knotted Rugs & Carpets | Dhruv Rugs International',
    description: 'Discover exquisite hand knotted rugs, hand tufted carpets, and luxury area rugs. Custom sizes and premium quality craftsmanship.',
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

};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'Organization',
      '@id': 'https://dhruvrugs.com/#organization',
      name: 'Dhruv Rugs International',
      url: 'https://dhruvrugs.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://dhruvrugs.com/logo.png',
      },
      foundingDate: '2020',
      description: 'Premium manufacturer of hand knotted rugs, hand tufted carpets, and luxury area rugs with custom sizing options.',
      address: {
        '@type': 'PostalAddress',
        addressCountry: 'IN',
        addressRegion: 'India',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: '+91-8318600961',
        contactType: 'Customer Service',
      },
      sameAs: [
        'https://www.instagram.com/dhruvrugs',
        
      ],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://dhruvrugs.com/#website',
      url: 'https://dhruvrugs.com',
      name: 'Dhruv Rugs International',
      publisher: {
        '@id': 'https://dhruvrugs.com/#organization',
      },
      potentialAction: {
        '@type': 'SearchAction',
        target: 'https://dhruvrugs.com/search?q={search_term_string}',
        'query-input': 'required name=search_term_string',
      },
    },
    {
      '@type': 'WebPage',
      '@id': 'https://dhruvrugs.com/#webpage',
      url: 'https://dhruvrugs.com',
      name: 'Premium Hand Knotted Rugs & Carpets | Dhruv Rugs International',
      description: 'Discover exquisite hand knotted rugs, hand tufted carpets, and luxury area rugs at Dhruv Rugs International. Custom sizes available.',
      isPartOf: {
        '@id': 'https://dhruvrugs.com/#website',
      },
      about: {
        '@id': 'https://dhruvrugs.com/#organization',
      },
      mainEntity: {
        '@type': 'ItemList',
        numberOfItems: categories.length,
        itemListElement: categories.map((category, index) => ({
          '@type': 'ListItem',
          position: index + 1,
          item: {
            '@type': 'Product',
            name: category.name,
            description: category.description,
            category: 'Home Decor',
            brand: {
              '@type': 'Brand',
              name: 'Dhruv Rugs International',
            },
          },
        })),
      },
    },
    {
      '@type': 'BreadcrumbList',
      itemListElement: [
        {
          '@type': 'ListItem',
          position: 1,
          name: 'Home',
          item: 'https://dhruvrugs.com',
        },
      ],
    },
  ],
};

export default function Home() {
  return (
    <>
      {/* JSON-LD Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      
      {/* Semantic HTML5 Structure */}
      <main role="main">
        {/* Hero Section with proper heading hierarchy */}
        <section aria-label="Hero showcase of premium rugs">
          <HeroSection slides={slides} />
        </section>

        {/* About Site Section */}
        <section aria-label="About Dhruv Rugs International">
          <AboutSiteSection />
        </section>

        {/* About Us Section */}
        <section aria-label="Our story and craftsmanship">
          <AboutUsSection />
        </section>

        {/* Product Categories Section */}
        <section aria-label="Browse rug categories">
          <ProductCategory categories={categories} />
        </section>

        {/* Product Showcase Section */}
        <section aria-label="Featured rug collections">
          <ProductShowcase />
        </section>

        {/* Instagram Wall Section */}
        <section aria-label="Follow us on Instagram">
          <InstagramWall collectionsInstagramWall={collectionsInstagramWall} />
        </section>
      </main>
    </>
  );
}