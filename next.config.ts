import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // CRUCIAL pour ton Dockerfile
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'elite.qualisoft.sn',
      },
    ],
  },
  // Désactive le linting pendant le build pour accélérer le déploiement OVH
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;