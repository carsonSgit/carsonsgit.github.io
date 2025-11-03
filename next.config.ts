import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '',
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: ['./app'],
  },
  // Next.js 16: Turbopack is now default, no need to configure
  // React Compiler: Can be enabled if needed
  // reactCompiler: true,
};

export default nextConfig;
