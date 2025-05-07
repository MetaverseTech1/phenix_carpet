'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { ChevronRight, ZoomIn } from "lucide-react";
import Image from "next/image";
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

const ProductDetailsClient = ({ params, categoryDescriptions, productsCategoryCollection }) => {
  const router = useRouter();
  const [selectedTab, setSelectedTab] = useState("DESCRIPTION");
  const [product, setProduct] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [zoomStyle, setZoomStyle] = useState({});
  const [showZoomIcon, setShowZoomIcon] = useState(false);
  const [showQuoteForm, setShowQuoteForm] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const { category, productId } = params || {};
  const formattedCategory = category ? formatCategory(category) : '';
  const description =
    categoryDescriptions?.[formattedCategory] ||
    "Category description not available.";

  useEffect(() => {
    if (!productId || !category || !productsCategoryCollection) return;
    
    console.log("Looking for product with ID:", productId);
    console.log("In category:", category);
    
    // Fetch the product based on productId and category
    const currentProduct = productsCategoryCollection.find(
      (item) =>
        item.id == productId &&
        item.category.toLowerCase().replace(/\s+/g, "-") === category
    );

    console.log("Found product:", currentProduct);

    if (currentProduct) {
      setProduct(currentProduct);
    }
  }, [productId, category, productsCategoryCollection]);

  // Get random products for related section
  const getRandomProducts = () => {
    if (!productsCategoryCollection || !productId || !category) return [];
    
    const shuffled = [...productsCategoryCollection]
      .filter(
        (item) =>
          item.id !== productId &&
          item.category.toLowerCase().replace(/\s+/g, "-") === category
      )
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

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 === 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

    return (
      "★".repeat(fullStars) + (hasHalfStar ? "☆" : "") + "☆".repeat(emptyStars)
    );
  };

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Loading product...</div>;
  }

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
          onClick={() =>
            router.push(`/products/${category}`)
          }
        >
          {category?.toUpperCase()}
        </span>
        <ChevronRight className="w-4 h-4" />
        <span className="tracking-[0.04rem] text-xs uppercase">
          {product?.name}
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
              <div className="relative w-full h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-200"
                  style={zoomStyle}
                />
              </div>
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
                Availability: product.availability,
                Rating: renderStars(product.rating),
                "Product Code": product.productCode,
                Pattern: product.pattern,
                Style: product.style,
                Material: product.material,
                "Production Type": product.productionType,
                "Pile Height": product.pileHeight,
                Shape: product.shape,
                Size: product.size,
                ID: product.productId,
                Customization: product.customization,
                Origin: product.origin,
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
                {description}
              </p>
            ) : (
              <Reviews product={product} setProduct={setProduct} />
            )}
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts?.length > 0 && (
          <RelatedProducts
            relatedProducts={relatedProducts}
            category={product?.category}
          />
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
};

export default ProductDetailsClient;