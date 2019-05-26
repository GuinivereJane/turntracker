// vue.config.js
module.exports = {
  pwa: {
    name: 'My App',
    themeColor: '#4DBA87',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',

    // configure the workbox plugin
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      // swSrc is required in InjectManifest mode.
      swSrc: './src/service-worker.js',
      // ...other Workbox options...
    },
  },
  chainWebpack: config => {
    config.module
      .rule('vue')
      .use('vue-loader')
      .loader('vue-loader')
      .tap(options =>
        Object.assign(options, {
          transformAssetUrls: {
            'VImg': ['src', 'lazy-src'],
            'v-card': 'src',
            'v-card-media': 'src',
            'v-responsive': 'src',
            'v-carousel-item': 'src',
            //...
          },
        })
      );
  },
};
