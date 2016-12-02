module.exports = function(grunt){
  grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),

  cssmin: {
  target: {
    files: [{
      expand: true,
      cwd: 'public/styles',
      src: ['*.css', '!*.min.css'],
      dest: 'public/styles',
      ext: '.min.css'
    }]
  }
},

  autoprefixer: {
  options: {
    browsers: ['last 2 versions']
  },
  multiple_files: {
    expand: true,
    flatten: true,
    src: 'public/styles/*.css',
    dest: 'public/styles'
  }
},

watch: {
css: {
  files: '**/*.css',
  tasks: ['cssmin', 'autoprefixer']
    }
  },
  });
grunt.loadNpmTasks('grunt-contrib-cssmin');
grunt.loadNpmTasks('grunt-contrib-watch');
grunt.loadNpmTasks('grunt-autoprefixer');
grunt.registerTask('default',['watch']);
}