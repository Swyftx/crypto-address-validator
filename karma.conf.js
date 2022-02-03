// Karma configuration
const webpack = require('webpack')
const path = require('path')
process.env.CHROME_BIN = require('puppeteer').executablePath()

const testFileName = 'test/wallet_address_validator.ts'

module.exports = function (config) {
    config.set({
      basePath: '.',

      frameworks: ['mocha', 'chai', 'webpack'],

      files: [
        testFileName,
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
        [testFileName]: [ 'webpack' ]
      },

      webpack: {
        module: {
          rules: [
            {
              test: /\.ts?$/,
              use: 'ts-loader',
              exclude: /node_modules/,
            },
          ],
        },

        resolve: {
          fallback: {
            crypto: require.resolve('crypto-browserify'),
            stream: 'stream-browserify',
            buffer: require.resolve('buffer/'),
          },
          extensions: ['.ts', '.js'],
        },
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          }),
        ],
      },

      browsers: ['ChromeHeadless'],

      singleRun: true,

      concurrency: Infinity,

      colors: true,
    })
};
