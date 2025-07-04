// app/products/[category]/page.js
"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Head from "next/head";

// Import data directly to simplify debugging
import { categoryDescriptions, productsCategoryCollection } from "@/lib/data";

// SEO Meta Data
const categoryMetaData = {
  'hand-knotted': {
    title: 'Hand Knotted Rugs | Premium Handmade Carpets | Dhruv Rugs India',
    description: 'Discover exquisite hand knotted rugs crafted by skilled artisans. Premium quality handmade carpets with intricate patterns. Custom sizes available. Made in India. Free shipping worldwide.',
    keywords: 'hand knotted rugs, handmade carpets, premium rugs, custom rugs, wool rugs, silk rugs, Persian style rugs, artisan rugs, luxury carpets, traditional rugs',
    ogImage: '/images/HK04.jpg'
  },
  'hand-loom': {
    title: 'Hand Loom Rugs | Traditional Woven Carpets | Modern Designs | Dhruv Rugs',
    description: 'Shop beautiful hand loom rugs with traditional weaving techniques. Modern designs, durable quality, and eco-friendly materials. Custom sizes available from India\'s leading rug manufacturer.',
    keywords: 'hand loom rugs, woven carpets, traditional rugs, eco friendly rugs, cotton rugs, flat weave rugs, modern rugs, sustainable carpets, handwoven rugs, textile art',
    ogImage: '/images/HL07.jpg'
  },
  'hand-tufted': {
    title: 'Hand Tufted Rugs | Soft Luxury Carpets | Custom Designs | Dhruv Rugs India',
    description: 'Premium hand tufted rugs with soft pile and intricate designs. Perfect for modern homes and commercial spaces. Custom patterns and sizes available. High-quality wool construction.',
    keywords: 'hand tufted rugs, luxury carpets, soft rugs, modern carpets, custom rugs, wool tufted rugs, designer rugs, contemporary rugs, high pile rugs, premium flooring',
    ogImage: '/images/01-1-1-224x300.jpg'
  },
  'flat-weave': {
    title: 'Flat Weave Rugs | Durable Kilim Carpets | Geometric Patterns | Dhruv Rugs',
    description: 'Stylish flat weave rugs and kilim carpets with bold geometric patterns. Durable, easy to clean, perfect for high-traffic areas. Sustainable materials and vibrant colors.',
    keywords: 'flat weave rugs, kilim rugs, geometric rugs, dhurrie rugs, reversible rugs, low pile rugs, easy care rugs, modern kilim, sustainable rugs, graphic patterns',
    ogImage: '/images/003-768x1028-1-224x300.jpg'
  },
  'jute': {
    title: 'Jute Rugs | Natural Eco-Friendly Carpets | Sustainable Home Decor | Dhruv Rugs',
    description: 'Eco-friendly jute rugs made from natural fibers. Sustainable, durable, and hypoallergenic. Perfect for modern homes. Various textures and patterns available. Made in India.',
    keywords: 'jute rugs, natural fiber rugs, eco friendly carpets, sustainable rugs, hypoallergenic rugs, organic rugs, braided rugs, natural home decor, earth friendly rugs, biodegradable rugs',
    ogImage: '/images/20-1-224x300.jpg'
  }
};

