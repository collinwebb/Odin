const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');
const sourcemaps = require('gulp-sourcemaps');

const paths = {
	src: {
		scripts: 'source/javascripts/**/*.js'
	},
	dest: {
		scripts: 'public/javascripts/'
	}
};

gulp.task('default', () => {
	return gulp.src(paths.src.scripts)
		.pipe(sourcemaps.init())
			.pipe(babel({
				presets: ['es2015']
			}))
			.pipe(concat('script.js'))
			.pipe(uglify())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(paths.dest.scripts));
});
