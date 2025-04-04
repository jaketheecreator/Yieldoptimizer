/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Use export format instead of standalone
  distDir: 'build',  // Output to build directory instead of .next
  reactStrictMode: true,
  images: {
    unoptimized: true, // Disable image optimization
  },
  // Explicitly disable app directory features
  experimental: {}
};

module.exports = nextConfig; 