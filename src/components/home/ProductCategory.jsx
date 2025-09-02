// ProductCategory.jsx
'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';

const ProductCategory = ({ categories }) => {
  const router = useRouter();

  const handleCategoryClick = (slug) => {
    // Navigate to category page
    console.log(`Navigating to ${slug}`);
    router.push(slug);
  };

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Product Categories</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-2">
        {categories.map((category) => (
          <div 
            key={category.id}
            className="group border border-gray-500 p-2 bg-white rounded-md shadow-md hover:shadow-xl transition-shadow duration-300 cursor-pointer overflow-hidden"
            onClick={() => handleCategoryClick(category.slug)}
          >
            <div className="relative overflow-hidden flex justify-center">
              <div className="relative md:w-full max-w-fit md:h-[17.5rem] h-[19rem]">
                <img 
                  src={category.image}
                  alt={category.name}
                  className="h-full w-full object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div className="absolute flex justify-center inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <div className="p-4 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Plus className="mx-auto mb-2" size={24} />
                  <p className="text-sm">View Collection</p>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <div className="mb-2">
                <h3 className="text-[16px] tracking-[0.04rem] font-semibold text-gray-800">
                  {category.name}
                </h3>
              </div>
              <p className="text-gray-600 text-xs tracking-[0.04rem]">{category.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductCategory;