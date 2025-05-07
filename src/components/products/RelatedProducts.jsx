// components/products/RelatedProducts.jsx
"use client";

import React from "react";
import { useRouter } from "next/navigation";

function RelatedProducts({ relatedProducts, category }) {
  const router = useRouter();

  const handleProductClick = (productId) => {
    // Scroll to top
    window.scrollTo({ top: 0, behavior: "smooth" });
    // Format the category
    const formattedCategory = category.toLowerCase().replace(/\s+/g, "-");

    // Navigate to the product page
    if(formattedCategory === "luxury-collection" || formattedCategory === "hospitality-collection"){
      router.push(`/${formattedCategory}/${productId}`);
    } else {
      router.push(`/product/${formattedCategory}/${productId}`);
    }
  };

  return (
    <div>
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-8">Related products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {relatedProducts.map((relatedProduct) => (
            <div
              key={relatedProduct.id}
              className="group border border-gray-200 rounded-md p-2 cursor-pointer"
              onClick={() => handleProductClick(relatedProduct.id)}
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-64">
                <img
                  src={relatedProduct.image}
                  alt={relatedProduct.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="flex justify-between px-2">
                <h3 className="text-sm tracking-[0.04rem] font-medium mb-2">
                  {relatedProduct.name}
                </h3>
                <div className="flex text-yellow-400 mb-4">
                  {"★".repeat(relatedProduct.rating)}
                </div>
              </div>
              <div className="flex items-center px-2 justify-between">
                <button className="text-blue-600 hover:underline">
                  Read more
                </button>
                <button className="text-gray-600 hover:text-gray-800">
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path d="M5 4a2 2 0 012-2h6a2 2 0 012 2v14l-5-2.5L5 18V4z" />
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default RelatedProducts;