const gulp = require('gulp');
const plumber = require('gulp-plumber');
const less = require('gulp-less');
const rename = require('gulp-rename');

gulp.task('less', () => {
  gulp.src('./src/style/less/**/*.less')
    .pipe(plumber())
    .pipe(less())
    .pipe(rename(path => path.extname = '.wxss'))
    .pipe(gulp.dest('./src/style/css'));
});

gulp.task('watch', () => {
  gulp.watch('./src/style/less/**/*.less', ['less']);
});

gulp.task('default', ['less', 'watch']);
