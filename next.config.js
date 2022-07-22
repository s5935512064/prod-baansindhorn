const withPlugins = require("next-compose-plugins");
const withTM = require("next-transpile-modules")(["@fancyapps/ui", "vanilla-cookieconsent"]);


/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

}

module.exports = withPlugins([nextConfig, withTM]);
