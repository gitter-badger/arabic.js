// Requiring the Gulp module and some plugins.
var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');


// Information.
var destDir = 'dist',
    srcFile = './src/arabic.js';

// Linting the main JavaScript file with JsHint.
gulp.task('lint', function() {
  return gulp.src(srcFile)
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


// Compressing the main JavaScript file with Uglify.
gulp.task('compress', function() {
  return gulp.src(srcFile)
    .pipe(uglify())
    .pipe(gulp.dest(destDir));
});


// Tasks
gulp.task('build', ['lint', 'compress']);
