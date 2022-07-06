const sass = require('node-sass')
module.exports = (grunt) => {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            options: {
                implementation: sass,
                sourceMap: true
            },
            dist: {
                files: [{
                    expand: true,
                    src: ['/src/scss/**/*.scss'],
                    dest: '_dist/css/style',
                    ext: '.css'
                }]
            }
        },
        watch: {
            options: {
                livereload: true
            },
            css: {
                files: ['src/scss/**/*.scss'],
                tasks: ['sass']
            }
        },
    });
  
    grunt.loadNpmTasks('grunt-sass')
    grunt.loadNpmTasks('grunt-contrib-watch')
  
    // Default task(s).
    grunt.registerTask('default', ['watch']);
    grunt.registerTask('default', ['grunt-contrib-watch']);
  
  };