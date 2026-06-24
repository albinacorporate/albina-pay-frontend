/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Remove output: 'standalone' - Vercel handles this automatically
  experimental: {
    largePageDataBytes: 1024 * 1024 * 4,
  },
}

module.exports = nextConfig
