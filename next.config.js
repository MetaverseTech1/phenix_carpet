/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,  // Required for static export
  },
  trailingSlash: true,  // Adds trailing slashes to URLs (optional but recommended for static sites)
};

module.exports = nextConfig;