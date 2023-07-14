/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects () {
    return [
      {
        source: '/blog',
        destination: '/#blog',
        permanent: true
      },
      {
        source: '/facebook',
        destination: 'https://www.facebook.com/pauldvlp',
        permanent: true
      },
      {
        source: '/fb',
        destination: 'https://www.facebook.com/pauldvlp',
        permanent: true
      },
      {
        source: '/whatsapp',
        destination: 'https://wa.me/50488969200?text=Hola,%20te%20escribo%20desde%20tu%20blog',
        permanent: true
      },
      {
        source: '/wa',
        destination: 'https://wa.me/50488969200?text=Hola,%20te%20escribo%20desde%20tu%20blog',
        permanent: true
      },
      {
        source: '/instagram',
        destination: 'https://www.instagram.com/pauldvlp',
        permanent: true
      },
      {
        source: '/ig',
        destination: 'https://www.instagram.com/pauldvlp',
        permanent: true
      },
      {
        source: '/github',
        destination: 'https://www.github.com/pauldvlp',
        permanent: true
      },
      {
        source: '/gh',
        destination: 'https://www.github.com/pauldvlp',
        permanent: true
      },
      {
        source: '/twitter',
        destination: 'https://www.twitter.com/pauldvlp',
        permanent: true
      },
      {
        source: '/tt',
        destination: 'https://www.twitter.com/pauldvlp',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
