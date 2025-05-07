'use client';

import React, { useState, useEffect } from 'react';
import { Search, X } from 'lucide-react';

const SearchModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = () => setIsOpen(true);
  const closeModal = () => {
    setIsOpen(false);
    setSearchQuery('');
  };

  // Handle escape key to close modal
  useEffect(() => {
    const handleEscKey = (e) => {
      if (e.key === 'Escape' && isOpen) {
        closeModal();
      }
    };

    if (isOpen) {
      window.addEventListener('keydown', handleEscKey);
    }

    return () => {
      window.removeEventListener('keydown', handleEscKey);
    };
  }, [isOpen]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality here
      console.log('Searching for:', searchQuery);
      
      // In Next.js, you would typically use router.push here
      // const router = useRouter();
      // router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
      
      closeModal();
    }
  };

  return (
    <>
      {/* Search Icon in Header */}
      <div className="hidden md:flex items-center">
        <Search 
          className="w-5 h-5 text-gray-600 cursor-pointer hover:text-blue-600 transition-colors" 
          onClick={openModal}
        />
      </div>

      {/* Full Screen Modal */}
      <div 
        className={`fixed inset-0 bg-gray-900 transition-opacity duration-300 z-50 ${
          isOpen 
            ? 'opacity-100 pointer-events-auto' 
            : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4">
          {/* Close Button */}
          <button 
            onClick={closeModal}
            className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Search Container */}
          <div className="flex flex-col items-center justify-center min-h-screen">
            {/* Search Input */}
            <div className={`w-full max-w-3xl transform transition-all duration-300 ${
              isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'
            }`}>
              <form onSubmit={handleSearchSubmit}>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full bg-transparent border-b-2 border-gray-600 py-4 pl-12 pr-4 text-white text-xl placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
                    autoFocus={isOpen}
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchModal;