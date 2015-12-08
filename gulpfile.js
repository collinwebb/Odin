const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
	scripts: 'source/javascripts/**/*.js'
};

gulp.task('scripts', () => {
	return gulp.src(paths.scripts)
		.pipe(sourcemaps.init())
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(concat('script.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest('public/javascripts/'));
});

gulp.task('watch', function() {
  gulp.watch(paths.scripts, ['scripts']);
});

gulp.task('default', ['watch', 'scripts']);
