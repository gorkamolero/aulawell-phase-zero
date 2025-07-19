import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable React Strict Mode for better development experience
  reactStrictMode: true,
  
  // Image optimization
  images: {
    // Using default Next.js image optimization
    formats: ["image/avif", "image/webp"],
    remotePatterns: [],
  },
  
  // Production optimizations
  poweredByHeader: false,
  compress: true,
  
  // Headers for security and performance
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
        ],
      },
    ]
  },
};

export default nextConfig;