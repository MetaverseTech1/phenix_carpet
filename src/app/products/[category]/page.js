// app/products/[category]/page.js
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

// Import data directly to simplify debugging
import { categoryDescriptions, productsCategoryCollection } from "@/lib/data";

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
    // Set loading to false once component mounts
    setLoading(false);
  }, []);

  const handleProductClick = (productId) => {
    router.push(`/products/${category}/${productId}`);
  };

  // Get description from normalized category
  const description =
    categoryDescriptions[normalizedCategory] || "Description not available.";

  // Function to normalize image paths
  const normalizeImagePath = (imagePath) => {
    if (!imagePath) return '/images/placeholder.jpg';
    
    // Handle external URLs
    if (imagePath.startsWith('http')) {
      return imagePath;
    }
    
    // Remove '/public/' if it exists in the path
    let normalizedPath = imagePath.replace('/public/', '/');
    
    // Make sure the path starts with a slash
    if (!normalizedPath.startsWith('/')) {
      normalizedPath = '/' + normalizedPath;
    }
    
    return normalizedPath;
  };

  return (
    <div className="min-h-screen">
      {/* Custom Banner Component - Using direct styling like HeroSection */}
      <div style={{ position: "relative", width: "100%", height: "250px" }}>
        {/* Direct image element similar to HeroSection */}
        <img 
          src="/images/004_1.jpg"
          alt={`${normalizedCategory} Banner`}
          style={{ 
            width: "100%", 
            height: "100%", 
            objectFit: "cover",
            position: "absolute",
            top: 0,
            left: 0
          }}
        />
        
        {/* Dark overlay for better text readability */}
        <div style={{ 
          position: "absolute", 
          top: 0, 
          left: 0, 
          width: "100%", 
          height: "100%", 
          backgroundColor: "rgba(0,0,0,0.4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          {/* Content */}
          <div style={{ textAlign: "center", color: "white", padding: "0 20px" }}>
            <h1 style={{ fontSize: "2.5rem", fontWeight: "bold", marginBottom: "0.5rem" }}>
              {normalizedCategory}
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              Luxury Carpets for Premium Spaces
            </p>
            
            {/* Breadcrumbs */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
              <span>&gt;</span>
              <span>{normalizedCategory}</span>
            </div>
          </div>
        </div>
      </div>

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
                      {/* Product Image - using inline styles like HeroSection */}
                      <div style={{ position: "relative", width: "100%", height: "280px", overflow: "hidden" }}>
                        <img
                          src={normalizeImagePath(product.image)}
                          alt={product.name}
                          style={{ 
                            width: "100%", 
                            height: "100%", 
                            objectFit: "cover",
                            position: "absolute",
                            top: 0,
                            left: 0
                          }}
                          onError={(e) => {
                            console.log('Failed to load image:', product.image);
                            e.target.onerror = null;
                            e.target.src = '/images/placeholder.jpg'; // Fallback image
                          }}
                        />
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