'use strict';
// Include gulp
var gulp = require('gulp'); 

// Include Our Plugins
var jshint = require('gulp-jshint');
var sass   = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var autoprefixer = require('gulp-autoprefixer');

// Default Task
gulp.task('init', ['lint', 'style', 'scripts', 'legacyjs', 'images', 'watch']);

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('src/scripts/**/*', ['lint', 'scripts']);
    gulp.watch('src/styles/**/*', ['style']);
});

// Lint Task
gulp.task('lint', function () {
    return gulp.src('app/scripts/frontend.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('style', function () {
    return gulp.src('app/sass/app.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('app/styles'));
});


// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src('app/scripts/frontend.js')
        .pipe(rename('frontend.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/assets'));
});
 
gulp.task('legacyjs', function () {
	return gulp.src('src/scripts/legacy.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/assets'));
});

// Move Images
gulp.task('images', function () {
	return gulp.src('app/images/**/*')
		.pipe(gulp.dest('dist/assets'));
});