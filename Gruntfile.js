/**
 * Installation:
 * 1. Install Grunt CLI (`npm install -g grunt-cli`)
 * 1. Install Grunt 0.4.0 and other dependencies (`npm install`)
 *
 * Build:
 * Execute `grunt` from root directory of this directory (where Gruntfile.js is)
 * To execute automatically after each change, execute `grunt --force default watch`
 * To execute build followed by the test run, execute `grunt test`
 *
 * See http://gruntjs.com/getting-started for more information about Grunt
 */
module.exports = function (grunt) {
	grunt.initConfig({
			jade: {
				compileAll: {
					options: {
						pretty: true,
					},
					files: [{
						expand: true,
						src: ["**/*.jade", "!**/_*.jade"], 
						ext: ".html"
					}]
				}
			},
			
			cssmin: {
				main: {
					expand: true,
					cwd: 'css/',
					src: ['*.css', '!*.min.css'],
					dest: 'css/',
					extDot: 'last',
					ext: '.min.css'
				}
			},

			sass: {
				dist: {
					files: [{
						src: "*.scss", 
						cwd: "sass",
						dest: "css", 
						expand: true,
						ext: ".css"
					}]
				}
			},
			// WATCH CHANGES
			watch: {
				options: {
					livereload: true //works with Chrome LiveReload extension. See: https://github.com/gruntjs/grunt-contrib-watch
				},
				files: [
					'*.html',
					'**/*.jade',
					'sass/*.scss',
					'js/*.js'
				],
				tasks: ['watch']
			},

			clean: {
				dist: ['tmp']
			},

			connect: {
				dev: {
					options: {
						port: 9000,
						hostname: "0.0.0.0",
						base: "dist",
						keepalive: true
					}
				}
			}

});

	// DEFAULT TASKS
	grunt.registerTask('default', ['sass', 'jade', 'cssmin']);
	grunt.registerTask('build', ['sass', 'jade', 'cssmin', 'clean']);
	grunt.registerTask('watch', ['default']);

	grunt.loadNpmTasks('grunt-replace');
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-connect');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-jade');
};
