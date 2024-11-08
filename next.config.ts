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
}

module.exports = nextConfig