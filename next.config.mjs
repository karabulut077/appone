/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: process.env.IMG_PROTOCOL,
              hostname: process.env.IMG_DOMAIN
            }
        ]
    },
    env: {
        SERVER_IP: process.env.SERVER_IP,
        SERVER_PORT : process.env.SERVER_PORT
    }
};

export default nextConfig;
