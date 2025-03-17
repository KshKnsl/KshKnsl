import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // ✅ Required for GitHub Pages deployment
  images: {
    unoptimized: true, // ✅ Fixes issues with images in static exports
    remotePatterns: [
      {
        protocol: "https",
        hostname: "hebbkx1anhila5yf.public.blob.vercel-storage.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "codeforces.org",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "img.icons8.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "leetcode.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
