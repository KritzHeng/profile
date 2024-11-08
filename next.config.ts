/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'lh3.google.com',
      },
      {
        protocol: 'https',
        hostname: 'media.licdn.com',
      },
      {
        protocol: 'https',
        hostname: 'i.seadn.io',
      },
      {
        protocol: 'https',
        hostname: 'enauthn.id',
      },
      {
        protocol: 'https',
        hostname: 'ethglobal.com',
      },
      {
        protocol: 'https',
        hostname: 'github.com',
      }
    ],
  },
    // Add these options to ensure proper export
    output: 'export',
    distDir: 'out', // Use 'out' for GitHub Pages compatibility
}

module.exports = nextConfig
