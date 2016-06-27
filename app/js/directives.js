/*jshint latedef:false*/
//Directive - loading
(function() {
    'use strict';
    angular
        .module('mivviApp')
        .directive('loading', loading);
    loading.$inject = [];

    function loading() {
        return {
            restrict: 'E',
            replace: true,
            templateUrl: 'partials/loading.html'
        };
    }
})();

//Directive - formAutofillFix
(function() {
    'use strict';
    angular
        .module('mivviApp')
        .directive('formAutofillFix', formAutofillFix);
    formAutofillFix.$inject = [];

    function formAutofillFix() {
        return function(scope, elem, attrs) {
            // Fixes Chrome bug: https://groups.google.com/forum/#!topic/angular/6NlucSskQjY
            elem.prop('method', 'POST');

            // Fix autofill issues where Angular doesn't know about autofilled inputs
            if (attrs.ngSubmit) {
                setTimeout(function() {
                    elem.unbind('submit').submit(function(e) {
                        e.preventDefault();
                        elem.find('input, textarea, select').trigger('input').trigger('change').trigger('keydown');
                        scope.$apply(attrs.ngSubmit);
                    });
                }, 0);
            }
        };
    }
})();

// Source: src/timeline-badge-directive.js
/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline-badge
 * @restrict AE
 *
 * @description
 * Shown in the centre pane (or left on narrow devices) to indicate the activity.
 */
(function() {
    'use strict';
    angular
        .module('mivviApp')
        .directive('timelineBadge', timelineBadge);

    timelineBadge.$inject = [];

    function timelineBadge() {
        return {
            require: '^timelineEvent',
            restrict: 'AE',
            transclude: true,
            template: '<div class="timeline-badge" ng-transclude></div>'
        };
    }
})();

// Source: src/timeline-directive.js
/**
 * @ngdoc directive
 * @name angular-timeline
 * @restrict AE
 *
 * @description
 * Primary container for displaying a vertical set of timeline events.
 */
(function() {
    'use strict';
    angular
        .module('mivviApp')
        .directive('timeline', timeline);

    timeline.$inject = [];

    function timeline() {
        return {
            restrict: 'AE',
            transclude: true,
            template: '<ul class="timeline" ng-transclude></ul>',
            controller: function() {}
        };
    }
})();

// Source: src/timeline-event-directive.js
/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline
 * @restrict AE
 *
 * @description
 * Represents an event occuring at a point in time, displayed on the left or the right
 * of the timeline line.
 *
 * You typically embed a `timeline-badge` and `timeline-panel` element within a `timeline-event`.
 *
 * @param {string=} side  Define the side of the element (i.e. side="left", side="right", or use an {{ expression }}).
 */

(function() {
    'use strict';
    angular
        .module('mivviApp')
        .directive('timelineEvent', timelineEvent);

    timelineEvent.$inject = [];

    function timelineEvent() {
        return {
            require: '^timeline',
            restrict: 'AE',
            transclude: true,
            template: '<li class="timeline-event" ng-class-odd="oddClass" ng-class-even="evenClass" ng-transclude></li>',
            link: function(scope, element, attrs, controller) {

                var checkClass = function(side, leftSide) {

                    var leftClass = '';
                    var rightClass = 'timeline-inverted';

                    if (side === 'left' || (!side && leftSide === true)) {
                        return leftClass;
                    } else if ((side === 'alternate' || !side) && leftSide === false) {
                        return rightClass;
                    } else if (side === 'right') {
                        return rightClass;
                    } else {
                        return leftClass;
                    }
                };

                var updateRowClasses = function(value) {
                    scope.oddClass = checkClass(value, true);
                    scope.evenClass = checkClass(value, false);
                };

                attrs.$observe('side', function(newValue) {
                    updateRowClasses(newValue);
                });

                updateRowClasses(attrs.side);
            }
        };
    }
})();

// Source: src/timeline-footer-directive.js
/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline-footer
 * @restrict AE
 *
 * @description
 * Optional element to add a footer section to the `timeline-panel` for links or other actions.
 */
(function() {
    'use strict';
    angular
        .module('mivviApp')
        .directive('timelineFooter', timelineFooter);
    timelineFooter.$inject = [];

    function timelineFooter() {
        return {
            require: '^timelinePanel',
            restrict: 'AE',
            transclude: true,
            template: '<div class="timeline-footer" ng-transclude></div>'
        };
    }
})();

// Source: src/timeline-heading-directive.js
/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline-heading
 * @restrict AE
 *
 * @description
 * Optional element to show the heading for a `timeline-panel`.
 */
(function() {
    'use strict';
    angular
        .module('mivviApp')
        .directive('timelineHeading', timelineHeading);
    timelineHeading.$inject = [];

    function timelineHeading() {
        return {
            require: '^timelinePanel',
            restrict: 'AE',
            transclude: true,
            template: '<div class="timeline-heading" ng-transclude></div>'
        };
    }
})();

// Source: src/timeline-panel-directive.js
/**
 * @ngdoc directive
 * @name angular-timeline.directive:timeline-panel
 * @restrict AE
 *
 * @description
 * An panel inside the `timeline-event` which shows detailed information about the event.
 */
(function() {
    'use strict';
    angular
        .module('mivviApp')
        .directive('timelinePanel', timelinePanel);

    timelinePanel.$inject = [];

    function timelinePanel() {
        return {
            require: '^timeline',
            restrict: 'AE',
            transclude: true,
            template: '<div class="timeline-panel" ng-transclude></div>'
        };
    }
})();
