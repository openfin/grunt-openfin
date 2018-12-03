# Deprecated!
This library has been deprecated, please use the `launch` functionallity in the [js-adapter](https://github.com/hadoukenio/js-adapter) library.

# grunt-openfin

[![Build Status](https://travis-ci.org/openfin/grunt-openfin.svg?branch=master)](https://travis-ci.org/openfin/grunt-openfin)

You will be able to configure and install specific versions of the OpenFin Runtime and change application configuration details.

## Getting Started
This plugin requires Grunt `~0.4.5`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-openfin --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-openfin');
```

## The "openfin" task

### Overview
In your project's Gruntfile, add a section named `openfin` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  openfin: {
    options: {
      // Task-specific options go here.
    },
  },
});
```


### Usage Examples

#### Basic Usage
In this example we will have two options, one will start the OpenFin Runtime for a application config hosted in http://localhost:3000/app.json, the other will not take any action.

```js
grunt.initConfig({
    openfin: {
        options: {
            configPath: 'http://localhost:3000/app.json'
        },
        serve: {
            open: true
        },
        build: {
            open: false
        }
    }
});

grunt.registerTask('serve', ['openfin:serve']);
grunt.registerTask('build', ['openfin:build']);

```

#### Usage with Application Config  
In this example we will have the plugin create and update a config file and launch the OpenFin runtime.

```js
grunt.initConfig({
    openfin: {
        options: {
            configPath: 'http://localhost:3000/app.json'
            config: {
                create: true,
                filePath: 'public/app.json',
                options: {
                    startup_app: {
                        name: 'MyAppName',
                        url: 'http://localhost:3000/index.html',
                        applicationIcon: 'http://localhost:3000/img/icon.ico'
                    },
                    shortcut: {
                        icon: 'http://localhost:3000/img/icon.ico'
                    }

                }
            }
        },
        serve: {
            open: true,
        },
        build: {
            open: false,
            config: {
                create: false
            }
        }
    }
});
grunt.registerTask('serve', ['openfin:serve']);
grunt.registerTask('build', ['openfin:build']);
```

### Options

#### options.open
Type: `Bool`

Default value: true

Determines if the OpenFin runtime will be launched on start.

#### options.configPath
Type: `String`

Default value: ''

Examples: 
```js
'http://localhost:3000/app.json'
'file:/C:/helloWorld/app.json'
```

The location of the config file hosted or the file path.

#### options.config
Type: `Object`

Default value: {}

This object will be used to construct/update OpenFin application configs.

#### options.config.create
Type: `Bool`

Default value: false

Determines if the application config file will be created if not present.

#### options.config.filePath
Type: `String`

Default value: ''

File path location to the application config file.

#### options.config.options
Type: `object`

Default value: {}

OpenFin Application Configuration object as described in the [OpenFin config file API docs.](http://openfin.co/developers.html?url=developers/api/config/overview.html)

## License

MIT

By downloading OpenFin, you agree to the terms of our [Developer License](https://openfin.co/developer-agreement/)
