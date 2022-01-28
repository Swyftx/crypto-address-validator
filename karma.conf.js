// Karma configuration
const webpack = require('webpack')
process.env.CHROME_BIN = require('puppeteer').executablePath()

module.exports = function (config) {
    config.set({
      basePath: '.',

      frameworks: ['mocha', 'chai', 'webpack'],

      files: [
        'test/wallet_address_validator.ts',
      ],

      plugins: [
        'karma-webpack',
        'karma-chrome-launcher',
        'karma-chai',
        'karma-mocha',
      ],

      reporters: ['progress'],

      port: 9876,

      logLevel: config.DEBUG_INFO,

      preprocessors: {
        // add webpack as preprocessor
        'test/wallet_address_validator.ts': [ 'webpack' ]
      },

      webpack: {
        resolve: {
          fallback: {
            stream: 'stream-browserify',
            buffer: require.resolve('buffer/')
          },
          extensions: ['.ts', '.js'],
        },
        plugins: [
          new webpack.ProvidePlugin({
            Buffer: ['buffer', 'Buffer'],
          }),
        ],
        module: {
          rules: [
            {
              use: 'ts-loader',
              exclude: /node_modules/,
            },
          ],
        },
        output: {
          libraryTarget: "global"
        }
      },

      browsers: ['ChromeHeadless'],

      singleRun: true,

      concurrency: Infinity,

      colors: true,
    })
};
