// app/products/[category]/[productId]/page.js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ZoomIn } from "lucide-react";
import {
  categoryDescriptions,
  productsCategoryCollection,
} from "@/lib/data";
import ImageModal from "@/components/common/ImageModal";
import RelatedProducts from "@/components/products/RelatedProducts";
import Reviews from "@/components/common/Reviews";
import QuoteRequestForm from "@/components/common/QuoteRequestForm";

// Helper function to format the category
const formatCategory = (category) => {
  return category
    .toLowerCase() // Convert to lowercase
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letters
};

export default function ProductDetailsCategory({ params }) {
  // Handle params - either directly or with React.use based on availability
  const paramsObj = React.use ? React.use(params) : params;
  const { category, productId } = paramsObj;
  
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("DESCRIPTION");
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const [showZoomIcon, setShowZoomIcon] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [debugInfo, setDebugInfo] = useState({});

  const formattedCategory = formatCategory(category);

  useEffect(() => {
    // Detailed debugging
    console.log("=== PRODUCT LOOKUP DEBUG INFO ===");
    console.log("Category param:", category);
    console.log("ProductId param:", productId);
    console.log("Formatted category:", formattedCategory);
    
    // Log all available products for this category
    console.log("All products:", productsCategoryCollection);
    
    const productsInCategory = productsCategoryCollection.filter(
      item => item.category.toLowerCase().replace(/\s+/g, "-") === category
    );
    
    console.log(`Products in category "${category}":`, productsInCategory);
    
    // Try all possible matching strategies, with detailed logging
    
    // Strategy 1: Exact ID (as number) + category match
    console.log("Strategy 1: Exact ID (as number) + category match");
    let currentProduct = productsCategoryCollection.find(
      item => 
        Number(item.id) === Number(productId) &&
        item.category.toLowerCase().replace(/\s+/g, "-") === category
    );
    console.log("Result of Strategy 1:", currentProduct);
    
    // Strategy 2: Exact ID (as string) + category match
    if (!currentProduct) {
      console.log("Strategy 2: Exact ID (as string) + category match");
      currentProduct = productsCategoryCollection.find(
        item => 
          String(item.id) === String(productId) &&
          item.category.toLowerCase().replace(/\s+/g, "-") === category
      );
      console.log("Result of Strategy 2:", currentProduct);
    }
    
    // Strategy 3: Just ID match (as number)
    if (!currentProduct) {
      console.log("Strategy 3: Just ID match (as number)");
      currentProduct = productsCategoryCollection.find(
        item => Number(item.id) === Number(productId)
      );
      console.log("Result of Strategy 3:", currentProduct);
    }
    
    // Strategy 4: Just ID match (as string)
    if (!currentProduct) {
      console.log("Strategy 4: Just ID match (as string)");
      currentProduct = productsCategoryCollection.find(
        item => String(item.id) === String(productId)
      );
      console.log("Result of Strategy 4:", currentProduct);
    }
    
    // Collect debug info
    const debugData = {
      params: { category, productId },
      formattedCategory,
      totalProducts: productsCategoryCollection.length,
      productsInCategory: productsInCategory.length,
      productsWithMatchingId: productsCategoryCollection.filter(
        item => String(item.id) === String(productId)
      ).length,
      foundProduct: !!currentProduct
    };
    setDebugInfo(debugData);
    
    console.log("Debug data:", debugData);
    
    if (currentProduct) {
      setProduct(currentProduct);
      console.log("PRODUCT FOUND:", currentProduct);
    } else {
      console.log("PRODUCT NOT FOUND");
    }
    
    setLoading(false);
  }, [productId, category, formattedCategory]);

  // Get related products that match the category
  const getRandomProducts = () => {
    if (!productsCategoryCollection || !product) return [];
    
    const productCategory = product.category;
    
    const sameCategory = productsCategoryCollection.filter(
      (item) => 
        item.id !== product.id && 
        item.category === productCategory
    );
    
    // If we have enough products in the same category, use those
    if (sameCategory.length >= 4) {
      return sameCategory.sort(() => 0.5 - Math.random()).slice(0, 4);
    }
    
    // Otherwise get any other products to fill the related section
    const otherProducts = productsCategoryCollection.filter(
      (item) => item.id !== product.id
    );
    
    return otherProducts.sort(() => 0.5 - Math.random()).slice(0, 4);
  };

  const relatedProducts = product ? getRandomProducts() : [];

  const handleImageHover = (e) => {
    const image = e.currentTarget;
    const { left, top, width, height } = image.getBoundingClientRect();

    const handleMouseMove = (e) => {
      const x = ((e.clientX - left) / width) * 100;
      const y = ((e.clientY - top) / height) * 100;

      setZoomStyle({
        transform: "scale(2)",
        transformOrigin: `${x}% ${y}%`,
      });
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", () => {
      setZoomStyle({});
      setShowZoomIcon(false);
    });
  };

  const renderStars = (rating) => {
    if (!rating) return "";
    
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 === 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      "★".repeat(fullStars) + (hasHalfStar ? "☆" : "") + "☆".repeat(emptyStars)
    );
  };

  if (loading) {
    return <div className="min-h-screen flex items-center justify-center">Loading product details...</div>;
  }

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
        <div className="bg-red-50 border border-red-200 p-4 rounded-md mb-4 max-w-lg">
          <p className="text-red-700 font-semibold">We couldn't find the product you're looking for.</p>
          <p className="text-gray-700 mt-2">Debug information:</p>
          <pre className="bg-gray-100 p-2 mt-2 text-xs overflow-auto max-h-40 rounded">
            {JSON.stringify(debugInfo, null, 2)}
          </pre>
        </div>
        <button
          onClick={() => router.push(`/products/${category}`)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Back to {formattedCategory} Products
        </button>
      </div>
    );
  }

  const description = categoryDescriptions[product.category] || "Category description not available.";

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 pt-10 pb-5 flex items-center gap-2 text-sm">
        <span
          className="text-blue-600 text-xs tracking-[0.04rem] hover:underline cursor-pointer"
          onClick={() => router.push("/")}
        >
          HOME
        </span>
        <ChevronRight className="w-4 h-4" />
        <span
          className="text-blue-600 text-xs tracking-[0.04rem] hover:underline cursor-pointer"
          onClick={() => router.push(`/products/${category}`)}
        >
          {formattedCategory.toUpperCase()}
        </span>
        <ChevronRight className="w-4 h-4" />
        <span className="tracking-[0.04rem] text-xs uppercase">
          {product.name}
        </span>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Product Image */}
          <div className="relative">
            <div
              className="relative overflow-hidden rounded-lg cursor-zoom-in"
              onMouseEnter={(e) => {
                setShowZoomIcon(true);
                handleImageHover(e);
              }}
              onClick={() => setShowModal(true)}
              style={{ aspectRatio: "1/1" }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-200"
                style={zoomStyle}
                onError={(e) => {
                  console.error(`Error loading image: ${product.image}`);
                  e.target.src = '/images/placeholder.jpg';
                  e.target.onerror = null;
                }}
              />
              {showZoomIcon && (
                <div className="absolute top-4 right-4 bg-white/80 p-2 rounded-full">
                  <ZoomIn className="w-6 h-6 text-gray-600" />
                </div>
              )}
            </div>
            <p className="text-center text-sm text-gray-500 mt-2">
              Roll over image to zoom in. Click to open expanded view
            </p>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl font-semibold tracking-[0.05rem] mb-6">
              {product.name}
            </h1>
            {/* Product details grid */}
            <ul className="grid grid-cols-1 gap-4 max-sm:ps-5 list-disc">
              {Object.entries({
                Availability: product.availability || "N/A",
                Rating: renderStars(product.rating),
                "Product Code": product.productCode || "N/A",
                Pattern: product.pattern || "N/A",
                Style: product.style || "N/A",
                Material: product.material || "N/A",
                "Production Type": product.productionType || "N/A",
                "Pile Height": product.pileHeight || "N/A",
                Shape: product.shape || "N/A",
                Size: product.size || "N/A",
                ID: product.productId || product.id || "N/A",
                Customization: product.customization || "N/A",
                Origin: product.origin || "N/A",
              }).map(([key, value]) => (
                <li key={key} className="flex text-sm items-start gap-2">
                  <span className="font-medium text-start min-w-[140px]">
                    {key}
                  </span>
                  <span className="text-gray-600">{value || "N/A"}</span>
                </li>
              ))}
            </ul>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setSelectedProduct(product);
                setShowQuoteForm(true);
              }}
              className="mt-8 bg-gray-800 text-white px-8 py-3 rounded-lg hover:bg-gray-700 transition-colors"
            >
              Request Quotes
            </button>
          </div>
        </div>

        {/* Description Tabs */}
        <div className="mt-16">
          <div className="border-b border-gray-200">
            <div className="flex justify-center gap-8">
              <button
                className={`pb-4 text-sm tracking-[0.05rem] font-medium ${
                  selectedTab === "DESCRIPTION"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setSelectedTab("DESCRIPTION")}
              >
                DESCRIPTION
              </button>
              <button
                className={`pb-4 text-sm tracking-[0.05rem] font-medium ${
                  selectedTab === "REVIEWS"
                    ? "border-b-2 border-blue-600 text-blue-600"
                    : "text-gray-600"
                }`}
                onClick={() => setSelectedTab("REVIEWS")}
              >
                REVIEWS ({product.reviews?.length || 0})
              </button>
            </div>
          </div>
          <div className="py-6">
            {selectedTab === "DESCRIPTION" ? (
              <p className="text-gray-600 text-start text-sm tracking-[0.03rem] leading-relaxed">
                {description}
              </p>
            ) : (
              <Reviews product={product} setProduct={setProduct} />
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 ? (
          <RelatedProducts
            relatedProducts={relatedProducts}
            category={product?.category}
          />
        ) : (
          <p className="text-center text-gray-600 mt-12">No related products found.</p>
        )}
      </div>

      {/* Image Modal */}
      {showModal && (
        <ImageModal setShowModal={setShowModal} product={product} />
      )}

      {showQuoteForm && selectedProduct && (
        <QuoteRequestForm
          isOpen={showQuoteForm}
          onClose={() => setShowQuoteForm(false)}
          productDetails={selectedProduct}
          setShowQuoteForm={setShowQuoteForm}
        />
      )}
    </div>
  );
}