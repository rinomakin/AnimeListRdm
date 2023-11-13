/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "cdn.myanimelist.net",
      },
      {
        hostname: "image.tmdb.org",
      },
    ],
  },
};

module.exports = nextConfig;
