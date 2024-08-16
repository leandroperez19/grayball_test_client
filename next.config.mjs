/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [{ hostname: "resource.logitechg.com" }],
    },
};

export default nextConfig;
