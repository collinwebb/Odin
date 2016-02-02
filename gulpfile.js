const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const mocha = require('gulp-mocha');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('gulp-webpack');
const del = require('del');
const shell = require('gulp-shell');

const path = {
	source: 'source/javascripts/**/*.js',
	public: 'public/javascripts/',
	minifiedOut: 'script.min.js'
};

gulp.task('clean', function() {
	return del(['public/**']);
});

gulp.task('scripts', function () {
  return gulp.src(path.source)
    .pipe(sourcemaps.init())
    .pipe(babel())
    .pipe(concat(path.minifiedOut))
		.pipe(uglify())
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(path.public));
});

gulp.task('test', function () {
	return gulp.src('tests/**/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function() {
	gulp.watch('gulpfile.js', shell.task(['gulp']));
  gulp.watch(path.source, ['scripts']);
	gulp.watch(path.public + '/**/*.js', ['test']);
});

gulp.task('default', ['clean', 'scripts', 'watch']);
