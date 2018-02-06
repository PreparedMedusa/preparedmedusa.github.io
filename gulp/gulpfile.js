var gulp = require('gulp');
var bs = require('browser-sync');


gulp.task('default', function() {
  bs.init({
    proxy:'http://portfolio/portfolio'
  });
  gulp.watch("portfolio/*.html").on('change', bs.reload);
  gulp.watch("portfolio/css/*.css").on('change', bs.reload);
});
