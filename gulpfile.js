var gulp = require('gulp'),
    less = require('gulp-less'),
    livereload = require('gulp-livereload');

gulp.task('less', function () {
    gulp.src('less/*.less')
        .pipe(less())
        .pipe(gulp.dest('css'))
        .pipe(livereload());
});

gulp.task('watch', function () {
    livereload.listen();
    gulp.watch('less/*.less', ['less']);
});

var gulp = require('gulp'),
    connect = require('gulp-connect');

gulp.task('webserver', function () {
    connect.server({
        livereload: true
    });
});

gulp.task('default', ['webserver']);