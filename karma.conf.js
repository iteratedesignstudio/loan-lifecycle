var webpackConfig = require('./webpack.config.js');
webpackConfig.entry = {};

module.exports = function(config) {
    config.set({
        // ... normal karma configuration
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        files: [{ pattern: 'spec.bundle.js', watched: false }],
        logLevel: config.LOG_DEBUG,

        preprocessors: { 'spec.bundle.js': ['webpack', 'babel'] },

        webpack: webpackConfig,

        webpackMiddleware: {
            // webpack-dev-middleware configuration
            // i. e.
            noInfo: true
        },

        reporters: ['spec'],

        singleRun: true
    });
};