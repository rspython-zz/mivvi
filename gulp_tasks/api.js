/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Locales - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var jsonlint = require('gulp-jsonlint');
var jsonminify = require('gulp-jsonminify');
var gutil = require('gulp-util');
var connect = require('gulp-connect');

// Translations/ID rewrites
//--------------------------------

gulp.task('api', function() {
    return gulp.src([
            config.paths.app + '/json/**/*.json'
        ])
        .pipe(jsonlint())
        .pipe(jsonlint.reporter())
        .pipe(gulp.dest(config.paths.dist + '/json'));
});