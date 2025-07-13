'use client';

import React from 'react';
import { Plus } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const ProductCategory = ({ categories = [] }) => {
  const router = useRouter();

  const handleCategoryClick = (slug, categoryName) => {
    // Analytics tracking could be added here
    console.log(`Navigating to ${slug} - ${categoryName}`);
    router.push(slug);
  };

  const handleKeyPress = (event, slug, categoryName) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCategoryClick(slug, categoryName);
    }
  };

  if (!categories.length) {
    return (
      <section className="w-full max-w-7xl mx-auto px-4 py-12">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Product Categories</h2>
          <p className="text-gray-600">Categories are currently being updated. Please check back soon.</p>
        </div>
      </section>
    );
  }

  return (
    <section 
      className="w-full max-w-7xl mx-auto px-4 py-12" 
      aria-labelledby="categories-heading"
    >
      <header className="mb-8">
        <h2 
          id="categories-heading" 
          className="text-3xl font-bold text-gray-800 mb-2"
        >
          Premium Rug Categories
        </h2>
        <p className="text-gray-600 max-w-2xl">
          Explore our curated collection of handcrafted rugs, each category representing centuries of traditional craftsmanship and modern design innovation.
        </p>
      </header>
      
      <div 
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4"
        role="grid"
        aria-label="Product category grid"
      >
        {categories.map((category, index) => (
          <article 
            key={category.id}
            className="group border border-gray-500 p-2 bg-white rounded-md shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer overflow-hidden focus-within:ring-2 focus-within:ring-blue-500"
            role="gridcell"
            tabIndex={0}
            onClick={() => handleCategoryClick(category.slug, category.name)}
            onKeyPress={(e) => handleKeyPress(e, category.slug, category.name)}
            aria-label={`Browse ${category.name} collection - ${category.description}`}
          >
            <div className="relative overflow-hidden flex justify-center">
              <div className="relative md:w-full max-w-fit md:h-[17.5rem] h-[19rem]">
                <Image 
                  src={category.image}
                  alt={`${category.name} - Premium handcrafted rugs collection`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 20vw"
                  className="object-cover rounded-md transition-transform duration-300 group-hover:scale-105"
                  quality={80}
                  loading={index < 3 ? "eager" : "lazy"} // Load first 3 images immediately
                />
              </div>
              
              {/* Hover Overlay */}
              <div 
                className="absolute flex justify-center inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center"
                aria-hidden="true"
              >
                <div className="p-4 text-white text-center transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  <Plus className="mx-auto mb-2" size={24} aria-hidden="true" />
                  <span className="text-sm font-medium">View Collection</span>
                </div>
              </div>
            </div>
            
            <div className="p-4">
              <header className="mb-2">
                <h3 className="text-[16px] tracking-[0.04rem] font-semibold text-gray-800">
                  {category.name}
                </h3>
              </header>
              <p className="text-gray-600 text-xs tracking-[0.04rem] leading-relaxed">
                {category.description}
              </p>
              
              {/* Hidden content for SEO */}
              <div className="sr-only">
                Premium {category.name.toLowerCase()} available in custom sizes. 
                Handcrafted with traditional techniques using finest materials.
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Structured Data for Product Categories */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Premium Rug Categories",
            "description": "Collection of handcrafted rug categories available at Dhruv Rugs International",
            "numberOfItems": categories.length,
            "itemListElement": categories.map((category, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "ProductGroup",
                "name": category.name,
                "description": category.description,
                "image": category.image,
                "url": category.slug,
                "category": "Home Decor",
                "brand": {
                  "@type": "Brand",
                  "name": "Dhruv Rugs International"
                },
                "hasVariant": {
                  "@type": "ProductModel",
                  "name": `Custom ${category.name}`,
                  "description": `Customizable ${category.name.toLowerCase()} in various sizes and designs`
                }
              }
            }))
          })
        }}
      />
    </section>
  );
};

export default ProductCategory;