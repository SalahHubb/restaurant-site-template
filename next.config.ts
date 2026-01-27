import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",

  devIndicators: {},

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
