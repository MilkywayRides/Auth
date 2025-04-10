/** @type {import('next').NextConfig} */
const nextConfig = {
    // Remove the PPR experimental flag since it's only available in canary
    
    // Optimize image loading
    images: {
      formats: ['image/avif', 'image/webp'],
      remotePatterns: [
        {
          protocol: 'https',
          hostname: '**',
        },
      ],
    },
    
    // Enable React strict mode for better development experience
    reactStrictMode: true,
    
    // Improve logging during builds
    logging: {
      fetches: {
        fullUrl: true,
      },
    },
    
    // Optimize build output
    optimizeFonts: true,
    swcMinify: true,
    
    // Configure TypeScript for better type checking
    typescript: {
      ignoreBuildErrors: false,
      tsconfigPath: './tsconfig.json',
    }
  }
  
  module.exports = nextConfig