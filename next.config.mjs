/** @type {import('next').NextConfig} */
import webpack from "webpack";

const nextConfig = {
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,  // Desactiva ESLint durante el build
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};

export default nextConfig;
