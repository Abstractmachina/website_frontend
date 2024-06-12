/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000'
            },
            {
                protocol: 'https',
                hostname: 'taos-pullzone.b-cdn.net',
                port: '',
                pathname: '/media/**'
            }
        ]
    }
};

export default nextConfig;
