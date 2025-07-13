'use client';

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const HeroSection = ({ slides = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [preloadedImages, setPreloadedImages] = useState(new Set());
  const router = useRouter();

  // Fallback slides if none provided
  const defaultSlides = [
    {
      image: "/images/001_1.jpg",
      title: "Luxor Hand Knotted Rugs",
      description: "Luxury hand-knotted rugs are one of the most sought-after decor items due to their sheer elegance and opulence.",
      cta: "Explore Collection",
      link: "/products/hand-knotted",
    },
    {
      image: "/images/008_1.jpg", 
      title: "Hand Knotted Rugs",
      description: "Hand knotted rugs are also known for their luxurious feel. The intricate design and soft pile of the rug can add elegance and sophistication to any space.",
      cta: "View Modern Series",
      link: "/products/hand-knotted",
    },
    {
      image: "/images/luxury_defined.jpeg",
      title: "Wall to Wall Carpets",
      description: "Experience the perfect harmony of tradition and innovation in every thread.",
      cta: "Discover More",
      link: "/luxury-collection",
    },
  ];

  const slideData = slides.length > 0 ? slides : defaultSlides;

  // Preload images for better performance
  useEffect(() => {
    const preloadImages = async () => {
      const imagePromises = slideData.map((slide) => {
        return new Promise((resolve, reject) => {
          const img = new window.Image();
          img.onload = () => {
            setPreloadedImages(prev => new Set([...prev, slide.image]));
            resolve(slide.image);
          };
          img.onerror = reject;
          img.src = slide.image;
        });
      });

      try {
        await Promise.allSettled(imagePromises);
        setIsLoaded(true);
      } catch (error) {
        console.error('Error preloading images:', error);
        setIsLoaded(true);
      }
    };

    preloadImages();
  }, [slideData]);

  // Auto-advance slides with pause on hover
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slideData.length);
    }, 6000); // Slightly longer for better UX

    return () => clearInterval(timer);
  }, [slideData.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slideData.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slideData.length) % slideData.length);
  };

  const handleClick = (link) => {
    if (link) {
      router.push(link);
    }
  };

  const currentSlideData = slideData[currentSlide];

  return (
    <section 
      className="relative w-full h-[300px] md:h-[550px] overflow-hidden"
      role="banner"
      aria-label="Hero carousel showcasing premium rugs"
    >
      {/* Main Image Container */}
      <div className="relative w-full h-full">
        {isLoaded ? (
          <Image
            src={currentSlideData.image}
            alt={`${currentSlideData.title} - Premium handcrafted rugs by Dhruv Rugs International`}
            fill
            priority={currentSlide === 0}
            quality={85}
            sizes="100vw"
            className="object-cover"
            placeholder="blur"
            blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkbHB0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
          />
        ) : (
          <div className="w-full h-full bg-gray-200 animate-pulse flex items-center justify-center">
            <div className="text-gray-400">Loading...</div>
          </div>
        )}
        
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/40" />

        {/* Content Overlay */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white px-4 max-w-4xl mx-auto">
            <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
              {currentSlideData.title}
            </h1>
            <p className="text-sm md:text-lg lg:text-xl mb-6 md:mb-8 max-w-2xl mx-auto leading-relaxed">
              {currentSlideData.description}
            </p>
            <button
              onClick={() => handleClick(currentSlideData.link)}
              className="inline-flex items-center px-6 md:px-8 py-3 md:py-4 bg-white text-gray-900 font-semibold rounded-full hover:bg-gray-100 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-900"
              aria-label={`${currentSlideData.cta} - ${currentSlideData.title}`}
            >
              {currentSlideData.cta}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-white"
        aria-label="Next slide"
      >
        <ChevronRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 md:bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
        {slideData.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white ${
              currentSlide === index 
                ? 'w-8 bg-white' 
                : 'w-2 bg-white/60 hover:bg-white/80'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Schema.org structured data for carousel */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ImageGallery",
            "name": "Premium Rug Collections",
            "description": "Showcase of handcrafted rugs and carpets",
            "image": slideData.map(slide => ({
              "@type": "ImageObject",
              "url": slide.image,
              "caption": slide.title,
              "description": slide.description
            }))
          })
        }}
      />
    </section>
  );
};

export default HeroSection;