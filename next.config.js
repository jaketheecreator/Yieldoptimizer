/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',  // Use export format instead of standalone
  distDir: 'build',  // Output to build directory instead of .next
  reactStrictMode: true,
  // Disable all static optimization to prevent errors during build
  experimental: {
    // Disable App Router completely to prevent errors
    appDir: false
  },
  // Explicitly tell Next.js to use the Pages Router only
  useFileSystemPublicRoutes: true,
  // Completely disable static page generation
  target: 'server',
  // Skip generating 404 and error pages entirely
  images: {
    unoptimized: true, // Disable image optimization
  },
  exportPathMap: async function () {
    // Only include the main page in exports
    return {
      '/': { page: '/' },
    };
  }
};

module.exports = nextConfig; 