'use strict';

module.exports = function (grunt) {

    grunt.initConfig({
        pkg:        grunt.file.readJSON('package.json'),
        jshint:     grunt.file.readJSON('grunt/jshint.json'),
        uglify:     grunt.file.readJSON('grunt/uglify.json'),
        clean:      grunt.file.readJSON('grunt/clean.json'),
        watch:      grunt.file.readJSON('grunt/watch.json'),
        cssmin:     grunt.file.readJSON('grunt/cssmin.json'),
        handlebars: grunt.file.readJSON('grunt/handlebars.json'),
        concat:     grunt.file.readJSON('grunt/concat.json'),
        copy:       grunt.file.readJSON('grunt/copy.json')
    });

    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify-es');
    grunt.loadNpmTasks('grunt-contrib-copy');

    grunt.registerTask('setup',          ['concat:lib', 'concat:libcss', 'copy']);
    grunt.registerTask('compile-assets', ['cssmin']);

    grunt.registerTask('compile-app',    ['clean:app', 'jshint:js', 'concat:js']);

    grunt.registerTask('default',        ['setup', 'compile-assets', 'compile-app']);
    grunt.registerTask('build',          ['clean', 'setup', 'compile-assets', 'concat', 'uglify']);
};