// Requiring the Gulp module and some plugins.
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    rename = require('gulp-rename'),
    uglify = require('gulp-uglify');


// Information.
var DEST_DIR = 'dist',
    MIN_FILE = 'arabic.min.js'
    SRC_FILE = 'src/arabic.js';


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
gulp.task('build', ['js', 'copy']);
