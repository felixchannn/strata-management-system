import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true, // Enable React's strict mode to help catch potential issues
  // swcMinify was removed because it's not a valid option in latest Next.js
  trailingSlash: false, // Ensure URLs don't end with a trailing slash unless needed
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'hebbkx1anhila5yf.public.blob.vercel-storage.com',
      },
    ],
  },
};

export default nextConfig;
