
'use strict';

var propertiesify = require('../lib/propertiesify');
var fs = require('fs');
var concat = require('concat-stream');


exports.propertiesify = {
	
	direct: function(test) {

		var file = 'test/artifacts/test.properties';

		fs.createReadStream(file)
      		.pipe(propertiesify(file))
      		.pipe(concat({encoding: 'string'}, function(result){
      			test.equal(result, 'module.exports = {"KEY":"VALUE"};\n');

      			test.done();
      		}));
	}
};