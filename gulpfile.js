'use strict';

var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

var paths = {
    js: ['./gulpfile.js', './test/**/*.js'],
    scss: ['./stylesheets/_sass-lib.scss'],
    test: ['./test/**/*.js']
};

var plumberOpts = {};

gulp.task('js-lint', function () {
    return gulp.src(paths.js)
        .pipe($.jshint('.jshintrc'))
        .pipe($.plumber(plumberOpts))
        .pipe($.jscs())
        .pipe($.jshint.reporter('jshint-stylish'));
});

gulp.task('scss-lint', function() {
    gulp.src(paths.scss)
        .pipe($.scssLint())
        .pipe($.plumber(plumberOpts));
});

gulp.task('test', function () {
    return gulp.src(paths.test, {read: false})
        .pipe($.plumber(plumberOpts))
        .pipe($.mocha({reporter: 'nyan'}));
});

gulp.task('lint', ['scss-lint', 'js-lint']);
gulp.task('test', ['lint']);

gulp.task('watch', ['test'], function () {
    gulp.watch(paths.js, ['js-lint']);
    gulp.watch(paths.scss, ['scss-lint']);
    gulp.watch(paths.test, ['test']);
});

gulp.task('default', ['scss-lint', 'js-lint', 'test']);
