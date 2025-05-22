// app/sitemap.js - Dynamic sitemap generation for Next.js 13+
import { hospitalityCollection, luxuryCollection, productsCategoryCollection } from '@/lib/data';

export default function sitemap() {
  const baseUrl = 'https://www.thephenixcarpets.com';
  const currentDate = new Date().toISOString();

  // Static routes
  const staticRoutes = [
    {
      url: baseUrl,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/latest-project`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/luxury-collection`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/hospitality-collection`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ];

  // Product category routes
  const categoryRoutes = [
    'hand-knotted',
    'hand-loom', 
    'hand-tufted',
    'flat-weave',
    'jute'
  ].map(category => ({
    url: `${baseUrl}/products/${category}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.8,
  }));

  // Individual product routes from hospitality collection
  const hospitalityProductRoutes = hospitalityCollection.map(product => ({
    url: `${baseUrl}/hospitality-collection/${product.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Individual product routes from luxury collection
  const luxuryProductRoutes = luxuryCollection.map(product => ({
    url: `${baseUrl}/luxury-collection/${product.id}`,
    lastModified: currentDate,
    changeFrequency: 'monthly',
    priority: 0.6,
  }));

  // Individual product routes from category collection
  const categoryProductRoutes = productsCategoryCollection.map(product => {
    // Convert category name to URL format
    const categorySlug = product.category.toLowerCase().replace(/\s+/g, '-');
    return {
      url: `${baseUrl}/products/${categorySlug}/${product.id}`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.6,
    };
  });

  // Combine all routes
  return [
    ...staticRoutes,
    ...categoryRoutes,
    ...hospitalityProductRoutes,
    ...luxuryProductRoutes,
    ...categoryProductRoutes,
  ];
}