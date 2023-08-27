const { withPlausibleProxy } = require("next-plausible");

module.exports = withPlausibleProxy()({
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });
    return config;
  },
  experimental: {
    largePageDataBytes: 128 * 100000,
    serverActions: true,
  },
  i18n: {
    locales: ["en", "ru"],
    defaultLocale: "en",
  },
});
