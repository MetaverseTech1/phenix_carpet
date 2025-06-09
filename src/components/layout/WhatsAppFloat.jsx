'use client';

import React, { useState, useEffect } from 'react';
import { MessageCircle } from 'lucide-react';

const WhatsAppFloat = ({ phoneNumber = "1234567890" }) => {
  // Format phone number according to E.164 standard for WhatsApp
  const formatPhoneNumber = (number) => {
    if (!number) return '';
    
    // Remove all non-digit characters
    let cleanNumber = number.toString().replace(/\D/g, '');
    
    // Handle different input formats
    if (cleanNumber.length === 10 && /^[6-9]/.test(cleanNumber)) {
      // Indian mobile number without country code
      cleanNumber = `91${cleanNumber}`;
    } else if (cleanNumber.length === 11 && cleanNumber.startsWith('0')) {
      // Remove leading zero and add country code
      cleanNumber = `91${cleanNumber.substring(1)}`;
    } else if (cleanNumber.length === 12 && cleanNumber.startsWith('91')) {
      // Already has Indian country code
      cleanNumber = cleanNumber;
    } else if (cleanNumber.length === 13 && cleanNumber.startsWith('091')) {
      // Remove leading zero from country code
      cleanNumber = cleanNumber.substring(1);
    }
    
    // Validate final format (should be 12 digits for Indian numbers: 91 + 10 digits)
    if (!/^91[6-9]\d{9}$/.test(cleanNumber)) {
      console.warn('Invalid phone number format:', number, 'cleaned to:', cleanNumber);
    }
    
    return cleanNumber;
  };
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
    const formattedNumber = formatPhoneNumber(phoneNumber);
    const whatsappUrl = `https://wa.me/${formattedNumber}`;
    
    // Debug logging
    console.log('Original number:', phoneNumber);
    console.log('Formatted number:', formattedNumber);
    console.log('WhatsApp URL:', whatsappUrl);
    
    // Validate the URL format
    if (formattedNumber && formattedNumber.length >= 10) {
      window.open(whatsappUrl, '_blank');
    } else {
      console.error('Invalid phone number format. Cannot open WhatsApp.');
      alert('Invalid phone number format. Please check the number.');
    }
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