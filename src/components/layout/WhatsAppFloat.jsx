'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ phoneNumber = "1234567890" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);
  const [rippleScale, setRippleScale] = useState(1);

  // Custom ripple animation using React state
  useEffect(() => {
    const interval = setInterval(() => {
      setRippleScale(prevScale => {
        if (prevScale >= 1.2) return 1;
        return prevScale + 0.01;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Animated ripple effect using transform */}
        <div 
          className="absolute inset-0 rounded-full bg-green-500 opacity-20 transition-all duration-100"
          style={{
            transform: `scale(${rippleScale})`,
            opacity: rippleScale > 1.1 ? 0.1 : 0.2
          }}
        />
        
        {/* Main button */}
        <button
          onClick={handleClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onMouseDown={() => setIsPressed(true)}
          onMouseUp={() => setIsPressed(false)}
          className={`
            relative bg-green-500 hover:bg-green-600 text-white p-4 rounded-full 
            shadow-lg flex items-center justify-center group transition-all duration-300
            transform-gpu
            ${isHovered ? 'scale-110' : 'scale-100'}
            ${isPressed ? 'scale-95' : ''}
          `}
        >
          <MessageCircle 
            size={28} 
            className={`transition-transform duration-300 ${isHovered ? 'rotate-12' : 'rotate-0'}`} 
          />
          
          {/* Tooltip */}
          <span 
            className={`
              absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg 
              text-sm whitespace-nowrap transition-all duration-300
              ${isHovered ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible translate-x-2'}
            `}
          >
            Chat with us on WhatsApp
          </span>
        </button>
      </div>
    </div>
  );
};

export default WhatsAppFloat;