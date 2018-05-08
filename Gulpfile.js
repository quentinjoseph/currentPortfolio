'use strict';
// Get modules
var gulp         = require('gulp');
var sass         = require('gulp-sass');
var uglify       = require('gulp-uglify');
var rename       = require('gulp-rename');
var imagemin     = require('gulp-imagemin');
var livereload   = require('gulp-livereload');
var concat       = require('gulp-concat');
var plumber      = require('gulp-plumber');
var cssnano      = require('gulp-cssnano');
var autoprefixer = require('gulp-autoprefixer');
var jshint       = require('gulp-jshint');

var   browserSync = require('browser-sync'),
      watch       = require('gulp-watch'),
      gulpif      = require('gulp-if'),
      gfi         = require("gulp-file-insert"),
      runSequence = require('run-sequence'),
      batch       = require('gulp-batch');

//Variables
var input = {
  'jsMaster'     : 'js/source',
  'imagesPath'   : 'images/source',
  'blocksPath'   : 'blocks'
}
var output = {
  'css': 'css/',
  'compiled': 'js/compiled',
  'js': 'js/',
}

//Build CSS
gulp.task('main-css', function() {
  return gulp.src('styles/style.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer())
    .pipe(cssnano({
      discardComments: {removeAll: true}
    }))
    //.pipe(concat('styles/style.css'))
    .pipe(gulp.dest('styles/css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

gulp.task('build-css', function() {
  runSequence('main-css');
});

// //Build Vendor JS
// gulp.task('build-vendor-js', function() {
//   return gulp.src([
//     'js/vendor/*.js',
//     'js/vendor/**/*.js',
//   ])
//   .pipe(concat('vendor.js'))
//     .pipe(gulp.dest('js / compiled'));
// });

// gulp.task('build-global', function() {
//   return gulp.src('js/*.js')
//     .pipe(concat('js/*.js'))
//     .pipe(gulp.dest('js/compiled'));
// });


// Generate the entire JS enchilada
// gulp.task('compile-js', function() {
//   return gulp.src([output.compiled + '/vendor.js', output.compiled + '/main-with-blocks.js'])
//     .pipe(concat('main.js'))
//     .pipe(gulp.dest(output.js));
// });

// gulp.task('build-js', function() {
//   runSequence('build-vendor-js', 'build-global');
// });

// JShint
gulp.task('jshint', function() {
  return gulp.src(['/js/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

// images
gulp.task('images', function () {
  gulp.src('images/source/*.{png,gif,jpg,svg}')
    .pipe(imagemin([
      imagemin.jpegtran({progressive: true}),
      imagemin.optipng({optimizationLevel: 5})
    ]))
    .pipe(gulp.dest('images'));
});

//browserSync
gulp.task('browserSync', function() {
  browserSync.init({
    proxy: "http://127.0.0.1:8080",
    files: ['**/*.html', '**/*.js', 'js/script.js'],
    watchTask: true
  });
});

gulp.task('watch', function() {
  watch(['styles/*.scss', 'styles/style.scss', 'views/*.html'], batch(function (events, done) {
    gulp.start('build-css', done);
  }));

  // Watch js in Primary js folder
  watch(['js/*.js', 'js/vendor/*.js','js/vendor/**/*.js'], batch(function (events, done) {
    gulp.start('jshint', done);
    // gulp.start('build-js', done);
  }));

  // Watch js in blocks
  // watch([input.blocksPath + '/**/**/*.js', input.blocksPath + '/**/*.js'], batch(function (events, done) {
  //   //gulp.start('jshint', done);
  //   gulp.start('build-js', done);
  // }));

  watch(input.imagesPath, batch(function (events, done) {
    gulp.start('images', done);
  }));
});

gulp.task('default', ['build-css', 'jshint', 'watch', 'browserSync', 'images']);