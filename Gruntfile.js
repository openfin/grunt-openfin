'use strict';

module.exports = function(grunt) {
    // Load all grunt tasks
    require('load-grunt-tasks')(grunt);

    // Project configuration.
    grunt.initConfig({
        jshint: {
            js: {
                src: ['Gruntfile.js', 'tasks/*.js']
            },
            options: {
                reporterOutput: "",
                jshintrc: '.jshintrc'
            }
        },
        watch: {
            js: {
                files: '<%= jshint.js.src %>',
                tasks: ['jshint:js', 'jsbeautifier']
            }
        },
        jsbeautifier: {
            files: '<%= jshint.js.src %>',
            options: {
                js: {
                    braceStyle: 'collapse',
                    breakChainedMethods: false,
                    e4x: false,
                    evalCode: false,
                    indentChar: ' ',
                    indentLevel: 0,
                    indentSize: 4,
                    indentWithTabs: false,
                    jslintHappy: false,
                    keepArrayIndentation: false,
                    keepFunctionIndentation: false,
                    maxPreserveNewlines: 10,
                    preserveNewlines: true,
                    spaceBeforeConditional: true,
                    spaceInParen: false,
                    unescapeStrings: false,
                    wrapLineLength: 0
                }
            }
        }
    });


    // By default, lint and run all tests.
    grunt.registerTask('default', ['jshint', 'jsbeautifier']);

};
