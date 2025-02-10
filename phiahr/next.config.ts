import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,  // Ensures images work during export
  },
  assetPrefix: '/'
};
module.exports = nextConfig
// export default nextConfig;

