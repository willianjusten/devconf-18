const gulp = require('gulp');

// Default task
module.exports = gulp.task('build', ['js', 'pug', 'notes', 'stylus', 'imagemin', 'music', 'video']);
