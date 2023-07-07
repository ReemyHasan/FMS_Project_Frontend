/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");
const withTranslate = require("next-translate-plugin");

const nextConfig = {
  transpilePackages: ["@acme/ui", "lodash-es"],
};
module.exports = withTranslate(
  withLess({
    ...nextConfig,
    lessLoaderOptions: {
      lessOptions: {
        modifyVars: {
          "@primary-color": "#000f24",
          "@sidebar-dark-bg-color": "#000f24",
        },
      },
    },
  })
);
