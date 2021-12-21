// Karma configuration
module.exports = function (config) {
    config.set({
        basePath: './',

        frameworks: ['mocha', 'chai', 'jasmine', 'karma-typescript'],

        files: [
            'test/wallet_address_validator.ts',
            'test/*.spec.ts',
            'src/test/wallet_address_validator.ts',
            'src/test/wallet_address_validator.js',
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
