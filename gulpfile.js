const gulp = require('gulp');
const babel = require('babelify');
const mocha = require('gulp-mocha');
const uglify = require('gulp-uglify');
const del = require('del');
const streamify = require('gulp-streamify');
const source = require('vinyl-source-stream');
const browserify = require('browserify');

const path = {
	source: 'source/javascripts/**/*.*',
	public: 'public/javascripts/',
	minifiedOut: 'script.min.js'
};

gulp.task('clean', function() {
	return del(['public/javascripts']);
});

gulp.task('build', ['clean'], function(){
  browserify('source/javascripts/react.jsx')
		.transform(babel)
		.bundle()
    .pipe(source(path.minifiedOut))
    // .pipe(streamify(uglify()))
    .pipe(gulp.dest(path.public));
});

gulp.task('test', function () {
	return gulp.src('tests/**/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('default', ['build'], function () {
  gulp.watch(path.source, ['build']);
	gulp.watch(path.public + '/**/*.js', ['test']);
});
