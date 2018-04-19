var gulp = require('gulp');
var sass = require('gulp-sass');
var postcss = require('gulp-postcss');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');

gulp.task('sass',function() {
    return gulp.src('scss/**/*.scss')
    .pipe(customPlumber('Error running Sass'))
    .pipe(sass())
    .pipe(postcss())
    .pipe(gulp.dest('css'))
});

gulp.task('watch', ['sass'], function() {
   gulp.watch('scss/**/*.scss',['sass']);
});

function customPlumber(errTitle) {
    return plumber({
        errorHandler: notify.onError({
            title: errTitle || "Error running Gulp",
            message: "Error: <%= error.message %>",
        })
    });
}
