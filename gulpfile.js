'use strict';

let babel       = require('gulp-babel');
let browserSync = require('browser-sync').create();
let colorguard  = require('gulp-colorguard');
let dateTime    = require('@radioactivehamster/date-time');
let fs          = require('fs');
let gulp        = require('gulp');
let htmltidy    = require('gulp-htmltidy');
let less        = require('gulp-less');
let pkg         = require('./package.json');
let stachio     = require('gulp-stachio');
let yaml        = require('js-yaml');

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
    // Remove angle bracket enclosed email addresses.
    let author  = pkg.author.replace(/ <.+>/i, '');
    let context = { author: author, timestamp: dateTime() };
    let tidyrc  = yaml.load(fs.readFileSync('./.tidyrc').toString());

    return gulp.src('src/templates/index.hbs')
               .pipe(stachio(context))
               .pipe(htmltidy(tidyrc))
               .pipe(gulp.dest('./'));
});

gulp.task('js', () => {
    return gulp.src('src/js/*.js')
               .pipe(babel())
               .pipe(gulp.dest('./'));
});

gulp.task('default', ['style', 'templates', 'js']);
