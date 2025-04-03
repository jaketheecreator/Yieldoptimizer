/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  images: {
    domains: [],
    dangerouslyAllowSVG: true,
    contentDispositionType: 'attachment',
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    unoptimized: true,
  },
  // Define serverless function names to avoid the space issue
  experimental: {
    serverComponentsExternalPackages: [],
    outputFileTracingRoot: process.cwd(),
    serverActions: {
      allowedOrigins: ['localhost:3006'],
    },
  },
  // Additional headers for security
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: 'DENY',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
        ],
      },
    ];
  },
  // Move viewport configuration from metadata to viewport export
  // to fix warnings during build
  async rewrites() {
    return {
      afterFiles: [
        // Handle any backend API proxying here if needed
      ],
    };
  },
};

export default nextConfig; 