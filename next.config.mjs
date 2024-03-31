/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: "www.colgateprofessional.com"
            }
        ]
    }
};

export default nextConfig;
