/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Watch - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

gulp.task('watch', function() {
    gulp.watch(config.paths.app + '/partials/*.html', ['markup']);
    gulp.watch(config.paths.app + '/index.html', ['index']);
    gulp.watch(config.paths.app + '/indexsaturday.html', ['indexsaturday']);
    gulp.watch(config.paths.app + '/indexsunday.html', ['indexsunday']);
    gulp.watch(config.paths.app + '/**/*.js', ['jshint', 'scripts']);
    gulp.watch(config.paths.app + '/**/*.scss', ['styles']);
});
