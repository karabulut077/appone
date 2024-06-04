/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: process.env.IMG_PROTOCOL_D,
              hostname: process.env.IMG_DOMAIN_D
            }
        ]
    },
    env: {
        SERVER_IP: process.env.SERVER_IP_D,
        SERVER_PORT : process.env.SERVER_PORT_D
    }
};

export default nextConfig;