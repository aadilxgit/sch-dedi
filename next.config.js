/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdnjs.cloudflare.com'],
  },
  output: 'standalone',
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
}

module.exports = nextConfig