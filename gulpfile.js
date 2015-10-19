// Requiring the Gulp module and some plugins.
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


// Information.
var DEST_DIR = 'dist',
    MIN_FILE = 'arabic.min.js'
    SRC_FILE = 'src/arabic.js';

// Linting the main JavaScript file with JsHint.
gulp.task('lint', function() {
  return gulp.src(SRC_FILE)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// Compressing the main JavaScript file with Uglify.
gulp.task('compress', function() {
  return gulp.src(SRC_FILE)
    .pipe(uglify())
    .pipe(rename(MIN_FILE))
    .pipe(gulp.dest(DEST_DIR));
});


// Tasks
gulp.task('build', ['lint', 'compress']);
