// Requiring the Gulp module and some plugins.
var gulp        = require('gulp'),
    browserify  = require('gulp-browserify'),
    istanbul    = require('gulp-istanbul'),
    jshint      = require('gulp-jshint'),
    mocha       = require('gulp-mocha'),
    rename      = require('gulp-rename'),
    uglify      = require('gulp-uglify');


// Information.
var DEST_DIR  = 'dist',
    MIN_FILE  = 'arabic.min.js'
    SRC_FILE  = 'src/arabic.js',
    TEST_FILE = 'test/test.js';



gulp.task('browserify', function() {
  return gulp.src(SRC_FILE)
    .pipe(browserify({
      detectGlobals: true,
      standalone: 'A'
    }))
    .pipe(gulp.dest(DEST_DIR));
});


// Covering the test with Istanbul.
gulp.task('pre-test', function () {
  return gulp.src(SRC_FILE)
    .pipe(istanbul())
    .pipe(istanbul.hookRequire());
});


// Testing with Mocha.
gulp.task('test', ['pre-test', 'browserify'], function() {
  return gulp.src(TEST_FILE, {read: false})
    .pipe(mocha({reporter: 'spec'}))
    .pipe(istanbul.writeReports());
});


// Copy main file from src to dist.
gulp.task('copy', function() {
  return gulp.src(SRC_FILE)
    .pipe(gulp.dest(DEST_DIR));
});


// Linting the main JavaScript file with JsHint,
// and compress it with Uglify.
gulp.task('js', function() {
  return gulp.src(SRC_FILE)
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(uglify())
    .pipe(rename(MIN_FILE))
    .pipe(gulp.dest(DEST_DIR));
});


// Tasks
gulp.task('build', ['test', 'js', 'copy']);
