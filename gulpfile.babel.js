/* eslint-disable no-console */

import gulp from 'gulp';
import istanbul from 'gulp-istanbul';
import mocha from 'gulp-mocha';
import eslint from 'gulp-eslint';
// import pump from 'pump';
import uglify from 'gulp-uglify';
import babel from 'gulp-babel';
import sourcemaps from 'gulp-sourcemaps';


/* eslint-disable arrow-body-style */
gulp.task('babel', () => {
  return gulp.src('src/**/*.js')
    .pipe(sourcemaps.init())
    .pipe(babel({
      presets: ['es2015'],
    }))
    .pipe(uglify())
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'));
});


gulp.task('lint', () => {
    // ESLint ignores files with "node_modules" paths.
    // So, it's best to have gulp ignore the directory as well.
    // Also, Be sure to return the stream from the task;
    // Otherwise, the task may end before the stream has finished.
  return gulp.src(['src/**/*.js', '!node_modules/**'])
        // eslint() attaches the lint output to the "eslint" property
        // of the file object so it can be used by other modules.
        .pipe(eslint())
        // eslint.format() outputs the lint results to the console.
        // Alternatively use eslint.formatEach() (see Docs).
        .pipe(eslint.format())
        // To have the process exit with an error code (1) on
        // lint error, return the stream and pipe to failAfterError last.
        .pipe(eslint.failAfterError());
});

gulp.task('mocha', () => gulp.src('test/**/*.js', { read: false })
// gulp-mocha needs filepaths so you can't have any plugins before it
    .pipe(mocha({ reporter: 'nyan' })));

gulp.task('pre-test', () => {
  return gulp.src(['src/**/*.js'])
  .pipe(babel({
    presets: ['es2015'],
  }))
  // Covering files
    .pipe(istanbul())
  // Force `require` to return covered files
   .pipe(istanbul.hookRequire());
});

gulp.task('test', ['pre-test'], () => {
  return gulp.src(['test/**/*.js'])
  .pipe(mocha())
  // Creating the reports after tests ran
  .pipe(istanbul.writeReports())
// Enforce a coverage of at least 80%
  .pipe(istanbul.enforceThresholds({
    thresholds: {
      global: 80,
    },
  }));
});

gulp.task('build', ['lint', 'babel'], () => {
  console.log('Flitwick is built and good to go');
});

gulp.task('default', ['babel'], () => {
  // This will only run if the lint task is successful...
  gulp.watch('src/**/*.js', ['build']);
  console.log('Watchin all source files...');
});
