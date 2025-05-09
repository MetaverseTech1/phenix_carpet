'use client';

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const HeroSection = () => {
  // Hardcoded slides for simplicity
  const slides = [
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
    {
      image: "/images/hand_tuft.jpeg",
      title: "Hand Tufted Rugs",
      description: "Experience the perfect harmony of tradition and innovation in every thread.",
      cta: "Discover More",
      link: "/products/hand-tufted",
    },
    {
      image: "/images/002_1.jpg",
      title: "Hand tufted Carpets",
      description: "Hand tufted carpets come in various shapes, sizes, and designs. They can be made from a wide range of materials.",
      cta: "Discover More",
      link: "/products/hand-tufted",
    },
  ];
  
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleClick = (link) => {
    if (link) {
      router.push(link);
    }
  };

  // Current slide data
  const currentSlideData = slides[currentSlide];

  return (
    <div className="relative" style={{ height: "550px" }}>
      {/* Basic Image Container */}
      <div style={{ position: "relative", width: "100%", height: "100%" }}>
        <img 
          src={currentSlideData.image}
          alt={currentSlideData.title}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
        
        {/* Dark Overlay */}
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          backgroundColor: "rgba(0,0,0,0.4)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {/* Content */}
          <div style={{ textAlign: "center", color: "white", padding: "0 20px", maxWidth: "800px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "1rem" }}>
              {currentSlideData.title}
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
              {currentSlideData.description}
            </p>
            <button
              onClick={() => handleClick(currentSlideData.link)}
              style={{ 
                backgroundColor: "white", 
                color: "#333", 
                padding: "10px 24px", 
                borderRadius: "50px",
                border: "none",
                fontSize: "1rem",
                fontWeight: "500",
                cursor: "pointer"
              }}
            >
              {currentSlideData.cta}
            </button>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        style={{ 
          position: "absolute", 
          left: "20px", 
          top: "50%", 
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        <ChevronLeft size={24} color="#333" />
      </button>
      
      <button
        onClick={nextSlide}
        style={{ 
          position: "absolute", 
          right: "20px", 
          top: "50%", 
          transform: "translateY(-50%)",
          backgroundColor: "rgba(255,255,255,0.8)",
          borderRadius: "50%",
          border: "none",
          padding: "10px",
          cursor: "pointer",
          zIndex: 10
        }}
      >
        <ChevronRight size={24} color="#333" />
      </button>

      {/* Slide Indicators */}
      <div style={{ 
        position: "absolute", 
        bottom: "20px", 
        left: "50%", 
        transform: "translateX(-50%)",
        display: "flex",
        gap: "8px",
        zIndex: 10
      }}>
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            style={{ 
              width: currentSlide === index ? "30px" : "10px", 
              height: "10px", 
              borderRadius: "50px", 
              backgroundColor: currentSlide === index ? "white" : "rgba(255,255,255,0.6)",
              border: "none",
              padding: 0,
              cursor: "pointer"
            }}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSection;