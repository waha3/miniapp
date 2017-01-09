var gulp = require('gulp');
var plumber = require('gulp-plumber');
var livereload = require('gulp-livereload');
var less = require('gulp-less');
var connect = require('gulp-connect');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var sourcemaps = require('gulp-sourcemaps');
var cssnano = require('cssnano');

gulp.task('less', function() {
  gulp.src('./**/**/*.less')
      .pipe(plumber())
      .pipe(less())
      .pipe(postcss([autoprefixer({
        'browsers': ['last 12 version', 'last 3 iOS versions']
      }), cssnano]))
      .pipe(gulp.dest('./**/**/*.css'));
});

// gulp.task('html', function() {
//   gulp.src('./src/views/**/*.html')
//       .pipe(livereload());
// });

// gulp.task('js', function() {
//   gulp.src('./src/js/**/*.js')
//       .pipe(livereload());
// });

// gulp.task('watch', function() {
//   livereload.listen();
//   gulp.watch('./src/less/**/*.less', ['less']);
//   gulp.watch('./src/views/**/*.html', ['html']);
//   gulp.watch('./src/js/**/*.js', ['js']);
// });

// gulp.task('connect', function() {
//   connect.server({
//     root: 'src',
//     livereload: true,
//     port: 9999
//   });
// });

// gulp.task('dist', function() {
//   gulp.src('')
// });

gulp.task('default', [
  'less'
]);
