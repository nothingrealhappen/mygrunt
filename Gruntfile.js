module.exports = function(grunt) {
  grunt.initConfig({
    connect: {
      server: {
        options: {
          port: 9000, //run on port 9000
          open: false //open browser
        }
      }
    },
    uglify: {
      options: {},
      dist: {
        files: {
          'assets/javascript/gifguide.min.js': ['src/js/jquery.min.js', 'src/js/vendor/*.js', 'src/js/gifguide.js', 'src/js/generimage.js']
        }
      }
    },
    concat: {
      dist: {
        src: ['src/scss/vendor/*.scss', 'src/scss/_common.scss', 'src/scss/pages/*.scss'],
        dest: 'src/gifguide.scss'
      },
    },
    sass: {
      options: {
        sourceMap: true
      },
      dist: {
        files: {
          'src/gifguide.css': 'src/gifguide.scss'
        }
      }
    },
    autoprefixer: {
      options: {
        cascade: true
      },
      single_file: {
        src: 'src/gifguide.css'
      }
    },
    cssmin: {
      target: {
        files: {
          'assets/css/gifguide.min.css': ['src/gifguide.css']
        }
      }
    },
    imagemin: {
      dist: {
        options: {
          optimizationLevel: 3,
          progressive: true,
          interlaced: true
        },
        files: [{
        expand: true,
          cwd: 'src/images/',
          src: ['**/*.{png,jpg,jpeg}'],
          dest: 'assets/images/'
        }]
      }
    },
    watch:{
      sass:{
        files: 'src/scss/**/*.scss',
        tasks:['concat', 'sass', 'autoprefixer', 'cssmin'],
        options: {
          livereload: true,
          interval: 500
        }
      },
      js:{
        files: ['src/js/gifguide.js', 'src/js/generimage.js'],
        tasks:['uglify'],
        options: {
          livereload: true,
          interval: 500
        }
      },
      images: {
        files: ['src/images/*.*'],
        tasks:['imagemin'],
        options: {
          livereload: true,
          interval: 500
        }
      },
      html: {
        files: ['*.html'],
        options: {
          livereload: true,
          interval: 500
        }
      }
    },
    clean: ["deploy/"],
    copy: {
      deploy: {
        files: [
          // includes files within path
          {
            expand: true,
            src: ['assets/**', '*.html', 'favicon.ico'],
            dest: 'deploy/'
          }
        ],
      },
    }
  });
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-autoprefixer');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-sass');

  grunt.registerTask('default', ['imagemin', 'uglify', 'concat', 'sass', 'autoprefixer', 'cssmin', 'connect', 'watch']);
  grunt.registerTask('deploy', ['clean', 'copy:deploy']);
}
