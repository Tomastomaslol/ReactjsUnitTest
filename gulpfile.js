var gulp = require('gulp');
var browserify = require('gulp-browserify');
var react = require('gulp-react');
var karma = require('gulp-karma');

gulp.task('browserify', function() {
	return gulp.src('./dev/main.jsx')
		.pipe(browserify({
			transform: ['reactify'],
			extensions: [ '.js' ],
			debug: true
		}))
		.pipe(gulp.dest('./dev/dist'))
})

gulp.task('browserifyTest', function() {
	return gulp.src(['./tests/componentspec.js'])
		.pipe(browserify({
			transform: ['reactify'],
			extensions: [ '.jsx' ],
			debug: true
		}))
		.pipe(gulp.dest('./tests/dist'))
})

gulp.task('karmatest', ['browserify', 'browserifyTest'],  function() {
	var testFiles = [
        'dev/dist/main.js',
        'tests/dist/*.js'
	];
  
	return gulp.src(testFiles)
		.pipe(karma({
			configFile: 'karma.conf.js',
			action: 'run'
		}))
		.on('error', function(err) {
			throw err;
	});
});


gulp.task('watch', function() {
	return gulp.watch([ 'src/**/*.{js,jsx}',  'tests/**/*.{js,jsx}','dev/**/*.{js,jsx}', '!dev/dist/**/*' , '!tests/dist/**/*' ], [ 'browserify', 'browserifyTest' ]);
})



gulp.task('default', [ 'browserify' ])