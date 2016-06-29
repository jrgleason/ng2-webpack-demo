var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    debug = require('gulp-debug'),
    named = require('vinyl-named');
gulp.task('default', function() {
    return gulp.src(['src/polyfills.js', 'src/vendor.ts', 'src/main.ts'])
        .pipe(debug())
        .pipe(named(function(file){
        }))
        .pipe(debug())
        .pipe(webpack())
});
