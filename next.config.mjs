/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'static.ghost.org',
      'ghost.beehive-advisors.com'
    ],
  },
};

export default config;
