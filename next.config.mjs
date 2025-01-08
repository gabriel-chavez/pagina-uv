/** @type {import('next').NextConfig} */
import webpack from "webpack";

const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true, 
  },

  images: {
    unoptimized: true, 
  },

  swcMinify: true, 
  output: 'standalone',

  experimental: {
    incrementalCacheHandlerPath: false,
    turbo: true, 
    nextScriptWorkers: true, 
  },

  webpack: (config, { buildId, dev, isServer }) => {
  
    if (!dev) {
      config.optimization.minimize = true;
    }

 
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    ); 
    config.resolve.alias['jquery'] = 'jquery';

    return config;
  },

  telemetry: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Content-Security-Policy',
            value: "upgrade-insecure-requests",
          },
        ],
      },
    ];
  }
};

export default nextConfig;
