var gulp = require('gulp'),
    jshint = require('gulp-jshint'),
    uglify = require('gulp-uglify');


gulp.task('lint', function() {
  return gulp.src('./src/arabic.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});


gulp.task('compress', function() {
  return gulp.src('./src/arabic.js')
    .pipe(uglify())
    .pipe(gulp.dest('dist'));
});


gulp.task('default', ['lint', 'compress']);
