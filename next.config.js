/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'platform-lookaside.fbsbx.com',
          port: '',
          pathname: '/platform/profilepic/**',
        }
      ],
    },
  };
  
  module.exports = nextConfig
  