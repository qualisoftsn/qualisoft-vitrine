import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone', // 👈 Indispensable pour un Docker optimisé
  images: {
    unoptimized: true, // Souvent nécessaire pour les petits VPS OVH sans librairie d'image native
  }
};

export default nextConfig;