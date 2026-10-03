import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // required by output: "export" — no image optimizer at build time
    unoptimized: true,
  },
};

export default nextConfig;
