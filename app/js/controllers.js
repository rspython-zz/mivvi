/*jshint latedef:false*/

//Controller - MivviCtrl

(function() {

    'use strict';

    angular
        .module('mivviApp')
        .controller('MivviCtrl', MivviCtrl);

    MivviCtrl.$inject = ['$scope', '$location', 'Analytics'];


    function MivviCtrl($scope, $location, Analytics) {
        $scope.navbarCollapsed = true;
        $scope.isActive = '/News';
        $scope.isActive = function(viewLocation) {
            return viewLocation === $location.path();
        };

        var init = function(Analytics) {
            // fire scripts here
        };

        init();
    }

})();

//Controller - MivviNewsCtrl
(function() {

    'use strict';

    angular
        .module('mivviApp')
        .controller('MivviNewsCtrl', MivviNewsCtrl);

    MivviNewsCtrl.$inject = ['$scope', '$location', 'Analytics'];


    function MivviNewsCtrl($scope, $location, Analytics) {
        $scope.loading = true;
        $scope.showplayer = function() {
            $scope.loading = false;
            $scope.$apply();
        };
        
    }
})();

//Controller - MivviBioCtrl
(function() {

    'use strict';

    angular
        .module('mivviApp')
        .controller('MivviBioCtrl', MivviBioCtrl);

    MivviBioCtrl.$inject = ['$scope', '$location', 'Analytics'];


    function MivviBioCtrl($scope, $location, Analytics) {
        $scope.events = [{
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-user',
            title: 'Meet Mivvi - Nicky P',
            content: 'Nicky P waxes lyrical as the bands vocalist, and lead guitarist.',
            imageurl: 'images/slideshow/thumbs/6.jpg'
        },{
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-user',
            title: 'Meet Mivvi - Phil',
            content: 'Phil brings his melodic magic to the band in the form of Rhythm Guitar.',
            imageurl: 'images/slideshow/thumbs/8.jpg'            
        },{
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-user',
            title: 'Meet Mivvi - Tricky Dicky',
            content: 'Forming one half of the rhythmical backbone of the band, Tricky always brings his A game to the bass guitar.',
            imageurl: 'images/slideshow/thumbs/7.jpg'            
        },{
            badgeClass: 'info',
            badgeIconClass: 'glyphicon-user',
            title: 'Meet Mivvi - Big Rich',
            content: 'Pounding his way through the music, providing the drive and the other half of the bands rhythmical backbone, on the drums is Big Rich.',
            imageurl: 'images/slideshow/thumbs/2.jpg'            
        },{
            badgeClass: 'primary',
            badgeIconClass: 'glyphicon-cd',
            title: 'September 2016',
            content: 'The third album will be released, through a pledge music campaign, along with an album launch gig.'
        }, {
            badgeClass: 'primary',
            badgeIconClass: 'glyphicon-volume-up',
            title: 'May 2016',
            content: 'Mivvi return to Perry Vale Studios, to complete Recording of the third album with Pat Collier.'
        }, {
            badgeClass: 'primary',
            badgeIconClass: 'glyphicon-volume-down',
            title: 'March 2016',
            content: 'Mivvi travel to Perry Vale Studios in South London, to begin Recording of the third album with Pat Collier.'
        }, {
            badgeClass: 'primary',
            badgeIconClass: 'glyphicon-star',
            title: 'Pre 2016',
            content: 'Mivvi formed in early 2002, as cousins Nicky P and Big Rich got together with old time friend Tricky to create a fresh, indie pop/roc trio.  After recording their first album, Mivvi vs the Machine, in 2004, Trickys brother Phil was invited to join the band, creating a fuller, more dynamic sound that they had all been looking for.  After many years of song writing, rehearsing, and playing live, the band settled down to lay down their second album, Everything Changes, in 2014.  Hot on the heels of this album, the band had caught the recording bug, and after a slew of new material was written and refined over 2015, they decided to go back into the studio to record their third album, but this time, they were determined to take it up a notch and go to a life long dream producer of Nicky Ps, Pat Collier.'
        }];
    }
})();


//Controller - MivviMenuCtrl

(function() {

    'use strict';

    angular
        .module('mivviApp')
        .controller('MivviMenuCtrl', MivviMenuCtrl);

    MivviMenuCtrl.$inject = ['$scope', '$http', '$route', '$routeParams', 'Lightbox'];


    function MivviMenuCtrl($scope, $http, $route, $routeParams, Lightbox) {

        $scope.templateUrl = $scope.templateUrl + $routeParams.id;

        $scope.images = [{
            'url': 'images/slideshow/1.jpg',
            'thumbUrl': 'images/slideshow/thumbs/1.jpg'
        }, {
            'url': 'images/slideshow/2.jpg',
            'thumbUrl': 'images/slideshow/thumbs/2.jpg'
        }, {
            'url': 'images/slideshow/3.jpg',
            'thumbUrl': 'images/slideshow/thumbs/3.jpg'
        }, {
            'url': 'images/slideshow/4.jpg',
            'thumbUrl': 'images/slideshow/thumbs/4.jpg'
        }, {
            'url': 'images/slideshow/5.jpg',
            'thumbUrl': 'images/slideshow/thumbs/5.jpg'
        }, {
            'url': 'images/slideshow/6.jpg',
            'thumbUrl': 'images/slideshow/thumbs/6.jpg'
        }, {
            'url': 'images/slideshow/7.jpg',
            'thumbUrl': 'images/slideshow/thumbs/7.jpg'
        }, {
            'url': 'images/slideshow/8.jpg',
            'thumbUrl': 'images/slideshow/thumbs/8.jpg'
        }, {
            'url': 'images/slideshow/9.jpg',
            'thumbUrl': 'images/slideshow/thumbs/9.jpg'
        }, {
            'url': 'images/slideshow/10.jpg',
            'thumbUrl': 'images/slideshow/thumbs/10.jpg'
        }, {
            'url': 'images/slideshow/11.jpg',
            'thumbUrl': 'images/slideshow/thumbs/11.jpg'
        }, {
            'url': 'images/slideshow/12.jpg',
            'thumbUrl': 'images/slideshow/thumbs/12.jpg'
        }, {
            'url': 'images/slideshow/13.jpg',
            'thumbUrl': 'images/slideshow/thumbs/13.jpg'
        }, {
            'url': 'images/slideshow/14.jpg',
            'thumbUrl': 'images/slideshow/thumbs/14.jpg'
        }];

        $scope.openLightboxModal = function(index) {
            Lightbox.openModal($scope.images, index);
        };
    }

})();
