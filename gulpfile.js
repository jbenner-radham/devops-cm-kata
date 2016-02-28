'use strict';

let babel       = require('gulp-babel');
let browserSync = require('browser-sync').create();
let dateTime    = require('@radioactivehamster/date-time');
let gulp        = require('gulp');
let stachio     = require('gulp-stachio');

gulp.task('serve', ['templates'], () => {
    browserSync.init({
        open: false,
        server: { baseDir: './' }
    });
    gulp.watch('./src/**/*.*', ['templates']).on('change', browserSync.reload);
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

gulp.task('default', ['templates', 'js']);
