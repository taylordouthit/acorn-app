// Karma configuration file, see link for more information
// https://karma-runner.github.io/1.0/config/configuration-file.html

module.exports = function (config) {
  config.set({
    autoWatch: true,
    autoWatchBatchDelay: 2000, // how long to wait before batching files to run
    basePath: '',
    browsers: ['ChromeHeadless'],
    coverageIstanbulReporter: {
      dir: require('path').join(__dirname, '../coverage'),
      reports: ['text-summary'],
      fixWebpackSourcePaths: true
    },
    exclude: [],
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-coverage-istanbul-reporter'),
      require('karma-mocha-reporter'),
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    reporters: ['mocha'],
  });
};