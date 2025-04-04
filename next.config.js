/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  // Use the public directory for error pages
  // This approach works better with static export
  useFileSystemPublicRoutes: true,
};

module.exports = nextConfig; 