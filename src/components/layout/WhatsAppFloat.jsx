'use client';

import React, { useState } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ phoneNumber = "1234567890" }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = () => {
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  return (
    <div className="fixed bottom-8 right-8 z-50">
      <div className="relative">
        {/* Animated ripple effect using CSS animations */}
        <div 
          className="absolute inset-0 rounded-full bg-green-500 opacity-20 animate-pulse"
          style={{
            animation: 'ripple 2s infinite ease-in-out'
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
            ${isHovered ? 'scale-110' : 'scale-100'}
            ${isPressed ? 'scale-95' : ''}
          `}
        >
          <MessageCircle 
            size={28} 
            className={`transition-transform duration-300 ${isHovered ? 'rotate-12' : ''}`} 
          />
          
          {/* Tooltip */}
          <span 
            className={`
              absolute right-full mr-4 bg-black text-white px-4 py-2 rounded-lg 
              text-sm whitespace-nowrap transition-all duration-300
              ${isHovered ? 'opacity-100 visible' : 'opacity-0 invisible'}
            `}
          >
            Chat with us on WhatsApp
          </span>
        </button>
      </div>
      
      {/* CSS for ripple animation */}
      <style jsx>{`
        @keyframes ripple {
          0% {
            transform: scale(1);
            opacity: 0.2;
          }
          50% {
            transform: scale(1.2);
            opacity: 0.1;
          }
          100% {
            transform: scale(1);
            opacity: 0.2;
          }
        }
      `}</style>
    </div>
  );
};

export default WhatsAppFloat;