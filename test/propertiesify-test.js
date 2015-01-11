
'use strict';

var propertiesify = require('../lib/propertiesify');
var fs = require('fs');
var concat = require('concat-stream');
var browserify = require('browserify');


exports.propertiesify = {
	
	directDefault: function(test) {

		var file = 'test/artifacts/test.properties';

		fs.createReadStream(file)
      		.pipe(propertiesify(file))
      		.pipe(concat({encoding: 'string'}, function(result){
      			test.equal(result, 'module.exports = {"KEY":"value"};\n');

      			test.done();
      		}));
	},

	directOptions: function(test) {

		var file = 'test/artifacts/test.properties';

		fs.createReadStream(file)
      		.pipe(propertiesify(file, {sections: true}))
      		.pipe(concat({encoding: 'string'}, function(result){
      			test.equal(result, 'module.exports = {"KEY":"value"};\n');

      			test.done();
      		}));
	},

	directPathOption: function(test) {

		var file = 'test/artifacts/test.properties';

		fs.createReadStream(file)
      		.pipe(propertiesify(file, {path: true}))
      		.pipe(concat({encoding: 'string'}, function(result){
      			test.equal(result, 'module.exports = {"KEY":"value"};\n');

      			test.done();
      		}));
	},

	browserify: function(test) {

		if (!fs.existsSync('temp'))
		{
			fs.mkdirSync('temp');
		}

		var b = browserify('./test/artifacts/main.js');
		b.transform('./lib/propertiesify');

		b.bundle().pipe(fs.createWriteStream('temp/bundle.js')).on('finish', function(){
			test.done();
		});

	}
};