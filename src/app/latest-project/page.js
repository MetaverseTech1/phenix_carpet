'use client';

import React, { useState } from 'react';

const LatestProject = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle subscription logic here
    setEmail('');
    alert('Thank you for subscribing!');
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Page Banner */}
      <div className="relative h-[40vh] bg-gray-900">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex flex-col justify-center items-center text-white px-4">
          <h1 className="text-2xl md:text-5xl font-bold mb-4 text-center tracking-[0.08rem]">
            Our Latest Projects
          </h1>
          <div className="flex items-center gap-4 mb-6">
            <div className="h-px w-12 bg-white opacity-60"></div>
            <div className="text-sm md:text-lg tracking-[0.06rem]">Artistry in Motion</div>
            <div className="h-px w-12 bg-white opacity-60"></div>
          </div>
        </div>
      </div>

      {/* Coming Soon Section */}
      <div className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-12">
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-6 tracking-[0.06rem]">
              Coming Soon
            </h2>
            <div className="flex justify-center items-center gap-2 mb-8">
              <div className="h-px w-12 bg-gray-300"></div>
              <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              <div className="h-px w-12 bg-gray-300"></div>
            </div>
            <p className="text-lg md:text-xl text-gray-600 mb-8 tracking-[0.04rem] leading-relaxed">
              We're weaving something extraordinary for you.
            </p>
          </div>

          {/* Preview Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Heritage Collection
              </h3>
              <p className="text-gray-600 tracking-[0.03rem] leading-relaxed">
                An upcoming series featuring traditional patterns reimagined for modern spaces. Each piece tells a story of cultural heritage through intricate designs and premium craftsmanship.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
              <h3 className="text-xl font-semibold mb-4 text-gray-800">
                Contemporary Fusion
              </h3>
              <p className="text-gray-600 tracking-[0.03rem] leading-relaxed">
                A bold new collection that bridges classical carpet-making techniques with contemporary design aesthetics. Experience the perfect blend of tradition and innovation.
              </p>
            </div>
          </div>

          {/* Newsletter Signup */}
          <div className="max-w-xl mx-auto">
            <h3 className="text-xl font-semibold mb-4 text-gray-800">
              Stay Updated
            </h3>
            <p className="text-gray-600 mb-6 tracking-[0.03rem]">
              Be the first to know when we launch our new collections. Subscribe to our newsletter for exclusive updates and previews.
            </p>
            <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:border-gray-900 transition-colors"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <button 
                type="submit"
                className="px-6 py-3 bg-gray-900 text-white rounded-full hover:bg-gray-800 transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestProject;