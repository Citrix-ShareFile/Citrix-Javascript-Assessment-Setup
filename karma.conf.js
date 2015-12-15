// Karma configuration
// Generated on Tue Dec 15 2015 07:00:59 GMT-0500 (Eastern Standard Time)

module.exports = function (config) {
	config.set({

		// base path that will be used to resolve all patterns (eg. files, exclude)
		basePath: '',

		// frameworks to use
		// available frameworks: https://npmjs.org/browse/keyword/karma-adapter
		frameworks: ['jasmine', 'requirejs'],

		// list of files / patterns to load in the browser
		files: [
			{ pattern: 'node_modules/chai/chai.js', included: false },
			{ pattern: 'src/**/*.js', included: false },
			{ pattern: 'vendor/**/*.js', included: false },
			{ pattern: 'test/**/*Tests.js', included: false },
			'test/test-main.js'
		],

		// list of files to exclude
		exclude: [
			'**/*.swp'
		],

		// preprocess matching files before serving them to the browser
		// available preprocessors: https://npmjs.org/browse/keyword/karma-preprocessor
		preprocessors: {
		},


		// test results reporter to use
		// possible values: 'dots', 'progress'
		// available reporters: https://npmjs.org/browse/keyword/karma-reporter
		reporters: ['progress', 'junit'],

		junitReporter: {
			outputDir: 'target', // results will be saved as $outputDir/$browserName.xml
			outputFile: 'test-results.xml', // if included, results will be saved as $outputDir/$browserName/$outputFile
			suite: '', // suite will become the package name attribute in xml testsuite element
			useBrowserName: false // add browser name to report and classes names
		},

		// web server port
		port: 9876,


		// enable / disable colors in the output (reporters and logs)
		colors: true,


		// level of logging
		// possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
		logLevel: config.LOG_INFO,


		// enable / disable watching file and executing tests whenever any file changes
		autoWatch: false,


		// start these browsers
		// available browser launchers: https://npmjs.org/browse/keyword/karma-launcher
		browsers: ['PhantomJS'],


		// Continuous Integration mode
		// if true, Karma captures browsers, runs the tests and exits
		singleRun: true,

		// Concurrency level
		// how many browser should be started simultanous
		concurrency: Infinity
	})
}
