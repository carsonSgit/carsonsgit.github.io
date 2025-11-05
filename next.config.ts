import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
    domains: ['api.microlink.io']
  },
  sassOptions: {
    includePaths: ['./app'],
  }
};

export default nextConfig;
