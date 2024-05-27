/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "d38yui133v8qpg.cloudfront.net"
            }
        ]
    }
};

export default nextConfig;
