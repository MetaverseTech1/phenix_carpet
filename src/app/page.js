import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">
          Phenix Carpet
        </h1>
        <div className="text-2xl text-gray-700 mb-2 font-medium">
          Is Now
        </div>
        <h2 className="text-4xl font-bold text-blue-600 mb-6">
          Dhruv Rugs International
        </h2>
        
        <div className="mb-6">
          <a 
            href="https://dhruvrugs.global" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg"
          >
            Visit Dhruv Rugs
          </a>
        </div>
        
        
      </div>
    </div>
  );
}