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

  swcMinify: false,
  output: 'standalone',

  experimental: {
    incrementalCacheHandlerPath: false,
    turbo: true,  
  },

  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    // Evita minificación de jQuery (puede causar tiempos largos)
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );

    // Evita duplicar jQuery (en caso de builds largos)
    config.resolve.alias['jquery'] = 'jquery';

    return config;
  },

  // Desactiva Telemetría de Next.js para ahorrar tiempo
  telemetry: false,
};

export default nextConfig;