const gulp = require('gulp');
const babel = require('gulp-babel');

const paths = {
	src: {
		scripts: 'source/javascripts/**/*.js'
	},
	dest: {
		scripts: 'public/javascripts'
	}
};

gulp.task('default', () => {
	return gulp.src(paths.src.scripts)
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest(paths.dest.scripts));
});
