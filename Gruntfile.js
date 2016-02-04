/**
 * pjax-standalone build script
 */
module.exports = function(grunt) {

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-copy');

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		copy: {
			main: {
				src: 'pjax-standalone.js',
				dest: 'test/pjax-standalone.js'
			}
		},
		jshint: {
    		ignore_warning: {
    		  src: ['pjax-standalone.js'],
		      options: {
		        '-W061': true // eval is needed
		      }
		    }
	  	},
	  	uglify: {
	  		options: {
	  			preserveComments: 'some'
	  		},
			build: {
				src: 'pjax-standalone.js',
				dest: 'pjax-standalone.min.js'
			}
	  	},
	  	watch: {
	  		files: ['pjax-standalone.js'],
	  		tasks: ['uglify']
	  	}

	});

	grunt.registerTask('default', ['jshint','uglify','copy']);
};

