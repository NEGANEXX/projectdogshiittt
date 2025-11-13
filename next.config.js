/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'plus.unsplash.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
        pathname: '/**',
      },
    ],
  },
  webpack: (config, { isServer }) => {
    // Prevent bytez.js from being bundled on server side
    if (isServer) {
      config.externals = config.externals || []
      config.externals.push('bytez.js')
    }
    return config
  },
}

module.exports = nextConfig

