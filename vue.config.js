module.exports = {
  devServer: {
    client: {
      overlay: {
        runtimeErrors: (error) => {
          if (error.message === "ResizeObserver loop limit exceeded") return false;
          return true;
        },
      },
    },
  },
  pluginOptions: {
    i18n: {
      locale: "en",
      fallbackLocale: "en",
      localeDir: "locales",
      enableInSFC: false,
    },
  },
  publicPath: process.env.NODE_ENV === "production" ? "/phrase-demo-app/" : "/",
  outputDir: "dist",
};
