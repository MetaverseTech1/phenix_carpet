// app/products/[category]/page.js
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  categoryDescriptions,
  productsCategoryCollection,
} from "@/lib/data";
import PageBanner from "@/components/common/PageBanner";

export default function ProductsPage({ params }) {
  // Use React.use to unwrap params if available, otherwise fall back to direct access
  const paramsObj = React.use ? React.use(params) : params;
  const { category } = paramsObj;
  
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Normalize category from URL
  const normalizedCategory = category
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Filter products based on category
  const filteredProducts = productsCategoryCollection.filter(
    (product) => product.category === normalizedCategory
  );

  useEffect(() => {
    // Log for debugging
    console.log("Category:", normalizedCategory);
    console.log("Filtered Products:", filteredProducts);
    setLoading(false);
  }, [normalizedCategory, filteredProducts]);

  const handleProductClick = (productId) => {
    // FIX: Change from /product/ to /products/ to match the folder structure
    router.push(`/products/${category}/${productId}`);
  };

  const description =
    categoryDescriptions[normalizedCategory] || "Description not available.";

  return (
    <div className="min-h-screen">
      {/* Page Banner */}
      <PageBanner
        title={normalizedCategory}
        subtitle="Luxury Carpets for Premium Spaces"
        backgroundImage="url('/images/004_1.jpg')"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: `${normalizedCategory}` },
        ]}
      />

      <div className="mx-auto">
        {/* product category */}
        <div className="md:px-14 px-5 py-8 flex flex-col items-start bg-gray-200">
          <h3 className="md:text-2xl text-xl font-bold mb-4 tracking-[0.05rem]">
            {normalizedCategory} Rugs
          </h3>
          <p className="text-gray-700 max-sm:text-sm text-start tracking-[0.05rem]">
            {description}
          </p>
        </div>

        <div className="container mx-auto px-4 py-10">
          {loading ? (
            <p className="text-center">Loading products...</p>
          ) : (
            <>
              {/* Product Grid */}
              {filteredProducts.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.id}
                      onClick={() => handleProductClick(product.id)}
                      className="group bg-white cursor-pointer border border-gray-500 p-2 mb-5 rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                    >
                      {/* Product Image */}
                      <div className="relative overflow-hidden" style={{ height: '280px' }}>
                        {/* Display image with error handling */}
                        <img
                          src={product.image}
                          alt={product.name}
                          loading="lazy"
                          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                          onError={(e) => {
                            console.error(`Error loading image: ${product.image}`);
                            e.target.src = '/images/placeholder.jpg'; // Fallback image
                            e.target.onerror = null; // Prevent infinite loop
                          }}
                        />

                        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                      </div>

                      {/* Product Info */}
                      <div className="py-2 px-6">
                        <h3 className="text-lg font-semibold tracking-[0.04rem] text-gray-900 mb-2">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-center text-gray-600">
                  No products found in this category.
                </p>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
}