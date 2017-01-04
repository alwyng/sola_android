cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "de.appplant.cordova.plugin.email-composer.EmailComposer",
        "file": "plugins/de.appplant.cordova.plugin.email-composer/www/email_composer.js",
        "pluginId": "de.appplant.cordova.plugin.email-composer",
        "clobbers": [
            "cordova.plugins.email",
            "plugin.email"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "de.appplant.cordova.plugin.email-composer": "0.8.2"
};
// BOTTOM OF METADATA
});