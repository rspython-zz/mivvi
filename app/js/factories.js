/*jshint latedef:false*/
//Factory - ApiUrl
(function () { 
    /*jshint latedef:false*/ 
    /*jshint -W004 */
    'use strict';
    angular 
        .module('mivvi.service.api', []) 
        .factory('ApiUrl', ApiUrl);
    /** 
     * Service - Api Url 
     * 
     */
    function ApiUrl() {
        var ApiUrl = {};
        /** 
         * Service - Connect - Sets the apiPath value based on whether or not the NODE_ENV is set to true. Will be set to Api path as 'api/' as default. Where the NODE_ENV is set to true the Api path is set as 'http://localhost:8080/webapp/api/'.
         * 
         * @returns {String} Api Url for the webapp. 
         */
        ApiUrl.connect = function () {
            var apiPath = '/';
            // @if NODE_ENV=true 
            apiPath = 'http://localhost:8080/'; 
            // @endif
            return apiPath; 
        };
        return ApiUrl; 
    } 
})();