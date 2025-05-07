// app/luxury-collection/page.js
"use client";

import React, { useState } from "react";
import PageBanner from "@/components/common/PageBanner";
import { luxuryCollection } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";

const LuxuryCollection = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerPage = 8;

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = luxuryCollection.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(luxuryCollection.length / itemsPerPage);

  // Generate page numbers array
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Handle page change with animation
  const handlePageChange = (newPage) => {
    setIsAnimating(true);
    setCurrentPage(newPage);
    setTimeout(() => setIsAnimating(false), 300); // Match this with CSS animation duration
  };

  // Handle product click
  const handleProductClick = (productId) => {
    router.push(`/luxury-collection/${productId}`);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Page Banner */}
      <PageBanner
        title="Luxury Collection"
        subtitle="Luxury Carpets for Premium Spaces"
        backgroundImage="url('/images/001_1.jpg')"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Luxury Collection" },
        ]}
      />

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Collection Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Elevate Your Space with Premium Carpets
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our Luxury Collection showcases an exquisite selection of premium
            carpets crafted to elevate the ambiance of high-end residences,
            luxury hotels, and exclusive commercial spaces. Each piece is a
            harmonious blend of opulent design and exceptional durability,
            offering timeless elegance and unparalleled comfort.
          </p>
        </div>

        {/* Product Grid */}
        <div
          className={`grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 
          ${
            isAnimating
              ? "opacity-0 transform translate-y-4"
              : "opacity-100 transform translate-y-0"
          }
          transition-all duration-300 ease-in-out`}
        >
          {currentItems.map((product) => (
            <div
              key={product.id}
              onClick={() => handleProductClick(product.id)}
              className="group bg-white cursor-pointer border border-gray-500 p-2 mb-5  rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity duration-300" />
              </div>

              {/* Product Info */}
              <div className="py-3 px-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-center items-center mt-8 space-x-3">
          <button
            onClick={() => handlePageChange(Math.max(currentPage - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-lg bg-gray-200  text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {pageNumbers.map((number) => (
            <button
              key={number}
              onClick={() => handlePageChange(number)}
              className={`w-10 h-10 rounded-lg transition-all duration-300 flex items-center justify-center
                ${
                  currentPage === number
                    ? "bg-blue-600 text-white scale-110"
                    : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                }`}
            >
              {number}
            </button>
          ))}

          <button
            onClick={() =>
              handlePageChange(Math.min(currentPage + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg bg-gray-200  text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Contact Section */}
        <div className="mt-20 bg-gray-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Need Custom Solutions?
          </h3>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you find the perfect carpet
            solutions for your hospitality space. Get in touch for custom
            designs, bulk orders, and professional consultation.
          </p>
          <button 
            onClick={() => router.push("/contact")} 
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          >
            Contact Our Team
          </button>
        </div>
      </div>
    </div>
  );
};

export default LuxuryCollection;