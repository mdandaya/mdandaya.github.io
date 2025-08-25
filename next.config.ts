/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // makes Next.js export static HTML
  images: { unoptimized: true }, // GH Pages cannot handle next/image optimization
};

module.exports = nextConfig;
