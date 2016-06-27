/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Styles - Gulp Processes

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

// Load gulp module

var gulp = require('gulp');
var config = require('../config');

//Load helper modules

var es = require('event-stream');
var plugin = require('gulp-load-plugins')();
var del = require('del');
var sass = require('gulp-sass');
var replace = require('gulp-replace');
var cssmin = require('gulp-minify-css');
var mainBowerFiles = require('main-bower-files');
var gutil = require('gulp-util');

var cssRegEx = (/.*\.(css|scss)$/i);

// Styles - App
//--------------------------------

gulp.task('styles:vendor', function(cb) {
    gutil.log(gutil.colors.black.bgGreen('/* ' + config.name + ' Building Vendor Styles ------------------------------------ */'));
    return gulp.src(mainBowerFiles({
            filter: cssRegEx
        }))
        .pipe(sass())
        .pipe(plugin.concatCss('vendor.css'))
        .pipe(cssmin({
            relativeTo: './',
            root: './',
            rebase: false
        }))
        //HACK - REQUIRES ATTENTION
        .pipe(replace('assets/', ''))
        .pipe(replace('../fonts', 'fonts'))
        .pipe(replace('../../app/core/fonts', 'fonts'))
        .pipe(replace('/fonts', 'fonts'))
        .pipe(replace('../../../src/assets/sass/images', 'images'))
        .pipe(replace('../../select2', 'images'))
        .pipe(replace('../../../src/assets/sass/fonts', 'fonts'))
        .pipe(replace('../../../jquery-prettyPhoto/images', 'images'))
        .pipe(plugin.autoprefixer(config.autoprefixerOptions))
        .pipe(gulp.dest(config.paths.dist), cb)
});

// Styles - Layouts
//--------------------------------

gulp.task('styles', function(cb) {
    gutil.log(gutil.colors.black.bgGreen('/* ' + config.name + ' Building App Styles ------------------------------------ */'));
    return es.merge(
        gulp.src([
            config.paths.assets.sass + '/style.scss',
            config.paths.app + '/**/*.style.scss'
        ])
        .pipe(sass())
        .pipe(plugin.concatCss('index.min.css'))
        .pipe(cssmin({
            relativeTo: './',
            root: './',
            rebase: false
        }))
        .pipe(plugin.autoprefixer(config.autoprefixerOptions))
        //HACK - REQUIRES ATTENTION
        .pipe(replace('assets/', ''))
        .pipe(replace('../fonts', 'fonts'))
        .pipe(replace('../../app/core/fonts', 'fonts'))
        .pipe(replace('/fonts', 'fonts'))
        .pipe(replace('../../../src/assets/sass/images', 'images'))
        .pipe(replace('../../select2', 'images'))
        .pipe(replace('../../../src/assets/sass/fonts', 'fonts'))
        .pipe(replace('../../../jquery-prettyPhoto/images', 'images'))
        .pipe(gulp.dest(config.paths.dist), cb)
    );
});
