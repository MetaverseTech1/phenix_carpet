'use client';

import React, { useState, useEffect, useCallback } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

const ProductShowcase = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [itemsToShow, setItemsToShow] = useState(4);
  const [isAutoplayActive, setIsAutoplayActive] = useState(true);
  
  const carouselItems = [
    {
      id: 1,
      image: "/images/ht3.jpg",
      alt: "Hand Tufted Designer Rug - Modern Geometric Pattern",
      title: "Hand Tufted Collection",
      category: "Hand Tufted"
    },
    {
      id: 2,
      image: "/images/ht6.jpg",
      alt: "Luxury Hand Tufted Rug - Premium Wool Design",
      title: "Premium Wool Series",
      category: "Hand Tufted"
    },
    {
      id: 3,
      image: "/images/20-1-768x1029-1.jpg",
      alt: "Natural Jute Area Rug - Eco-Friendly Home Decor",
      title: "Natural Jute Collection",
      category: "Jute"
    },
    {
      id: 4,
      image: "/images/16.jpg",
      alt: "Traditional Flat Weave Kilim - Handwoven Carpet",
      title: "Flat Weave Kilim",
      category: "Flat Weave"
    },
    {
      id: 5,
      image: "/images/022.jpg",
      alt: "Classic Hand Knotted Rug - Artisan Crafted",
      title: "Classic Hand Knotted",
      category: "Hand Knotted"
    },
    {
      id: 6,
      image: "/images/HK01.jpg",
      alt: "Luxury Hand Knotted Persian Style Rug",
      title: "Persian Style Collection",
      category: "Hand Knotted"
    },
    {
      id: 7,
      image: "/images/27-768x1029.jpg",
      alt: "Contemporary Hand Loom Rug - Modern Design",
      title: "Contemporary Hand Loom",
      category: "Hand Loom"
    },
    {
      id: 8,
      image: "/images/004-1-768x1028.jpg",
      alt: "Artisan Flat Weave Rug - Traditional Craftsmanship",
      title: "Artisan Flat Weave",
      category: "Flat Weave"
    },
    {
      id: 9,
      image: "/images/08.jpg",
      alt: "Premium Hand Knotted Area Rug - High Quality",
      title: "Premium Hand Knotted",
      category: "Hand Knotted"
    },
    {
      id: 10,
      image: "/images/HL04.jpg",
      alt: "Hand Loom Textured Rug - Natural Fibers",
      title: "Hand Loom Natural",
      category: "Hand Loom"
    },
    {
      id: 11,
      image: "/images/108.jpg",
      alt: "Designer Hand Knotted Rug - Custom Pattern",
      title: "Designer Collection",
      category: "Hand Knotted"
    },
  ];

  // Responsive items calculation
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setItemsToShow(1);
      } else if (width < 1024) {
        setItemsToShow(2);
      } else {
        setItemsToShow(4);
      }
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % carouselItems.length);
  }, [carouselItems.length]);

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? carouselItems.length - 1 : prev - 1
    );
  };

  // Get visible items based on current index
  const getVisibleItems = () => {
    const items = [];
    for (let i = 0; i < itemsToShow; i++) {
      const index = (currentIndex + i) % carouselItems.length;
      items.push(carouselItems[index]);
    }
    return items;
  };

  // Autoplay with pause on hover
  useEffect(() => {
    if (!isAutoplayActive) return;
    
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide, isAutoplayActive]);

  const handleMouseEnter = () => setIsAutoplayActive(false);
  const handleMouseLeave = () => setIsAutoplayActive(true);

  return (
    <section 
      className="w-full bg-gradient-to-r from-gray-50 to-gray-200"
      aria-labelledby="showcase-heading"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Section - Featured Product */}
          <div className="lg:col-span-4 relative overflow-hidden group">
            <div className="relative w-full h-96 lg:h-full">
              <Image
                src="/images/ht9-765x1024.jpg"
                alt="Featured Hand Tufted Rug - Premium Quality Showcase"
                fill
                className="object-cover rounded-lg transition-transform duration-500 group-hover:scale-105"
                priority
                sizes="(max-width: 1024px) 100vw, 33vw"
              />
              
              {/* Overlay with product info */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg" />
              <div className="absolute bottom-4 left-4 text-white">
                <h3 className="text-xl font-bold mb-2">Featured Collection</h3>
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                  <span className="ml-2 text-sm">Premium Quality</span>
                </div>
                <p className="text-sm opacity-90">Hand Tufted Excellence</p>
              </div>
            </div>
          </div>

          {/* Right Section - Content and Carousel */}
          <div className="lg:col-span-8 flex flex-col justify-between">
            {/* Header Content */}
            <header className="mb-8 py-2">
              <div className="text-start font-semibold mb-4 tracking-[0.05rem] text-blue-600 uppercase text-sm">
                In Stock Collection
              </div>
              <h2 
                id="showcase-heading"
                className="text-2xl lg:text-3xl text-start font-bold tracking-[0.05rem] mb-4"
              >
                Dhruv Rugs International - Bespoke Craftsmanship
              </h2>
              <div className="prose max-w-none text-gray-600 text-start tracking-[0.03rem]">
                <p className="mb-4">
                  Despite our extensive range of <strong>stock designs and sizes</strong>, you may still find it necessary to have a chosen design specifically tailored to your space.
                </p>
                <p>
                  We can adjust the <em>colors and materials</em>, the scale of pattern, size and shape of the rug to fit a room or work with an existing décor scheme. Our <strong>custom rug services</strong> ensure perfect integration with your interior design vision.
                </p>
              </div>
            </header>

            {/* Carousel Section */}
            <div className="relative mt-auto" role="region" aria-label="Product carousel">
              {/* Carousel Container */}
              <div className="relative overflow-hidden rounded-lg">
                <div 
                  className="flex gap-4 transition-all duration-500 ease-in-out"
                  style={{ transform: `translateX(-${(currentIndex % carouselItems.length) * (100 / itemsToShow)}%)` }}
                >
                  {carouselItems.map((item) => (
                    <article
                      key={item.id}
                      className="flex-shrink-0 transform transition-transform duration-700 ease-in-out hover:scale-105"
                      style={{ width: `calc(${100 / itemsToShow}% - ${(itemsToShow - 1) * 16 / itemsToShow}px)` }}
                    >
                      <div className="relative w-full h-[19rem] md:h-[20rem] group">
                        <Image
                          src={item.image}
                          alt={item.alt}
                          fill
                          className="object-cover rounded-lg"
                          sizes={`(max-width: 640px) 100vw, (max-width: 1024px) 50vw, ${100 / itemsToShow}vw`}
                          loading="lazy"
                        />
                        
                        {/* Product Info Overlay */}
                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
                        <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                          <h4 className="font-semibold text-sm mb-1">{item.title}</h4>
                          <p className="text-xs opacity-90">{item.category}</p>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </div>

              {/* Navigation Controls */}
              <button
                onClick={prevSlide}
                className="absolute -left-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Previous products"
              >
                <ChevronLeft size={20} className="text-gray-800" />
              </button>
              
              <button
                onClick={nextSlide}
                className="absolute -right-4 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Next products"
              >
                <ChevronRight size={20} className="text-gray-800" />
              </button>

              {/* Progress Indicators */}
              <div className="flex justify-center mt-6 gap-2">
                {Array.from({ length: Math.ceil(carouselItems.length / itemsToShow) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index * itemsToShow)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      Math.floor(currentIndex / itemsToShow) === index 
                        ? 'w-8 bg-blue-600' 
                        : 'w-2 bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide group ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Structured Data */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Product",
            "name": "Custom Handcrafted Rugs",
            "description": "Bespoke rug design services with customizable colors, materials, patterns, and sizes",
            "brand": {
              "@type": "Brand",
              "name": "Dhruv Rugs International"
            },
            "offers": {
              "@type": "Offer",
              "availability": "https://schema.org/InStock",
              "priceCurrency": "INR",
              "description": "Custom sizing and design available"
            },
            "hasVariant": carouselItems.map(item => ({
              "@type": "ProductModel",
              "name": item.title,
              "category": item.category,
              "image": item.image
            }))
          })
        }}
      />
    </section>
  );
};

export default ProductShowcase;