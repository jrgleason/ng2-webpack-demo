var gulp = require('gulp'),
    webpack = require('webpack-stream'),
    debug = require('gulp-debug'),
    named = require('vinyl-named');
gulp.task('default', function() {
    return gulp.src(['src/polyfills.ts', 'src/vendor.ts', 'src/app.ts'])
        .pipe(debug())
        .pipe(named())
        .pipe(debug())
        .pipe(webpack( require('./webpack.config.js') ))
        .pipe(gulp.dest('dist/'));
});
