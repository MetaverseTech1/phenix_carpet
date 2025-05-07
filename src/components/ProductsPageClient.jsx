// components/ProductsPageClient.jsx
'use client';

import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import PageBanner from "@/components/common/PageBanner";

const ProductsPageClient = ({ params, category, categoryDescriptions, productsCategoryCollection }) => {
  const router = useRouter();
  
  // Use the direct category prop first, then fall back to params if needed
  const categoryValue = category || params?.category || '';
  
  console.log("ProductsPageClient received:");
  console.log("- category:", categoryValue);
  console.log("- productsCategoryCollection length:", productsCategoryCollection?.length || 0);

  // Normalize category from URL
  const normalizedCategory = categoryValue
    ? categoryValue
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ")
    : '';

  console.log("Normalized Category:", normalizedCategory);

  // Filter products based on category
  const filteredProducts = productsCategoryCollection
    ? productsCategoryCollection.filter(
        (product) => product.category === normalizedCategory
      )
    : [];

  console.log("Filtered Products:", filteredProducts);
  const handleProductClick = (productId) => {
    router.push(`/product/${category}/${productId}`);
  };

  const description =
    categoryDescriptions?.[normalizedCategory] || "Description not available.";

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
          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredProducts && filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <div
                  key={product.id}
                  onClick={() => handleProductClick(product.id)}
                  className="group bg-white cursor-pointer border border-gray-500 p-2 mb-5 rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                >
                  {/* Product Image */}
                  <div className="relative overflow-hidden">
                    <div className="relative w-full sm:h-[14rem] md:h-[17rem] lg:h-[20rem]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
                  </div>

                  {/* Product Info */}
                  <div className="py-2 px-6">
                    <h3 className="text-lg font-semibold tracking-[0.04rem] text-gray-900 mb-2">
                      {product.name}
                    </h3>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-600 col-span-full">
                No products found in this category.
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsPageClient;