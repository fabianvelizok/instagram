var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var rename = require('gulp-rename');
var babel = require('babelify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var watchify = require('watchify');

function compile(watch) {
  var bundle = watchify(
    browserify('./src/index.js', { debug: true }
  ).transform(babel, {
    presets: ["babel-preset-env"],
    plugins: [
      'syntax-async-functions',
      'transform-regenerator'
    ]
  }));

  function rebundle() {
    bundle.bundle()
      .on('error', function(err) {
        console.error(err); this.emit('end');
      })
      .pipe(source('app.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./public'));
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
