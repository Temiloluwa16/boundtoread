/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "storage.googleapis.com",
      "cdn.myanimelist.net",
      "m.media-amazon.com",
    ],
  },
};

export default nextConfig;
