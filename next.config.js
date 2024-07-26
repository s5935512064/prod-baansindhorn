const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fancyapps/ui", "vanilla-cookieconsent"]);


/** @type {import('next').NextConfig} */
// const nextConfig = {
//   reactStrictMode: true,
//   i18n: {
//     locales: ["en"],
//     defaultLocale: "en",
//     images: {
//       unoptimized: true,
//     },
//   },

// }

const nextConfig = {
  reactStrictMode: true,
  env: {
    NEXT_BEARER_TOKEN: process.env.NEXT_BEARER_TOKEN
  },
  images: {
    domains: ['scontent-kut2-2.xx.fbcdn.net', 'scontent.fbkk10-1.fna.fbcdn.net', "scontent-kut2-1.xx.fbcdn.net", "scontent.fbkk14-1.fna.fbcdn.net", 'res.cloudinary.com', "https://baansindhorn.com/"],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 600,
    unoptimized: true,
  },
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
      })
    );
    if (isServer) {
      require("./scripts/sitemap-generator");
    }
    return config;
  },

  async rewrites() {
    return [
      {
        source: '/robots.txt',
        destination: '/api/robots'
      }
    ];
  }
}

module.exports = withPlugins([nextConfig, withTM]);
