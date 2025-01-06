/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  distDir: 'dist', // Set the output directory to 'dist'
  basePath: '/profile', // Match the repository name
  trailingSlash: true, // Ensure paths end with a slash
};

module.exports = nextConfig;
