'use strict';

var openfinLauncher = require('openfin-launcher');

module.exports = function(grunt) {
    grunt.registerTask('openfin', 'OpenFin grunt task', function() {
        var options = this.options();
        //this task is asynchronous.
        var done = this.async();
        openfinLauncher.launchOpenFin(options, done);
    });
};
