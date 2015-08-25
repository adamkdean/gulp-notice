var gulp = require('gulp'),
    notice = require('..');

gulp.task('default', function () {
    console.log('test');
    gulp.src('fixtures/*.js')
        .pipe(notice())
        .pipe(gulp.dest('output/'));
});
