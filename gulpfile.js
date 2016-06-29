var gulp = require('gulp');
var webpack = require('webpack-stream');
var named = require('vinyl-named');
gulp.task('default', function() {
    return gulp.src(['src/polyfills.js', 'src/vendor.ts', 'src/main.ts'])
        .pipe(named(function(file){
            if(file.basename == "main.ts"){
                return 'app.js'
            }
            else{
                file.extname = 'js';
            }
        }))
        .pipe(webpack())
});
