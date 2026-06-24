/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Disable static export - use server-side rendering
  output: 'standalone',
  // Increase memory for builds
  experimental: {
    largePageDataBytes: 1024 * 1024 * 4, // 4MB
  },
  // Disable telemetry
  telemetry: false,
}

module.exports = nextConfig
