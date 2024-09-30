/** @type {import('next').NextConfig} */
const nextConfig = {
  basePath: '/member_personal_webpages',
  assetPrefix: '/member_personal_webpages/',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
