
'use strict';

var properties = require('properties');
var through = require('through2');


module.exports = function propertiesify(file, options)
{
	if (!/\.properties$/.test(file))
	{
		return through();
	}

	options = options || {};

	if (options.hasOwnProperty('path'))
	{
		delete options.path;
	}
	

	var chunks = [];


	function push(chunk, enc, next)
	{
		chunks.push(chunk);
		next();
	}


	function end(next)
	{
		var content = Buffer.concat(chunks).toString();
		var self = this;

		properties.parse(content, options, function(error, result){
			if (error)
			{
				self.emit('error', error);
			}
			else
			{
				var module = 'module.exports = ' + JSON.stringify(result) + ';\n';

				self.push(module);
				chunks = null;
				next();
			}
		});
	}


	return through(push, end);
};