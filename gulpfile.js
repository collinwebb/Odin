const gulp = require('gulp');
const babel = require('gulp-babel');
const concat = require('gulp-concat');
const uglify = require('gulp-uglify');


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
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('script.js'))
		.pipe(uglify())
		.pipe(gulp.dest(paths.dest.scripts));
});
