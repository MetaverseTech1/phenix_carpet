// app/robots.js - Dynamic robots.txt generation for Next.js 13+
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
     
    },
    sitemap: 'https://www.dhruvrugs.global/sitemap.xml',
  };
}