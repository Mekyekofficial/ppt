/** @type {import('next').NextConfig} */
const nextConfig = {
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Frame-Options',
            value: `ALLOW-FROM http://localhost:3000` // Replace with your Vite app's URL
          }
        ],
      },
    ]
  },
}

module.exports = nextConfig