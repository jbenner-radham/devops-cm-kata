'use strict';

let babel       = require('gulp-babel');
let browserSync = require('browser-sync').create();
let colorguard  = require('gulp-colorguard');
let dateTime    = require('@radioactivehamster/date-time');
let gulp        = require('gulp');
let less        = require('gulp-less');
let stachio     = require('gulp-stachio');

gulp.task('serve', ['style', 'templates'], () => {
    browserSync.init({
        open: false,
        server: { baseDir: './' }
    });
    gulp.watch('./src/**/*.*', ['style', 'templates']).on('change', browserSync.reload);
});

gulp.task('style', () => {
    return gulp.src('./src/style/main.less')
        .pipe(less())
        .pipe(colorguard().on('error', e => console.error(e.message)))
        .pipe(gulp.dest('./'));
});


gulp.task('templates', () => {
    return gulp.src('src/templates/index.hbs')
               .pipe(stachio({ timestamp: dateTime() }))
               .pipe(gulp.dest('./'));
});

gulp.task('js', () => {
    return gulp.src('src/js/*.js')
               .pipe(babel())
               .pipe(gulp.dest('./'));
});

gulp.task('default', ['style', 'templates', 'js']);
