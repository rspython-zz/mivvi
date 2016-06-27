/* -------------------------------------------------------------------------------------------------
////////////////////////////////////////////////////////////////////////////////////////////////////

Config Settings

////////////////////////////////////////////////////////////////////////////////////////////////////
------------------------------------------------------------------------------------------------- */

var assets_base = 'app';

var node_env;
var debug;
var env_name;
var do_test = true;

var env = process.argv[3];
var skipTests = process.argv[4];

if (env === '--production') {
    env_name = 'PRODUCTION';
    node_env = false;
    debug = false;
}

if (env === '--dev' || env === undefined) {
    env_name = 'DEV';
    node_env = true;
    debug = false;
}

if (skipTests === '--skip') {
    do_test = false;
}

console.log('Processing Build: ' + env_name + ' Mode');

module.exports = {
    name: env_name,
    test: do_test,
    server: {
        port: 3130,
        port_api: 4140
    },
    autoprefixerOptions: {
        browsers: ['Chrome 21'],
        cascade: true
    },
    context: {
        NODE_ENV: node_env,
        DEBUG: debug
    },
    opts: {
        conditionals: true,
        quotes: true,
        spare: true
    },
    exclude: '!',
    paths: {
        base: '/',
        app: 'app',
        dist: 'dist',
        bower: 'bower_components',
        module: 'node_modules',
        api: 'api',
        assets: {
            base: assets_base,
            images: assets_base + '/images',
            downloads: assets_base + '/downloads',
            sprites: assets_base + '/sprites',
            locales: assets_base + '/locales',
            sass: assets_base + '/sass',
            theme: assets_base + '/theme',
            fonts: assets_base + '/fonts',
            docs: assets_base + '/docs',
            css: assets_base + '/css',
            js: assets_base + '/js'
        }
    }
};
