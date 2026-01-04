/** @type {import('next').NextConfig} */

const nextConfig = {
  // React Strict Mode for better development experience and error detection
  reactStrictMode: true,
  
  // SEO: Trailing slash configuration
  // Set to false to use URLs without trailing slashes (e.g., /about)
  // This must match the canonical URL strategy in lib/seo.ts
  trailingSlash: false,
  
  // Performance optimizations
  compress: true,
  
  // Image optimization
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  
  // This file should be empty of any 'headers' configuration.
  // All security headers are now correctly managed by middleware.ts.
};

export default nextConfig;