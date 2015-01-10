propertiesify [![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/) [![Build Status](https://travis-ci.org/bealearts/propertiesify.svg)](https://travis-ci.org/bealearts/propertiesify) [![npm version](https://badge.fury.io/js/grunt-propertiesify.svg)](http://badge.fury.io/js/grunt-propertiesify)
=============
A [Browserify](https://github.com/substack/node-browserify) transform which allows .property files to be required.

Enables .property files to be required into a module as a JS object hash. Useful for loading localisation resource bundles or configuration. 

## Installation
Using [`npm`](http://npmjs.org/) as a development dependency
```shell
npm install propertiesify --save-dev
```

## Configuration

```js

```
## Usage

in ```example/locales/en_US.properties```
```java
# en_US
TITLE=Example App
```

in ```example/main.js```
```js
var resources = require('locals/en_US.properties');
console.log(resources.TITLE);
```

### Transform with the API
```js
var browserify = require('browserify');
var fs = require('fs');
var b = browserify('example/main.js');
b.transform('propertiesify')
b.bundle().pipe(fs.createWriteStream('bundle.js'));
```
### Transform with CML

```shell
browserify example/main.js -t propertiesify > bundle.js
```
