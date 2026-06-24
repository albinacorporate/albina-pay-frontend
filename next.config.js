/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable all static generation
  output: 'standalone',
  // Don't generate static pages
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
}

module.exports = nextConfig
