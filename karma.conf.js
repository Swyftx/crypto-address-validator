// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: '',

        frameworks: ['mocha', 'chai', 'karma-typescript'],

        files: [
            'dist/wallet-address-validator.min.js',
            'test/**/*.ts'
        ],

        preprocessors: {
            "**/*.ts": "karma-typescript" // *.tsx for React Jsx
        },

        reporters: ['progress', 'karma-typescript'],

        port: 9876,

        colors: true,

        logLevel: config.LOG_INFO,

        browsers: ['ChromeHeadless'],

        singleRun: true,

        concurrency: Infinity
    })
};
