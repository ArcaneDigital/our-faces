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
gulp.task('init', ['lint', 'styles', 'scripts', 'legacyjs', 'images']);

// Watch Files For Changes
gulp.task('watch', function () {
    gulp.watch('app/scripts/**/*.js', ['lint', 'scripts']);
    gulp.watch('app/styles/**/*.scss', ['styles']);
});

// Lint Task
gulp.task('lint', function () {
    return gulp.src('app/scripts/frontend.js')
        .pipe(jshint())
        .pipe(jshint.reporter('default'));
});

// Compile Our Sass
gulp.task('styles', function () {
    return gulp.src('app/sass/app.scss')
        .pipe(sass())
        .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
        .pipe(gulp.dest('dist/style'));
});


// Concatenate & Minify JS
gulp.task('scripts', function () {
    return gulp.src('app/scripts/frontend.js')
        .pipe(rename('frontend.min.js'))
        .pipe(uglify())
        .pipe(gulp.dest('dist/js'));
});
 
gulp.task('legacyjs', function () {
	return gulp.src('src/scripts/legacy.min.js')
		.pipe(uglify())
		.pipe(gulp.dest('dist/js'));
});

// Move Images
gulp.task('images', function () {
	return gulp.src('app/images/**/*')
		.pipe(gulp.dest('dist/image'));
});