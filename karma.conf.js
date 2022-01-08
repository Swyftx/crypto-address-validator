// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['mocha', 'chai'],

        files: [
        {
          pattern: './dist/ramp-crypto-address-validator.umd.js',
        }
      ],

        reporters: ['progress'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        browsers: ['Chrome'],

        singleRun: true,

        concurrency: Infinity,
    })
};
