/** @type {import('next').NextConfig} */
import webpack from "webpack";

const nextConfig = {
  reactStrictMode: true,

  eslint: {
    ignoreDuringBuilds: true,  // Desactiva ESLint durante el build
  },

  images: {
    unoptimized: true,  // Desactiva optimización de imágenes
  },

  swcMinify: false,  // Evita minificación de SWC (puede causar tiempos largos)

  experimental: {
    turbo: {},  // Activa Turbo Mode correctamentepush
  },

  webpack: (config) => {
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
};

export default nextConfig;
