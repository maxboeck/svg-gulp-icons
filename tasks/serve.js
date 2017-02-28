'use strict';

var gulp  = require('gulp');

gulp.task('serve', ['browser-sync'], function() {
  //asset pipeline
  gulp.watch(['app/assets/styles/**/*.scss'], ['styles']);
  gulp.watch(['app/assets/icons/**/*.svg'], ['icons']);

  //static templates
  gulp.watch([
    'app/**/*.html',
    'app/**/*.njk'
  ], ['html']);
});

gulp.task('default', ['serve']);