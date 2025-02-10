import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true,  // Ensures images work during export
  },
  assetPrefix: '/phiahr',
  trailingSlash: true, // Adds a slash to the end of every route for compatibility

};
module.exports = nextConfig
// export default nextConfig;