export default function ProductsPage({ params }) {
  // Use React.use to unwrap params if available, otherwise fall back to direct access
  const paramsObj = React.use ? React.use(params) : params;
  const { category } = paramsObj;
  
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  // Get meta data for current category
  const meta = categoryMetaData[category];

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
    <>
      {/* SEO Head Section */}
      <Head>
        {/* Primary Meta Tags */}
        <title>{meta?.title || `${normalizedCategory} Rugs | Dhruv Rugs`}</title>
        <meta name="title" content={meta?.title || `${normalizedCategory} Rugs | Dhruv Rugs`} />
        <meta name="description" content={meta?.description || description} />
        <meta name="keywords" content={meta?.keywords || `${normalizedCategory.toLowerCase()} rugs, carpets, handmade`} />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content={`https://dhruvrugs.com/products/${category}`} />
        <meta property="og:title" content={meta?.title || `${normalizedCategory} Rugs | Dhruv Rugs`} />
        <meta property="og:description" content={meta?.description || description} />
        <meta property="og:image" content={`https://dhruvrugs.com${meta?.ogImage || '/images/placeholder.jpg'}`} />
        <meta property="og:site_name" content="Dhruv Rugs" />
        <meta property="og:locale" content="en_US" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={`https://dhruvrugs.com/products/${category}`} />
        <meta property="twitter:title" content={meta?.title || `${normalizedCategory} Rugs | Dhruv Rugs`} />
        <meta property="twitter:description" content={meta?.description || description} />
        <meta property="twitter:image" content={`https://dhruvrugs.com${meta?.ogImage || '/images/placeholder.jpg'}`} />
        
        {/* Additional SEO Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta name="language" content="English" />
        <meta name="author" content="Dhruv Rugs" />
        
        {/* Canonical URL */}
        <link rel="canonical" href={`https://dhruvrugs.com/products/${category}`} />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "CollectionPage",
              "name": meta?.title || `${normalizedCategory} Rugs`,
              "description": meta?.description || description,
              "url": `https://dhruvrugs.com/products/${category}`,
              "image": `https://dhruvrugs.com${meta?.ogImage || '/images/placeholder.jpg'}`,
              "publisher": {
                "@type": "Organization",
                "name": "Dhruv Rugs",
                "url": "https://dhruvrugs.com",
                "logo": {
                  "@type": "ImageObject",
                  "url": "https://dhruvrugs.com/logo.png"
                }
              },
              "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                  {
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://dhruvrugs.com"
                  },
                  {
                    "@type": "ListItem",
                    "position": 2,
                    "name": normalizedCategory,
                    "item": `https://dhruvrugs.com/products/${category}`
                  }
                ]
              }
            })
          }}
        />
      </Head>
      
      <div className="min-h-screen">
        {/* Banner Section */}
        <div style={{ position: "relative", width: "100%", height: "250px" }}>
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
          
          {/* Dark overlay */}
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
              <nav aria-label="Breadcrumb" style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: "8px" }}>
                <Link href="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
                <span>&gt;</span>
                <span>{normalizedCategory}</span>
              </nav>
            </div>
          </div>
        </div>

        <div className="mx-auto">
          {/* Category Description Section */}
          <div className="md:px-14 px-5 py-8 flex flex-col items-start bg-gray-200">
            <h2 className="md:text-2xl text-xl font-bold mb-4 tracking-[0.05rem]">
              {normalizedCategory} Rugs
            </h2>
            <p className="text-gray-700 max-sm:text-sm text-start tracking-[0.05rem]">
              {description}
            </p>
          </div>

          {/* Products Section */}
          <div className="container mx-auto px-4 py-10">
            {loading ? (
              <p className="text-center">Loading products...</p>
            ) : (
              <>
                {filteredProducts.length > 0 ? (
                  <>
                    {/* Products count */}
                    <div className="mb-6">
                      <p className="text-gray-600">
                        Showing {filteredProducts.length} {normalizedCategory.toLowerCase()} products
                      </p>
                    </div>
                    
                    {/* Products Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                      {filteredProducts.map((product, index) => (
                        <article
                          key={product.id}
                          onClick={() => handleProductClick(product.id)}
                          className="group bg-white cursor-pointer border border-gray-500 p-2 mb-5 rounded-md overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
                          itemScope
                          itemType="https://schema.org/Product"
                        >
                          {/* Product Image */}
                          <div style={{ position: "relative", width: "100%", height: "280px", overflow: "hidden" }}>
                            <img
                              src={normalizeImagePath(product.image)}
                              alt={`${product.name} - ${normalizedCategory} - Handmade Rug`}
                              title={`${product.name} - Premium ${normalizedCategory}`}
                              itemProp="image"
                              style={{ 
                                width: "100%", 
                                height: "100%", 
                                objectFit: "cover",
                                position: "absolute",
                                top: 0,
                                left: 0
                              }}
                              loading={index < 8 ? "eager" : "lazy"}
                              onError={(e) => {
                                console.log('Failed to load image:', product.image);
                                e.target.onerror = null;
                                e.target.src = '/images/placeholder.jpg';
                              }}
                            />
                          </div>

                          {/* Product Info */}
                          <div className="py-2 px-6">
                            <h3 
                              className="text-lg font-semibold tracking-[0.04rem] text-gray-900 mb-2"
                              itemProp="name"
                            >
                              {product.name}
                            </h3>
                            
                            {/* Hidden structured data */}
                            <div style={{ display: 'none' }}>
                              <span itemProp="brand" itemScope itemType="https://schema.org/Brand">
                                <span itemProp="name">Dhruv Rugs</span>
                              </span>
                              <span itemProp="category">{normalizedCategory}</span>
                              <span itemProp="material">{product.material}</span>
                              <span itemProp="productionMethod">{product.productionType}</span>
                              <span itemProp="origin">{product.origin}</span>
                              <span itemProp="sku">{product.productCode}</span>
                            </div>
                          </div>
                        </article>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="text-center py-12">
                    <h3 className="text-xl font-semibold mb-4">No products found in this category</h3>
                    <p className="text-gray-600 mb-6">
                      We're currently updating our {normalizedCategory.toLowerCase()} collection. 
                      Please check back soon or explore our other categories.
                    </p>
                    <Link 
                      href="/products" 
                      className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
                    >
                      Browse All Products
                    </Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </>
  );
}