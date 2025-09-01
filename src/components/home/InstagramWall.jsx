'use client';

import React from "react";
import { Instagram, ExternalLink } from "lucide-react";
import Image from "next/image";

const InstagramWall = ({ collectionsInstagramWall = [] }) => {
  if (!collectionsInstagramWall.length) {
    return (
      <section className="w-full max-w-8xl mx-auto px-4 pt-16 pb-20">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Follow Us on Instagram</h2>
          <p className="text-gray-600">Stay connected for the latest updates on our rug collections.</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="w-full max-w-8xl mx-auto px-4 pt-16 pb-20" 
      aria-labelledby="instagram-heading"
    >
      <header className="text-center mb-12">
        <h2 
          id="instagram-heading" 
          className="text-3xl tracking-[0.05rem] font-bold mb-4"
        >
          Instagram Gallery
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Follow our journey and discover daily inspiration from our handcrafted rug collections. 
          See how our rugs transform spaces around the world.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="https://www.instagram.com/dhruvrugs.global?igsh=MWE2YTJpMjNoY2NqdA=="
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-pink-600 hover:text-pink-700 font-medium transition-colors"
            aria-label="Follow Dhruv Rugs on Instagram"
          >
            <Instagram className="w-5 h-5" />
            @dhruvrugs
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </header>

      <div 
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        role="grid"
        aria-label="Instagram posts gallery"
      >
        {collectionsInstagramWall.map((collection, index) => (
          <article 
            key={collection.id} 
            className="group relative"
            role="gridcell"
          >
            {/* Image Container */}
            <div className="relative h-72 overflow-hidden rounded-lg shadow-sm hover:shadow-lg transition-all duration-500">
              <div className="absolute inset-0 transition-transform duration-300 ease-in-out group-hover:scale-110">
                <Image
                  src={collection.image}
                  alt={`Instagram post ${index + 1} - Dhruv Rugs collection showcase`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                  loading={index < 4 ? "eager" : "lazy"}
                  quality={85}
                />
              </div>

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg flex items-center justify-center">
                <div className="text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Instagram className="w-8 h-8 mx-auto mb-2" />
                  <p className="text-sm font-medium">View on Instagram</p>
                </div>
              </div>
            </div>

            {/* Instagram Link Button */}
            <a
              href={collection.link}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 hover:scale-110 hover:bg-white focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
              aria-label={`View this post on Instagram - Image ${index + 1}`}
            >
              <Instagram className="w-5 h-5 text-pink-600" />
            </a>

            {/* Engagement Indicator */}
            <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="bg-white/90 backdrop-blur-sm rounded-full px-3 py-1">
                <span className="text-xs font-medium text-gray-800">Follow for more</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12">
        <a
          href="https://www.instagram.com/dhruvrugs.global?igsh=MWE2YTJpMjNoY2NqdA=="
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2"
        >
          <Instagram className="w-5 h-5" />
          Follow Us on Instagram
          <ExternalLink className="w-4 h-4" />
        </a>
      </div>

      {/* Structured Data for Social Media */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Dhruv Rugs Instagram Gallery",
            "description": "Latest posts from Dhruv Rugs International showcasing handcrafted rug collections",
            "publisher": {
              "@type": "Organization",
              "name": "Dhruv Rugs International",
              "sameAs": [
                "https://www.instagram.com/dhruvrugs"
              ]
            },
            "mainEntity": {
              "@type": "SocialMediaPosting",
              "author": {
                "@type": "Organization",
                "name": "Dhruv Rugs International"
              },
              "datePublished": new Date().toISOString(),
              "url": "https://www.instagram.com/dhruvrugs.global?igsh=MWE2YTJpMjNoY2NqdA==",
              "image": collectionsInstagramWall.map((item, index) => ({
                "@type": "ImageObject",
                "url": item.image,
                "description": `Instagram showcase ${index + 1} - Handcrafted rug collection`,
                "caption": "Premium handcrafted rugs by Dhruv Rugs International"
              }))
            }
          })
        }}
      />
    </section>
  );
};

export default InstagramWall;