# Application Preferences plugin for Cordova iOS #

Use this Cordova plugin to read and store iOS application preferences.

## Getting started

Once you're familiar with that process, you may install this plugin with the [Cordova CLI](https://cordova.apache.org/docs/en/6.x/guide/cli/index.html):

```
cordova plugin add https://github.com/hirtenfelder/cordova-plugin-iospreferences.git
```

## Using the plugin

The plugin creates the object `window.plugins.applicationPreferences` with two methods `get(key, success, fail)` and 
`set(key, value, success, fail)`. `key` is the name of the setting you want, `value` is the value of the setting you want to set.

`success` and `fail` are callback functions. Success is passed the settings value as a string.
A full get example could be:

    window.plugins.applicationPreferences.get('the_key', function(result) {
            alert("We got a setting: " + result);
        }, function(error) {
		    alert("Failed to retrieve a setting: " + error);
	    }
	);

A full set example could be:

    window.plugins.applicationPreferences.set('the_key', 'the_value', function() {
            alert("It is saved");
        }, function(error) {
		    alert("Failed to retrieve a setting: " + error);
	    }
	);

NOTE: The preference must exist in a settings bundle and Root.plist in your project.