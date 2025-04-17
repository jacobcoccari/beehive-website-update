/** @type {import('next').NextConfig} */
const config = {
  reactStrictMode: true,
  images: {
    domains: [
      'static.ghost.org',
      'ghost.beehive-advisors.com',
      'www.gravatar.com'
    ],
  },
};

export default config;
