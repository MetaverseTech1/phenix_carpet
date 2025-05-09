'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const AboutSiteSection = () => {
  const router = useRouter();
  
  return (
    <div className="py-16 md:py-24 bg-neutral-50">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4 text-gray-900">
              The Phenix Carpet
            </h2>
            <div className="flex justify-center items-center gap-2 mb-6">
              <div className="h-px w-12 bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image - Very Simple approach */}
            <div className="relative">
              <div className="rounded-lg overflow-hidden">
                <img 
                  src="/images/001_1.jpg" 
                  alt="Handmade Carpet Craftsmanship" 
                  className="w-full h-[400px] object-cover rounded-lg"
                />
              </div>
            </div>

            {/* Right Column - Text */}
            <div>
              <h3 className="text-xl md:text-2xl font-semibold mb-4 text-gray-800">
                Crafting Excellence Since Generations
              </h3>
              <p className="text-gray-600 mb-6">
                Handmade rugs are becoming increasingly popular due to their unique beauty, durability, and long-lasting quality. These rugs are crafted by skilled artisans who use ancient techniques and traditional methods to create intricate designs and patterns.
              </p>
              <p className="text-gray-600 mb-6">
                Each rug is made with high-quality materials, such as wool, silk, or cotton, which enhances their texture and feel. Handmade rugs are not only a piece of art but also add warmth and character to any living space.
              </p>
              <p className="text-gray-600">
                With proper care, these rugs can be passed down through generations, making them a valuable investment.
              </p>

              {/* Features List */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {['Unique Beauty', 'Traditional Methods', 'Premium Materials', 'Lasting Quality'].map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="mt-8">
                <button 
                  onClick={() => router.push("/luxury-collection")} 
                  className="px-8 py-3 text-white bg-gray-900 rounded-full hover:bg-gray-800"
                >
                  Discover Our Collection
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSiteSection;