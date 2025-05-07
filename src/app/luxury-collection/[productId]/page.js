// app/luxury-collection/[productId]/page.js
"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ZoomIn } from "lucide-react";
import { luxuryCollection } from "@/lib/data";
import ImageModal from "@/components/common/ImageModal";
import RelatedProducts from "@/components/products/RelatedProducts";
import Reviews from "@/components/common/Reviews";
import QuoteRequestForm from "@/components/common/QuoteRequestForm";

export default function ProductDetailsLuxury({ params }) {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("DESCRIPTION");
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const [showZoomIcon, setShowZoomIcon] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { productId } = params;

  useEffect(() => {
    // Fetch the product based on productId
    const currentProduct = luxuryCollection.find(
      (item) => item.id == productId
    );

    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [productId]);

  // Get 4 random products for related section
  const getRandomProducts = () => {
    const shuffled = [...luxuryCollection]
      .filter((item) => item.id !== productId)
      .sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 4);
  };

  const relatedProducts = getRandomProducts();

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
          onClick={() => router.push("/luxury-collection")}
        >
          LUXURY COLLECTION
        </span>
        <ChevronRight className="w-4 h-4" />
        <span className="tracking-[0.04rem] text-xs uppercase">
          {product?.name}
        </span>
      </div>

      {/* Product Section */}
      <div className="container mx-auto px-4 py-8">
        {product ? (
          <>
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
                    Quality: product.quality,
                    Color: product.color,
                    "Pile Composition": product.pileComposition,
                    "Total Height": product.totalHeight,
                    "Pile Height": product.pileHeight,
                    "Pile Weight": product.pileWeight,
                    "Total Weight": product.totalWeight,
                    "Max. Size": product.maxSize,
                    "Style Number": product.styleNumber,
                    "Sample Size": product.sampleSize,
                  }).map(([key, value]) => (
                    <li key={key} className="flex text-sm items-start gap-2">
                      <span className="font-medium text-start min-w-[140px]">
                        {key}
                      </span>
                      <span className="text-gray-600">{value}</span>
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
                    Our luxury rugs collection offers a range of exquisite and
                    high-quality pieces to elevate the aesthetic of any space.
                    Each rug is crafted with precision and care using
                    top-quality materials, including hand-spun silk, New Zealand
                    wool, and Tibetan wool. Our collection includes a variety of
                    styles, from traditional to modern, with unique patterns and
                    textures that add depth and character to any room. Our rugs
                    are available in various sizes, making them perfect for any
                    space in your home or office. With our luxury rugs
                    collection, you can transform your space into a luxurious
                    and stylish sanctuary.
                  </p>
                ) : (
                  <Reviews product={product} setProduct={setProduct} />
                )}
              </div>
            </div>
          </>
        ) : (
          <p>Loading product...</p>
        )}

        {/* Related Products */}
        {relatedProducts ? (
          <RelatedProducts
            relatedProducts={relatedProducts}
            category="Luxury Collection"
          />
        ) : (
          <p>No Product Found</p>
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