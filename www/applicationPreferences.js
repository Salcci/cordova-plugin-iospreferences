'use strict';
var cordova = require('cordova');

(function() {

    /**
     * Creates a new Cordova Application Preferences Plugin instance
     * 
     * @class
     */
    function ApplicationPreferences() {}

    /**
     * Reads iOS application preferences
     * 
     * @param key {string} The key of the preference
     * @param success {function} The callback invoked after the preference value has been retrieved 
     * @param fail {function} The callback invoked if retrieving the preference value has been failed
     */
    ApplicationPreferences.prototype.get = function(key, success, fail) {
        var args = {key: key};
        cordova.exec(success, fail, "applicationPreferences", "getSetting", [args]);
    };

    /**
     * Stores iOS application preferences
     * 
     * @param key {string} The key of the preference
     * @param value {string} The value of the preference, only string values are supported
     * @param success {function} The callback invoked after the preference value has been stored
     * @param fail {function} The callback invoked if storing the preference value has been failed
     */
    ApplicationPreferences.prototype.set = function(key, value, success, fail) {
        var args = {key: key, value: value};
        cordova.exec(success, fail, "applicationPreferences", "setSetting", [args]);
    };

    if (!window.plugins) {
        window.plugins = {};
    }

    if (!window.plugins.applicationPreferences) {
        window.plugins.applicationPreferences = new ApplicationPreferences();
    }

})();