'use strict';

var openfinLauncher = require('openfin-launcher'),
    openfinConfigBuilder = require('openfin-config-builder'),
    fs = require('fs'),
    path = require('path');

function generateConfig(options, callback) {
    var configOptions = options.config.options,
        filePath = options.config.filePath,
        configTarget;

    if (!options.config.filePath) {
        callback();
        return;
    }
    configTarget = path.resolve(options.config.filePath);
    if (options.config.create) {
        fs.exists(configTarget, function(exists) {
            if (exists) {
                openfinConfigBuilder.update(configOptions, filePath).then(callback);
            } else {
                openfinConfigBuilder.create(configOptions, filePath).then(callback);
            }
        });
    } else if (configOptions) {
        openfinConfigBuilder.update(configOptions, filePath).then(callback);
    }
}
module.exports = function(grunt) {
    grunt.registerMultiTask('openfin', 'OpenFin grunt task', function() {
        var options = this.options({
            open: true,
            config: {
                create: false,
                config: {}
            }
        });
        //this task is asynchronous.
        var done = this.async();
        generateConfig(options, function() {
            if (options.open) {
                openfinLauncher.launchOpenFin(options).finally(done);
            } else {
                done();
            }
        });
    });
};
