/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  reactStrictMode: true,
  // Disable all static optimization to prevent errors during build
  experimental: {
    // Disable App Router completely to prevent errors
    appDir: false
  },
  // Explicitly tell Next.js to use the Pages Router only
  useFileSystemPublicRoutes: true,
  // Completely disable static page generation
  target: 'server'
};

module.exports = nextConfig; 