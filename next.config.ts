import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    /* config options here */
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "upload.wikimedia.org",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "**",
                pathname: "/**",
            },
            {
                protocol: "https",
                hostname: "i.ibb.co",
                pathname: "/**",
            },
        ],
    },
};

export default nextConfig;
