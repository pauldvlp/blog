/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/blog',
        destination: '/#blog',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
