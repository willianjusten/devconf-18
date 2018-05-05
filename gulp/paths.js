module.exports = {

    source: {
        templates: 'src/templates/**/*.pug',
        slides: 'src/slides/*.pug',
        js: 'src/js/**/*.js',
        styl: 'src/styl/*.styl',
        music: 'src/musics/**/*',
        video: 'src/videos/**/*',
        img: 'src/img/**/*',
        files: {
          pug: 'src/templates/index.pug',
          styl: 'src/styl/main.styl',
          notes: 'src/js/vendor/notes/notes.html'
        }

    },

    browserSync: {
      html: 'build/**/*.html',
      js: 'build/js/**/*.js',
      css: 'build/css/**/*.css',
      img: 'build/img/**/*'
    },

    build: {
      html: './build/',
      js: 'build/js',
      css: 'build/css',
      music: 'build/musics',
      video: 'build/videos',
      img: 'build/img',
      notes: 'build/js/vendor/notes/'
    },

    deploy: {
      pages: 'build/**/*'
    }
};
