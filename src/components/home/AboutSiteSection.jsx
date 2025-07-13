'use client';
import React from 'react';
import { useRouter } from 'next/navigation';

const AboutSiteSection = () => {
  const router = useRouter();
     
  return (
    <section className="py-16 md:py-24 bg-neutral-50" aria-labelledby="about-heading">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header with improved SEO structure */}
          <header className="text-center mb-12">
            <h2 
              id="about-heading" 
              className="text-2xl md:text-3xl font-bold mb-4 text-gray-900"
            >
              Dhruv Rugs International - Premium Handcrafted Rugs
            </h2>
            <div className="flex justify-center items-center gap-2 mb-6" aria-hidden="true">
              <div className="h-px w-12 bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
          </header>

          {/* Main Content with better semantic structure */}
          <article className="flex justify-center">
            <div className="max-w-4xl text-center space-y-6">
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Crafting Excellence Since Generations
              </h3>
              
              <div className="prose prose-lg max-w-none text-gray-600 space-y-6">
                <p>
                  <strong>Handmade rugs</strong> are becoming increasingly popular due to their unique beauty, durability, and long-lasting quality. These <em>premium floor coverings</em> are crafted by skilled artisans who use ancient techniques and traditional methods to create intricate designs and patterns.
                </p>
                
                <p>
                  Each rug is made with <strong>high-quality materials</strong>, such as wool, silk, or cotton, which enhances their texture and feel. Our handmade rugs are not only a piece of art but also add warmth and character to any living space, making them perfect for both residential and commercial interiors.
                </p>
                
                <p>
                  With proper care, these <strong>investment-grade rugs</strong> can be passed down through generations, making them a valuable addition to your home décor collection.
                </p>
              </div>

              {/* Features Grid with semantic markup */}
              <div className="grid grid-cols-2 gap-4 max-w-md mx-auto mb-8" role="list">
                {[
                  { feature: 'Unique Beauty', description: 'One-of-a-kind designs' },
                  { feature: 'Traditional Methods', description: 'Ancient crafting techniques' },
                  { feature: 'Premium Materials', description: 'Finest wool, silk & cotton' },
                  { feature: 'Lasting Quality', description: 'Built to last generations' }
                ].map(({ feature, description }) => (
                  <div 
                    key={feature} 
                    className="flex items-center justify-center space-x-2"
                    role="listitem"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full" aria-hidden="true"></div>
                    <span className="text-sm text-gray-700" title={description}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA with improved accessibility */}
              <div>
                <button
                  onClick={() => router.push("/luxury-collection")}
                  className="inline-flex items-center px-8 py-3 text-white bg-gray-900 rounded-full hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900 focus:ring-offset-2 transition-colors duration-300"
                  aria-label="Explore our luxury collection of handcrafted rugs"
                >
                  Discover Our Collection
                </button>
              </div>
            </div>
          </article>
        </div>
      </div>

      {/* Structured data for this section */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "AboutPage",
            "mainEntity": {
              "@type": "Organization",
              "name": "Dhruv Rugs International",
              "description": "Premium manufacturer of handcrafted rugs using traditional methods and high-quality materials",
              "foundingDate": "2020",
              "specialty": [
                "Hand Knotted Rugs",
                "Hand Tufted Carpets",
                "Luxury Area Rugs",
                "Custom Rug Design"
              ],
              "hasOfferCatalog": {
                "@type": "OfferCatalog",
                "name": "Premium Rug Collections",
                "itemListElement": [
                  {
                    "@type": "Offer",
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Hand Knotted Rugs",
                      "category": "Home Decor"
                    }
                  },
                  {
                    "@type": "Offer", 
                    "itemOffered": {
                      "@type": "Product",
                      "name": "Hand Tufted Carpets",
                      "category": "Home Decor"
                    }
                  }
                ]
              }
            }
          })
        }}
      />
    </section>
  );
};

export default AboutSiteSection;