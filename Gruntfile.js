module.exports = function(grunt) {

	 grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		/**
		 * Sass
		 */
		sass: {
		  dev: {
			 options: {
				style: 'expanded',
				sourcemap: 'none',
			 },
			 files: {
				'style.css': 'style/style.scss'
			 }
		  },
			dist:{
				options:{
					style:'compressed',
					sourcemap:'none'
				},
				files:{
					'style-min.css':'style/style.scss'
				}
			}
		},

		 /**
			* Autoprefixer
			*/
		autoprefixer: {
			options: {
				browsers: ['last 2 versions']
			},
			// prefix all files
			multiple_files:{
				dexpand: true,
				flattten: true,
				src: '*.css',
				dest:''
			}
		},

		  /**
			* Watch
			*/
		watch: {
			css: {
				files: '**/*.scss',
				tasks: ['sass','autoprefixer']
			}
		},

	});
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-autoprefixer');
	grunt.registerTask('default',['watch']);
}
