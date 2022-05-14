const AutoImport = require('unplugin-auto-import/webpack');

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.plugins.push(AutoImport({ imports: ['react'] }));
    return config;
  },
};

module.exports = nextConfig;
