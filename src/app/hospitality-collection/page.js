// app/hospitality-collection/page.js
"use client";

import React, { useState } from "react";
import { hospitalityCollection } from "@/lib/data";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const HospitalityCollection = () => {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const itemsPerPage = 8;

  // Calculate pagination values
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = hospitalityCollection.slice(
    indexOfFirstItem,
    indexOfLastItem
  );
  const totalPages = Math.ceil(hospitalityCollection.length / itemsPerPage);

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
    router.push(`/hospitality-collection/${productId}`);
  };

  // Simple but effective image path normalization
  const fixImagePath = (path) => {
    if (!path) return '/images/placeholder.jpg';
    if (path.startsWith('http')) return path;
    
    // First remove any /public/ prefix
    path = path.replace('/public/', '/');
    
    // Then ensure there's a leading slash
    return path.startsWith('/') ? path : `/${path}`;
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Custom Banner Component - Using direct styling */}
      <div style={{ position: "relative", width: "100%", height: "250px" }}>
        {/* Direct image element */}
        <img 
          src="/images/001_1.jpg"
          alt="Hospitality Collection Banner"
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
              Hospitality Collection
            </h1>
            <p style={{ fontSize: "1.25rem", marginBottom: "1rem" }}>
              Luxury Carpets for Premium Spaces
            </p>
            
            {/* Breadcrumbs */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
              <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
              <span>&gt;</span>
              <span>Hospitality Collection</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        {/* Collection Introduction */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Elevate Your Space with Premium Carpets
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our Hospitality Collection features exquisite carpets designed
            specifically for luxury hotels, resorts, and premium commercial
            spaces. Each piece combines durability with sophisticated design,
            ensuring both lasting beauty and practical functionality.
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
              className="group bg-white cursor-pointer border border-gray-500 p-2 mb-5 rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Product Image - using explicitly positioned img */}
              <div style={{ position: "relative", width: "100%", height: "240px", overflow: "hidden" }}>
                <img
                  src={fixImagePath(product.image)}
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
                    e.target.onerror = null;
                    e.target.src = '/images/placeholder.jpg';
                  }}
                />
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
            className="p-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
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
            className="p-2 rounded-lg bg-gray-200 text-gray-700 disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-300 transition-colors duration-300 flex items-center justify-center"
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

export default HospitalityCollection;