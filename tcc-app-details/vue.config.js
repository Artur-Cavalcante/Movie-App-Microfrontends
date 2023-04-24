module.exports = {
  chainWebpack(config) {
    config.externals({'@tcc-app/core': '@tcc-app/core'});
    config.plugin("SystemJSPublicPathWebpackPlugin").tap((args) => {
      args[0].rootDirectoryLevel = 1;
      return args;
    });
  },
};
