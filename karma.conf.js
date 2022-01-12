// Karma configuration
const webpack = require('webpack')
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
    config.set({
      basePath: '.',

      frameworks: ['mocha', 'chai', 'webpack'],

      files: [
        'dist/lib/test/wallet_address_validator.js',
      ],

      plugins: [
        'karma-webpack',
        'karma-chrome-launcher',
        'karma-chai',
        'karma-mocha',
      ],

      reporters: ['progress'],

      port: 9876,

      logLevel: config.LOG_INFO,

      preprocessors: {
        // add webpack as preprocessor
        'dist/lib/test/wallet_address_validator.js': [ 'webpack' ]
      },

      webpack: {
        resolve: {
          fallback: {
            stream: 'stream-browserify',
            buffer: require.resolve('buffer/')
          }
        },
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          }),
        ]
      },

      browsers: ['ChromeHeadless'],

      singleRun: true,

      concurrency: Infinity,

      colors: true,
    })
};
