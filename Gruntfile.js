module.exports = function(grunt) {
    
    grunt.loadNpmTasks('grunt-karma');

    // Do grunt-related things in here
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        karma: {
            unit: {
                configFile: 'karma.conf.js'
            }
        }
    });

    grunt.registerTask('test', ['karma']);

};