'use strict';

var path = require('path');

const gulp = require('gulp');

gulp.task('default', () => {
  return gulp.src([
    path.join('src','_scripts','/**/*'),
    '!'+path.join('src','_scripts','/{**/\_*,**/\_*/**}'),
  ])
  .pipe(gulp.dest(path.join('app','scripts')));
});

gulp.task('watch', (done) => {
  gulp.watch([path.join('src','_scripts/**/*')])
  .on('change', gulp.series('default'));
  done();
});
