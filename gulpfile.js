var gulp = require('gulp');
var browserify = require('gulp-browserify');
var react = require('gulp-react');

gulp.task('browserify', function() {
	return gulp.src('./dev/main.jsx')
		.pipe(browserify({
			extensions: [ '.jsx' ],
			debug: true
		}))
		.pipe(react())
		.pipe(gulp.dest('./dev/dist'))
})

gulp.task('watch', function() {
	return gulp.watch([ 'src/**/*.{js,jsx}', 'dev/**/*.{js,jsx}', '!dev/dist/**/*' ], [ 'browserify' ]);
})

gulp.task('default', [ 'browserify' ])