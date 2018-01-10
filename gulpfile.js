'use strict';

const gulp = require('gulp');

gulp.task('default', () => {
  return gulp.src([
    'src/_scripts/**/*',
    '!src/_scripts/{**/\_*,**/\_*/**}',
  ])
  .pipe(gulp.dest('app/scripts'));
});
