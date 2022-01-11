// Karma configuration
const webpack = require('webpack')
module.exports = function (config) {
    config.set({
      basePath: '',

      frameworks: ['mocha', 'chai', 'webpack'],

      files: [
        'dist/lib/test/wallet_address_validator.js',
        // 'dist/ramp-crypto-address-validator.umd.js'
      ],

      plugins: [
        'karma-webpack',
        'karma-chai',
        'karma-mocha',
      ],

      reporters: ['progress'],

      port: 9876,

      colors: true,

      logLevel: config.LOG_INFO,

      preprocessors: {
        // add webpack as preprocessor
        'dist/lib/test/wallet_address_validator.js': [ 'webpack' ]
      },

      // browsers: ['Chrome'],

      singleRun: false,

      concurrency: Infinity,

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
      }
    })
};
