
'use strict';

module.exports = function(grunt) {

  grunt.initConfig({
    jshint: {
      all: ['lib/*.js', 'test/*.js'],
      options: {
          boss: true,
          camelcase: true,
          curly: true,
          eqeqeq: true,
          eqnull: true,
          immed: true,
          latedef: true,
          newcap: true,
          noarg: true,
          node: true,
          strict: true,
          sub: true,
          undef: true,
          unused: true,
          validthis: true
      }
    },

    // Before generating any new files, remove any previously-created files.
    clean: {
      tests: ['temp']
    },

    // Unit tests.
    nodeunit: {
      tests: ['test/propertiesify-test.js']
    }
  });


  // These plugins provide necessary tasks.
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-nodeunit');

  grunt.registerTask('test', [
    'jshint',
    'clean',
    'nodeunit'
  ]);

  grunt.registerTask('default', ['test']);

};