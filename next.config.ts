import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React's strict mode to help catch potential issues
  swcMinify: true, // Use SWC minification for optimized JavaScript build
  trailingSlash: false, // Ensure URLs don't end with a trailing slash unless needed
};

export default nextConfig;
