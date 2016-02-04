/**
 * Copy files and folders.
 *
 * ---------------------------------------------------------------
 *
 * # dev task config
 * Copies all directories and files, exept coffescript and less fiels, from the sails
 * assets folder into the .tmp/public directory.
 *
 * # build task config
 * Copies all directories nd files from the .tmp/public directory into a www directory.
 *
 * For usage docs see:
 * 		https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = function(grunt) {

	grunt.config.set('copy', {
		dev: {
			files: [{
				expand: true,
				cwd: './assets',
				src: ['**/*.!(coffee|less)'],
				dest: '.tmp/public'
			},{
              expand: true,
              cwd: './bower_components',
              src: [
                  'angular/angular.js', 'angular-route/angular-route.js','angular-mocks/angular-mocks.js', 'angular-loader/angular-loader.js',
              ],
              flatten: true,
              dest: '.tmp/public/js/dependencies'
          },{ // add bootstrap css
                 expand: true,
                 cwd: './bower_components',
                 src: [
                 'bootstrap/dist/css/bootstrap.css',
                 'bootstrap/dist/css/bootstrap-theme.css'
                 ],
                 flatten: true,
                 dest: '.tmp/public/styles'
            }]
		},
		build: {
			files: [{
				expand: true,
				cwd: '.tmp/public',
				src: ['**/*'],
				dest: 'www'
			}]
		}
	});

	grunt.loadNpmTasks('grunt-contrib-copy');
};
