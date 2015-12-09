const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const mocha = require('gulp-mocha');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');
const webpack = require('gulp-webpack');
const del = require('del');

const paths = {
	src: {
		scripts: 'source/javascripts/**/*.js'
	},
	dest: {
		scripts: 'public/javascripts/'
	}
};

gulp.task('clean', function() {
	return del(['public']);
});

gulp.task('scripts', ['clean'], () => {
	return gulp.src(paths.src.scripts)
		.pipe(sourcemaps.init())
			.pipe(babel({
				presets: ['es2015', 'react']
			}))
			.pipe(webpack())
			.pipe(concat('script.min.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.dest.scripts));
});

gulp.task('test', function () {
	return gulp.src('tests/**/*.js', {read: false})
		.pipe(mocha({reporter: 'nyan'}));
});

gulp.task('watch', function() {
  gulp.watch(paths.src.scripts, ['scripts']);
	gulp.watch(paths.dest.scripts + '/**/*.js', ['test']);
});

gulp.task('default', ['scripts', 'watch']);
