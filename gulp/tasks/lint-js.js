var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint-js', function lintJs() {
  return gulp.src(['./src/**/*.js'])
    .pipe(eslint())
    .pipe(eslint.format());
});
