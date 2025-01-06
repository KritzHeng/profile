import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Enable static export
  distDir: 'dist', // Set the output folder to 'dist'
  images: {
    unoptimized: true
  },
};

export default nextConfig;
