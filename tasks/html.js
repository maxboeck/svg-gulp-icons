'use strict';

var gulp  = require('gulp');
var $ = require('gulp-load-plugins')();
var browserSync = require('browser-sync');

gulp.task('html', function() {
  gulp.src('app/views/**/*.html')
    .pipe($.plumber({
      errorHandler: function (err) {
        $.util.log($.util.colors.red(err));
        this.emit('end');
      }
    }))
    .pipe($.nunjucksRender({
      //set the paths where nunjucks looks for templates
      path: [
        'app/components',
        'app/layout'
      ]
    }))
    .pipe(gulp.dest('dist'))
    .on('end', function(){
      browserSync.reload();
    });
});