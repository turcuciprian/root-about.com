var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');
//***********
//
// Watchable files
//
//***********

//
//SASS
//
gulp.task('sass', function () {
  return gulp.src('./src/sass/custom/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./ss'));
});
//
// Javascript
//

gulp.task('compressjS', function() {
  return gulp.src('./src/js/custom/*.js')
  .pipe(uglify('script.min.js', {
    outSourceMap: true,
    mangle: false
  }))
  .pipe(gulp.dest('./ss'));
});

//
// First run files
//

//js libraries
gulp.task('compressJsLibs', function() {
  return gulp.src('./src/js/lib/*.js')
  .pipe(uglify('lib.min.js', {
    outSourceMap: true,
    mangle: false
  }))
  .pipe(gulp.dest('./ss'));
});


gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/custom/*.js', ['compressjS']);

});
gulp.task('default', ['sass','compressjS','compressJsLibs','sass:watch']);
