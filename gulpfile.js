var gulp = require('gulp');
var sass = require('gulp-sass');

var paths = {
    styles: {
        src: "scss/**/*.scss",
        dest: "css"
    }
};

function style() {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .on("error", sass.logError)
        .pipe(gulp.dest(paths.styles.dest));
}
 
function watch() {
    style();
    gulp.watch(paths.styles.src, style);
}
 
exports.watch = watch;