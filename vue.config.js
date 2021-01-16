module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/assets/styles/variables";
        `
      }
    }
  },
  pwa: {
    workboxPluginMode: 'InjectManifest',
    workboxOptions: {
      swSrc: 'src/service-worker.js',
      exclude: [/\.map$/, /_redirects/],
    }
  },
};