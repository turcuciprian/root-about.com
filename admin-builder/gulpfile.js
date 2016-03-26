var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var uglify = require('gulp-uglifyjs');


gulp.task('sass', function () {
  return gulp.src('./src/sass/**/*.scss')
  .pipe(sourcemaps.init())
  .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
  .pipe(sourcemaps.write())
  .pipe(gulp.dest('./ss'));
});

gulp.task('compressjS', function() {
  return gulp.src('./src/js/**/*.js')
  .pipe(uglify('all.min.js', {
    outSourceMap: true
  }))
  .pipe(gulp.dest('./ss'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./src/sass/**/*.scss', ['sass']);
  gulp.watch('./src/js/**/*.js', ['compressjS']);

});
gulp.task('default', ['sass','compressjS','sass:watch']);
