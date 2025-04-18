/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['ghost.beehive-advisors.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ghost.io',
      },
    ],
  },
};

export default nextConfig;
