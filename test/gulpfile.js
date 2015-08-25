var gulp = require('gulp'),
    notice = require('..');

gulp.task('default', function () {
    gulp.src('fixtures/*.js')
        .pipe(notice())
        .pipe(gulp.dest('output/'));
});
