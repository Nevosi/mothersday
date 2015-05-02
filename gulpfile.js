var gulp = require('gulp')
	gutil = require('gulp-util'),
	coffee = require('gulp-coffee');

gulp.task('coffee', function() {
	 gulp.src(Coffee_scripts/ *.coffee)
		.pipe(coffee({bare: true})
			.on(.'error', gutil.log))
		 .pipe(gulp.dest('Javascripts'))
});
