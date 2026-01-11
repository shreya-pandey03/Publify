import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // 👈 required for image uploads
    },
  },

  images:{
    remotePatterns:[
      {
        protocol: 'https',
        hostname: "images.unsplash.com",
      },
      {
        protocol: 'https',
        hostname: "res.cloudinary.com",
      }
    ]
  }

};

export default nextConfig;
