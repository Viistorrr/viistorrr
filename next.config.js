/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["dev.to", "res.cloudinary.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev.to",
        port: "",
        pathname: "/viistorrr/**",
      },
    ],
  },
};

module.exports = nextConfig;
