/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Build - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var del = require('del');
var gulpSequence = require('gulp-sequence').use(gulp);
var gulpif = require('gulp-if');

// Build - Production
//--------------------------------

gulp.task('build', gulpSequence(
    [
        //'test',
        'clean-build',
        'jshint'
    ], [
        'scripts:vendor',
        'scripts',
        'styles:vendor',
        'styles',
        'markup',
        'images',
        'downloads',
        'fonts',
        'api'
    ], [
        'index',
    ]
));


// Clean - Remove unused files
//--------------------------------

gulp.task('clean-build', function(cb) {
    del([config.paths.dist], cb);
});

gulp.task('default', gulpSequence(
    [
        'server'
    ],
    'watch'
));
