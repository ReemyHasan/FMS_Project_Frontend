const {TranslationFiles } = require("./src/data/core");

module.exports = {
  locales: ["en", "ar"],
  defaultLocale: "en",
  pages: {
    "*": [TranslationFiles.COMMON],

  },
  loadLocaleFrom: (lang, ns) =>
    import(`./src/utils/locales/${lang}/${ns}.json`).then((m) => m.default),
};
