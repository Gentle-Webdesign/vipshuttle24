/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'vipshuttle-24.de',
      },
    ],
  },
  output: "export",
};

export default nextConfig;
