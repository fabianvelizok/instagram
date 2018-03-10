var gulp = require('gulp');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var babelify = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

function compile(watch) {
  var bundle = watchify(browserify("./src/index.js"));

  function rebundle() {
    bundle
      .transform("babelify", { presets: ["env"] })
      .bundle()
      .pipe(source("index.js"))
      .pipe(rename("app.js"))
      .pipe(gulp.dest("public"));
  }

  if (watch) {
    bundle.on('update', function () {
      console.log('Updating...');
      rebundle();
    });
  }

  rebundle();
}

gulp.task('styles', function() {
  gulp
    .src('assets/index.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(rename('app.css'))
    .pipe(gulp.dest('public'));
});

gulp.task('assets', function() {
  gulp
    .src('assets/*')
    .pipe(gulp.dest('public'));
});

gulp.task('build', function() {
  return compile();
});

gulp.task('watch', function() {
  return compile(true);
});

gulp.task('default', ['styles', 'assets', 'build']);
