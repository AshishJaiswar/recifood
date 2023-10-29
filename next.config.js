/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.archanaskitchen.com",
      },
    ],
  },
};

module.exports = nextConfig;
