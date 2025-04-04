/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Disable automatic static optimization for error pages
  // This prevents the pre-rendering that's causing errors
  experimental: {
    // Skip static generation of error pages
    disableStaticErrorPages: true
  }
};

module.exports = nextConfig; 