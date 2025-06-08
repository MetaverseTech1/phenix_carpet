import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8 max-w-md">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Website Moved
        </h1>
        <p className="text-xl text-gray-600 mb-6">
          This website has been moved to Dhruv Rugs
        </p>
        
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
        
        <div className="text-gray-500 text-sm">
          Please update your bookmarks accordingly
        </div>
        
        <div className="mt-4 text-gray-400 text-sm">
          You will be automatically redirected in a few seconds...
        </div>
      </div>
    </div>
  );
}