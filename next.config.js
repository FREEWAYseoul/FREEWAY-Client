/** @type {import('next').NextConfig} */

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
  rewrites: () => {
    return [
      {
        source: '/api/:path*',
        destination: `${BASE_URL}/api/:path*`,
      },
    ];
  },
  images: {
    domains: ['freeway-seoul.vercel.app', 'data.seoul.go.kr'],
  },
};

module.exports = nextConfig;
