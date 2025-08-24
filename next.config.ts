import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ["oszkzmxzyyovmqshdtno.supabase.co"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
