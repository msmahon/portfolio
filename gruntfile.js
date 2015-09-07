module.exports = function(grunt) {

	// Project Configuration
	grunt.initConfig({
		watch: {
			styles: {
				files: ['public/css/main.css'],
				tasks: ['postcss', 'cssmin']
			},
			scripts: {
				files: ['public/javascript/core.js', 'public/javascript/email.js'],
				tasks: ['uglify']
			}
		},

		cssmin: {
			target: {
				files: [{
				    expand: true,
				    cwd: 'public/css',
				    src: ['*.css', '!*.min.css'],
				    dest: 'public/css',
				    ext: '.min.css'
			    }]
			}
		},

		uglify: {
			my_target: {
				files: {
					'public/javascript/output.min.js': ['public/javascript/core.js', 'public/javascript/email.js']
				}
			}
		},

		postcss: {
		    options: {
				processors: [
					require('autoprefixer')({browsers: 'last 2 versions'}), // add vendor prefixes
				]
			},
			dist: {
				src: 'public/css/main.css'
			}
	  	}

	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-postcss');
}