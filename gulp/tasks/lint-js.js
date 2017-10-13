var gulp = require('gulp');
var eslint = require('gulp-eslint');

gulp.task('lint-js', function() {
  return gulp.src('.build/**')
    .pipe(eslint())
    .pipe(eslint.format());
});
