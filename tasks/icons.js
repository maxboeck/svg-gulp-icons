'use strict';

var gulp        = require('gulp');
var svgSprite   = require('gulp-svg-sprite');
var $           = require('gulp-load-plugins')();

// SVG Sprite Configuration
var config = {
  log: true,
  mode: {
    inline: true,
    symbol: {
      dest: 'assets/icons', // destination folder
      sprite: 'sprite.svg', //sprite filename
      example: false // build the sample page?
    }
  },
  svg: {
    xmlDeclaration: false, // strip out the XML attribute
    doctypeDeclaration: false // don't include the !DOCTYPE declaration
  }
};

gulp.task('icons', function() {
  return gulp.src('app/assets/icons/**/*.svg')
    .pipe($.plumber({
      errorHandler: function (err) {
        $.util.log($.util.colors.red('Empty File.'));
        this.emit('end');
      }
    }))
    .pipe(svgSprite(config))
    .pipe(gulp.dest('dist'));
});