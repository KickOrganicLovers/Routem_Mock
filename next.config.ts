import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  basePath: '/Rootem_Mock',
  assetPrefix: '/Rootem_Mock/',

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
