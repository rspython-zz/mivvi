/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

JSHint - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var plugin = require('gulp-load-plugins')();
var stylish = require('jshint-stylish');

// JSHint
//--------------------------------

gulp.task('jshint', function () {
    return gulp.src([
            //Core

            config.paths.assets.js + '/*.js'

            // config.paths.app + '/app.module.js',
            // config.paths.app + '/app.directive.js',
            // config.paths.app + '/app.controller.js',

            //Views

            // config.paths.app + '/**/*.module.js',
            // config.paths.app + '/**/*.controller.js',
            // config.paths.app + '/**/*.factory.js',
            // config.paths.app + '/**/*.filter.js',
            // config.paths.app + '/**/*.directive.js'

        ])
        .pipe(plugin.jshint())
        .pipe(plugin.jshint.reporter(stylish))
        .pipe(plugin.jshint.reporter('fail'));
});
