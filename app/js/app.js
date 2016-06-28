/*jshint latedef:false*/

//Config - mivviAppConfig

(function() {

    'use strict';

    angular
        .module('mivviApp', [
            'ngRoute',
            'ui.bootstrap',
            'bootstrapLightbox',
            'mivvi.service.api',
            'angular-google-analytics',
            'angular-scroll-animate',
            'ngOnload',
            'twitter.timeline',
            'ngDialog'
        ])
        .config(mivviAppConfig);

    mivviAppConfig.$inject = ['$routeProvider', '$httpProvider', 'AnalyticsProvider'];

    function mivviAppConfig($routeProvider, $httpProvider, AnalyticsProvider) {

        AnalyticsProvider.setAccount('UA-79843064-1');
        AnalyticsProvider.trackUrlParams(true);

        AnalyticsProvider.ignoreFirstPageLoad(true);

        // Activate reading custom tracking urls from $routeProvider config (default is false)
        // This is more flexible than using RegExp and easier to maintain for multiple parameters.
        // It also reduces tracked pages to routes (only those with a templateUrl) defined in the
        // $routeProvider and therefore reduces bounce rate created by redirects.
        // NOTE: The following option requires the ngRoute module
        AnalyticsProvider.readFromRoute(true);

        if (!$httpProvider.defaults.headers.get) {
            $httpProvider.defaults.headers.get = {};
        }

        $httpProvider.defaults.headers.get['If-Modified-Since'] = 'Mon, 26 Jul 1997 05:00:00 GMT';
        $httpProvider.defaults.headers.get['Cache-Control'] = 'no-cache';
        $httpProvider.defaults.headers.get.Pragma = 'no-cache';

        $routeProvider.
        when('/news', {
            templateUrl: 'partials/news.html',
            controller: 'MivviMenuCtrl',
            pageTrack: '/news'
        }).
        when('/bio', {
            templateUrl: 'partials/bio.html',
            controller: 'MivviMenuCtrl',
            pageTrack: '/bio'
        }).
        when('/discography', {
            templateUrl: 'partials/discography.html',
            controller: 'MivviMenuCtrl',
            pageTrack: '/discography'
        }).
        when('/media', {
            templateUrl: 'partials/media.html',
            controller: 'MivviMenuCtrl',
            pageTrack: '/media'
        }).
        when('/photos', {
            templateUrl: 'partials/photos.html',
            controller: 'MivviMenuCtrl',
            pageTrack: '/photos'
        }).
        when('/mailinglist', {
            templateUrl: 'partials/mailinglist.html',
            controller: 'MivviMenuCtrl',
            pageTrack: '/mailinglist'
        }).
        otherwise({
            redirectTo: '/news'
        });

    }

})();
