'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

const AboutSiteSection = () => {
  const router = useRouter();
  
  return (
    <div className="relative py-16 md:py-24 overflow-hidden bg-neutral-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" 
             style={{
               backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
               backgroundSize: '30px 30px'
             }}
        />
      </div>

      <div className="relative container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl tracking-[0.06rem] font-bold mb-4 text-gray-900">
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
            {/* Left Column - Image - Multiple fallback approaches */}
            <div className="relative group">
              <div className="relative rounded-lg overflow-hidden transform transition-transform duration-500 group-hover:scale-105">
                {/* Approach 1: Direct CSS background */}
                <div 
                  className="w-full h-[400px] relative rounded-lg"
                  style={{
                    backgroundColor: "#f0f0f0", /* Fallback background color */
                    backgroundImage: `url('/images/001_1.jpg')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                ></div>
                
                {/* Approach 2: HTML image as fallback (hidden by default) */}
                <img 
                  src="/images/001_1.jpg" 
                  alt="Handmade Carpet Craftsmanship" 
                  className="absolute inset-0 w-full h-full object-cover opacity-0"
                  onError={(e) => {
                    console.log("Background image failed to load, showing fallback image");
                    e.target.classList.remove('opacity-0');
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-10"></div>
              </div>
              
              {/* Decorative Elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-r-2 border-b-2 border-gray-400 opacity-50"></div>
              <div className="absolute -top-4 -left-4 w-24 h-24 border-l-2 border-t-2 border-gray-400 opacity-50"></div>
            </div>

            {/* Right Column - Text */}
            <div className="space-y-6">
              <div className="relative">
                <h3 className="text-xl md:text-2xl tracking-[0.04rem] font-semibold mb-4 text-gray-800">
                  Crafting Excellence Since Generations
                </h3>
                <p className="text-gray-600 tracking-[0.03rem] leading-relaxed mb-6">
                  Handmade rugs are becoming increasingly popular due to their unique beauty, durability, and long-lasting quality. These rugs are crafted by skilled artisans who use ancient techniques and traditional methods to create intricate designs and patterns.
                </p>
                <p className="text-gray-600 tracking-[0.03rem] leading-relaxed mb-6">
                  Each rug is made with high-quality materials, such as wool, silk, or cotton, which enhances their texture and feel. Handmade rugs are not only a piece of art but also add warmth and character to any living space.
                </p>
                <p className="text-gray-600 tracking-[0.03rem] leading-relaxed">
                  With proper care, these rugs can be passed down through generations, making them a valuable investment.
                </p>

                {/* Features List */}
                <div className="mt-8 grid grid-cols-2 gap-4">
                  {['Unique Beauty', 'Traditional Methods', 'Premium Materials', 'Lasting Quality'].map((feature) => (
                    <div key={feature} className="flex tracking-[0.04rem] items-center space-x-2">
                      <div className="w-2 h-2 bg-gray-400 rounded-full"></div>
                      <span className="text-sm text-gray-700">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <div className="mt-8">
                  <button 
                    onClick={() => router.push("/luxury-collection")} 
                    className="group relative inline-flex items-center px-8 py-3 text-base font-medium text-white bg-gray-900 rounded-full overflow-hidden transition-all duration-300 transform hover:scale-105"
                  >
                    <span className="relative z-10">Discover Our Collection</span>
                    <div className="absolute inset-0 bg-gray-700 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSiteSection;